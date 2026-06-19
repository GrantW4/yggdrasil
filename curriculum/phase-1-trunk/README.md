# Phase 1: The Trunk — Classical Machine Learning

> "All models are wrong, but some are useful." — George Box

Phase 0 gave you tools. Phase 1 shows you what to build with them. Classical machine learning — from linear regression to gradient-boosted trees — is not legacy knowledge. It is the conceptual and practical foundation every AI engineer returns to, constantly. Deep learning practitioners who skip this phase spend years backfilling the intuition it would have given them.

**Estimated time:** 8–11 weeks at 10–15 hours/week  
**Difficulty:** Intermediate  
**Prerequisites:** [Phase 0: Roots](../phase-0-roots/README.md)

---

## What You'll Be Able to Do After Phase 1

- Implement any classical ML algorithm from scratch and explain every mathematical decision
- Choose the right algorithm for any supervised or unsupervised problem
- Diagnose model failures (overfitting, underfitting, data leakage) and fix them systematically
- Set up a rigorous evaluation framework that would hold up to peer review
- Outperform most ML practitioners in understanding *why* a model works or fails

---

## Modules

### Module 1: Supervised Learning
**[→ Enter Module](01-supervised-learning/README.md)**

The core: learning from labeled data. Every paradigm you'll use in production traces back to the ideas in this module.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Linear Regression](01-supervised-learning/lessons/01-linear-regression.md) | OLS, normal equations, gradient descent, regularization | 4–5h |
| 2 | [Logistic Regression](01-supervised-learning/lessons/02-logistic-regression.md) | Sigmoid, cross-entropy loss, multi-class, softmax | 3–4h |
| 3 | [Support Vector Machines](01-supervised-learning/lessons/03-svms.md) | Margin maximization, kernels, the kernel trick | 4–5h |
| 4 | [Decision Trees](01-supervised-learning/lessons/04-decision-trees.md) | Splitting criteria, entropy, Gini, pruning | 3–4h |
| 5 | [Ensemble Methods](01-supervised-learning/lessons/05-ensembles.md) | Bagging, random forests, boosting, XGBoost, LightGBM | 5–6h |
| 6 | [k-Nearest Neighbors](01-supervised-learning/lessons/06-knn.md) | Distance metrics, curse of dimensionality, approximate NN | 2–3h |
| 7 | [Naive Bayes](01-supervised-learning/lessons/07-naive-bayes.md) | Generative models, conditional independence, applications | 2–3h |

**Module Project:** Kaggle-style competition problem — build the best classifier for a tabular dataset using only classical ML, with full writeup.

---

### Module 2: Unsupervised Learning
**[→ Enter Module](02-unsupervised-learning/README.md)**

Learning structure from unlabeled data. More of real-world data looks like this than you think.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [k-Means Clustering](02-unsupervised-learning/lessons/01-kmeans.md) | Algorithm, initialization (k-means++), limitations, variants | 3–4h |
| 2 | [Hierarchical Clustering](02-unsupervised-learning/lessons/02-hierarchical.md) | Agglomerative, dendrograms, linkage criteria | 2–3h |
| 3 | [DBSCAN](02-unsupervised-learning/lessons/03-dbscan.md) | Density-based clustering, epsilon-neighborhoods, noise | 2–3h |
| 4 | [PCA Deep Dive](02-unsupervised-learning/lessons/04-pca-deep-dive.md) | Covariance, eigen-decomposition, explained variance, t-SNE | 4–5h |
| 5 | [Autoencoders](02-unsupervised-learning/lessons/05-autoencoders.md) | Encoder-decoder structure, bottleneck, denoising | 3–4h |
| 6 | [Embeddings](02-unsupervised-learning/lessons/06-embeddings.md) | Word2Vec, GloVe, dense representations, similarity search | 3–4h |

**Module Project:** Cluster a large unlabeled dataset, interpret the clusters, and build a visualization that communicates the structure to a non-technical audience.

---

### Module 3: Model Evaluation & Debugging
**[→ Enter Module](03-model-evaluation/README.md)**

The most underrated skill in ML. Models that perform beautifully in development and fail silently in production are the norm, not the exception. This module teaches you how to catch problems before they cost you.

| # | Lesson | Topics | Time |
|---|--------|---------|------|
| 1 | [Evaluation Metrics](03-model-evaluation/lessons/01-metrics.md) | Accuracy, precision, recall, F1, AUC-ROC, NDCG, custom | 3–4h |
| 2 | [Bias-Variance Tradeoff](03-model-evaluation/lessons/02-bias-variance.md) | Decomposition, diagnosis, regularization strategies | 3–4h |
| 3 | [Cross-Validation](03-model-evaluation/lessons/03-cross-validation.md) | k-fold, stratified, time-series CV, nested CV | 3–4h |
| 4 | [Hyperparameter Optimization](03-model-evaluation/lessons/04-hyperparameter-optimization.md) | Grid search, random search, Bayesian optimization, Optuna | 3–4h |
| 5 | [Data Leakage](03-model-evaluation/lessons/05-data-leakage.md) | Target leakage, train-test contamination, real-world case studies | 2–3h |
| 6 | [Debugging ML Models](03-model-evaluation/lessons/06-debugging.md) | Error analysis, learning curves, ablations, what to do when stuck | 4–5h |
| 7 | [Statistical Significance](03-model-evaluation/lessons/07-statistical-significance.md) | A/B testing, p-values, power analysis for ML comparisons | 2–3h |

**Module Project:** Take a "working" ML system that has subtle data leakage and evaluation flaws, diagnose all the problems, and rebuild it with correct methodology.

---

## Phase 1 Capstone

> **End-to-End ML Pipeline:** Starting from raw data (you choose the dataset and problem), build a complete supervised learning system: EDA, feature engineering, baseline model, hyperparameter search, final model, evaluation, and a short presentation-style writeup that a hiring manager could read.

This should take approximately 10–15 hours. It is the most realistic thing you will have built so far — and the closest thing to an actual ML interview take-home.

---

## Resources

### Books
- [The Elements of Statistical Learning](https://hastie.su.domains/ElemStatLearn/) — Hastie, Tibshirani, Friedman (free PDF, the bible of classical ML)
- [Pattern Recognition and Machine Learning](https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf) — Bishop (free PDF)
- [Hands-On Machine Learning](https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/) — Géron (best practical companion)

### Courses
- [Stanford CS229: Machine Learning](https://cs229.stanford.edu/) — Notes and problem sets, free
- [fast.ai Practical ML for Coders](https://course.fast.ai/) — Bottom-up, highly practical

### Practice
- [Kaggle Learn: Machine Learning](https://www.kaggle.com/learn/intro-to-machine-learning)
- [UCI ML Repository](https://archive.ics.uci.edu/) — Classic datasets for all the above algorithms

---

## Phase 1 Completion Checklist

- [ ] All 20 lessons completed with notes
- [ ] All 3 module projects built and committed to your portfolio repo
- [ ] Phase 1 Capstone completed and linked
- [ ] All quizzes passed with 80%+ score
- [ ] Implemented at least 3 algorithms from scratch (recommended: logistic regression, decision tree, k-means)

**When you've checked all boxes:** [→ Proceed to Phase 2: First Branches](../phase-2-first-branches/README.md)
