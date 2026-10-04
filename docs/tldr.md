---
tags:
  - career summary
  - ml platform
  - platform engineering
  - leadership
  - product engineering
---

# TL;DR

I build platforms that help engineers, data scientists, and researchers get useful work done without needing another engineer to walk them through every step.

I started in QA and business systems analysis at Autodesk, moved into data and software engineering, led a team at Disney/Hulu, built shared ML and AI workflow platforms at Procore, and now build distributed research infrastructure at Skywalker Sound. Along the way I have worked across AWS, GCP, on-premises compute, Ray, Kubernetes, SageMaker, Snowflake, Databricks, Spark, Airflow, FastAPI, PostgreSQL, and the less glamorous parts that make those systems reliable.

The numbers I tend to forget in interviews are worth putting here:

- Built an ML lifecycle platform adopted by four teams at Procore, supporting 7 data scientists with 15 models in production.
- Cut model deployment time from 4 weeks to 1 week.
- Data scientists built ACV prediction models with AutoGluon to predict an ACV target for upsell prioritization. They handed the models to me to optimize, containerize, and deploy to production, where I added ML decorators for logging and metric tracking. I owned the pipeline and the model registry, and the CSM team used the scores. $8M+ is annual upsell revenue on accounts these models scored. It is not revenue attributed solely to the model: the models raised those accounts as prime upsell targets, and those upsells closed.
- 60% orchestration cost reduction, and new pipeline delivery went from weeks to hours.
- Cut a sales workflow from several days or a week to about one hour.
- Built a Ray-based research control plane across roughly 40 Linux and Mac machines. Researchers went from two A100s each and $25k GCP runs to all 12 A100s on demand, and VAE training went from five months to weeks.
- Trained, fine-tuned, and deployed models myself: PANNs audio classification, BERT fine-tuning, an on-prem LLM, and container and inference optimization. See modeling work at [Skywalker Sound](skywalker-sound/modeling-work.md) and [Procore](procore/modeling-work.md).
- Led eight engineers at Disney/Hulu and mentored engineers through promotions and larger ownership.
- Built and launched NorthPaw, then learned product development the fun way through real users, accessibility feedback, bug reports, press coverage, and repeated releases.

Outside the day job, I write science fiction, build small products, and do endurance events that sounded like a good idea when I signed up. *FRACTURED SKY* is the first novel in a planned trilogy. NorthPaw, FitTrack, Little Furevermore, and NSB Tools are different versions of the same impulse: find something confusing or annoying, then build a clearer path through it.

The short version is that I like hard systems problems, but I care most about what happens after the system reaches another person. Can they understand it? Can they trust it? Can they recover when it fails? Can they do something today that used to take a week? That is the work I want to keep doing.

## Revenue and Marketing ML Thread

I have worked on revenue-facing ML for about ten years. Most of it has been measurement and prediction, not ranking. At Autodesk I researched ML approaches to optimize marketing budget through ad placement. At Disney/Hulu I was responsible for the Multi-Touch Attribution model and the Marketing Mix Modeling data sets across Hulu, Disney+, ESPN+, and Star during the acquisition. At Procore I deployed and owned the pipeline and registry for the ACV prediction models the CSM team used to prioritize upsell.

## Skills

<div class="skills-grid" markdown>
<div markdown>

**Platform**

- Ray
- SageMaker
- Airflow
- Terraform
- FastAPI
- Grafana
- Docker and containers
- CoreWeave
- AWS, GCP, vSphere

</div>
<div markdown>

**Modeling**

- PANNs audio classification
- BERT fine-tuning
- LLM deployment (Ray Serve, LiteLLM, vLLM)
- AutoGluon
- WMAPE evaluation on golden datasets
- Model and container optimization
- PyTorch
- Feature store

</div>
</div>

## Where to Go Next

- Start with [Discussion Points](discussion-points.md) for how I think about platforms, AI workflows, data quality, and trust.
- Read the modeling work at [Skywalker Sound](skywalker-sound/modeling-work.md) and [Procore](procore/modeling-work.md).
- See the [Diagram Studies](diagram-studies.md) for the systems drawn out.
- Browse [Products and Tools](independent-work/products-and-tools.md) for NorthPaw, FitTrack, NSB Tools, and other side projects.
- Browse [all topics](tags.md) if you are looking for a specific technology or theme.
