---
tags:
  - research infrastructure
  - platform engineering
  - reliability
  - self service
---

# Lessons and Working Principles

- **Research requests usually start messy**: Experimental work rarely arrives as a complete infrastructure specification. I have learned to look for the repeatable need inside the one-off request.

- **A launch button is not self-service**: Researchers also need job history, logs, health signals, and a way to understand what failed without waiting for someone else to investigate.

- **Different machines really are different**: Linux, GPU, and Mac resources have different environment, scheduling, availability, and recovery needs. Pretending those differences do not exist usually creates a more fragile system.

- **Observability is part of the product**: If someone is running an experiment overnight, knowing what happened is not an operator-only concern. It is part of whether the researcher trusts the platform.

- **The point is more time for research**: The platform is doing its job when scientists spend less time setting up machines and more time running, comparing, and learning from experiments.
