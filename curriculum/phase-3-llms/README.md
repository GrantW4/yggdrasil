# Phase 3: The LLM Era — Large Language Models

> "The Transformer is the most important architecture in the history of machine learning." — (virtually every AI researcher, circa 2023–present)

The revolution happened. If you've done Phase 2 correctly, you already implemented a Transformer. Now you're going to understand what happens when you scale it to billions of parameters, train it on the entire internet, and align it to human preferences. This is the core of modern AI engineering.

**Estimated time:** 11–14 weeks at 10–15 hours/week  
**Difficulty:** Advanced  
**Prerequisites:** [Phase 2: First Branches](../phase-2-first-branches/README.md)

---

## What You'll Be Able to Do After Phase 3

- Explain in precise detail how GPT-4, Claude, and Llama 3 work internally
- Fine-tune an open-source LLM on your own dataset using LoRA/QLoRA
- Build a production-quality RAG system from vector storage through generation
- Design and run evals that actually measure what matters
- Make principled decisions about when to fine-tune vs. prompt engineer vs. RAG

---

## Modules

### Module 1: Transformer Architecture Deep Dive
**[→ Enter Module](01-transformer-architecture/README.md)**

You implemented the original Transformer in Phase 2. Now you'll understand every architectural decision that has been made since 2017 — and why.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Attention Revisited](01-transformer-architecture/lessons/01-attention-revisited.md) | Scaled dot-product, multi-head, grouped query, MLA | 4–5h |
| 2 | [Positional Encoding](01-transformer-architecture/lessons/02-positional-encoding.md) | Sinusoidal, learned, RoPE, ALiBi — why position matters | 3–4h |
| 3 | [GPT Architecture](01-transformer-architecture/lessons/03-gpt-architecture.md) | Decoder-only, causal masking, next-token prediction, KV cache | 4–5h |
| 4 | [Tokenization](01-transformer-architecture/lessons/04-tokenization.md) | BPE, WordPiece, SentencePiece — implement BPE from scratch | 3–4h |
| 5 | [Scaling Laws](01-transformer-architecture/lessons/05-scaling-laws.md) | Chinchilla, emergent abilities, compute-optimal training | 3–4h |
| 6 | [Modern Architectural Choices](01-transformer-architecture/lessons/06-modern-architecture.md) | RMSNorm, SwiGLU, MoE, FlashAttention, why each was adopted | 4–5h |
| 7 | [Build a GPT from Scratch](01-transformer-architecture/lessons/07-build-gpt.md) | Karpathy's nanoGPT-style — implement and train on Shakespeare | 6–8h |

**Module Project:** Extend nanoGPT with at least 3 modern architectural improvements (RoPE, SwiGLU, grouped-query attention). Benchmark the improvements.

---

### Module 2: Pre-training & Fine-tuning
**[→ Enter Module](02-pretraining-finetuning/README.md)**

Pre-training creates capability. Fine-tuning creates behavior. Alignment creates safety. Understanding all three is what separates AI engineers from AI users.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Pre-training Objectives](02-pretraining-finetuning/lessons/01-pretraining.md) | CLM, MLM, span corruption, denoising — what each learns | 3–4h |
| 2 | [Supervised Fine-tuning](02-pretraining-finetuning/lessons/02-sft.md) | Instruction tuning, chat templates, dataset formats | 3–4h |
| 3 | [Parameter-Efficient Fine-tuning](02-pretraining-finetuning/lessons/03-peft.md) | LoRA, QLoRA, IA3, adapter layers — theory and practice | 5–6h |
| 4 | [RLHF](02-pretraining-finetuning/lessons/04-rlhf.md) | Reward models, PPO, the InstructGPT paper in depth | 5–6h |
| 5 | [DPO and Alternatives](02-pretraining-finetuning/lessons/05-dpo.md) | Direct Preference Optimization, ORPO, SimPO, when to use each | 4–5h |
| 6 | [Fine-tuning in Practice](02-pretraining-finetuning/lessons/06-finetuning-practice.md) | Dataset prep, training infra, common failures, debugging | 4–5h |
| 7 | [Merging Models](02-pretraining-finetuning/lessons/07-model-merging.md) | SLERP, TIES, DARE — the dark art of model merging | 2–3h |

**Module Project:** Fine-tune Llama 3.1 8B (or equivalent) using QLoRA on a task of your choosing. Document the process, evaluate rigorously, and compare to the base model.

---

### Module 3: RAG, Prompting & Evals
**[→ Enter Module](03-rag-and-prompting/README.md)**

The production AI stack. Most AI engineers spend more time here than anywhere else.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Prompt Engineering](03-rag-and-prompting/lessons/01-prompt-engineering.md) | Few-shot, chain-of-thought, structured output, system prompts | 3–4h |
| 2 | [Vector Databases](03-rag-and-prompting/lessons/02-vector-databases.md) | Embeddings, ANN algorithms (HNSW, IVF), Qdrant, Pinecone, pgvector | 4–5h |
| 3 | [Basic RAG](03-rag-and-prompting/lessons/03-basic-rag.md) | Chunking strategies, embedding, retrieval, generation | 4–5h |
| 4 | [Advanced RAG](03-rag-and-prompting/lessons/04-advanced-rag.md) | HyDE, reranking, hybrid search, multi-hop retrieval | 4–5h |
| 5 | [LLM Evals](03-rag-and-prompting/lessons/05-llm-evals.md) | Eval design, automated evals, LLM-as-judge, benchmarks | 5–6h |
| 6 | [Context Window Management](03-rag-and-prompting/lessons/06-context-management.md) | Long context, lost-in-the-middle, compression, selective retrieval | 2–3h |
| 7 | [Structured Outputs & Tool Use](03-rag-and-prompting/lessons/07-structured-outputs.md) | JSON mode, function calling, tool use patterns, schema design | 3–4h |

**Module Project:** Build a production-grade RAG system over a large document corpus. Implement at least two retrieval strategies, design an eval suite, and report benchmark results.

---

## Phase 3 Capstone

> **Fine-tune and Deploy:** Choose a real task where an LLM would provide value. Fine-tune an open-source model on custom data, build a RAG layer if needed, design evals, and deploy the system as a working API endpoint. This is the closest thing to an actual AI engineering job interview you'll encounter in this curriculum.

---

## Papers (Required Reading)

- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Vaswani et al. (2017)
- [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) — Brown et al. (GPT-3, 2020)
- [Training Language Models to Follow Instructions](https://arxiv.org/abs/2203.02155) — Ouyang et al. (InstructGPT, 2022)
- [LoRA: Low-Rank Adaptation of Large Language Models](https://arxiv.org/abs/2106.09685) — Hu et al. (2021)
- [Direct Preference Optimization](https://arxiv.org/abs/2305.18290) — Rafailov et al. (2023)
- [Retrieval-Augmented Generation for NLP](https://arxiv.org/abs/2005.11401) — Lewis et al. (2020)
- [Chinchilla Scaling Laws](https://arxiv.org/abs/2203.15556) — Hoffmann et al. (2022)

## Resources

### Tools & Frameworks
- [Hugging Face Transformers](https://huggingface.co/docs/transformers) — the central hub
- [Hugging Face PEFT](https://huggingface.co/docs/peft) — parameter-efficient fine-tuning
- [TRL](https://huggingface.co/docs/trl) — SFT, RLHF, DPO training
- [LlamaFactory](https://github.com/hiyouga/LLaMA-Factory) — fine-tuning with minimal code

### Courses
- [Andrej Karpathy: Let's build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY) — essential watch
- [Hugging Face NLP Course](https://huggingface.co/learn/nlp-course/en/chapter1/1) — comprehensive and free
- [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) — targeted, high quality

---

## Phase 3 Completion Checklist

- [ ] All 21 lessons completed with notes
- [ ] GPT implemented from scratch with modern improvements
- [ ] LLM fine-tuned with QLoRA and evaluated
- [ ] Production RAG system built with eval suite
- [ ] Phase 3 Capstone deployed and accessible
- [ ] All quizzes passed with 80%+ score

**When you've checked all boxes:** [→ Proceed to Phase 4: The Canopy](../phase-4-canopy/README.md)
