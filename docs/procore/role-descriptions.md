---
tags:
  - mlops
  - platform engineering
  - architecture
  - staff engineering
  - technical leadership
---

## Role Descriptions <a id="procore-role-descriptions"></a>

**Scope**: Team: started as the only MLE, then grew to me and 3 other MLEs. Users: 4 teams, with between 2 and 7 data scientists over time. Models in production: 15, served for 7 data scientists, including AutoGluon models and several churn models. Reported to: the Big Data Platform Engineering Manager at first, then directly to the Director of AI.

- **Staff Machine Learning Engineer, ML Platform (July 2022 - February 2026)**: Started by moving data science development off local machines and into the cloud. I designed a workflow on AWS SageMaker, Terraform, DVC, and GitHub that cut model deployment time from 4 weeks to 1 week. I built the AWS Model Registry and GitHub Actions deployment process, and later moved workloads onto EKS. Separately, a new model used to wait on an engineer to write its DAG. I took the 8 models that existed before I joined and moved them to a config-based deployment, so a config update publishes the DAG and the model. That went from 2 to 3 sprints to an hour or two. From there the role grew into a shared ML lifecycle and AI-workflow platform used by four teams, covering training, registry, evaluation, human review, promotion, deployment, and monitoring.

  I also did modeling work directly: fine-tuning BERT to classify contractor notes, optimizing production inference containers, and owning the pipeline and registry for the ACV prediction models. See [Modeling and model optimization](modeling-work.md). Along the way I onboarded new MLEs, mentored two junior engineers through promotions, and turned stakeholder needs into reusable platform capabilities.

  Core technologies include Python, AWS SageMaker, EKS, Airflow, Terraform, DVC, GitHub Actions, AutoGluon, BERT and Hugging Face, Google ADK, and Snowflake.
