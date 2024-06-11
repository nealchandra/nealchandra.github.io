---
title: "Modeltune"
description: "A platform for fine-tuning and serving custom LLM models"
priority: 1
repoURL: "https://github.com/nealchandra/modeltune"
---

Modeltune is a platform for easily finetuning LLMs and performing inference against your custom models. No specialized hardware or custom training code required.

<figure>
<video src="/Modeltune.mp4" autoplay muted></video>
<figcaption>A demonstration of a simple training -> inference loop in Modeltune using a custom coding dataset.</figcaption>
</figure>

Modeltune has two views -- a playground and a training view. Load any public dataset (or connect your HuggingFace API key to access private resources) from Hugging Face, configure the prompt template for your use case using an inline Handlebars editor, and begin a training job. Finetunes run on Modal and will automatically save training logs and data to wandb if you have connected your account. Once a training job is complete, you can perform inference against your model in the playground.

## Technologies

- NextJS 13 App Router
- Modal Labs
- Prisma/Postgres
- [alpaca_lora_4bit](https://github.com/johnsmith0031/alpaca_lora_4bit) (quantized lora finetuning)
