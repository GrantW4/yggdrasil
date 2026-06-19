# Phase 0: Roots — The Foundation

> "In mathematics you don't understand things. You just get used to them." — John von Neumann (and then eventually you understand them)

Before you train a single model, you need to understand what training actually means mathematically. Before you write a NumPy line, you need to write Python that makes you comfortable. Phase 0 is not optional. It is not a prerequisite to skip. It is the ground your entire career will stand on.

**Estimated time:** 10–14 weeks at 10–15 hours/week  
**Difficulty:** Beginner to Intermediate  
**Prerequisites:** None — this is the beginning

---

## What You'll Be Able to Do After Phase 0

- Read and understand the math notation in any ML paper
- Implement gradient descent from scratch using only pen and paper, then verify it with NumPy
- Write clean, idiomatic Python code and use the scientific Python ecosystem fluently
- Explain why a neural network works in terms of linear transformations and optimization
- Reason about algorithmic complexity and data structure trade-offs

---

## Modules

### Module 1: Math for AI
**[→ Enter Module](01-math-for-ai/README.md)**

The four mathematical pillars of machine learning: linear algebra (the language of data), calculus (the engine of learning), probability (the language of uncertainty), and statistics (the language of inference).

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Vectors and Spaces](01-math-for-ai/lessons/01-vectors-and-spaces.md) | Vector operations, dot products, norms, vector spaces | 3–4h |
| 2 | [Matrices and Linear Transformations](01-math-for-ai/lessons/02-matrices-and-transforms.md) | Matrix multiplication, rank, null space, invertibility | 4–5h |
| 3 | [Eigenvalues and Decompositions](01-math-for-ai/lessons/03-eigenvalues-decompositions.md) | Eigendecomposition, SVD, PCA from scratch | 4–5h |
| 4 | [Differential Calculus](01-math-for-ai/lessons/04-differential-calculus.md) | Derivatives, partial derivatives, the chain rule | 3–4h |
| 5 | [Gradient Descent](01-math-for-ai/lessons/05-gradient-descent.md) | Gradients, optimization landscapes, learning rates | 4–5h |
| 6 | [Probability Fundamentals](01-math-for-ai/lessons/06-probability-fundamentals.md) | Sample spaces, conditional probability, Bayes' theorem | 3–4h |
| 7 | [Common Distributions](01-math-for-ai/lessons/07-probability-distributions.md) | Gaussian, Bernoulli, multinomial, and why they matter | 3–4h |
| 8 | [Statistical Inference](01-math-for-ai/lessons/08-statistical-inference.md) | MLE, MAP, confidence intervals, hypothesis testing | 4–5h |

**Module Project:** Implement PCA from scratch using only NumPy and apply it to a real dataset.

---

### Module 2: Python for AI
**[→ Enter Module](02-python-for-ai/README.md)**

Fluent Python is non-negotiable. You will use it every day. This module gets you from "I can write Python" to "I think in Python."

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Python Fundamentals](02-python-for-ai/lessons/01-python-fundamentals.md) | Types, control flow, functions, comprehensions, generators | 3–4h |
| 2 | [Object-Oriented Python](02-python-for-ai/lessons/02-oop-python.md) | Classes, inheritance, dunder methods, dataclasses | 3–4h |
| 3 | [Pythonic Python](02-python-for-ai/lessons/03-pythonic-python.md) | Decorators, context managers, itertools, functools | 3–4h |
| 4 | [NumPy Mastery](02-python-for-ai/lessons/04-numpy-mastery.md) | Arrays, broadcasting, vectorization, memory layout | 4–5h |
| 5 | [Pandas for Data](02-python-for-ai/lessons/05-pandas-for-data.md) | DataFrames, groupby, merge, time series, I/O | 4–5h |
| 6 | [Matplotlib & Visualization](02-python-for-ai/lessons/06-visualization.md) | Plotting, subplots, animations, seaborn | 2–3h |
| 7 | [Python Performance](02-python-for-ai/lessons/07-python-performance.md) | Profiling, Numba, multiprocessing, async | 3–4h |

**Module Project:** Build a data analysis pipeline that loads, cleans, analyzes, and visualizes a real-world dataset end-to-end.

---

### Module 3: CS Fundamentals
**[→ Enter Module](03-cs-fundamentals/README.md)**

AI engineers who understand their hardware and algorithms write better code. This module gives you the computer science foundation that separates ML engineers from ML practitioners.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Big-O and Algorithm Analysis](03-cs-fundamentals/lessons/01-complexity-analysis.md) | Time/space complexity, amortized analysis, common patterns | 3–4h |
| 2 | [Data Structures](03-cs-fundamentals/lessons/02-data-structures.md) | Arrays, hash tables, trees, graphs — when to use what | 4–5h |
| 3 | [Sorting & Searching](03-cs-fundamentals/lessons/03-sorting-searching.md) | Classic algorithms, their complexity, and real-world relevance | 2–3h |
| 4 | [Computer Architecture](03-cs-fundamentals/lessons/04-computer-architecture.md) | CPU, memory hierarchy, cache, SIMD — why it matters for ML | 3–4h |
| 5 | [GPU Architecture](03-cs-fundamentals/lessons/05-gpu-architecture.md) | CUDA model, SIMT, memory hierarchy, roofline model | 4–5h |
| 6 | [Databases for AI](03-cs-fundamentals/lessons/06-databases-for-ai.md) | SQL, vector databases, columnar storage, DuckDB | 3–4h |
| 7 | [Networking Basics](03-cs-fundamentals/lessons/07-networking-basics.md) | TCP/IP, HTTP, gRPC — for serving and distributed training | 2–3h |

**Module Project:** Implement a vector similarity search engine from scratch, then benchmark it against a brute-force baseline.

---

## Phase 0 Capstone

Before moving to Phase 1, complete the **Phase 0 Capstone:**

> **Build a linear regression model from scratch** — no scikit-learn, no PyTorch. Using only NumPy and your Phase 0 knowledge, implement gradient descent, train on a real dataset, visualize the loss curve, and write a short report explaining every mathematical step.

This project demonstrates that you understand what machine learning actually *is* before you use tools that abstract it away.

[→ Capstone Instructions](../../templates/phase-capstone-template.md)

---

## Resources

### Books
- [Mathematics for Machine Learning](https://mml-book.github.io/) — Deisenroth, Faisal, Ong (free PDF)
- [Python Crash Course](https://nostarch.com/python-crash-course-3rd-edition) — Matthes
- [Fluent Python](https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/) — Ramalho

### Interactive
- [3Blue1Brown: Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) — visual intuition first
- [Khan Academy: Statistics & Probability](https://www.khanacademy.org/math/statistics-probability) — solid fundamentals
- [Python Tutor](https://pythontutor.com/) — visualize code execution

### Practice
- [Exercism Python Track](https://exercism.org/tracks/python)
- [LeetCode Easy Problems](https://leetcode.com/problemset/all/?difficulty=EASY) — 30 problems minimum

---

## Phase 0 Completion Checklist

- [ ] All 19 lessons completed with notes
- [ ] All 3 module projects built and committed to your portfolio repo
- [ ] Phase 0 Capstone submitted
- [ ] All quizzes passed with 80%+ score
- [ ] Linear regression implemented from scratch (capstone)

**When you've checked all boxes:** [→ Proceed to Phase 1: The Trunk](../phase-1-trunk/README.md)

---

<div align="center">

*Every expert was once at this exact starting line.*

**[Begin Lesson 1: Vectors and Spaces →](01-math-for-ai/lessons/01-vectors-and-spaces.md)**

</div>
