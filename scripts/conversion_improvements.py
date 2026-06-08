#!/usr/bin/env python3
"""
Conversion improvements:
  2. Add home reformer card to premium city GEAR arrays
  3. Add inline affiliate links to first product mention in blog body text
"""

import re, os

CITIES_BASE = "/home/user/pilatescollectiveclub/src/app/cities"
BLOG_BASE   = "/home/user/pilatescollectiveclub/src/app/blog"

# ── 2. Premium city reformer card ─────────────────────────────────────────────

PREMIUM_CITIES = [
    "london", "new-york", "paris", "zurich", "geneva", "lausanne",
    "tokyo", "singapore", "dubai", "hong-kong", "sydney", "melbourne",
    "barcelona", "amsterdam", "berlin", "stockholm", "copenhagen",
    "milan", "rome", "lisbon", "toronto", "san-francisco",
    "los-angeles", "miami", "boston", "seattle", "washington-dc",
]

REFORMER_GEAR_ITEM = """,
  {
    name: "Home Pilates Reformer",
    note: "A home reformer extends your studio practice — AeroPilates and Align entry models deliver a genuine full-body session.",
    price: "From $450",
    url: "https://www.amazon.com/s?k=home+pilates+reformer+aeropilates+align&tag=pilatescollective-20",
  },"""

def add_reformer_to_city(slug):
    path = f"{CITIES_BASE}/{slug}/page.tsx"
    if not os.path.exists(path):
        print(f"  SKIP (no file): {slug}")
        return

    with open(path) as f:
        content = f.read()

    if "Home Pilates Reformer" in content:
        print(f"  SKIP (already has reformer): {slug}")
        return

    # Find the closing of the GEAR array — the last item ends with },\n];
    # Pattern: last gear item closes with "},\n];"
    new_content = re.sub(
        r'(  \},\n\];\n\n\nconst RELATED_CITIES)',
        REFORMER_GEAR_ITEM + r'\n];\n\n\nconst RELATED_CITIES',
        content, count=1
    )

    if new_content == content:
        print(f"  UNCHANGED (pattern not matched): {slug}")
        return

    with open(path, "w") as f:
        f.write(new_content)
    print(f"  UPDATED city reformer: {slug}")


print("=== Adding reformer card to premium city pages ===")
for slug in PREMIUM_CITIES:
    add_reformer_to_city(slug)


# ── 3. Inline affiliate links in blog article body ────────────────────────────

# Products: (pattern, replacement_url, display_text)
# We use case-insensitive matching but preserve original casing via capture group
INLINE_PRODUCTS = [
    (
        r'\bfoam roller\b',
        "https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20",
        "foam roller",
    ),
    (
        r'\bmagic circle\b',
        "https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20",
        "magic circle",
    ),
    (
        r'\bgrip socks\b',
        "https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20",
        "grip socks",
    ),
    (
        r'\bresistance bands?\b',
        "https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20",
        None,  # None = preserve original text
    ),
    (
        r'\bPilates mat\b',
        "https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20",
        None,
    ),
    (
        r'\bankle weights?\b',
        "https://www.amazon.com/s?k=ankle+weights+pilates+fabric&tag=pilatescollective-20",
        None,
    ),
]

# Blog pages to process for inline links — editorial and informational articles
# (skip pure product pages — they already link everything)
INLINE_TARGET_SLUGS = [
    "pilates-vs-yoga",
    "pilates-for-back-pain",
    "pilates-for-athletes",
    "pilates-for-runners",
    "pilates-for-menopause",
    "pilates-for-scoliosis",
    "pilates-and-pregnancy",
    "pilates-vs-barre",
    "pilates-vs-gym",
    "lagree-vs-pilates",
    "pilates-reformer-vs-mat",
    "classical-vs-contemporary-pilates",
    "beginners-guide-to-reformer-pilates",
    "how-to-build-a-consistent-pilates-practice",
    "is-reformer-pilates-worth-it",
    "how-much-does-a-pilates-reformer-cost",
    "home-pilates-studio-setup",
    "pilates-exercises-for-beginners",
    "how-often-should-you-do-pilates",
    "pilates-for-posture",
    "pilates-for-weight-loss",
    "pilates-for-flat-stomach",
    "pilates-for-seniors",
    "pilates-for-pelvic-floor",
    "pilates-history",
    "pilates-apparatus-guide",
    "6-core-principles-of-pilates-explained",
    "pilates-reformer-with-tower",
    "club-pilates-review",
    "what-to-wear-to-pilates",
]

def make_inline_link(url, text):
    return f'<a href="{url}" target="_blank" rel="noopener noreferrer sponsored" style={{{{ color: "#8b4a31", textDecoration: "underline" }}}}>{text}</a>'

def add_inline_links_to_page(slug):
    path = f"{BLOG_BASE}/{slug}/page.tsx"
    if not os.path.exists(path):
        print(f"  SKIP (no file): {slug}")
        return

    with open(path) as f:
        content = f.read()

    original = content
    changes = 0

    for pattern, url, display in INLINE_PRODUCTS:
        # Only replace the FIRST occurrence that is:
        # - inside a JSX text context (between > and <)
        # - NOT already inside an <a href=
        # Strategy: find first match that is NOT preceded by href=" on same line
        # and NOT inside an existing <a tag

        # Skip if this product is already linked on this page
        if url in content:
            continue

        # Find first occurrence not inside an existing anchor
        # We replace inside p tag text content: look for >{text_containing_product}<
        # Use a safe approach: find in string, check context
        flags = re.IGNORECASE if display else 0  # preserve case if display=None

        match = re.search(pattern, content, re.IGNORECASE)
        if not match:
            continue

        pos = match.start()
        # Check it's not inside an existing href or <a tag
        # Look backward 200 chars for <a or href=
        context_before = content[max(0, pos-300):pos]
        # If there's an unclosed <a tag before this position, skip
        a_opens = context_before.count('<a ')
        a_closes = context_before.count('</a>')
        if a_opens > a_closes:
            continue  # inside an existing anchor

        # Check it's in JSX text (between > and <), not in a prop
        # Look at the chars immediately before for a quote " or prop context
        nearby = content[max(0, pos-20):pos]
        if '"' in nearby or "'" in nearby or '{' in nearby:
            # Might be inside a prop — be conservative, skip
            # But &apos; is common in JSX text, allow it
            if nearby.rstrip().endswith(('="', "='", '`', '{')):
                continue

        matched_text = match.group(0)
        link_text = display if display else matched_text
        link = make_inline_link(url, link_text)

        # Replace only this first occurrence
        content = content[:pos] + link + content[pos + len(matched_text):]
        changes += 1

    if changes > 0 and content != original:
        with open(path, "w") as f:
            f.write(content)
        print(f"  UPDATED inline ({changes} links): {slug}")
    else:
        print(f"  UNCHANGED: {slug}")


print("\n=== Adding inline product links to blog pages ===")
for slug in INLINE_TARGET_SLUGS:
    add_inline_links_to_page(slug)

print("\nDone.")
