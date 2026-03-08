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
---

Museum visitors often decide whether to visit an exhibition long before entering the gallery. In practice, this decision is shaped by website previews, which usually include docent-style descriptions and artwork images. Yet these two formats create a recurring trade-off. Text descriptions can offer rich interpretation but are often difficult to visualize without a concrete visual anchor, while original images are immediately understandable but may reveal too much and reduce the sense of discovery during the actual visit. TwistLens started from this tension and asked a simple question: can a preview still help interpretation without revealing the artwork too early?

To address this question, we designed TwistLens as an anticipation-preserving preview system. Instead of presenting the original artwork directly, TwistLens generates transformed previews that keep meaningful interpretive cues while withholding spoiler-prone visual details. In this way, the preview is not a literal representation of the artwork but an interpretive prompt that supports understanding and curiosity at the same time. This framing guided the design of two complementary transformation strategies. EchoLens preserves semantic meaning while altering appearance, so visitors can still grasp what an element represents without seeing the exact original form. DecoyLens intentionally replaces selected meanings for specific elements, creating a coherent but unexpected visual substitution that encourages viewers to ask what the original might actually look like.

The system pipeline follows four stages. First, TwistLens receives an artwork image and a docent-style description as input. Second, it analyzes the description to identify interpretive targets such as object-level cues, stylistic information, symbolic elements, and compositional structure. Third, it uses text-guided segmentation to locate corresponding regions in the image. Finally, it applies either EchoLens or DecoyLens to selected regions depending on design intent and information type. The resulting output preserves enough meaning to support pre-visit interpretation while maintaining uncertainty around exact visual details, which is essential for anticipation.

To refine these transformations, we conducted a co-design study with art enthusiasts. Participants reviewed transformed previews before seeing original artworks and reflected on whether each transformation prevented spoilers, remained visually comfortable, and stimulated curiosity. The study showed that transformation preference depended on information type. For style-focused and symbolic cues, participants generally preferred EchoLens because it retained narrative coherence and artistic character while still distancing the preview from the original. For object-focused cues, participants often preferred DecoyLens because targeted replacements created productive curiosity gaps and motivated closer attention.

We then evaluated TwistLens in a controlled museum scenario by comparing two preview conditions: a baseline condition with original artwork images plus docent text, and a TwistLens condition with transformed previews plus docent text. Participants explored preview materials first and then visited virtual exhibitions. Compared with the baseline, TwistLens increased pre-visit anticipation, raised curiosity, and produced stronger surprise when participants encountered original artworks. It also encouraged more active interpretation, as visitors tended to compare the transformed preview, their own mental reconstruction, and the final original work rather than consuming information passively.

From these findings, we draw four design implications for anticipation-preserving media. First, curated visibility is more effective than complete hiding: previews should reveal interpretive anchors while transforming spoiler-sensitive details. Second, curiosity can be intentionally designed through calibrated information gaps. Third, for style and symbolic meaning, semantic reinterpretation is often preferable to blunt obfuscation. Fourth, transformation intensity should be scale-aware, since small but meaningful elements may require stronger visual intervention to become noticeable in previews.

Although TwistLens was developed for museum experiences, the same idea can be applied to other domains where pre-exposure risks reducing discovery. Educational materials could use transformed previews to promote hypothesis-building before full explanation. Tourism platforms could communicate atmosphere without disclosing exact scenes too early. Fine dining services could hint ingredients and concept while preserving surprise in final plating. Across these contexts, anticipation-preserving previews can function as a design strategy that balances understanding with curiosity instead of forcing a binary choice between full reveal and full concealment.

## Project Team

Thao Phuong Vu, Bokyung Lee  
Yonsei University, Convergence Design Lab

## Publication

**TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits**  
ACM CHI 2026

## Acknowledgement

This research was supported by the National Research Foundation of Korea (NRF).
