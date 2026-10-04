---
tags:
  - leadership
  - architecture
  - modeling at scale
  - sagemaker
  - terraform
  - github actions
  - gitlab
  - mentorship
  - ml platform
---

## Lessons Learned <a id="procore-lessons"></a>

- **Change the workflow before adding tools**: The biggest gain did not come from a new service. It came from getting data scientists off their laptops and into a shared cloud workflow with a registry. Every later improvement depended on that.

- **A threshold beats an opinion**: Once WMAPE on a golden dataset had to clear a set threshold before promotion, the conversation shifted from whether a model felt better to whether it passed.

- **Agree on the labels before training anything**: The BERT work started with people giving different answers about what the categories even were. Getting subject-matter experts to sign off on five categories and a golden set had to come before any fine-tuning.

- **Measure where the time goes before optimizing**: Decorators that tracked run time and throughput told me what to work on. Without them I would have been guessing, and the inference run time would not have dropped by half.

- **Trust is a feature**: Sales users did not need a smarter prompt. They needed to see the OCR output, the query, and the table results before accepting an answer. Review gates are what made the faster workflow usable.

- **Make the good path the easy one**: Four teams adopted the shared lifecycle platform. A shared path only works if using it is easier than building your own path to production.

- **Teaching scales further than doing**: Mentoring two engineers through promotions and running sessions for groups of 10 to 20 spread the practices further than anything I could build alone.
