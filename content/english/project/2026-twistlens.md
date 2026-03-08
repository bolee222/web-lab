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
summary: "TwistLens is an AI-supported preview system for museum websites. Instead of showing original artwork directly, it transforms selected elements using docent descriptions to preserve anticipation while supporting interpretation. Studies show higher curiosity, stronger anticipation, and more active meaning-making."

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "/papers/2026-TwistLens.pdf"
---

## At a Glance

> **Goal**: Help visitors understand artworks before a visit **without spoiling discovery**.

| What museums currently show | Advantage | Limitation |
| --- | --- | --- |
| Docent text | Rich interpretation | Hard to visualize |
| Original image | Easy to understand | Can spoil anticipation |

**TwistLens proposal:** do not choose between text *or* image. Instead, provide a **transformed preview**.

---

## Why TwistLens

Before visiting, people usually browse exhibition pages. The dilemma is simple:

1. Text-only previews are informative but abstract.
2. Original images are clear but reveal too much.

TwistLens asks one design question:

> Can a preview provide interpretive cues while keeping the encounter fresh?

---

## Core Concept: Twisted Preview

A **twisted preview** is a transformed artwork image that:

- preserves key meaning,
- withholds spoiler-sensitive details,
- stimulates curiosity.

It works as an **interpretive prompt**, not a literal reveal.

---

## System Pipeline (4 Steps)

### 1) Input
- Artwork image
- Docent-style description

### 2) Semantic Analysis
Extract interpretive targets from text:
- objects,
- style,
- symbolism,
- composition.

### 3) Text-Guided Segmentation
Locate image regions linked to those targets.

### 4) Transformation Strategy
TwistLens applies one strategy per cue:

- **EchoLens**: keep meaning, alter appearance  
  *(steel armor → stylized steel armor)*
- **DecoyLens**: replace selected meaning intentionally  
  *(steel armor → chocolate armor)*

---

## Co-Design Findings

We ran a co-design study with art enthusiasts to tune transformation behavior.

Participants evaluated transformed previews on:
- spoiler prevention,
- visual comfort,
- curiosity stimulation.

### What worked best

- **Style cues** → EchoLens preferred
- **Object cues** → DecoyLens preferred
- **Symbolic cues** → EchoLens preferred

This led to strategy-selection guidelines by information type.

---

## Controlled Evaluation (Museum Scenario)

We compared two preview conditions:

- **Baseline**: original artwork image + docent text
- **TwistLens**: transformed preview + docent text

After previewing, participants visited virtual exhibitions.

### Observed effects of TwistLens

- Higher **pre-visit anticipation**
- Higher **curiosity**
- Stronger **surprise** at first encounter
- More **active interpretation** (preview ↔ imagination ↔ original)

---

## Design Principles

1. **Curated Visibility**  
   Reveal interpretive anchors, transform spoiler-prone details.
2. **Curiosity Gaps**  
   Use calibrated distortion to trigger exploration.
3. **Semantic Alternation**  
   Reinterpret style/symbolic cues instead of just hiding them.
4. **Scale-Aware Transformation**  
   Apply stronger transformation to small but critical elements.

---

## Broader Applications

- **Education**: encourage hypothesis-building before full explanation.
- **Tourism**: show atmosphere without exposing exact scenes.
- **Fine Dining**: hint ingredients while preserving plating surprise.

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
