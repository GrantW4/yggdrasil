# Phase 4: The Canopy — AI Systems Engineering

> "The difference between a model that works and a system that works is everything." — Every ML engineer who has been paged at 3am

This is where AI engineering diverges from ML research. Training a model is one thing. Running it reliably at scale, keeping it fast enough to be usable, maintaining it as data shifts and usage patterns change — that's AI systems engineering. Phase 4 is what makes you worth hiring at a serious company.

**Estimated time:** 10–13 weeks at 10–15 hours/week  
**Difficulty:** Advanced  
**Prerequisites:** [Phase 3: The LLM Era](../phase-3-llms/README.md)

---

## What You'll Be Able to Do After Phase 4

- Design and operate end-to-end ML pipelines that are reproducible, testable, and auditable
- Train models across multiple GPUs using FSDP and DeepSpeed
- Serve LLMs at production throughput with quantization, batching, and speculative decoding
- Build monitoring systems that catch data drift, model degradation, and silent failures
- Make the infrastructure trade-offs that determine whether an AI product is viable

---

## Modules

### Module 1: MLOps
**[→ Enter Module](01-mlops/README.md)**

The operational discipline of machine learning. Production ML without MLOps is a time bomb.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Experiment Tracking](01-mlops/lessons/01-experiment-tracking.md) | Weights & Biases, MLflow — logging, versioning, comparing runs | 3–4h |
| 2 | [Data Versioning](01-mlops/lessons/02-data-versioning.md) | DVC, Delta Lake, reproducibility, lineage tracking | 3–4h |
| 3 | [ML Pipelines](01-mlops/lessons/03-ml-pipelines.md) | Pipeline design, Prefect/Airflow/Metaflow, orchestration patterns | 4–5h |
| 4 | [Containerization for ML](01-mlops/lessons/04-containerization.md) | Docker, GPU containers, NVIDIA Docker, reproducible environments | 3–4h |
| 5 | [CI/CD for ML](01-mlops/lessons/05-cicd-for-ml.md) | GitHub Actions for ML, model testing, deployment gates | 3–4h |
| 6 | [Model Registries](01-mlops/lessons/06-model-registries.md) | Model versioning, A/B deployment, rollback strategies | 2–3h |
| 7 | [Monitoring & Observability](01-mlops/lessons/07-monitoring.md) | Data drift, model degradation, alerting, Evidently AI, Arize | 4–5h |

**Module Project:** Build a full MLOps pipeline for a model you trained in Phase 1–3: versioned data, tracked experiments, containerized training, and automated deployment with monitoring.

---

### Module 2: Distributed Training
**[→ Enter Module](02-distributed-training/README.md)**

Training models bigger than fit on one GPU. The architectural decisions that determine whether you can scale.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Parallelism Fundamentals](02-distributed-training/lessons/01-parallelism-fundamentals.md) | Data, model, tensor, pipeline parallelism — the taxonomy | 3–4h |
| 2 | [Data Parallelism](02-distributed-training/lessons/02-data-parallelism.md) | DDP, synchronization, gradient accumulation, communication overhead | 4–5h |
| 3 | [Model Parallelism](02-distributed-training/lessons/03-model-parallelism.md) | Tensor parallelism, pipeline parallelism, Megatron-LM | 4–5h |
| 4 | [FSDP](02-distributed-training/lessons/04-fsdp.md) | Fully Sharded Data Parallel, ZeRO stages, memory analysis | 4–5h |
| 5 | [DeepSpeed](02-distributed-training/lessons/05-deepspeed.md) | ZeRO-1/2/3, ZeRO-Infinity, Offload, practical configuration | 3–4h |
| 6 | [Communication Primitives](02-distributed-training/lessons/06-communication.md) | All-reduce, all-gather, NCCL, topology-aware scheduling | 3–4h |
| 7 | [Training at Scale: Case Studies](02-distributed-training/lessons/07-case-studies.md) | GPT-4, Llama 3, Mistral — how they were actually trained | 2–3h |

**Module Project:** Train a model across multiple GPUs using both DDP and FSDP. Profile communication overhead and analyze where time is spent.

---

### Module 3: Inference Optimization
**[→ Enter Module](03-inference-optimization/README.md)**

A model that takes 30 seconds to respond is not a product. Inference optimization is where AI engineering gets closest to systems programming.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Inference Fundamentals](03-inference-optimization/lessons/01-inference-fundamentals.md) | Latency vs. throughput, KV cache, memory bandwidth bottleneck | 3–4h |
| 2 | [Quantization](03-inference-optimization/lessons/02-quantization.md) | INT8, INT4, GPTQ, AWQ, bitsandbytes — tradeoffs in quality and speed | 4–5h |
| 3 | [Speculative Decoding](03-inference-optimization/lessons/03-speculative-decoding.md) | Draft models, token verification, acceptance rate math | 3–4h |
| 4 | [Batching Strategies](03-inference-optimization/lessons/04-batching.md) | Static batching, continuous batching, PagedAttention | 3–4h |
| 5 | [vLLM](03-inference-optimization/lessons/05-vllm.md) | PagedAttention, throughput benchmarks, deployment | 3–4h |
| 6 | [TensorRT & Compilation](03-inference-optimization/lessons/06-tensorrt.md) | torch.compile, TensorRT, ONNX, kernel fusion | 3–4h |
| 7 | [Serving Architecture](03-inference-optimization/lessons/07-serving-architecture.md) | Triton, Ray Serve, routing, autoscaling, SLA management | 3–4h |

**Module Project:** Take a fine-tuned LLM from Phase 3 and optimize it for production: quantize it, serve it with vLLM, benchmark latency/throughput, and build a simple load testing suite.

---

## Phase 4 Capstone

> **Production AI System:** Design and build a complete production AI system from training pipeline through serving infrastructure. This means: reproducible training pipeline, multi-GPU training, quantized inference serving, monitoring dashboard, and a write-up of every architecture decision. This is portfolio-level work.

---

## Resources

### Papers (Required)
- [Efficient Memory Management for Large Language Model Serving (vLLM)](https://arxiv.org/abs/2309.06180) — Kwon et al. (2023)
- [ZeRO: Memory Optimizations Toward Training Trillion Parameter Models](https://arxiv.org/abs/1910.02054) — Rajbhandari et al. (2020)
- [GPTQ: Accurate Post-Training Quantization](https://arxiv.org/abs/2210.17323) — Frantar et al. (2022)
- [FlashAttention-2](https://arxiv.org/abs/2307.08691) — Dao (2023)
- [Fast Inference from Transformers via Speculative Decoding](https://arxiv.org/abs/2211.17192) — Leviathan et al. (2023)

### Tools
- [vLLM](https://github.com/vllm-project/vllm) — high-throughput serving
- [DeepSpeed](https://github.com/microsoft/DeepSpeed) — distributed training
- [Weights & Biases](https://wandb.ai) — experiment tracking
- [DVC](https://dvc.org/) — data version control
- [Evidently AI](https://evidentlyai.com/) — monitoring

---

## Phase 4 Completion Checklist

- [ ] All 21 lessons completed with notes
- [ ] MLOps pipeline built end-to-end
- [ ] Multi-GPU training run with FSDP profiled
- [ ] LLM served with vLLM with benchmarks
- [ ] Phase 4 Capstone: production system deployed
- [ ] All quizzes passed with 80%+ score

**When you've checked all boxes:** [→ Proceed to Phase 5: The Realms](../phase-5-realms/README.md)
