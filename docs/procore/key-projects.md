---
tags:
  - model registry
  - local development
  - api
  - data quality
  - sagemaker
  - terraform
  - dvc
  - dbt
  - github actions
  - pandas
  - dask
  - aws
  - eks
  - airflow
  - sam
  - cloudformation
  - api gateway
  - flask
  - langchain
  - react
  - ml platform
  - mlops
  - google adk
  - evaluation
  - human review
  - snowflake
  - kubernetes
  - mentorship
  - autogluon
---

## Key Projects and Achievements <a id="procore-key-projects"></a>

<a class="see-system" href="../../diagram-studies/#lifecycle-gate"><span>See the system</span><strong>Lifecycle gate · OOP swap · before and after</strong><em>→</em></a>

## Headline projects <a id="additional-platform-and-ai-work"></a>

1. **Shared ML lifecycle platform**: Built an internal platform for model training, registry, evaluation, promotion, deployment, and monitoring that four teams adopted. It standardized versioning, release gates, error checks, WMAPE-based evaluation, and human review across those teams.

2. **Model deployment and registry**: Designed a cloud-based data science workflow on AWS SageMaker, Terraform, DVC, and GitHub, and built the AWS Model Registry with GitHub Actions deployment. Model deployment time for that workflow went from 4 weeks to 1 week. Separately, a new model used to wait on an engineer to write its DAG. I took the 8 models that existed before I joined and moved them to a config-based deployment, so a config update publishes the DAG and the model. That went from 2 to 3 sprints to an hour or two.

3. **ACV prediction models**: Data scientists built ACV prediction models with AutoGluon to predict an ACV target for upsell prioritization. They handed the models to me to optimize, containerize, and deploy to production, where I added ML decorators for logging and metric tracking. I owned the pipeline and the model registry, and the CSM team used the scores. $8M+ is annual upsell revenue on accounts these models scored. It is not revenue attributed solely to the model: the models raised those accounts as prime upsell targets, and those upsells closed. Evaluation details are on [Modeling and model optimization](modeling-work.md#acv-prediction).

4. **Orchestration framework**: Refactored Airflow into reusable object-oriented components, decorators, and configuration-driven templates, with DAGs generated dynamically for new models. The result was a 60% orchestration cost reduction, and new-pipeline delivery went from weeks to hours.

5. **LLM document workflow with human review**: Built a Google ADK workflow combining report OCR, contextual questions, Snowflake tool calls, structured interpretation, and plain-language responses. Approval gates on OCR output, generated queries, table results, and PDF comparisons made each stage inspectable. Golden datasets, regression evaluation, run tracing, and comparison tools let us change it safely. The sales workflow went from several days or a week to about an hour, self-service, for 10 to 15 users across three sales teams.

## Leadership and mentorship

- **Mentorship and enablement**: Mentored two junior engineers through promotions, new technical skills, and ownership of independent projects. Led recurring GPT, Snowflake, and Google ADK sessions for groups of 10 to 20 employees and recorded the material for onboarding.

## Technical direction

### Moving data science off laptops

- **Situation**: Data scientists developed models on their own computers, and getting a model deployed took about four weeks.
- **Decision**: I got buy-in to move the data science development workflow into the cloud, bring in a model registry, and move workloads to EKS.
- **Tradeoff**: Data scientists had to change how they worked every day, so getting agreement mattered as much as the tooling.
- **Result**: Model deployment time went from 4 weeks to 1 week. That workflow became the base of the lifecycle platform four teams adopted. Getting a new model its own DAG is a different change, described under [model deployment and registry](#headline-projects).

### Review gates instead of one prompt

- **Situation**: Stakeholder interviews showed that sales users did not trust the existing model-driven process. Getting an answer took repeated engineering help and several days or a week.
- **Decision**: Instead of one large prompt, I split the workflow into stages (OCR, contextual questions, Snowflake tool calls, interpretation, and a plain-language answer) and put a human review gate on each stage that mattered.
- **Tradeoff**: More steps for the user and more to build than a single prompt. In return, every stage could be inspected and tested on its own.
- **Result**: About an hour, self-service, for 10 to 15 users across three sales teams, with a visible record of how each answer was produced.

## More Procore work <a id="more-procore-work"></a>

<details markdown>
<summary>Aggregation, inference, APIs, data quality, and an early LLM chatbot</summary>

- **Custom aggregation workflow**: Built an aggregation workflow with Pandas, Dask, and AWS EKS, which cut the deployment timeline from 10 days to 1 day.
- **Batched inference and optimized inference jobs**: Implemented MLOps for batched inference on SageMaker and optimized the Airflow SageMaker inference jobs, cutting run time in half. More on [Modeling and model optimization](modeling-work.md#production-model-and-container-optimization).
- **API workflow**: Built an API workflow with AWS SAM, CloudFormation, and API Gateway to make master data sets more accessible.
- **Data quality framework**: Built a data quality framework on DynamoDB, Lambda, Batch, ECR, and Snowflake. Those checks became part of the gates for model promotion.
- **LLM chatbot**: Built a chatbot on GPT-3.5 and LangChain with a React front end that product managers used to explore Snowflake data in plain language.

</details>
