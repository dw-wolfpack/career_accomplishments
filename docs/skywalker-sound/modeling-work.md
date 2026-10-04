---
tags:
  - machine learning
  - audio
  - panns
  - llm
  - ray
  - model serving
  - evaluation
---

# Modeling and model optimization

Most of my Skywalker work is the platform that research runs on. This page covers the modeling I did myself: audio classification over our sound library, an on-prem LLM deployment, and LLM-based structured extraction.

## PANNs audio classification

**Problem**: Close to 13 TiB of audio. Researchers needed specific audio tags for other modeling work, and they needed to confirm that the media they were training on was what it claimed to be. Doing that meant running every step themselves.

**What I built**: I ran pretrained PANNs for audio classification and embeddings across all the media files. Then I built a front-end overlay that plays each file with its labels and lets a person scrub through it to validate what the model said.

**How I evaluated it**: Human validation in that overlay. A reviewer plays and scrubs the audio against the predicted labels rather than trusting the labels blind. The same review gathered the specific tags other models needed.

**Result**: Labels and embeddings across close to 13 TiB of audio, and one place for researchers to confirm the media they were using was correct. That was much faster than doing all the steps themselves.

## On-prem LLM deployment

**Problem**: We wanted to know whether serving an LLM on our own hardware would save money compared with hosted models.

**What I built**: I deployed a Qwen model with Ray Serve and vLLM on A100 GPUs and connected it to our LiteLLM instance, so it sits behind the same interface people already use for other models.

**How I evaluated it**: The deployment exists to evaluate cost savings against hosted models. That evaluation is ongoing.

**Result**: A working on-prem model behind LiteLLM on the same GPUs the research platform manages.

## Structured extraction with LLMs

**Problem**: Sound metadata is inconsistent, and a lot of what makes a file useful is buried in free text.

**What I built**: LLM-assisted structured extraction that turns that metadata into consistent fields for search. It is part of the [audio metadata work](key-projects.md#modeling-and-audio-metadata) alongside the PANNs labels.

**How I evaluated it**: Validation against golden datasets with specific confidence thresholds, plus human-in-the-loop (HiT) review. Extractions with the lowest confidence are ranked to the top, so people review the riskiest ones first.

**Result**: Better sound discovery and searchability across the library, with human review focused where the model is least sure.

## Where this sits

The models run on the same [Ray platform](key-projects.md) I built for the research team: shared A100 pools, abstracted bucket mounting, and a hub where people can see what is running. See the [ML Hub study](../diagram-studies.md#ml-hub) for how that looks.
