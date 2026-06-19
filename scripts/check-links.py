#!/usr/bin/env python3
"""
Checks internal markdown links in curriculum/ to ensure they resolve to real files.
Does not check external URLs (those are checked separately in CI).
"""

import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
LINK_PATTERN = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def is_internal(url: str) -> bool:
    return not url.startswith(("http://", "https://", "mailto:", "#"))


def resolve_link(source: Path, target: str) -> Path:
    target = target.split("#")[0]  # strip anchors
    if not target:
        return source
    if target.startswith("/"):
        return REPO_ROOT / target.lstrip("/")
    return (source.parent / target).resolve()


def check_file(path: Path) -> list[str]:
    errors = []
    content = path.read_text(encoding="utf-8")
    for _, url in LINK_PATTERN.findall(content):
        if not is_internal(url):
            continue
        resolved = resolve_link(path, url)
        if not resolved.exists():
            errors.append(f"Broken link: {url}")
    return errors


def main() -> int:
    md_files = list(REPO_ROOT.rglob("*.md"))
    md_files = [f for f in md_files if "node_modules" not in f.parts]

    failed = 0
    for md_file in sorted(md_files):
        errors = check_file(md_file)
        if errors:
            failed += 1
            rel = md_file.relative_to(REPO_ROOT)
            print(f"\n❌ {rel}")
            for err in errors:
                print(f"   • {err}")

    print(f"\n{'='*60}")
    if failed:
        print(f"Broken links found in {failed} file(s). Fix before merging.")
        return 1

    print(f"All internal links valid across {len(md_files)} files. ✅")
    return 0


if __name__ == "__main__":
    sys.exit(main())
