---
tags:
  - machine learning
  - bert
  - llm
  - autogluon
  - evaluation
  - mlops
  - sagemaker
---

# Modeling and model optimization

Most of my Procore work was the platform: training, registry, evaluation, promotion, deployment, and monitoring for the data science teams. This page covers the modeling work I did directly, and how we decided a model was good enough to ship.

## BERT fine-tuning

**Problem**: Product teams collected contractors' notes through a front-end app, and the notes were classified with a basic call to OpenAI GPT-4.5. I was asked to classify the notes into categories, but depending on who you asked, you got a different set of categories.

**What I built**: I pulled 3,000 logs, used GPT-4.5 to suggest classifications, and had subject-matter experts sign off. That gave us five agreed categories and a 3,000-log golden set. I fed that golden set into GPT-4.5 and LangChain loops to label a training corpus of 7,000 to 10,000 logs. A validation loop flagged labels it was unsure about, and I reviewed those. I tested bert-base-uncased and distilbert-base-uncased, and landed on distilbert-base-uncased because it was smaller and gave the same outcome. I fine-tuned it on the 7,000 to 10,000 logs with a 70/30 train and validation split, and deployed it self-hosted on EKS to classify the logs. Its output fed another model downstream.

**How I evaluated it**: Weighted F1, the default metric for this fine-tuning setup. The 70/30 split is inside the 7,000 to 10,000 log corpus. After fine-tuning, the 3,000 golden logs were the baseline validation. I am not calling that an independent test: the golden set is what the labeling loops were built from.

**Result**: Five agreed categories, with the smaller DistilBERT model giving the same outcome as bert-base-uncased, running self-hosted on EKS and feeding a downstream model.

## Production model and container optimization

**Problem**: Production inference jobs ran too long, and nobody had a clear picture of where the time went.

**What I built**: I built ML decorators that tracked function run time and throughput, and used what they reported as the backlog for where to focus. From there I worked on image size, batching, inference run time, logging, and long-running functions. This sits on top of the batched-inference MLOps work on the [key projects page](key-projects.md#more-procore-work).

**How I evaluated it**: The same decorators. Run time and throughput per function, before and after each change.

**Result**: Cut inference job run time in half.

## ACV prediction models <a id="acv-prediction"></a>

**Problem**: Customer success needed to know which accounts to prioritize for upsell.

**What I built**: Data scientists built ACV prediction models with AutoGluon to predict an ACV target for upsell prioritization. They handed the models to me to optimize, containerize, and deploy to production, where I added ML decorators for logging and metric tracking. I owned the pipeline and the model registry, and the CSM team used the scores. $8M+ is annual upsell revenue on accounts these models scored. It is not revenue attributed solely to the model: the models raised those accounts as prime upsell targets, and those upsells closed.

**How I evaluated it**: WMAPE against a set threshold on golden datasets, tracked in the SageMaker Model Registry. A new model was promoted only after it passed the threshold. See [Evaluation and monitoring](#evaluation-and-monitoring) below.

**Result**: $8M+ in annual upsell revenue on accounts the models scored, counted as described above.

## Evaluation and monitoring

The rule was simple: a model does not get promoted on a good feeling.

- **WMAPE on golden datasets**: WMAPE (weighted mean absolute percentage error) weights each error by the size of the actual value, so a miss on a large account counts more than a miss on a small one. We tracked it on golden datasets against specific thresholds.
- **Promotion gate**: Experiments ran in AWS, and WMAPE was recorded in the SageMaker Model Registry. Once a model passed the threshold, it could be promoted. The [lifecycle gate study](../diagram-studies.md#lifecycle-gate) shows the path from metric threshold to human review to deployment.
- **Inference latency**: Tracked alongside WMAPE, so speed was part of the picture, not just accuracy.