# Phase 2: First Branches — Deep Learning

> "It's not that I'm so smart, it's just that I stay with problems longer." — Albert Einstein

This is where most people want to start. Don't. The engineers who build the best deep learning systems understand backpropagation the way a carpenter understands grain — not just how to use the tool, but what's happening inside the wood. Phase 2 starts with a network you build by hand and ends with you training a competitive image classifier.

**Estimated time:** 10–13 weeks at 10–15 hours/week  
**Difficulty:** Intermediate to Advanced  
**Prerequisites:** [Phase 1: The Trunk](../phase-1-trunk/README.md)

---

## What You'll Be Able to Do After Phase 2

- Implement forward pass, backward pass, and gradient descent from scratch in NumPy
- Debug training runs by reading loss curves, gradient norms, and activation statistics
- Train competitive CNNs and sequence models in PyTorch
- Explain exactly what is happening during training at the level of tensor operations
- Apply regularization and training techniques that translate directly to LLM training

---

## Modules

### Module 1: Neural Networks from Scratch
**[→ Enter Module](01-neural-networks/README.md)**

Build everything by hand before you use a framework. This is the module most ML engineers wish they had done.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [The Perceptron](01-neural-networks/lessons/01-perceptron.md) | Historical context, linear separability, limitations | 2–3h |
| 2 | [Feedforward Networks](01-neural-networks/lessons/02-feedforward-networks.md) | Layers, activations (ReLU, sigmoid, tanh), universal approximation | 3–4h |
| 3 | [Backpropagation](01-neural-networks/lessons/03-backpropagation.md) | Chain rule, computational graphs, manual gradient derivation | 5–6h |
| 4 | [Build a Neural Net in NumPy](01-neural-networks/lessons/04-numpy-neural-net.md) | Implement forward + backward pass, train on MNIST | 6–8h |
| 5 | [Optimization Algorithms](01-neural-networks/lessons/05-optimizers.md) | SGD, momentum, RMSProp, Adam — implement each from scratch | 4–5h |
| 6 | [Loss Functions](01-neural-networks/lessons/06-loss-functions.md) | MSE, cross-entropy, focal loss, contrastive loss | 2–3h |
| 7 | [Weight Initialization](01-neural-networks/lessons/07-initialization.md) | Xavier, He, why it matters, vanishing/exploding gradients | 2–3h |

**Module Project:** Implement a full neural network library in NumPy (~400 lines) supporting Dense layers, activations, optimizers, and loss functions. Train it to 98%+ on MNIST.

---

### Module 2: Deep Learning Architectures
**[→ Enter Module](02-deep-learning-architectures/README.md)**

The canonical architectures. Every modern model is a variation on these themes.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Introduction to PyTorch](02-deep-learning-architectures/lessons/01-pytorch-intro.md) | Tensors, autograd, nn.Module, training loop | 3–4h |
| 2 | [Convolutional Neural Networks](02-deep-learning-architectures/lessons/02-cnns.md) | Convolutions, pooling, receptive fields, architectures (ResNet) | 5–6h |
| 3 | [Batch Normalization](02-deep-learning-architectures/lessons/03-batch-norm.md) | Internal covariate shift, LayerNorm, RMSNorm | 2–3h |
| 4 | [Recurrent Neural Networks](02-deep-learning-architectures/lessons/04-rnns.md) | Vanilla RNN, BPTT, vanishing gradients in sequences | 3–4h |
| 5 | [LSTMs and GRUs](02-deep-learning-architectures/lessons/05-lstms-grus.md) | Gates, cell state, why they work, when to use them | 4–5h |
| 6 | [Attention Mechanisms](02-deep-learning-architectures/lessons/06-attention.md) | Dot-product attention, multi-head attention, self-attention | 5–6h |
| 7 | [The Transformer](02-deep-learning-architectures/lessons/07-the-transformer.md) | "Attention Is All You Need" — implement the paper's architecture | 6–8h |

**Module Project:** Train a ResNet on CIFAR-10 from scratch in PyTorch. Achieve 93%+ accuracy. Write an analysis of what architectural choices mattered most.

---

### Module 3: Training at Scale
**[→ Enter Module](03-training-techniques/README.md)**

The difference between a model that trains in a notebook and one that trains in production.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Regularization](03-training-techniques/lessons/01-regularization.md) | Dropout, L1/L2, label smoothing, stochastic depth | 3–4h |
| 2 | [Learning Rate Scheduling](03-training-techniques/lessons/02-lr-scheduling.md) | Warmup, cosine annealing, cyclic LR, OneCycleLR | 2–3h |
| 3 | [Data Augmentation](03-training-techniques/lessons/03-data-augmentation.md) | Standard augmentations, CutMix, MixUp, AugMix, RandAugment | 2–3h |
| 4 | [Mixed Precision Training](03-training-techniques/lessons/04-mixed-precision.md) | FP16, BF16, loss scaling, when it helps and when it hurts | 3–4h |
| 5 | [Gradient Clipping & Stability](03-training-techniques/lessons/05-gradient-stability.md) | Gradient clipping, gradient accumulation, debugging NaN losses | 2–3h |
| 6 | [Transfer Learning](03-training-techniques/lessons/06-transfer-learning.md) | Pre-trained models, feature extraction vs. fine-tuning, when each wins | 3–4h |

**Module Project:** Fine-tune a pre-trained model on a domain-specific classification task, then systematically ablate training choices to understand which ones actually matter.

---

## Phase 2 Capstone

> **Implement "Attention Is All You Need":** From scratch, in PyTorch, implement the full Transformer architecture as described in the original 2017 paper. Train it on a machine translation task. Document every design decision and every line of math. This is a rite of passage — every serious AI engineer has done it.

---

## Resources

### Papers (read these)
- [Attention Is All You Need](https://arxiv.org/abs/1706.03762) — Vaswani et al. (2017)
- [Deep Residual Learning](https://arxiv.org/abs/1512.03385) — He et al. (2016)
- [Dropout: A Simple Way to Prevent Overfitting](https://jmlr.org/papers/v15/srivastava14a.html) — Srivastava et al. (2014)
- [Batch Normalization](https://arxiv.org/abs/1502.03167) — Ioffe & Szegedy (2015)

### Books
- [Deep Learning](https://www.deeplearningbook.org/) — Goodfellow, Bengio, Courville (free online)
- [Dive Into Deep Learning](https://d2l.ai/) — Interactive, runs in Jupyter, free

### Courses
- [fast.ai: Practical Deep Learning](https://course.fast.ai/) — Best practical course, bar none
- [Andrej Karpathy: Neural Networks Zero to Hero](https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ) — Build everything from scratch

---

## Phase 2 Completion Checklist

- [ ] All 20 lessons completed with notes
- [ ] NumPy neural net library built and achieving 98%+ on MNIST
- [ ] ResNet trained to 93%+ on CIFAR-10
- [ ] Transfer learning project completed
- [ ] Transformer implemented from scratch (capstone)
- [ ] All quizzes passed with 80%+ score

**When you've checked all boxes:** [→ Proceed to Phase 3: The LLM Era](../phase-3-llms/README.md)
