---
title: "TwistLens: Anticipation-Preserving Image Previews for Museum Experiences"
title_official: "TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits"
date: 2026-02-13
publishDate: 2026-02-13
draft: false

# 목록 카드
# ["XR", "AI", "Physical AI", "UX", "Embodied Interaction", "Digital Human" ,"Digital Twin" , "Convergence", "Interaction Design", "Digital Creativity","System", "Visualization", "User Study", "Cultural Technology",  "User-centered Design", "Marketing", "Patent"]
category: ["AI", "UX", "Convergence", "Interaction Design", "System", "Visualization", "User Study", "Cultural Technology", "User-centered Design", "Marketing", "Patent"]
image: "/projects/2026-twistlens/_[opt]teaser.webp"
teaser_top: "/projects/2026-twistlens/top.webp"
metacontent: "TwistLens generates transformed artwork previews that communicate interpretive cues while preserving surprise. Guided by docent descriptions, EchoLens and DecoyLens help museums balance understanding with anticipation before visits."

# 상세 상단 메타
conference: "CHI / 2026"
conference_full: "ACM CHI Conference on Human Factors in Computing Systems (2026)"
researcher: "Thao Phuong Vu, Bokyung Lee"
summary: "TwistLens is an AI-supported preview system for museum websites. Instead of showing the original artwork directly, TwistLens transforms selected visual elements based on docent descriptions to preserve anticipation while supporting interpretation. Through co-design and controlled evaluation, we found that twisted previews can increase curiosity, anticipation, surprise at encounter, and active interpretation."

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "/papers/2026-TwistLens.pdf"
---

## The Preview Dilemma

Museum visitors often decide whether to visit an exhibition long before entering the gallery. They browse website materials such as docent descriptions and artwork images.

This creates a trade-off:

- **Text descriptions** support interpretation but are hard to visualize.
- **Original images** are easy to understand but may spoil discovery.

TwistLens begins from a core question:

> Can we design previews that support interpretation **without revealing the artwork too early**?

---

## Twisted Previews

TwistLens introduces **twisted previews**: transformed images that preserve interpretive hints while withholding key spoiler-prone details.

Instead of choosing between showing everything or hiding everything, TwistLens explores a third option—**transforming**.

Twisted previews are designed to:

- communicate meaningful cues,
- trigger curiosity,
- and preserve anticipation for the in-person encounter.

---

## How TwistLens Works

TwistLens uses a four-stage workflow.

### 1) Input

The system takes:

- an artwork image,
- a docent-style text description.

### 2) Semantic Analysis

The text is analyzed to extract cues relevant to interpretation, including:

- objects,
- style,
- symbolism,
- composition.

### 3) Image Segmentation

Text-guided segmentation locates image regions corresponding to these cues.

### 4) Transformation

TwistLens applies one of two strategies:

- **EchoLens**: preserves semantic meaning while changing appearance.
  - Example: steel armor → stylized steel armor.
- **DecoyLens**: intentionally replaces the meaning of selected elements.
  - Example: steel armor → chocolate armor.

These transformed outputs function as **interpretive prompts**, not literal previews.

---

## Co-Design with Art Enthusiasts

To refine transformation strategies, we conducted a co-design study with art enthusiasts.

Participants reviewed transformed previews before seeing original artworks and reflected on:

- spoiler prevention,
- visual comfort,
- curiosity stimulation.

This process helped identify how transformation style should differ by information type.

---

## Key Insights

### Style-focused information → EchoLens works best

Participants preferred previews that preserved stylistic impressions (e.g., brushwork, texture) while altering contextual cues.

### Object-focused information → DecoyLens works best

Replacing key objects created puzzle-like gaps that encouraged viewers to ask what the original looked like.

### Symbolic meaning → EchoLens works best

For symbolic content, reinterpretation preserved narrative coherence better than direct replacement.

These findings informed practical guidelines for selecting transformation strategies.

---

## Evaluation in a Museum Scenario

We conducted a controlled study comparing:

- **Baseline**: original artwork images + docent text,
- **TwistLens**: transformed previews + docent text.

Participants explored preview materials first, then visited virtual exhibitions.

### Results

TwistLens produced:

- **stronger pre-visit anticipation**,
- **higher curiosity**,
- **greater surprise at first encounter**,
- **more active interpretation** through comparison between preview, imagination, and original artwork.

---

## Design Principles for Anticipation-Preserving Media

Based on our findings, we propose four principles:

1. **Curated Visibility**  
   Reveal interpretive anchors while transforming spoiler-sensitive details.
2. **Curiosity Gaps**  
   Use calibrated distortions to motivate exploration.
3. **Semantic Alternation**  
   Reinterpret style/symbolic cues rather than simply obscuring them.
4. **Scale-Aware Transformation**  
   Apply stronger transformations to small yet important visual elements.

---

## Beyond Museums

The same concept can extend to other domains where anticipation matters:

- **Education**: encourage hypothesis-making before full explanation.
- **Tourism**: communicate atmosphere without revealing exact spots.
- **Fine Dining**: hint at ingredients while preserving plating surprise.

Across these contexts, previews become tools for **curiosity-driven engagement** rather than full disclosure.

---

## Project Team

- Thao Phuong Vu
- Bokyung Lee  
  Yonsei University, Convergence Design Lab

## Publication

**TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits**  
ACM CHI 2026

## Acknowledgement

This research was supported by the National Research Foundation of Korea (NRF).
