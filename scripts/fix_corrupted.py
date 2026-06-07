#!/usr/bin/env python3
"""Fix regex-corrupted lines from the previous metadata update."""

import re
import os

BASE = "/home/user/pilatescollectiveclub/src/app"

# Blog titles that got corrupted (the new title contained an apostrophe)
BLOG_TITLE_FIXES = {
    "beginners-guide-to-reformer-pilates": "Beginner's Guide to Reformer Pilates (2026): Everything to Know | Pilates Collective Club",
    "classical-vs-contemporary-pilates": "Classical vs Contemporary Pilates (2026): Key Differences | Pilates Collective Club",
    "gratz-pilates": "Gratz Pilates Equipment Review (2026): Classical Standard | Pilates Collective Club",
    "lagree-vs-pilates": "Lagree vs Pilates (2026): Key Differences Explained | Pilates Collective Club",
}

# City OG descriptions that got corrupted (old value had apostrophe)
CITY_OG_DESC_FIXES = {
    "amsterdam": "Five curated Pilates studios in Amsterdam — reformer, classical, and Lagree across the Jordaan, De Pijp, and Zuid.",
    "barcelona": "Five curated Pilates studios in Barcelona — reformer and classical picks from Eixample to Gràcia. Verified June 2026.",
    "berlin": "Five curated Pilates studios in Berlin — reformer picks from Mitte to Prenzlauer Berg. Verified June 2026.",
    "chicago": "Six curated Pilates studios in Chicago — Lincoln Park reformer boutiques to River North classical practices. Verified 2026.",
    "dubai": "Five curated Pilates studios in Dubai — DIFC, Jumeirah, and Marina reformer picks. Verified June 2026.",
    "hong-kong": "Five curated Pilates studios in Hong Kong — Central, Wan Chai, and Causeway Bay reformer picks. Verified 2026.",
    "lausanne": "Five curated Pilates studios in Lausanne — reformer and classical method picks from Ouchy to the city centre. Verified 2026.",
    "lisbon": "Five curated Pilates studios in Lisbon — Príncipe Real and Chiado reformer picks. Verified June 2026.",
    "london": "Five curated Pilates studios in London — Chelsea, Marylebone, and Shoreditch reformer picks. Verified June 2026.",
    "los-angeles": "Five curated Pilates studios in LA — West Hollywood, Santa Monica, and Brentwood reformer picks. Verified 2026.",
    "melbourne": "Five curated Pilates studios in Melbourne — South Yarra, Fitzroy, and St Kilda reformer picks. Verified 2026.",
    "miami": "Six curated Pilates studios in Miami — Brickell, South Beach, and Coconut Grove reformer picks. Verified 2026.",
    "new-york": "Five curated Pilates studios in New York — SoHo, Tribeca, and uptown reformer picks. Verified June 2026.",
    "singapore": "Five curated Pilates studios in Singapore — Orchard, Dempsey, and Tiong Bahru reformer picks. Verified June 2026.",
    "sydney": "Five curated Pilates studios in Sydney — Bondi, Surry Hills, and CBD reformer picks. Verified June 2026.",
    "tampa": "Six curated Pilates studios in Tampa — South Tampa and Hyde Park reformer boutiques. Verified 2026.",
    "tokyo": "Five curated Pilates studios in Tokyo — Omotesando, Ebisu, and Daikanyama reformer picks. Verified June 2026.",
    "toronto": "Five curated Pilates studios in Toronto — Yorkville, Leslieville, and Rosedale reformer picks. Verified 2026.",
}


def fix_line_with_corruption(content, pattern_prefix, correct_value):
    """Replace a corrupted field value. Looks for lines matching pattern_prefix followed by anything up to the next line break."""
    # Match: prefix "anything including corruption",
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith(pattern_prefix):
            # Replace entire value with correct one
            indent = line[:len(line) - len(stripped)]
            # Determine if it ends with , or not
            new_line = f'{indent}{pattern_prefix}"{correct_value}",'
            new_lines.append(new_line)
        else:
            new_lines.append(line)
    return '\n'.join(new_lines)


# Fix blog titles
for slug, correct_title in BLOG_TITLE_FIXES.items():
    path = f"{BASE}/blog/{slug}/page.tsx"
    with open(path) as f:
        content = f.read()

    # Fix the title line - it looks like: title: "NEW VALUE"leftover from old",
    fixed = re.sub(
        r'  title: ".*?"[^,\n]*",',
        f'  title: "{correct_title}",',
        content, count=1
    )

    if fixed != content:
        with open(path, 'w') as f:
            f.write(fixed)
        print(f"FIXED blog title: {slug}")
    else:
        print(f"UNCHANGED: {slug}")

# Fix city OG descriptions
for slug, correct_desc in CITY_OG_DESC_FIXES.items():
    path = f"{BASE}/cities/{slug}/page.tsx"
    with open(path) as f:
        content = f.read()

    # The corruption looks like: description: "NEW VALUE"leftover from old",
    # inside the openGraph block. We need to find the og description specifically.
    # Strategy: find openGraph block, then fix its description line

    # Fix corrupted description line: "SOMETHING"extra leftover",
    fixed = re.sub(
        r'(openGraph:\s*\{[^}]*?description:\s*)".*?"[^,\n]*",',
        lambda m: m.group(1) + f'"{correct_desc}",',
        content, count=1, flags=re.DOTALL
    )

    if fixed != content:
        with open(path, 'w') as f:
            f.write(fixed)
        print(f"FIXED city og_desc: {slug}")
    else:
        print(f"UNCHANGED: {slug}")

print("\nDone.")
