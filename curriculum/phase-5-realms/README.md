# Phase 5: The Realms — Advanced Specializations

> "The most dangerous phrase in the language is 'We've always done it this way.'" — Grace Hopper

By Phase 5, you have the full stack. Now you develop depth in the frontier areas that are defining what AI systems engineering looks like in 2025 and beyond. Agents that take real-world actions. Models that see, hear, and speak. Systems designed to remain safe and aligned as they grow more capable.

**Estimated time:** 10–13 weeks at 10–15 hours/week  
**Difficulty:** Advanced  
**Prerequisites:** [Phase 4: The Canopy](../phase-4-canopy/README.md)

---

## Modules

### Module 1: AI Agents
**[→ Enter Module](01-ai-agents/README.md)**

The shift from language models to systems that take actions and pursue goals.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [What Makes an Agent](01-ai-agents/lessons/01-what-is-an-agent.md) | Perception, memory, planning, action — the agent loop | 2–3h |
| 2 | [ReAct and Tool Use](01-ai-agents/lessons/02-react-tool-use.md) | Reasoning + Acting, tool calling, structured outputs | 3–4h |
| 3 | [Memory Systems](01-ai-agents/lessons/03-memory-systems.md) | In-context, episodic, semantic, procedural memory | 3–4h |
| 4 | [Planning and Reasoning](01-ai-agents/lessons/04-planning.md) | Chain-of-thought, tree of thought, MCTS, self-consistency | 4–5h |
| 5 | [Multi-Agent Systems](01-ai-agents/lessons/05-multi-agent.md) | Orchestration, communication, debate, specialized roles | 4–5h |
| 6 | [Agentic Frameworks](01-ai-agents/lessons/06-frameworks.md) | LangGraph, AutoGen, CrewAI — architectures and trade-offs | 3–4h |
| 7 | [Evaluating Agents](01-ai-agents/lessons/07-agent-evals.md) | Task success rate, trajectory evals, benchmarks (SWE-bench, GAIA) | 3–4h |

**Module Project:** Build a multi-agent research assistant: one agent searches and retrieves, one synthesizes, one critiques. Evaluate it on a benchmark dataset.

---

### Module 2: Multimodal AI
**[→ Enter Module](02-multimodal-ai/README.md)**

The world is not text. Multimodal models understand images, audio, video, and the relationships between them.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Vision Foundations](02-multimodal-ai/lessons/01-vision-foundations.md) | Image representations, ViT, patch embeddings, self-attention over patches | 3–4h |
| 2 | [CLIP and Contrastive Learning](02-multimodal-ai/lessons/02-clip.md) | Contrastive pre-training, zero-shot classification, retrieval | 3–4h |
| 3 | [Vision-Language Models](02-multimodal-ai/lessons/03-vlms.md) | LLaVA, Flamingo, InternVL — architecture patterns | 4–5h |
| 4 | [Diffusion Models](02-multimodal-ai/lessons/04-diffusion-models.md) | DDPM, DDIM, score matching, classifier-free guidance | 5–6h |
| 5 | [Speech and Audio](02-multimodal-ai/lessons/05-speech-audio.md) | Whisper, wav2vec, speech synthesis, audio transformers | 3–4h |
| 6 | [Video Understanding](02-multimodal-ai/lessons/06-video.md) | Video transformers, temporal attention, optical flow | 3–4h |

**Module Project:** Build a multimodal RAG system that retrieves over both images and text, with a VLM as the generator.

---

### Module 3: AI Safety
**[→ Enter Module](03-ai-safety/README.md)**

The engineers who build the most powerful AI systems must also understand the risks most clearly.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Why Safety Matters](03-ai-safety/lessons/01-why-safety.md) | Failure modes, real-world incidents, the stakes | 2–3h |
| 2 | [Alignment Fundamentals](03-ai-safety/lessons/02-alignment-fundamentals.md) | Reward hacking, specification gaming, goal misgeneralization | 3–4h |
| 3 | [Interpretability](03-ai-safety/lessons/03-interpretability.md) | Circuits, features, superposition, mechanistic interp in practice | 4–5h |
| 4 | [Red-Teaming](03-ai-safety/lessons/04-red-teaming.md) | Adversarial prompts, jailbreaks, systematic red-teaming methodology | 3–4h |
| 5 | [Constitutional AI and RLHF Safety](03-ai-safety/lessons/05-constitutional-ai.md) | Anthropic's CAI, preference learning for safety, harmlessness | 3–4h |
| 6 | [Governance and Policy](03-ai-safety/lessons/06-governance.md) — | Responsible disclosure, regulation landscape, organizational safety | 2–3h |

**Module Project:** Conduct a structured red-team evaluation of an AI system. Write a threat model, find vulnerabilities, and propose mitigations.

---

## Phase 5 Completion Checklist

- [ ] All 19 lessons completed
- [ ] Multi-agent research assistant built and evaluated
- [ ] Multimodal RAG system built
- [ ] Red-team evaluation completed with writeup
- [ ] All quizzes passed with 80%+ score

**When you've checked all boxes:** [→ Proceed to Phase 6: Elite](../phase-6-elite/README.md)
