# Job Study and Interview Preparation

This is the interview-prep page I wish I had years ago. It keeps the real examples, numbers, and questions in one place so I do not walk into an interview and suddenly forget half the things I have built. The goal is not to force every metric into every answer. It is to pick the example that actually fits the question.

## Career Narrative

I am an ML platform and product engineer with more than a decade of experience across the data and machine-learning lifecycle. I began in QA and business systems analysis at Autodesk, moved through data and software engineering at Autodesk and Glassdoor, led a data-engineering team at Disney/Hulu, built shared ML and AI-workflow platforms at Procore, and now build distributed research infrastructure at Skywalker Sound.

The work I enjoy most is helping engineers, data scientists, and researchers do something that used to be slow or painful without needing constant help. That has led me into ML lifecycle systems, evaluation and human review, distributed compute, backend platforms, data quality, cloud infrastructure, and now on-premises research systems.

I am not a pure research scientist, and I do not try to sell myself as one. I build the systems around the research and models: training, evaluation, deployment, monitoring, debugging, and all the unglamorous pieces that make the work usable in production.

## The Numbers I Should Remember

| Theme | Evidence |
| --- | --- |
| ML lifecycle | Built a training, registry, evaluation, promotion, deployment, and monitoring platform adopted by four teams. |
| Reliable AI | Built a Google ADK document workflow with OCR, tool calls, structured interpretation, golden datasets, regression evaluation, tracing, and human-review gates. |
| Self-service impact | Reduced an engineer-assisted sales workflow from several days or a week to about one hour for 10 to 15 users across three teams. |
| Revenue impact | Designed production workflows for ACV prediction systems associated with more than $8 million in annual upsell revenue. |
| Orchestration | Refactored Airflow into reusable OOP components, decorators, and configuration-driven templates, reducing cost by 60% and delivery from weeks to hours. |
| Model deployment | Reduced deployment time from four weeks to one week and improved model-deployment efficiency by 85% through shared registry and deployment capabilities. |
| Research compute | Built a self-service Ray control plane across approximately 40 Linux and Mac machines, including GPU resources, health, history, logs, recovery, and observability. |
| Audio discovery | Built metadata exploration and LLM-assisted enrichment workflows for terabytes of sound using PANNs and structured extraction. |
| Technical leadership | Led eight engineers at Disney/Hulu with weekly one-on-ones, hiring support, performance coaching, technical direction, and delivery ownership. |
| Mentorship | Helped engineers earn promotions and broader ownership; taught recurring GPT, Snowflake, and Google ADK sessions to groups of 10 to 20 employees. |
| Data scale | Built Hive and Spark benchmarking for more than 10 TB of data and increased metric deployment frequency from twice weekly to daily. |
| Product ownership | Designed, built, launched, and iterated NorthPaw across App Store releases, analytics, accessibility, feedback, reliability, press, and Android beta preparation. |

## Technical Deep Dives

### ML Lifecycle and MLOps

The important part is explaining the full path, not unloading a list of tool names:

1. How data and features are prepared and validated
2. How training runs and artifacts are versioned
3. How experiments and candidate models are compared
4. Which automated and human evaluation gates apply
5. How promotion decisions are recorded
6. How deployment is executed and rolled back
7. How production behavior and data drift are monitored
8. How teams adopt the platform without losing legitimate flexibility

Relevant technologies include Python, AWS, EKS, SageMaker, S3, Terraform, Docker, Kubernetes, Airflow, MLflow, Weights & Biases, Snowflake, Databricks, GitHub Actions, and GitLab CI/CD.

### LLM and Agentic Workflows

My strongest example is the Procore document workflow:

- Stakeholder interviews showed that users did not trust the existing results.
- Reports moved through OCR and structured extraction.
- Contextual questions and Snowflake tool calls produced relevant data.
- The system displayed generated queries and table results before interpretation.
- PDF comparisons and plain-language responses were separately reviewable.
- Golden datasets, regression evaluation, run tracing, and comparison interfaces supported iteration.
- Human approvals created explicit boundaries around consequential steps.

The interesting conversation is usually about failure: bad OCR, vague questions, invalid queries, stale context, answers that sound confident but are not supported, and evaluation sets that stop representing real use.

### Distributed Systems and Ray

The Skywalker Sound work gives me a real example of heterogeneous research compute:

- FastAPI and PostgreSQL control plane
- Ray cluster creation and lifecycle management
- Linux, GPU, and Mac resource pools
- Node enrollment and software upgrades
- Environment creation and shared-storage mounting
- Job history, task and node health, logs, and Grafana telemetry
- Activity-aware availability, idle behavior, and recovery
- Researcher self-service balanced with operator controls

The deeper topics are state boundaries, idempotent operations, scheduling, observability, long-running jobs, partial cluster failures, and what changes when diagnosis is built for researchers instead of only operators.

### Data Platforms and Quality

I can pull examples from every stage of my career:

- **Autodesk:** Certified enterprise datasets, Spark testing, benchmarking, metadata crawling, data catalog, and cost optimization
- **Glassdoor:** Singer API ingestion, schema discovery, Airflow operation, anomaly detection, and Amundsen
- **Disney/Hulu:** Marketing and behavioral data integration, dimensional modeling, privacy constraints, Snowflake, Databricks, and Airflow
- **Procore:** Data-quality framework, Snowflake-connected ML and AI workflows, release gates, and evaluation
- **Skywalker Sound:** Large-scale audio metadata classification, structured enrichment, and searchability

The bigger point is that quality is tied to ownership, contracts, observability, lineage, incident response, and whatever decision somebody makes with the data afterward.

### Cloud, On-Premises, and Infrastructure as Code

My experience covers AWS-heavy production platforms, GCP-connected research systems, and on-premises infrastructure. Terraform, containers, Kubernetes, CI/CD, configuration-driven workflows, and repeatable environment setup are recurring tools.

The parts worth digging into are secrets and identity, least-privilege access, reproducible environments, testing and rollback, utilization and cost, and all the assumptions that change when the infrastructure includes on-premises Macs and dedicated GPUs.

## Leadership and Behavioral Stories

For behavioral questions, I try to keep it simple: what was happening, what I owned, what choice I made, what happened, and what I would do differently now.

### Leading Eight Engineers at Disney/Hulu

- Led junior through senior engineers with weekly one-on-ones and technical direction.
- Supported hiring, performance coaching, delivery planning, and stakeholder communication.
- Guided three engineers through successful project delivery and helped one earn a promotion.
- Directed Marketing Mix Modeling delivery across Disney brands and improved metric-driven decision-making by 15%.
- Managed delays and competing expectations by translating technical constraints into recovery plans and explicit business choices.

### Building Trust in an AI Workflow

- Users did not trust the existing model results and relied on engineering assistance.
- Interviewed stakeholders and identified where confidence broke down.
- Made OCR, generated queries, data results, comparisons, and interpretation separately inspectable.
- Added human-review gates and evaluation infrastructure.
- Reduced turnaround to about one hour while giving users a defensible record of how the result was produced.

### Creating Leverage Through a Shared Platform

- Multiple modeling teams needed repeatable training, evaluation, promotion, and deployment.
- Standardized lifecycle contracts without requiring every model to be identical.
- Added reusable templates, versioning, release gates, monitoring, and human checks.
- Drove adoption across four teams and shortened delivery timelines.

### Mentoring and Teaching

- Mentored two junior engineers through promotions, new technical skills, and ownership of independent projects.
- Led recurring GPT, Snowflake, and Google ADK sessions for groups of 10 to 20 employees.
- Created recordings that became reusable onboarding material.
- Emphasized psychological safety, clear expectations, and progressively larger ownership.

### Learning From Product Users

- Launched NorthPaw after extended solo development and early external validation.
- Added a feedback mechanism that surfaced bugs, accessibility failures, and missing real-world needs.
- Changed the release focus from feature quantity to clarity, contrast, reliability, and trust.
- Shipped repeated improvements and learned to treat listening and support as core engineering work.

## Likely Interview Questions

### Platform and Architecture

1. How do you decide what belongs in a shared platform?
2. Describe an ML platform you designed end to end.
3. How do you support different model types without building an unmaintainable abstraction?
4. How would you measure platform success beyond uptime?
5. How do you migrate teams from bespoke workflows onto a golden path?
6. How do you design for partial failure in a distributed cluster?
7. What changes when compute spans cloud, on-premises GPU, and Mac resources?

### AI, Evaluation, and Trust

1. How do you evaluate an agentic or tool-using workflow?
2. Where should human review exist, and when does it become a bottleneck?
3. How do you prevent a plausible final answer from hiding upstream failure?
4. How do golden datasets evolve without overfitting the workflow to the test set?
5. How do you trace and debug tool selection, retrieval, and interpretation errors?
6. Tell me about a time users did not trust a technically capable system.

### Leadership and Execution

1. Tell me about a project that was delayed or at risk.
2. How have you helped an engineer grow into broader ownership?
3. How do you influence teams when you are not their manager?
4. Describe a disagreement about architecture or priorities.
5. How do you balance short-term delivery with platform investment?
6. Tell me about a time user feedback changed your technical roadmap.

## Questions to Ask the Team

- Who are the platform's primary users, and where do they lose the most time today?
- Which ML lifecycle stages are standardized, and which remain team-specific?
- How are model, data, and LLM-workflow quality evaluated before release?
- What production failures or adoption problems have shaped the current roadmap?
- How is platform success measured: adoption, delivery time, reliability, compute efficiency, researcher productivity, or business outcomes?
- What is the boundary between this team's ownership and the responsibilities of data science, infrastructure, security, and application teams?
- How much of the role is hands-on architecture and implementation versus coordination and roadmap work?
- What would meaningful impact look like after three, six, and twelve months?
- How does the team preserve experimentation while maintaining production standards?
- What technical debt is the team consciously carrying, and why?

## Preparation Checklist

- Read the canonical job description and map each major requirement to one evidence-backed example.
- Prepare a two-minute career narrative and a deeper version for technical interviewers.
- Select four to six stories covering architecture, failure, leadership, conflict, ambiguity, mentorship, and user impact.
- Draw one ML lifecycle architecture and one distributed-compute architecture from memory.
- Review the exact metrics, team sizes, adoption scope, and personal ownership for every story.
- Identify genuine gaps and explain how adjacent experience reduces the learning risk.
- Prepare role-specific questions showing understanding of the team's users and operating model.
- Avoid claiming pure research depth where the stronger story is platform engineering, evaluation, and enablement.
