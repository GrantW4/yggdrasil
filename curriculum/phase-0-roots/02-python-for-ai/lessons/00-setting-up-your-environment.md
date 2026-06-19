# Lesson 0: Setting Up Your Environment

**Phase:** 0 — Roots | **Module:** Python for AI | **Lesson:** 0 of 7  
**Estimated Time:** 1–2 hours  
**Difficulty:** Beginner

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Install and manage Python environments using `conda` or `venv` so your projects never conflict with each other
2. Set up a Yggdrasil-specific Python environment with all core dependencies installed and verified
3. Run and interact with Jupyter notebooks for exploratory work
4. Verify your GPU is accessible to PyTorch (if applicable)
5. Understand *why* environment management matters, and what breaks when you skip it

---

## Prerequisites

- A computer (Windows 10+, macOS 12+, or Ubuntu 20.04+)
- Admin/sudo access
- ~5GB of free disk space
- No prior Python installation required — we'll handle everything

---

## Background: The "Why"

Before writing a single line of machine learning code, you need a stable, reproducible environment to write it in.

Here's what happens without one: you install a library for Project A. Six months later, Project B needs a different version of the same library. You upgrade it. Project A breaks. You spend an afternoon debugging something that has nothing to do with machine learning.

This is not a hypothetical. It happens to every engineer who doesn't manage their environments. The fix is simple, and it saves you hundreds of hours over a career.

The second reason this matters for AI specifically: ML code is uniquely sensitive to library versions. The difference between PyTorch 2.0 and 2.1 can be a model that trains correctly and one that silently produces wrong results. CUDA versions interact with PyTorch versions interact with your driver. If you can't reproduce your environment exactly, you can't reproduce your experiments — and experiments you can't reproduce are not science.

**The rule:** one project, one environment. Always.

---

## Core Concepts

### Python Version Management

Python itself has versions (3.9, 3.10, 3.11, 3.12...). Libraries declare which Python versions they support. AI/ML libraries tend to lag slightly — at the time of writing, Python 3.11 has the best ecosystem support across PyTorch, Hugging Face, and the rest of the stack.

**Use Python 3.11** throughout this curriculum unless a specific lesson says otherwise.

### Virtual Environments

A virtual environment is an isolated Python installation. When you activate one:
- `python` points to that environment's Python interpreter
- `pip install` installs into that environment only
- Nothing you install affects any other environment or your system Python

Python ships with `venv` for creating these. Conda provides an alternative that also manages non-Python packages (like CUDA libraries).

### Package Managers

| Tool | What It Does | Use When |
|------|-------------|----------|
| `pip` | Installs Python packages from PyPI | Always — the standard |
| `conda` | Manages Python environments + non-Python deps | When you need CUDA or complex native deps |
| `mamba` | Faster conda (drop-in replacement) | Same as conda but faster |

For most of Yggdrasil, `pip` + `venv` is sufficient. When we reach GPU training in Phase 2+, we'll revisit `conda` for CUDA.

---

## Implementation

### Step 1: Install Python 3.11

**Windows:**
```bash
# Download from python.org and install, OR use winget:
winget install Python.Python.3.11
```

**macOS:**
```bash
# Using Homebrew (recommended):
brew install python@3.11
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install python3.11 python3.11-venv python3.11-pip
```

Verify:
```bash
python3.11 --version
# Expected: Python 3.11.x
```

---

### Step 2: Create Your Yggdrasil Environment

We'll create one environment for all of Phase 0, and expand it as we move into later phases.

```bash
# Create the environment
python3.11 -m venv ~/envs/yggdrasil

# Activate it — you'll do this every session
# On macOS/Linux:
source ~/envs/yggdrasil/bin/activate

# On Windows (PowerShell):
~/envs/yggdrasil/Scripts/Activate.ps1

# On Windows (Command Prompt):
~/envs/yggdrasil/Scripts/activate.bat
```

When activated, your terminal prompt will show `(yggdrasil)` at the start. This is how you know you're in the right environment.

```bash
# Verify you're using the right Python
which python      # macOS/Linux
where python      # Windows
# Should show a path inside ~/envs/yggdrasil/
```

---

### Step 3: Install Phase 0 Dependencies

```bash
# Upgrade pip first — always do this
pip install --upgrade pip

# Core scientific Python stack
pip install numpy pandas matplotlib seaborn

# Jupyter for interactive work
pip install jupyterlab notebook ipywidgets

# Utility libraries
pip install tqdm rich

# Development tools
pip install pytest black isort

# Verify everything installed
python -c "import numpy, pandas, matplotlib; print('Phase 0 stack: OK')"
```

Expected output:
```
Phase 0 stack: OK
```

---

### Step 4: Install PyTorch (CPU version for Phase 0)

We don't need GPU support yet. Installing the CPU version now avoids a 2GB download.

```bash
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
```

Verify:
```python
import torch
print(f"PyTorch version: {torch.__version__}")
print(f"CUDA available: {torch.cuda.is_available()}")
# Expected for CPU install: CUDA available: False
```

---

### Step 5: Set Up Jupyter

```bash
# Start JupyterLab
jupyter lab
```

This opens a browser tab at `http://localhost:8888`. If it doesn't open automatically, copy the URL from your terminal.

Create a new notebook and run:

```python
import sys
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

print(f"Python: {sys.version}")
print(f"NumPy: {np.__version__}")
print(f"Pandas: {pd.__version__}")

# Quick sanity check — if this runs without error, you're good
x = np.linspace(0, 2 * np.pi, 100)
plt.plot(x, np.sin(x))
plt.title("Sanity check: sin(x)")
plt.show()
```

If you see a sine wave plot: you're set up correctly.

---

### Step 6: (Optional) GPU Setup

If you have an NVIDIA GPU and want to use it from Phase 2 onwards, you can set it up now or when you reach Phase 2. It requires matching your CUDA driver version to a specific PyTorch build.

```bash
# Check your CUDA version (if you have an NVIDIA GPU)
nvidia-smi
# Look for "CUDA Version" in the top-right corner

# Then install the matching PyTorch build from pytorch.org
# Example for CUDA 12.1:
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

Verify GPU is accessible:
```python
import torch
print(torch.cuda.is_available())      # True if GPU is set up
print(torch.cuda.device_count())      # Number of GPUs
print(torch.cuda.get_device_name(0)) # e.g. "NVIDIA GeForce RTX 3080"
```

You do not need a GPU for Phases 0–1. Phase 2 onwards benefits significantly from one. Cloud GPU options (Google Colab, Vast.ai, Lambda Labs) are covered in the Phase 2 setup guide.

---

### Step 7: Save Your Environment

Save a reproducible spec of your environment so you can recreate it exactly:

```bash
pip freeze > requirements.txt
```

Check it into your portfolio repo. Anyone who runs `pip install -r requirements.txt` in the same Python environment will get an identical setup.

---

## Exercises

### Exercise 1: Environment Verification Script
*15 minutes*

Write a Python script `verify_env.py` that:
1. Checks all required packages are importable
2. Prints the version of each
3. Exits with code 0 if everything is OK, code 1 if anything is missing

```python
# verify_env.py
# TODO: complete this script

REQUIRED = {
    "numpy": "1.24",
    "pandas": "2.0",
    "matplotlib": "3.7",
    "torch": "2.0",
}

def check_packages():
    # TODO: for each package in REQUIRED, try importing it
    # and check that the installed version meets the minimum
    pass

if __name__ == "__main__":
    check_packages()
```

Run it with `python verify_env.py`. Fix any issues it finds.

---

### Exercise 2: Conda Alternative
*20 minutes*

If you have Conda installed (or want to install it), create the same environment using Conda instead of venv:

```bash
# Create a conda environment
conda create -n yggdrasil-conda python=3.11
conda activate yggdrasil-conda

# Install packages — note: some use conda channel, some pip
conda install numpy pandas matplotlib seaborn jupyter
pip install torch --index-url https://download.pytorch.org/whl/cpu
```

Compare the two approaches. Which feels faster? Which would you use for a project that needs CUDA?

Write 3 sentences in your notes explaining when you'd use venv vs. conda.

---

### Exercise 3: Makefile for Reproducibility
*Challenge — 30 minutes*

Create a `Makefile` in your portfolio repo with these targets:

```makefile
.PHONY: env install verify clean

env:
    # TODO: create the venv if it doesn't exist

install:
    # TODO: pip install -r requirements.txt

verify:
    # TODO: run verify_env.py

clean:
    # TODO: remove the venv
```

This is a professional-level reproducibility practice. Many real ML teams use Makefiles to standardize project setup across contributors.

---

## Common Mistakes

**Mistake 1: Running `pip install` without activating your environment**
```bash
# WRONG — installs to your system Python
pip install numpy

# CORRECT — activate first, then install
source ~/envs/yggdrasil/bin/activate
pip install numpy
```
Symptoms: `import numpy` fails inside the environment, or you install packages globally and pollute your system Python.

---

**Mistake 2: Forgetting to activate the environment in a new terminal session**

Your environment activation doesn't persist between terminal sessions. Every time you open a new terminal, you must activate:
```bash
source ~/envs/yggdrasil/bin/activate  # macOS/Linux
# or
~/envs/yggdrasil/Scripts/Activate.ps1  # Windows
```

Consider adding an alias to your shell config (`~/.bashrc`, `~/.zshrc`):
```bash
alias ygg='source ~/envs/yggdrasil/bin/activate'
```

---

**Mistake 3: Installing CUDA PyTorch when you meant CPU (or vice versa)**

The PyTorch `--index-url` flag selects the CUDA version. `cpu` means no GPU support. `cu121` means CUDA 12.1. Get this wrong and either PyTorch won't find your GPU, or you'll download 2GB unnecessarily.

```bash
# CPU only (Phase 0-1)
pip install torch --index-url https://download.pytorch.org/whl/cpu

# CUDA 12.1 (Phase 2+ with NVIDIA GPU)
pip install torch --index-url https://download.pytorch.org/whl/cu121
```

---

**Mistake 4: Committing your `venv/` or `node_modules/` folder**

These should never be in version control — they're large, platform-specific, and reproducible from `requirements.txt`. Make sure `.gitignore` includes `venv/`, `.venv/`, `env/`, and `node_modules/`.

(The Yggdrasil `.gitignore` already covers this.)

---

## Connections

- **Next lesson** — [Python Fundamentals](01-python-fundamentals.md): now that your environment is set up, we'll learn Python itself
- **Phase 2** — when we start training neural networks, we'll revisit this lesson to add GPU support
- **Phase 4 (MLOps)** — Docker extends the idea of reproducible environments to entire machines; this lesson is the foundation

---

## Further Reading

- [Python Virtual Environments: A Primer](https://realpython.com/python-virtual-environments-a-primer/) — Real Python, thorough and clear
- [PyTorch Installation Guide](https://pytorch.org/get-started/locally/) — Official, always current
- [Conda vs pip vs venv](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/) — Jake VanderPlas's classic post on the differences

---

## Knowledge Check

Take the [quiz for this lesson](../quizzes/00-environment-setup-quiz.md) before moving on. Passing score: 80%.

---

*[Next Lesson: Python Fundamentals →](01-python-fundamentals.md)*
