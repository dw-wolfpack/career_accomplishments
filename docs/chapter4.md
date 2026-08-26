# Discussion Points

These are the ideas I keep coming back to across ML platforms, data systems, research infrastructure, leadership, and my own products. They are not universal rules. They are what years of building and occasionally getting things wrong have taught me so far.

## ML Platform Engineering as a Multiplier

I believe platform engineering is the ultimate multiplier. The point is not to centralize everything or build a giant abstraction. It is to make the good path easier, then give people enough visibility to understand what the platform is doing.

At Procore, I built an internal ML lifecycle platform spanning training, registry, evaluation, human review, promotion, deployment, and monitoring. Four teams adopted the shared approach, gaining consistent versioning, release gates, error checks, and evaluation practices. Earlier platform work reduced model-deployment time from four weeks to one week, while a reusable Airflow framework later cut new-pipeline delivery from weeks to hours and reduced orchestration cost by 60%.

At Skywalker Sound, the same principle applies to research compute. The users are applied scientists rather than application developers, and the platform must accommodate experimental workloads across Linux, GPU, and Mac resources. A useful platform gives researchers self-service cluster creation and job submission, but it must also expose history, logs, health, and recovery information when an experiment fails.

The questions I usually ask are:

- Which parts of a workflow should become a shared platform capability, and which should remain team-owned?
- How do golden paths accelerate work without making experimentation rigid?
- When is abstraction reducing cognitive load, and when is it hiding information users need?
- How should platform adoption, reliability, and time-to-evidence be measured?

## Reliable AI and Human Review

I do not think of an AI workflow as one really clever prompt. It is a system, and every step can fail in a different way. If the final answer matters, people need a way to inspect how it got there.

At Procore, stakeholder interviews revealed that sales users did not trust an existing model-driven process. I built a Google ADK document workflow that combined OCR, contextual questions, Snowflake tool calls, structured interpretation, and plain-language responses. Review gates let users inspect OCR output, generated queries, table results, and PDF comparisons before accepting the final result. Golden datasets, regression evaluation, run tracing, and comparison tools supported safer iteration.

That design reduced a process requiring repeated engineering help and several days or a week to a self-service workflow completed in about one hour by 10 to 15 users across three sales teams. The important result was not simply faster generation; it was creating a visible chain of evidence that users could verify.

What I try to build in:

- Separate extraction, retrieval, tool execution, interpretation, and presentation so each stage can be tested.
- Use structured outputs and explicit contracts at workflow boundaries.
- Keep source material and intermediate results visible when trust matters.
- Build golden datasets from representative and difficult cases, not only happy paths.
- Require human approval where errors have meaningful business consequences.
- Measure workflow usefulness and failure recovery, not only model-level accuracy.

## Distributed Research Infrastructure

Research infrastructure operates under different constraints from conventional stateless services. Experiments may be long-running, environments may be highly specialized, resources are heterogeneous, and failure can waste hours of scarce compute.

My Skywalker Sound work includes a FastAPI, PostgreSQL, and web control plane supporting Ray cluster creation, node enrollment, resource pools, upgrades, job history, logs, and system health. Automation handles environment creation, storage mounting, node recovery, and Mac Studio availability. Activity-aware agents and Grafana telemetry make shared compute easier to understand and operate.

The hard parts usually show up around:

- Scheduling and resource isolation across CPU, GPU, Linux, and Mac pools
- Reproducible environments and dependency management
- Node enrollment, health, recovery, and software upgrades
- Job, task, cluster, and machine-level observability
- Idle-resource policies that respect active experiments
- Researcher-facing diagnosis versus operator-only telemetry
- The boundary between platform automation and scientist-controlled experimentation

## Data Quality as Product Quality

Data quality has been a continuous thread from Autodesk through Glassdoor, Disney/Hulu, Procore, and Skywalker Sound.

- At Autodesk, I built testing and benchmarking frameworks for Hive and Spark datasets, helped create certified enterprise datasets, and contributed to a metadata-driven internal data catalog.
- At Glassdoor, standardized Singer ingestion, schema discovery, logging, and Airflow integration made APIs easier to operate and debug. I also built an internal anomaly-detection application and contributed to Amundsen adoption.
- At Disney/Hulu, dimensional-model integration required reconciling source granularity, marketing definitions, privacy requirements, and downstream modeling needs across brands.
- At Procore, data-quality gates became part of model promotion and AI-assisted document workflows.
- At Skywalker Sound, metadata enrichment across terabytes of audio must preserve provenance and search utility while supporting exploratory research.

I learned a long time ago that data quality cannot be the check somebody runs at the very end. It comes from contracts, lineage, observability, review, and clear ownership. If people do not trust the data, the rest of the system does not matter much.

## Leadership, Mentorship, and Product Judgment

My leadership experience includes direct team leadership, technical direction, hiring support, performance coaching, mentorship, onboarding, and teaching.

At Disney/Hulu, I led eight engineers across junior and senior levels, held weekly one-on-ones, supported hiring and performance improvement, and guided three engineers through successful project delivery. At Procore, I mentored two junior engineers through promotions and broader technical ownership and led recurring GPT, Snowflake, and Google ADK sessions for groups of 10 to 20 employees.

Independent product work added a different kind of leadership: listening without an organizational hierarchy. NorthPaw users surfaced accessibility failures, hard-to-reproduce bugs, and missing real-world surfaces. A feedback form became a lightweight product-development system, shifting priorities toward clarity, contrast, reliability, and trust rather than simply adding more features.

What has worked for me:

- Make expectations and decision boundaries explicit.
- Give people ownership with enough context and support to succeed.
- Translate technical constraints into choices stakeholders can evaluate.
- Treat feedback as evidence rather than as an automatic command.
- Prefer a complete, useful vertical slice over an unvalidated roadmap.
- Preserve user trust through explainable behavior, privacy-aware defaults, and honest uncertainty.

## Building for Trust

Trust appears differently across products, but the engineering pattern is consistent.

- In an ML platform, trust comes from versioning, reproducibility, evaluation, and controlled promotion.
- In an LLM workflow, it comes from source visibility, structured stages, review gates, and regression evidence.
- In research infrastructure, it comes from reliable environments, observable jobs, and understandable recovery.
- In NorthPaw, it comes from deterministic guidance, conservative language, on-device dog data, explicit uncertainty, and a non-diagnostic boundary.
- In team leadership, it comes from clarity, consistency, follow-through, and psychological safety.

I am skeptical of systems that ask people to trust a black box because the demo looked good. The systems that last give people evidence, some control, and a way to recover when things go wrong.
