#!/usr/bin/env python3
"""
Extracts Python code blocks from lesson files and runs them to verify they execute
without errors. Blocks tagged with ```python are tested; blocks tagged with
```python skip or containing '# skip-test' are excluded.
"""

import re
import subprocess
import sys
import tempfile
from pathlib import Path

CURRICULUM_ROOT = Path(__file__).parent.parent / "curriculum"
CODE_BLOCK_PATTERN = re.compile(r"```python\n(.*?)```", re.DOTALL)
SKIP_MARKERS = ("# skip-test", "# TODO", "your_function()", "pass  # implement")


def should_skip(code: str) -> bool:
    return any(marker in code for marker in SKIP_MARKERS)


def test_code_block(code: str, source_file: Path, block_num: int) -> bool:
    if should_skip(code):
        return True

    with tempfile.NamedTemporaryFile(suffix=".py", mode="w", delete=False) as f:
        f.write(code)
        tmp_path = f.name

    result = subprocess.run(
        [sys.executable, tmp_path],
        capture_output=True,
        text=True,
        timeout=30,
    )

    if result.returncode != 0:
        rel = source_file.relative_to(CURRICULUM_ROOT.parent)
        print(f"\n❌ {rel} — block {block_num}")
        print(f"   Error: {result.stderr.strip()[:300]}")
        return False

    return True


def main() -> int:
    lesson_files = list(CURRICULUM_ROOT.rglob("lessons/*.md"))
    total_blocks = 0
    failed_blocks = 0

    for lesson in sorted(lesson_files):
        content = lesson.read_text(encoding="utf-8")
        blocks = CODE_BLOCK_PATTERN.findall(content)

        for i, code in enumerate(blocks, 1):
            total_blocks += 1
            success = test_code_block(code, lesson, i)
            if not success:
                failed_blocks += 1

    print(f"\n{'='*60}")
    print(
        f"Code blocks tested: {total_blocks} | "
        f"Passed: {total_blocks - failed_blocks} | Failed: {failed_blocks}"
    )

    if failed_blocks:
        return 1

    print("All code examples executed successfully. ✅")
    return 0


if __name__ == "__main__":
    sys.exit(main())
