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

- **Self-Service ML Hub**: Designed and built a control plane spanning Linux, GPU, and Mac compute. Researchers can create and manage Ray clusters, submit jobs, inspect history, diagnose failures, and monitor infrastructure without handling each machine's setup directly.

- **Platform Control Plane**: Built FastAPI, PostgreSQL, and web services for cluster creation, node enrollment, software upgrades, resource pools, job history, system health, logs, and operational controls.

- **Heterogeneous Ray Infrastructure**: Developed a shared distributed-compute platform across approximately 40 Linux and Mac virtual or physical machines, including dedicated GPU resources and workload-specific pools for research teams.

- **Environment and Storage Automation**: Automated environment creation, storage mounting, node recovery, and Mac Studio availability, reducing manual setup and making research runs more repeatable.

- **Activity-Aware Operations**: Built agents and telemetry for node activity, availability, recovery, and idle behavior, with Grafana dashboards for shared research infrastructure.

- **Researcher-Facing Diagnosis**: Exposed cluster, job, task, node-health, and log information through APIs and user-facing tools so researchers could understand failures without depending on machine-by-machine investigation.

- **Audio Metadata Exploration**: Built workflows for exploring and enriching metadata across terabytes of sound files. Used PANNs classification and LLM-assisted structured extraction to improve sound discovery and searchability.
