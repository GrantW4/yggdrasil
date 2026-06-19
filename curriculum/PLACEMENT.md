# Yggdrasil Placement Guide

Not sure where to start? Answer the questions below honestly. This is not a test — it's a map. Overestimating your starting point means you'll hit gaps later and have to backtrack. Underestimating means you'll cover ground you already know. Both waste time.

---

## Part 1: Mathematics

Answer each question without looking anything up.

**Q1.** What is the result of multiplying a 3×4 matrix by a 4×2 matrix? What are the dimensions of the output?

**Q2.** What does it mean for a matrix to be singular? Why does it matter for machine learning?

**Q3.** Compute the gradient of `f(x, y) = 3x^2 + 2xy - y^2` with respect to both `x` and `y`.

**Q4.** What is the difference between P(A|B) and P(B|A)? Write Bayes' theorem.

**Q5.** What is the expected value of a random variable? What is variance? How are they related to standard deviation?

**Q6.** What does the eigendecomposition of a matrix tell you?

### Math Scoring

| Questions You Could Answer Confidently | Start Here |
|----------------------------------------|------------|
| 0–2 | Phase 0, Module 1 (Math for AI) |
| 3–4 | Phase 0, Module 1 — skim first 2 lessons, start at Lesson 3 |
| 5–6 | Phase 0 complete — begin Phase 1 |

---

## Part 2: Python

**Q7.** What does this output, and why?
```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

**Q8.** What is a generator? When would you use one over a list?

**Q9.** What does `*args` and `**kwargs` do in a function signature?

**Q10.** Write a decorator that prints "calling [function_name]" before any function it decorates.

**Q11.** What is the difference between `np.array([[1,2],[3,4]]) * 2` and matrix multiplication? How do you do matrix multiplication in NumPy?

**Q12.** What does broadcasting mean in NumPy? Give an example.

### Python Scoring

| Questions You Could Answer Confidently | Start Here |
|----------------------------------------|------------|
| 0–2 | Phase 0, Module 2, Lesson 1 (Python Fundamentals) |
| 3–4 | Phase 0, Module 2, Lesson 3 (Pythonic Python) |
| 5–6 | Phase 0 complete — begin Phase 1 |

---

## Part 3: Machine Learning

**Q13.** What is the bias-variance tradeoff? What causes each, and how do you reduce each?

**Q14.** Explain why you should never evaluate a model on the data it was trained on.

**Q15.** What is cross-entropy loss? Why is it used for classification rather than MSE?

**Q16.** What is the difference between bagging and boosting? Give an example of each.

**Q17.** You train a model and it gets 99% training accuracy but 60% test accuracy. What is happening and what do you try first?

**Q18.** What is gradient descent? What is the difference between batch, mini-batch, and stochastic gradient descent?

### ML Scoring

| Questions You Could Answer Confidently | Start Here |
|----------------------------------------|------------|
| 0–2 | Phase 1, Module 1, Lesson 1 |
| 3–4 | Phase 1, Module 1, Lesson 4 (Decision Trees) |
| 5–6 | Phase 2 — you know classical ML |

---

## Part 4: Deep Learning

**Q19.** Explain backpropagation in plain English. What is the chain rule and why does it matter?

**Q20.** What is the vanishing gradient problem? What architectural choices were invented to address it?

**Q21.** What is the difference between a convolutional layer and a fully connected layer? When do you use each?

**Q22.** Explain the self-attention mechanism. What are Q, K, and V?

**Q23.** What is layer normalization? How does it differ from batch normalization?

**Q24.** You're training a deep network and the loss explodes on step 3. What do you check first?

### Deep Learning Scoring

| Questions You Could Answer Confidently | Start Here |
|----------------------------------------|------------|
| 0–2 | Phase 2, Module 1 (Neural Networks from Scratch) |
| 3–4 | Phase 2, Module 2 (Deep Learning Architectures) |
| 5–6 | Phase 3 — you know deep learning |

---

## Part 5: LLMs & Production

**Q25.** What is the difference between encoder-only, decoder-only, and encoder-decoder Transformers? Give an example of each.

**Q26.** What is LoRA? Why is it more efficient than full fine-tuning?

**Q27.** What is retrieval-augmented generation and why is it useful?

**Q28.** What is quantization? What is the tradeoff between INT4 and FP16?

**Q29.** What is the KV cache? Why does it matter for inference throughput?

**Q30.** You deploy an LLM API and latency is too high. Name 3 things you try.

### LLMs & Production Scoring

| Questions You Could Answer Confidently | Start Here |
|----------------------------------------|------------|
| 0–2 | Phase 3, Module 1 |
| 3–4 | Phase 3, Module 3 (RAG & Prompting) |
| 5–6 | Phase 4 — you know the LLM stack |

---

## Your Starting Point

Use the table below with your lowest-scoring section:

| Lowest Score Section | Recommended Start |
|----------------------|-------------------|
| Math (0–2) | **Phase 0, Module 1** — start here, build the foundation |
| Python (0–2) | **Phase 0, Module 2** — if math is solid |
| ML (0–2) | **Phase 1, Module 1** — if Python and math are solid |
| Deep Learning (0–2) | **Phase 2, Module 1** — don't skip the from-scratch build |
| LLMs (0–2) | **Phase 3, Module 1** — read the Transformer paper first |
| All sections 5–6 | **Phase 4** — you're an ML practitioner; learn the systems layer |

---

## A Note on Honesty

The placement guide only works if you answer honestly. There is no shame in starting at Phase 0 with a software engineering background — it means you'll have the foundation for everything that comes after. There is no prize for starting at Phase 4 and discovering at Phase 6 that you have critical gaps.

The goal is not to start as far along as possible. The goal is to finish.

---

*[← Back to Main README](../README.md)*
