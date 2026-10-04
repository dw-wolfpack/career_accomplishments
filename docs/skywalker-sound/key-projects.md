---
tags:
  - ray
  - fastapi
  - postgres
  - grafana
  - gpu
  - audio metadata
  - panns
  - llm
  - ml platform
  - distributed systems
  - research infrastructure
  - python
  - gcp
  - gitlab
  - observability
---

# Key Projects and Achievements

<a class="see-system" href="../../diagram-studies/#ml-hub"><span>See the system</span><strong>ML Hub · Ray topology · before and after</strong><em>→</em></a>

## Impact

**Before**: Applied scientists were limited to two A100s per data scientist per model. They logged in, checked that their buckets were mounted, sharded the model for training, and hoped it worked. They did all of that ops work themselves. Once a run was ready, they pushed it to GCP to train, at a cost of more than $25k per run.

**After**: All 12 A100s are available to them, and they can move between Ray pools in minutes. Bucket mounting is abstracted away and can be checked in the hub, and there are CPU-only machines for work that does not need a GPU. They run jobs when they want to, and metrics track usage. Every A100 stays fully utilized except two reserved for eval pipelines. We added CoreWeave nodes with H100s and H200s, and those run at 100% saturation.

**Result**: No more $25k cloud runs and much faster turnaround. VAE training went from five months before I joined to weeks.

## Projects

- **Self-Service ML Hub**: Designed and built a control plane spanning Linux, GPU, and Mac compute. Researchers can create and manage Ray clusters, submit jobs, inspect history, diagnose failures, and monitor infrastructure without handling each machine's setup directly.

    - **One elastic pool**: The control plane treats heterogeneous hardware as one elastic pool. Mac Studios join the Ray cluster dynamically through a Go binary that tracks their usage, so research workloads scale across every available machine as we add resources.

- **Modeling and Audio Metadata** <a id="modeling-and-audio-metadata"></a>: Ran PANNs audio classification across close to 13 TiB of sound files to generate labels and embeddings, and built a front-end overlay that plays each file with its labels so people can scrub through and validate them. Deployed a Qwen model on-prem with Ray Serve and vLLM on A100s, connected to our LiteLLM instance, to evaluate cost savings against hosted models. Used LLM-assisted structured extraction to make the library easier to search. Details on [Modeling and model optimization](modeling-work.md).

- **Platform Control Plane**: Built FastAPI, PostgreSQL, and web services for cluster creation, node enrollment, software upgrades, resource pools, job history, system health, logs, and operational controls.

- **Heterogeneous Ray Infrastructure**: Developed a shared distributed-compute platform across approximately 40 Linux and Mac virtual or physical machines, including dedicated GPU resources and workload-specific pools for research teams.

- **Environment and Storage Automation**: Automated environment creation, storage mounting, node recovery, and Mac Studio availability, reducing manual setup and making research runs more repeatable.

- **Activity-Aware Operations**: Built agents and telemetry for node activity, availability, recovery, and idle behavior, with Grafana dashboards for shared research infrastructure.

- **Researcher-Facing Diagnosis**: Exposed cluster, job, task, node-health, and log information through APIs and user-facing tools so researchers could understand failures without depending on machine-by-machine investigation.
