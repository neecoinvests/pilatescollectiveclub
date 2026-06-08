#!/usr/bin/env python3
"""Add affiliate gear sections to all blog pages that currently have zero Amazon links."""

import os
import re

BASE = "/home/user/pilatescollectiveclub/src/app/blog"

# Gear items library
GRIP_SOCKS    = ('Pilates Grip Socks', 'Required at every reformer studio. Full-toe grip socks prevent slipping on the carriage.', 'From $16', 'https://www.amazon.com/s?k=pilates+grip+socks+toesox&tag=pilatescollective-20')
MAT           = ('Pilates Mat (6mm)', 'A quality non-slip mat for mat class and home practice. Thicker than a standard yoga mat.', 'From $45', 'https://www.amazon.com/s?k=pilates+mat+6mm+non+slip&tag=pilatescollective-20')
MAGIC_CIRCLE  = ('Magic Circle', 'One of Pilates\' most versatile props — adds resistance to dozens of reformer and mat exercises.', 'From $24', 'https://www.amazon.com/s?k=pilates+magic+circle+resistance+ring&tag=pilatescollective-20')
BANDS         = ('Resistance Bands', 'Fabric loops extend your home practice and complement reformer spring work effectively.', 'From $22', 'https://www.amazon.com/s?k=fabric+resistance+bands+set+pilates&tag=pilatescollective-20')
FOAM_ROLLER   = ('Foam Roller', 'Essential for spinal mobility, fascial release, and warm-up before class.', 'From $28', 'https://www.amazon.com/s?k=high+density+foam+roller+pilates&tag=pilatescollective-20')
BUDGET_REF    = ('Budget Reformer (Under $1,000)', 'AeroPilates and Stamina models deliver a genuine full-body session without the studio price.', 'From $450', 'https://www.amazon.com/s?k=stamina+aeropilates+reformer+home+use&tag=pilatescollective-20')
MID_REF       = ('Mid-Range Reformer ($1,000–$2,000)', 'Align Pilates and Merrithew entry-level machines offer markedly better spring feel and stability.', 'From $999', 'https://www.amazon.com/s?k=align+pilates+reformer+home&tag=pilatescollective-20')
ANKLE_WEIGHTS = ('Ankle Weights', 'Fabric-covered ankle weights add progressive overload to leg circles and footwork sequences.', 'From $18', 'https://www.amazon.com/s?k=ankle+weights+pilates+fabric&tag=pilatescollective-20')
PILATES_BALL  = ('Pilates Over-Ball', 'Small inflatable ball used in dozens of core, hip, and shoulder exercises in mat and reformer classes.', 'From $14', 'https://www.amazon.com/s?k=pilates+over+ball+small+soft&tag=pilatescollective-20')
MAT_BAG       = ('Pilates Mat Bag', 'A dedicated mat carrier makes getting to class significantly easier — no awkward balancing.', 'From $22', 'https://www.amazon.com/s?k=pilates+yoga+mat+bag+carrier&tag=pilatescollective-20')
STARTER_KIT   = ('Pilates Starter Kit', 'Bundled kits including a mat, ring, and resistance bands — the fastest way to get everything at once.', 'From $35', 'https://www.amazon.com/s?k=pilates+starter+kit+mat+ring+bands&tag=pilatescollective-20')
WATER_BOTTLE  = ('Insulated Water Bottle', 'A quality insulated bottle keeps water cold through an intense 50-minute reformer session.', 'From $20', 'https://www.amazon.com/s?k=insulated+water+bottle+gym&tag=pilatescollective-20')
LEGGINGS      = ('Pilates Leggings', 'High-waist, opaque leggings purpose-built for reformer movement — the most important piece of kit.', 'From $28', 'https://www.amazon.com/s?k=high+waist+pilates+leggings+opaque&tag=pilatescollective-20')
SPORTS_BRA    = ('Sports Bra', 'Light-to-medium support bras are best for Pilates — enough hold without restricting thoracic movement.', 'From $25', 'https://www.amazon.com/s?k=light+support+sports+bra+pilates&tag=pilatescollective-20')
CARRY_BAG     = ('Gym Bag', 'A compact gym-to-studio bag that fits a mat, socks, a change of clothes, and a water bottle.', 'From $30', 'https://www.amazon.com/s?k=pilates+gym+bag+compact&tag=pilatescollective-20')

# Per-page gear config: (heading, subheading, [gear_items])
PAGE_GEAR = {
    "pilates-vs-yoga": (
        "Essential gear to get started with Pilates",
        "Whether you choose Pilates, yoga, or both — these are the basics every practitioner needs.",
        [GRIP_SOCKS, MAT, MAGIC_CIRCLE, FOAM_ROLLER, BANDS]
    ),
    "pilates-for-back-pain": (
        "Equipment that supports back pain recovery",
        "These tools are regularly used in physio-led Pilates programmes for lumbar and SI joint support.",
        [FOAM_ROLLER, MAT, MAGIC_CIRCLE, BANDS, PILATES_BALL]
    ),
    "beginners-guide-to-reformer-pilates": (
        "Everything you need before your first class",
        "A short checklist of what to bring — most studios sell socks, but buying in advance saves money.",
        [GRIP_SOCKS, MAT, MAGIC_CIRCLE, BANDS, STARTER_KIT]
    ),
    "is-reformer-pilates-worth-it": (
        "Start at home: reformers at every budget",
        "If studio costs are a barrier, a home reformer extends your practice between sessions or replaces them entirely.",
        [BUDGET_REF, MID_REF, MAT, GRIP_SOCKS, FOAM_ROLLER]
    ),
    "how-much-does-a-pilates-reformer-cost": (
        "Shop by budget: reformers at every price point",
        "From entry-level cord reformers to professional spring machines — our picks at each tier.",
        [BUDGET_REF, MID_REF, ('Premium Reformer ($2,000+)', 'Merrithew and Balanced Body professional-grade machines built for daily home and studio use.', 'From $1,999', 'https://www.amazon.com/s?k=merrithew+balanced+body+pilates+reformer+professional&tag=pilatescollective-20'), MAT, GRIP_SOCKS]
    ),
    "home-pilates-studio-setup": (
        "Everything you need to build your home studio",
        "The core equipment list for a functional home Pilates space, from essential to aspirational.",
        [BUDGET_REF, MID_REF, MAT, MAGIC_CIRCLE, FOAM_ROLLER]
    ),
    "pilates-reformer-vs-mat": (
        "Shop reformers and mats",
        "Whether you start on the mat or invest in a reformer, these are our recommended picks.",
        [MAT, BUDGET_REF, MAGIC_CIRCLE, GRIP_SOCKS, FOAM_ROLLER]
    ),
    "lagree-vs-pilates": (
        "Essential gear for both methods",
        "Grip socks and a quality mat work for both Lagree Megaformer studios and classical Pilates reformer classes.",
        [GRIP_SOCKS, MAT, BANDS, MAGIC_CIRCLE, FOAM_ROLLER]
    ),
    "pilates-vs-barre": (
        "Gear that works for Pilates and barre",
        "The grip socks, mat, and resistance tools that transfer across both studio formats.",
        [GRIP_SOCKS, MAT, ANKLE_WEIGHTS, BANDS, FOAM_ROLLER]
    ),
    "classical-vs-contemporary-pilates": (
        "Get started with either method",
        "The mat, socks, and ring are universal — they work in every Pilates format from Gratz classical to STOTT contemporary.",
        [MAT, GRIP_SOCKS, MAGIC_CIRCLE, BANDS, FOAM_ROLLER]
    ),
    "pilates-for-athletes": (
        "Recovery and conditioning tools for athlete practitioners",
        "These pieces extend the benefits of Pilates into your recovery days and cross-training sessions.",
        [FOAM_ROLLER, BANDS, ANKLE_WEIGHTS, MAGIC_CIRCLE, MAT]
    ),
    "pilates-for-runners": (
        "Pilates tools that complement your running training",
        "A foam roller for IT band work, bands for glute activation, and a mat for hip mobility sequences.",
        [FOAM_ROLLER, BANDS, MAT, MAGIC_CIRCLE, ANKLE_WEIGHTS]
    ),
    "pilates-and-pregnancy": (
        "Prenatal Pilates essentials",
        "A well-cushioned mat, soft ball, and resistance bands are the safest choices for prenatal practice.",
        [MAT, PILATES_BALL, BANDS, FOAM_ROLLER, GRIP_SOCKS]
    ),
    "pilates-for-menopause": (
        "Tools that support your practice during menopause",
        "These pieces support the resistance work and mobility training most beneficial for perimenopausal practitioners.",
        [MAT, BANDS, FOAM_ROLLER, ANKLE_WEIGHTS, MAGIC_CIRCLE]
    ),
    "pilates-for-scoliosis": (
        "Safe equipment for scoliosis-aware practice",
        "A thick mat, a soft ball, and a foam roller are the most-used tools in scoliosis-adapted Pilates sessions.",
        [MAT, PILATES_BALL, FOAM_ROLLER, MAGIC_CIRCLE, BANDS]
    ),
    "pilates-apparatus-guide": (
        "Start building your home apparatus collection",
        "You don't need a full studio to practice meaningfully at home. These are the best entry points.",
        [MAT, MAGIC_CIRCLE, BANDS, FOAM_ROLLER, PILATES_BALL]
    ),
    "6-core-principles-of-pilates-explained": (
        "Apply the principles with the right equipment",
        "A quality mat and a magic circle are the two pieces that most directly train the six foundational principles.",
        [MAT, MAGIC_CIRCLE, GRIP_SOCKS, BANDS, FOAM_ROLLER]
    ),
    "balanced-body-vs-merrithew": (
        "Shop Balanced Body and Merrithew reformers",
        "Both brands offer home and studio models — these are the starting points at each price level.",
        [MID_REF, ('Balanced Body Reformer', 'Balanced Body\'s Allegro 2 is the studio-standard machine — also available in a home edition.', 'From $1,299', 'https://www.amazon.com/s?k=balanced+body+pilates+reformer+home&tag=pilatescollective-20'), MAT, GRIP_SOCKS, FOAM_ROLLER]
    ),
    "basi-systems-pilates": (
        "Essential Pilates equipment to get started",
        "Whatever method you train in, a quality mat and the core props are universal starting points.",
        [MAT, MAGIC_CIRCLE, GRIP_SOCKS, BANDS, FOAM_ROLLER]
    ),
    "club-pilates-review": (
        "What to bring to Club Pilates (and every reformer studio)",
        "Club Pilates and most franchise studios sell grip socks at the desk — buy your own to save money.",
        [GRIP_SOCKS, MAT, MAGIC_CIRCLE, BANDS, FOAM_ROLLER]
    ),
    "how-to-build-a-consistent-pilates-practice": (
        "Build your home practice toolkit",
        "A mat and a ring at home lets you do meaningful work between studio sessions — this is what drives consistency.",
        [MAT, MAGIC_CIRCLE, BANDS, FOAM_ROLLER, BUDGET_REF]
    ),
    "how-to-choose-a-pilates-instructor": (
        "Gear to bring to your first private session",
        "Most private studios supply everything — but having your own grip socks is expected everywhere.",
        [GRIP_SOCKS, MAT, CARRY_BAG, WATER_BOTTLE, MAGIC_CIRCLE]
    ),
    "how-to-find-a-good-pilates-studio": (
        "What to bring to your first studio visit",
        "Arrive prepared. Grip socks are the one non-negotiable — most studios won't let you onto the reformer without them.",
        [GRIP_SOCKS, CARRY_BAG, MAT, WATER_BOTTLE, MAGIC_CIRCLE]
    ),
    "pilates-history": (
        "Practice the original method at home",
        "Joseph Pilates designed his exercises to be practised on a mat daily. A quality mat is the most authentic starting point.",
        [MAT, MAGIC_CIRCLE, BANDS, FOAM_ROLLER, GRIP_SOCKS]
    ),
    "your-reformer-pilates": (
        "Shop home reformers to extend your practice",
        "A home reformer lets you apply what you learn in Your Reformer Pilates classes without always needing a studio.",
        [BUDGET_REF, MID_REF, MAT, GRIP_SOCKS, FOAM_ROLLER]
    ),
    "best-pilates-retreats-europe": (
        "What to pack for a Pilates retreat",
        "Most retreat centres supply equipment — but bringing your own grip socks and a travel mat is always recommended.",
        [GRIP_SOCKS, MAT, MAT_BAG, CARRY_BAG, FOAM_ROLLER]
    ),
}


def make_gear_section(heading, subheading, items):
    cards = ""
    for name, note, price, url in items:
        safe_name = name.replace("'", "&apos;").replace('"', '&quot;')
        safe_note = note.replace("'", "&apos;").replace('"', '&quot;')
        cards += f"""
                <a href="{url}" target="_blank" rel="noopener noreferrer sponsored" style={{{{ textDecoration: "none" }}}}>
                  <div style={{{{ backgroundColor: "#ffffff", border: "1px solid rgba(217,194,186,0.35)", borderRadius: "12px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}}}>
                    <div>
                      <h3 style={{{{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}}}>{safe_name}</h3>
                      <p style={{{{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", color: "#53433e", lineHeight: 1.6, marginBottom: "12px" }}}}>{safe_note}</p>
                    </div>
                    <div style={{{{ display: "flex", justifyContent: "space-between", alignItems: "center" }}}}>
                      <span style={{{{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, color: "#8b4a31" }}}}>{price}</span>
                      <span style={{{{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#c5a882" }}}}>Shop →</span>
                    </div>
                  </div>
                </a>"""

    return f"""
        {{/* Gear Section */}}
        <section style={{{{ backgroundColor: "#fcf9f8", padding: "60px 24px" }}}}>
          <div style={{{{ maxWidth: "900px", margin: "0 auto" }}}}>
            <p style={{{{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8b4a31", marginBottom: "12px" }}}}>Equipment</p>
            <h2 style={{{{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 600, color: "#1b1c1c", marginBottom: "8px" }}}}>{heading}</h2>
            <p style={{{{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", color: "#53433e", marginBottom: "32px", lineHeight: 1.7 }}}}>
              {subheading}{{" "}}<a href="/affiliate-disclosure" style={{{{ color: "#8b4a31", textDecoration: "underline" }}}}>Affiliate disclosure.</a>
            </p>
            <div style={{{{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}}}>
              {cards}
            </div>
          </div>
        </section>"""


def add_gear_to_page(slug, heading, subheading, items):
    path = f"{BASE}/{slug}/page.tsx"
    if not os.path.exists(path):
        print(f"  SKIP (no file): {slug}")
        return

    with open(path) as f:
        content = f.read()

    if "amazon.com" in content:
        print(f"  SKIP (already has links): {slug}")
        return

    gear_jsx = make_gear_section(heading, subheading, items)

    # Inject before </main>
    if "</main>" not in content:
        print(f"  SKIP (no </main> found): {slug}")
        return

    new_content = content.replace("      </main>", gear_jsx + "\n      </main>", 1)

    if new_content == content:
        print(f"  UNCHANGED: {slug}")
        return

    with open(path, "w") as f:
        f.write(new_content)
    print(f"  UPDATED: {slug}")


print("=== Adding gear sections to zero-link blog pages ===")
for slug, (heading, subheading, items) in PAGE_GEAR.items():
    add_gear_to_page(slug, heading, subheading, items)

print("\nDone.")
