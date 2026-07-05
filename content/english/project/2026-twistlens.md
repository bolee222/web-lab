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
teaser_top: 
metacontent: "TwistLens creates docent-informed, semantically transformed artwork previews that preserve anticipation before museum visits. By combining an information taxonomy with EchoLens and DecoyLens strategies, it turns previews into cues for curiosity, interpretation, and later discovery."
description: "TwistLens project page: CHI 2026 paper on anticipation-preserving, docent-informed image previews for museum experiences by Thao Phuong Vu and Bokyung Lee."
keywords: ["AI algorithm UX", "anticipatory experience", "preview media", "anticipation-preserving", "generative AI strategy", "image transformation"]
shortkeys: ["anticipation-preserving AI", "museum preview design", "semantic image transformation", "curiosity-driven UX"]

# 상세 상단 메타
conference: "ACM CHI / 2026"
conference_full: "ACM CHI Conference on Human Factors in Computing Systems (2026)"
researcher: "Thao Phuong Vu, Bokyung Lee"
summary: "Pre-visit information can enrich museum experiences, but it also creates a preview dilemma: docent descriptions provide interpretive depth yet can be hard to visualize, while original artwork images offer clear visual anchors but may spoil surprise. TwistLens addresses this tension through docent-informed, AI-supported image transformation. The system analyzes artwork descriptions with a structured information taxonomy, segments the image regions connected to key docent cues, and generates transformed previews through two strategies: EchoLens, which preserves the intended meaning while changing visual representation, and DecoyLens, which alters the described information while keeping the overall image coherent. A co-design study with 21 art appreciators refined how each strategy should be matched to different information types, and an evaluation with 20 participants showed that TwistLens increased anticipation and curiosity before visits, preserved surprise during artwork encounters, and supported more active interpretive learning."
citation: "Thao Phuong Vu and Bokyung Lee. (2026). **TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits**. _In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)_. Article 789, 1-21. https://doi.org/10.1145/3772318.3790352 :trophy: _**Honorable Mention Award (Top 5%)**_."
acknowledgement: "This work was supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government (MSIT) [RS-2024-00340828]. "

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "https://www.dropbox.com/scl/fi/f0so6wp98l2xnqaqnni5v/TwistLens_authors.pdf?rlkey=2pbfqkhlzqfq2wlxhip627uve&st=vdf4pjny&dl=0"

# To embed videos at the bottom-left (col-8), add:
video_embeds:
   - url: "https://youtu.be/ggtlLv9Wabc"
     title: "TwistLens project video"
#     caption: "Optional caption"

section_rows:
  # To add an image-only row between sections, use:
  # - layout: "image_only"
  #   image: "/projects/2026-twistlens/your-image.webp"
  #   caption: "Optional caption"

  - layout: "image_only"
    image: "/projects/2026-twistlens/teaser.png"
    #caption: "Image-only row example inserted between sections on the TwistLens page."


  - title: "Background: The Preview Dilemma"
    body_en: >-
      Museum visits often begin before visitors enter the gallery. Websites, brochures, and social media posts help people form expectations through docent text and artwork images. Yet these two preview formats create a tension. Text can carry curatorial interpretation, historical context, and symbolic meaning, but visitors must mentally map that information onto artworks they have not yet seen. Original images, in contrast, make interpretation easier by providing a visual anchor, but they can also reveal too much and flatten the later moment of discovery. <mark>TwistLens starts from this dilemma and asks how preview images can provide enough cues for meaningful preparation while still preserving anticipation.</mark>
    body_kr: >-
      박물관 경험은 관람객이 전시장에 들어가기 전부터 시작됩니다. 전시 웹사이트, 브로슈어, 소셜 미디어의 프리뷰는 도슨트 설명과 작품 이미지를 통해 관람 전 기대를 형성합니다. 하지만 이 두 가지 프리뷰 방식은 서로 다른 한계를 가집니다. 텍스트는 작품의 맥락, 상징, 해석을 풍부하게 전달하지만 아직 보지 못한 작품에 그 의미를 연결해 상상해야 합니다. 반대로 원본 이미지는 이해를 쉽게 만드는 시각적 기준점을 제공하지만, 작품을 너무 일찍 노출해 실제 관람에서의 발견과 놀라움을 약화시킬 수 있습니다. <mark>TwistLens는 바로 이 딜레마에서 출발합니다. 관람객이 작품을 이해할 수 있을 만큼의 단서를 제공하면서도, 원본을 마주하는 순간의 기대감은 어떻게 유지할 수 있을까요?</mark>
    image: "/projects/2026-twistlens/web_goal.jpg"
    caption: "TwistLens reframes museum previews as anticipation-preserving media rather than simple early exposure."

  - title: "Docent-Informed Preview Generation"
    body_en: >-
      TwistLens generates twisted previews based on the original artwork image and paired docent description. First, the system analyzes the text to identify the most salient information category, such as symbolic meaning, or composition. It also extracts cue phrases that connect the docent narrative to visible image regions. These phrases are grounded through segmentation so the system can transform the relevant parts of the image while keeping the surrounding scene stable. <mark>TwistLens output is not a generic blur or filter, but a semantically guided preview that controls what is revealed, what is withheld, and what is made curious.</mark>
    body_kr: >-
      TwistLens는 작품 이미지와 도슨트 설명을 함께 입력으로 받아 프리뷰를 생성합니다. 먼저 시스템은 도슨트 텍스트에서 가장 중요한 정보 유형을 찾습니다. 예를 들어 상징적 의미나 구성과 같은 범주가 여기에 포함됩니다. 이후 설명 속 단서 문구를 추출하고, 그 문구가 이미지의 어느 영역과 연결되는지 segmentation을 통해 찾습니다. 이렇게 식별된 영역만 선택적으로 변형하고 주변 장면은 유지하기 때문에, <mark>TwistLens의 프리뷰는 단순한 블러나 필터가 아닙니다. 무엇을 보여주고, 무엇을 숨기고, 어떤 부분에서 호기심을 만들지 의미 단위로 조절하는 프리뷰입니다.</mark>
    image: "/projects/2026-twistlens/web_workflow.png"
    caption: "The workflow connects docent text analysis, information taxonomy, segmentation, and image transformation."

  #- layout: "image_only"
  #image: "/projects/2026-twistlens/web_workflow.png"
  #  #caption: "Image-only row example inserted between sections on the TwistLens page."


  - title: "TwistLens System: Strategies"
    body_en: >-
      TwistLens uses two complementary transformation strategies. <mark>EchoLens keeps the semantic core of the docent-described information while changing how it looks.</mark> For information that should be felt visually, such as style, material, or symbolic atmosphere, EchoLens lets viewers sense the intended meaning without seeing the original form. <mark>DecoyLens takes the opposite route: it intentionally changes the described information while preserving the surrounding visual coherence.</mark> This controlled mismatch works especially well when the preview should direct attention to a specific component, historical clue, regional feature, or exhibition setup.
    body_kr: >-
      TwistLens는 EchoLens와 DecoyLens라는 두 가지 상호보완적 변형 전략을 사용합니다. <mark>EchoLens는 도슨트 설명이 말하는 의미의 핵심은 유지하되 시각적 표현을 바꿉니다.</mark> 스타일, 재료, 상징적 분위기처럼 시각적으로 "느껴야" 하는 정보에는 EchoLens가 적합합니다. 관람객은 원본 형태를 보지 않아도 설명이 의도한 감각과 의미를 짐작할 수 있습니다. <mark>반대로 DecoyLens는 주변 장면의 일관성은 유지하면서, 설명된 정보를 의도적으로 다른 것으로 바꾸거나 비틉니다.</mark> 이 방식은 특정 구성요소, 시대적 단서, 지역적 특징, 전시 공간 구성처럼 관람객의 주의를 특정 지점으로 이끌어야 할 때 효과적입니다. 두 전략은 스포일러를 피하는 것을 넘어, 해석을 시작하게 만드는 호기심의 빈칸을 설계합니다.
    image: "/projects/2026-twistlens/twistStrategies.webp"
    caption: "EchoLens and DecoyLens offer two distinct pathways for anticipation-preserving transformation."

  - title: "Co-Design with Art Enthusiasts"
    body_en: >-
      The transformation strategies were refined through a co-design study with 21 participants who regularly visit museums and rely on docent-guided interpretation. The study used 16 artwork-description pairs across eight information categories, with five EchoLens and five DecoyLens previews generated for each artwork. Participants first interpreted transformed previews without seeing the originals, then compared their expectations after the original artworks were revealed, and finally used the TwistLens prototype to discuss possible refinements. The results showed that the two strategies should not be applied uniformly. <mark>EchoLens was preferred for overall visual qualities and symbolic narratives, while DecoyLens was more effective for component-specific descriptions, educational knowledge, and curatorial setup.</mark>
    body_kr: >-
      변형 전략을 정교하게 만들기 위해 박물관을 자주 방문하고 도슨트 설명을 활용해 작품을 감상하는 21명의 참여자와 코디자인 연구를 수행했습니다. 연구에서는 8개의 정보 범주에 걸쳐 16개의 작품-설명 쌍을 준비했고, 각 작품마다 EchoLens 5개와 DecoyLens 5개의 프리뷰를 생성했습니다. 참여자들은 먼저 원본을 보지 않은 상태에서 변형 프리뷰만 보고 작품이 어떤 내용을 담고 있을지 해석했습니다. 이후 원본이 공개되었을 때 자신이 상상했던 이미지와 실제 작품이 어떻게 달랐는지 비교하며, 어떤 변형이 기대감을 만들고 어떤 변형이 너무 많은 정보를 드러내는지 논의했습니다. 마지막으로 TwistLens 프로토타입을 직접 사용하며 정보 유형별로 어떤 변형 방식이 더 적합한지 함께 개선 방향을 도출했습니다. 결과적으로 두 전략은 모든 정보에 똑같이 적용될 수 없었습니다. <mark>EchoLens는 전체적 시각 특성이나 상징적 서사를 전달할 때 선호되었고, DecoyLens는 특정 구성요소, 교육적 지식, 큐레이션 공간 구성처럼 주의를 집중시켜야 하는 정보에 더 효과적이었습니다.</mark> 즉, TwistLens는 단순히 이미지를 다르게 만드는 도구가 아니라, 도슨트 설명의 성격에 따라 무엇을 암시하고 무엇을 숨길지 조절하는 프리뷰 설계 방식으로 발전했습니다.
    images:
      - image: "/projects/2026-twistlens/study1_component_sample.jpg"
        caption: "Component-focused previews helped participants reason about which visual details should be transformed or preserved."
      - image: "/projects/2026-twistlens/study1_education_sample.webp"
        caption: "Education-focused previews explored how transformed images can preserve curiosity while supporting pre-visit learning."
    caption: "The co-design study mapped transformation strategies to the kinds of knowledge carried by docent descriptions."

  - title: "Evaluation in Museum Preview Experiences"
    body_en: >-
      We evaluated TwistLens with 20 participants in a within-subjects museum preview study. Participants explored two exhibition brochures: a baseline brochure with original images and docent text, and a TwistLens brochure with transformed previews and the same kind of docent text. They then visited two virtual exhibitions and reflected on their experience after the visit. Compared with baseline previews, <mark>TwistLens significantly increased pre-visit anticipation and curiosity. During the visit, the gap between the imagined artwork and the actual artwork produced stronger surprise, higher enjoyment, and stronger perceived spoiler prevention. TwistLens also supported creative thinking before the visit and made information learning more enjoyable afterward.</mark>
    body_kr: >-
      이후 20명의 참여자를 대상으로 museum preview 경험에서 TwistLens를 평가했습니다. 참여자들은 두 가지 전시 브로슈어를 살펴보았습니다. 하나는 원본 이미지와 도슨트 텍스트를 제공하는 baseline 브로슈어였고, 다른 하나는 TwistLens가 생성한 변형 프리뷰와 도슨트 텍스트를 제공하는 브로슈어였습니다. 이후 참여자들은 두 개의 가상 전시를 관람하고 경험을 평가했습니다. <mark>결과적으로 TwistLens는 관람 전 기대감과 호기심을 유의미하게 높였습니다. 실제 작품을 마주했을 때에는 관람 전 상상했던 이미지와 원본 사이의 차이가 더 큰 놀라움, 더 높은 관람 즐거움, 더 강한 스포일러 방지 효과로 이어졌습니다. 또한 TwistLens는 관람 전 창의적 사고를 촉진하고, 관람 후 정보 학습의 즐거움을 높이는 데에도 기여했습니다.</mark>
    images:
      - image: "/projects/2026-twistlens/s2_procedure.webp"
      - image: "/projects/2026-twistlens/s2_exhibitions.webp"
        caption: "Participants visited virtual exhibitions after forming expectations from the preview materials."
    caption: "TwistLens improved anticipation, curiosity, and interpretive engagement in evaluation."

  - title: "Design Implications"
    body_en: >-
      <mark>TwistLens suggests that anticipation should be treated as a design material, not just a pre-visit emotion.</mark> The findings point to four principles for anticipatory visual media. First, curated visibility matters: previews should retain interpretive anchors instead of hiding everything. Second, curiosity emerges from calibrated distortion, where the transformed element is strange enough to invite hypotheses but coherent enough to keep viewers oriented. Third, stylistic and symbolic information often needs semantic alternation rather than heavy distortion, because narrative continuity helps visitors form meaningful expectations. Fourth, transformation should be scale-aware, since small but important regions may require stronger visual emphasis to be noticed.
    body_kr: >-
      <mark>TwistLens는 anticipation을 단순한 관람 전 감정이 아니라 설계 가능한 경험 요소로 다룹니다.</mark> 연구 결과는 anticipatory visual media를 위한 네 가지 원칙을 제안합니다. 첫째, 모든 것을 숨기는 것보다 해석의 기준점이 되는 단서는 남겨두는 선별적 가시화가 중요합니다. 둘째, 호기심은 무작위 왜곡이 아니라 조절된 변형에서 만들어집니다. 변형된 요소는 가설을 만들 만큼 낯설어야 하지만, 관람객이 맥락을 잃지 않을 만큼 일관성을 유지해야 합니다. 셋째, 스타일이나 상징적 정보는 강한 왜곡보다 의미를 다른 방식으로 재표현하는 semantic alternation이 더 적합합니다. 넷째, 중요한 단서가 작은 영역에 있을 때에는 더 강한 시각적 강조가 필요하므로 변형의 스케일을 고려해야 합니다.
    images:
      - image: "/projects/2026-twistlens/result2-1.webp"
        caption: "Evaluation results show how TwistLens shaped anticipation and curiosity before the museum visit."
    caption: "Design principles focus on balancing interpretive clarity with controlled ambiguity."

  - title: "Beyond Museums"
    body_en: >-
      Although TwistLens was developed for art museum previews, the idea extends to other domains where early exposure can reduce later discovery. <mark>In education</mark>, transformed previews can prompt learners to form hypotheses before seeing full explanations. <mark>In tourism</mark>, preview media can communicate the atmosphere of a place while delaying key scenes or details. <mark>In fine dining</mark>, transformed images can hint at ingredients, concepts, or plating logic while preserving the final reveal. Across these contexts, TwistLens demonstrates how generative AI can be used not only to produce images, but to shape the timing, ambiguity, and interpretive depth of visual disclosure.
    body_kr: >-
      TwistLens는 미술관 프리뷰를 위해 개발되었지만, 사전 노출이 이후의 발견 경험을 약화시킬 수 있는 다른 영역에도 확장될 수 있습니다. <mark>교육에서는</mark> 전체 설명을 보여주기 전에 변형된 프리뷰를 통해 학습자가 먼저 가설을 세우도록 유도할 수 있습니다. <mark>관광에서는</mark> 장소의 분위기는 전달하되 핵심 장면이나 세부 정보의 노출은 늦출 수 있습니다. <mark>파인다이닝에서는</mark> 재료, 콘셉트, 플레이팅 논리를 암시하면서 최종 결과의 놀라움은 남겨둘 수 있습니다. 이런 맥락에서 TwistLens는 생성형 AI가 단순히 이미지를 만들어내는 도구를 넘어, 시각 정보가 언제, 얼마나, 어떤 모호함을 가지고 공개될지 설계하는 도구가 될 수 있음을 보여줍니다.
    images:
      - image: "/projects/2026-twistlens/result2-2.webp"
        caption: "Post-visit responses highlight how transformed previews preserved surprise while supporting interpretation."
    caption: "The anticipation-preserving preview concept can scale beyond museum experiences."
---
