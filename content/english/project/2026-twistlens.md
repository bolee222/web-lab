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
summary: "TwistLens is an AI-supported preview system for museum websites that transforms artwork images using docent descriptions. By preserving interpretive cues while avoiding direct visual spoilers, TwistLens supports understanding, curiosity, and anticipation before museum visits."

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "/papers/2026-TwistLens.pdf"

content_references:
  - image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "TwistLens transformed preview example used for project overview."
  - image: "/projects/2026-twistlens/_[opt]teaser.jpg"
    caption: "Reference image for anticipation-preserving visual transformation."
---

## The Preview Dilemma

Museum visitors often decide whether to visit an exhibition long before entering the gallery, and this decision is largely shaped by website previews. In most cases, those previews consist of docent-style descriptions and original artwork images. The problem is that each format solves one issue while creating another. Text descriptions can provide rich interpretation, but they are often difficult to visualize without a concrete visual anchor. Original images are easy to understand at a glance, but they may reveal too much and weaken the eventual sense of discovery. TwistLens started from this tension and asked whether a preview could still support interpretation without exposing the artwork too early.

## Twisted Preview Concept

To address that question, we designed TwistLens as an anticipation-preserving preview system. Instead of presenting the original image directly, TwistLens generates transformed previews that keep meaningful interpretive cues while withholding spoiler-prone details. In this framing, the preview functions less as a direct representation and more as an interpretive prompt. It helps visitors build understanding before the visit while keeping enough uncertainty to preserve curiosity and surprise.

## EchoLens and DecoyLens

This concept is implemented through two complementary strategies. EchoLens preserves semantic meaning while altering visual appearance, allowing viewers to understand what an element represents without seeing its exact original form. DecoyLens intentionally replaces selected meanings in specific regions, producing coherent but unexpected substitutions that create a productive curiosity gap. Together, these strategies allow the system to balance clarity and ambiguity in different ways depending on the communicative goal.

## How TwistLens Works

The pipeline follows four stages. First, the system receives an artwork image and a docent-style description. Second, it analyzes the text to extract interpretive targets such as object-level cues, stylistic characteristics, symbolic elements, and compositional structure. Third, text-guided segmentation locates the corresponding visual regions in the image. Finally, TwistLens applies either EchoLens or DecoyLens to selected regions according to design intent and information type. The resulting preview retains interpretive relevance while avoiding a direct visual spoiler.

## Co-Design with Art Enthusiasts

To refine the transformation behavior, we conducted a co-design study with art enthusiasts. Participants reviewed transformed previews before seeing the originals and reflected on spoiler prevention, visual comfort, and curiosity stimulation. The feedback showed that transformation preference depends on information type. For style-focused and symbolic cues, participants generally favored EchoLens because it preserved narrative coherence and artistic character. For object-focused cues, participants often preferred DecoyLens because targeted replacements prompted closer attention and motivated viewers to infer what the original might contain.

## Evaluation in a Museum Scenario

We then evaluated TwistLens in a controlled scenario comparing two conditions: a baseline preview with original artwork images plus docent text, and a TwistLens preview with transformed images plus docent text. After exploring the preview materials, participants visited virtual exhibitions. Compared with the baseline, TwistLens increased pre-visit anticipation, raised curiosity, and produced stronger surprise upon encountering the original artworks. It also encouraged more active interpretation, as participants tended to compare the transformed preview, their own mental reconstruction, and the final original piece rather than consuming information passively.

## Design Implications

From these findings, we derive several implications for anticipation-preserving media design. Curated visibility appears more effective than complete hiding, because visitors still need interpretive anchors to engage meaningfully. Curiosity can be intentionally designed through calibrated information gaps rather than random distortion. For style and symbolic meaning, semantic reinterpretation is often preferable to blunt obfuscation. Finally, transformation intensity should be scale-aware, since small but meaningful elements may require stronger visual intervention to remain noticeable in preview contexts.

## Beyond Museums

Although TwistLens was developed for museum visits, the same principle can extend to other domains where pre-exposure may reduce discovery. Educational content could use transformed previews to support hypothesis-building before full explanation. Tourism platforms could communicate atmosphere without disclosing exact scenes too early. Fine dining services could hint ingredients and concept while preserving surprise in final plating. Across these contexts, anticipation-preserving previews can function as a practical strategy for balancing understanding with curiosity.

## Project Team

Thao Phuong Vu, Bokyung Lee  
Yonsei University, Convergence Design Lab

## Publication

**TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits**  
ACM CHI 2026

## Acknowledgement

This research was supported by the National Research Foundation of Korea (NRF).
