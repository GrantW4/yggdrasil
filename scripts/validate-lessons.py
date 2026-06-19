#!/usr/bin/env python3
"""
Validates that every lesson file in curriculum/ follows the required structure.

Required sections (in any order):
  - ## Learning Objectives
  - ## Core Concepts
  - ## Implementation
  - ## Exercises
  - ## Knowledge Check

Exits with code 1 and prints a report if any lesson fails validation.
"""

import sys
from pathlib import Path

REQUIRED_SECTIONS = [
    "## Learning Objectives",
    "## Core Concepts",
    "## Implementation",
    "## Exercises",
    "## Knowledge Check",
]

CURRICULUM_ROOT = Path(__file__).parent.parent / "curriculum"


def validate_lesson(path: Path) -> list[str]:
    errors = []
    content = path.read_text(encoding="utf-8")

    for section in REQUIRED_SECTIONS:
        if section not in content:
            errors.append(f"Missing required section: '{section}'")

    if not content.startswith("# "):
        errors.append("File must start with a top-level heading (# Title)")

    if "## Learning Objectives" in content:
        obj_idx = content.index("## Learning Objectives")
        obj_block = content[obj_idx : obj_idx + 500]
        if "- " not in obj_block and "1. " not in obj_block:
            errors.append("Learning Objectives section must contain a list")

    return errors


def main() -> int:
    lesson_files = list(CURRICULUM_ROOT.rglob("lessons/*.md"))

    if not lesson_files:
        print("No lesson files found — nothing to validate.")
        return 0

    failed = 0
    for lesson in sorted(lesson_files):
        errors = validate_lesson(lesson)
        if errors:
            failed += 1
            rel = lesson.relative_to(CURRICULUM_ROOT.parent)
            print(f"\n❌ {rel}")
            for err in errors:
                print(f"   • {err}")

    total = len(lesson_files)
    passed = total - failed
    print(f"\n{'='*60}")
    print(f"Lessons validated: {total} | Passed: {passed} | Failed: {failed}")

    if failed:
        print("\nFix the issues above before merging.")
        return 1

    print("All lessons passed validation. ✅")
    return 0


if __name__ == "__main__":
    sys.exit(main())
