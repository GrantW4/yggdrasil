#!/usr/bin/env python3
"""
Validates quiz files in curriculum/ quizzes/ directories.

Each quiz must contain:
  - At least 5 questions (## Q or **Q patterns)
  - An answer key (<details> block)
  - A passing score declaration
"""

import re
import sys
from pathlib import Path

CURRICULUM_ROOT = Path(__file__).parent.parent / "curriculum"

QUESTION_PATTERN = re.compile(r"^\*\*Q\d+", re.MULTILINE)
ANSWER_KEY_MARKER = "<details>"
PASSING_SCORE_PATTERN = re.compile(r"passing score|80%", re.IGNORECASE)

MIN_QUESTIONS = 5


def validate_quiz(path: Path) -> list[str]:
    errors = []
    content = path.read_text(encoding="utf-8")

    questions = QUESTION_PATTERN.findall(content)
    if len(questions) < MIN_QUESTIONS:
        errors.append(
            f"Too few questions: found {len(questions)}, need {MIN_QUESTIONS}"
        )

    if ANSWER_KEY_MARKER not in content:
        errors.append("Missing answer key (<details> block)")

    if not PASSING_SCORE_PATTERN.search(content):
        errors.append("Missing passing score declaration (e.g. '80%')")

    return errors


def main() -> int:
    quiz_files = list(CURRICULUM_ROOT.rglob("quizzes/*.md"))

    if not quiz_files:
        print("No quiz files found — nothing to validate.")
        return 0

    failed = 0
    for quiz in sorted(quiz_files):
        errors = validate_quiz(quiz)
        if errors:
            failed += 1
            rel = quiz.relative_to(CURRICULUM_ROOT.parent)
            print(f"\n❌ {rel}")
            for err in errors:
                print(f"   • {err}")

    total = len(quiz_files)
    passed = total - failed
    print(f"\n{'='*60}")
    print(f"Quizzes validated: {total} | Passed: {passed} | Failed: {failed}")

    if failed:
        return 1

    print("All quizzes passed validation. ✅")
    return 0


if __name__ == "__main__":
    sys.exit(main())
