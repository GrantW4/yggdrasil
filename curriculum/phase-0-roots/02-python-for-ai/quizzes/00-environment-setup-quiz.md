# Quiz: Setting Up Your Environment

**Phase:** 0 — Roots | **Module:** Python for AI  
**Passing Score:** 80% (8 of 10 questions)  
**Time Limit:** 15 minutes (honor system)

*Answer all questions before checking answers. Close any references first.*

---

## Section 1: Conceptual Understanding
*(3 points each)*

**Q1.** What is the primary purpose of a Python virtual environment?

a) To make Python run faster by isolating it from the OS  
b) To create an isolated Python installation where packages don't conflict with other projects  
c) To allow multiple Python scripts to run in parallel  
d) To provide a sandboxed environment for running untrusted code safely  

---

**Q2.** You have two projects: Project A requires `numpy==1.24` and Project B requires `numpy==2.0`. They can't both be installed at the system level simultaneously. What is the correct solution?

a) Install `numpy==1.24` globally and pin Project B to use that version  
b) Create a separate virtual environment for each project  
c) Use `pip install --user` to isolate the installations  
d) Uninstall and reinstall numpy each time you switch projects  

---

**Q3.** After creating a virtual environment with `python -m venv myenv`, you open a new terminal window. Which of the following is true?

a) The environment is still active — it persists between terminal sessions  
b) The environment must be activated again before you can use it  
c) The environment was destroyed when you closed the terminal  
d) The environment is automatically activated if you `cd` into its directory  

---

**Q4.** Why does the version of PyTorch you install need to match your CUDA version?

a) It doesn't — PyTorch automatically detects and uses the available CUDA version  
b) PyTorch ships different compiled binaries for different CUDA versions; the wrong match causes import failures or GPU not found  
c) It only matters for training, not for inference  
d) Only the CUDA *minor* version needs to match, not the major version  

---

## Section 2: Applied Understanding
*(4 points each)*

**Q5.** A colleague sends you their project. They included a `requirements.txt` file. What is the correct procedure to set up their environment?

a) `pip install requirements.txt`  
b) Create a new virtual environment, activate it, then `pip install -r requirements.txt`  
c) Copy their `venv/` folder from their machine to yours  
d) Install everything globally with `pip install -r requirements.txt` without creating an environment  

---

**Q6.** You run the following and get an error:

```bash
$ python verify_env.py
ModuleNotFoundError: No module named 'numpy'
```

But you're certain you installed numpy. What is the most likely cause?

a) numpy is corrupted and needs to be reinstalled  
b) The Python version on your system doesn't support numpy  
c) You installed numpy while a different virtual environment was active (or no environment was active)  
d) You need to add numpy to your PATH environment variable  

---

**Q7.** What does `pip freeze > requirements.txt` do, and why is it useful?

a) It lists all packages that need to be updated and saves them to a file  
b) It saves a snapshot of all currently installed packages and their exact versions, making the environment reproducible  
c) It clears the pip cache and saves the output to a file  
d) It generates a requirements file from your import statements  

---

## Section 3: Implementation
*(5 points each)*

**Q8.** Which command installs PyTorch with **CPU-only** support (no GPU)?

a) `pip install torch`  
b) `pip install torch --cpu-only`  
c) `pip install torch --index-url https://download.pytorch.org/whl/cpu`  
d) `pip install torch-cpu`  

---

**Q9.** You run `python -c "import torch; print(torch.cuda.is_available())"` and it prints `False`. You have an NVIDIA GPU. What are two possible causes?

*(Write your answer before checking)*

---

**Q10.** You are setting up a new machine and want to recreate a colleague's environment exactly. They gave you their `requirements.txt`. Which sequence of commands is correct?

a)
```bash
pip install -r requirements.txt
python -m venv myenv
source myenv/bin/activate
```

b)
```bash
python -m venv myenv
pip install -r requirements.txt
source myenv/bin/activate
```

c)
```bash
python -m venv myenv
source myenv/bin/activate
pip install -r requirements.txt
```

d)
```bash
source myenv/bin/activate
python -m venv myenv
pip install -r requirements.txt
```

---

---

## Answer Key

*Do not look until you have answered all questions.*

<details>
<summary>Click to reveal answers</summary>

| Question | Answer | Explanation |
|----------|--------|-------------|
| Q1 | b | A virtual environment is specifically about package isolation between projects — not performance, parallelism, or security sandboxing. |
| Q2 | b | Separate virtual environments are the correct tool for conflicting version requirements. `--user` installs to a user-level location but doesn't solve version conflicts between projects. |
| Q3 | b | Environment activation is shell-session-specific. A new terminal starts with no active environment. |
| Q4 | b | PyTorch ships pre-compiled binaries that link against specific CUDA versions. Mismatching causes CUDA not found, wrong device errors, or silent performance issues. |
| Q5 | b | Always create and activate a fresh virtual environment before installing from a requirements file. Installing globally defeats the purpose and may cause conflicts. |
| Q6 | c | The most common cause is installing packages in the wrong environment (or no environment). The numpy installed globally or in a different venv is invisible to the currently active one. |
| Q7 | b | `pip freeze` outputs all installed packages with pinned versions. Saving this to `requirements.txt` lets anyone reproduce the exact environment. |
| Q8 | c | The `--index-url` flag tells pip which PyTorch package index to use. The CPU wheel URL produces a CPU-only build. Plain `pip install torch` actually does install CPU by default on most platforms, but `--index-url` makes it explicit and reliable. |
| Q9 | *See below* | Two possible causes; see model answer. |
| Q10 | c | Must: (1) create the venv, (2) activate it, (3) install. Order matters — activation must happen before installation. |

**Q9 Model Answer:**

Two likely causes when `torch.cuda.is_available()` returns `False` despite having an NVIDIA GPU:

1. **Wrong PyTorch build installed:** You installed the CPU-only version (`--index-url https://download.pytorch.org/whl/cpu`). CUDA support is not included. Fix: reinstall with the matching CUDA wheel URL.

2. **CUDA driver not installed or version mismatch:** PyTorch requires the NVIDIA CUDA driver (not just the GPU). Run `nvidia-smi` — if this command fails, your NVIDIA driver isn't installed. If it succeeds, check that the CUDA version shown by `nvidia-smi` matches the CUDA version of the PyTorch wheel you installed.

Other possible causes: virtual environment doesn't have CUDA-enabled PyTorch (but system Python does), or running in a VM without GPU passthrough.

</details>

---

## Scoring

| Score | What It Means |
|-------|---------------|
| 90–100% | Environment mastered — ready for Python Fundamentals |
| 80–89% | Good — review any missed questions, then proceed |
| 70–79% | Re-read the implementation section and retry |
| Below 70% | Re-read the full lesson before retaking |

---

*[← Back to Lesson](../lessons/00-setting-up-your-environment.md) | [Next Lesson: Python Fundamentals →](../lessons/01-python-fundamentals.md)*
