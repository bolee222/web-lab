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
citation: "Thao Phuong Vu and Bokyung Lee. (2026). TwistLens: A Docent-Informed Image Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)."
acknowledgement: "This research was supported by the National Research Foundation of Korea (NRF)."

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "/papers/2026-TwistLens.pdf"

section_rows:
  # To add an image-only row between sections, use:
  # - layout: "image_only"
  #   image: "/projects/2026-twistlens/your-image.webp"
  #   caption: "Optional caption"

  - title: "The Preview Dilemma"
    body_en: >-
      Museum visitors often decide whether to visit an exhibition long before entering the gallery, and this decision is largely shaped by website previews. In most cases, those previews consist of docent-style descriptions and original artwork images. The problem is that each format solves one issue while creating another. Text descriptions can provide rich interpretation, but they are often difficult to visualize without a concrete visual anchor. Original images are easy to understand at a glance, but they may reveal too much and weaken the eventual sense of discovery. TwistLens started from this tension and asked whether a preview could still support interpretation without exposing the artwork too early.
    body_kr: >-
      관람객은 전시장에 들어가기 전, 웹사이트에서 본 프리뷰를 바탕으로 방문 여부를 결정하는 경우가 많습니다. 보통 프리뷰는 도슨트 설명 텍스트와 원본 작품 이미지로 구성됩니다. 하지만 이 두 방식은 각각 장점과 한계를 동시에 가집니다. 텍스트는 해석 정보를 풍부하게 제공하지만 시각적으로 상상하기 어렵고, 원본 이미지는 이해는 쉽지만 실제 관람 때의 발견감을 약화시킬 수 있습니다. TwistLens는 이 딜레마에서 출발하여, 작품을 너무 이르게 노출하지 않으면서도 해석을 도울 수 있는 프리뷰가 가능한지 질문합니다.
    image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "Original previews often over-reveal artworks, reducing anticipation before museum visits."

  - title: "Twisted Preview Concept"
    body_en: >-
      To address that question, we designed TwistLens as an anticipation-preserving preview system. Instead of presenting the original image directly, TwistLens generates transformed previews that keep meaningful interpretive cues while withholding spoiler-prone details. In this framing, the preview functions less as a direct representation and more as an interpretive prompt. It helps visitors build understanding before the visit while keeping enough uncertainty to preserve curiosity and surprise.
    body_kr: >-
      이 질문에 답하기 위해 우리는 TwistLens를 anticipation-preserving preview 시스템으로 설계했습니다. 원본 이미지를 직접 보여주는 대신, 의미 있는 해석 단서는 유지하면서 스포일러 가능성이 큰 시각 요소는 변형한 프리뷰를 생성합니다. 즉 프리뷰를 원본의 단순 축소판이 아니라 해석을 유도하는 프롬프트로 재정의한 것입니다. 이를 통해 방문 전 이해를 지원하면서도 호기심과 놀라움을 유지할 수 있습니다.
    image: "/projects/2026-twistlens/_[opt]teaser.jpg"
    caption: "Twisted previews preserve interpretive cues while withholding exact visual details."

  - title: "EchoLens and DecoyLens"
    body_en: >-
      This concept is implemented through two complementary strategies. EchoLens preserves semantic meaning while altering visual appearance, allowing viewers to understand what an element represents without seeing its exact original form. DecoyLens intentionally replaces selected meanings in specific regions, producing coherent but unexpected substitutions that create a productive curiosity gap. Together, these strategies allow the system to balance clarity and ambiguity in different ways depending on the communicative goal.
    body_kr: >-
      이 개념은 두 가지 상호보완적 전략으로 구현됩니다. EchoLens는 의미는 유지하되 시각적 외형을 바꿔서, 사용자가 원본을 그대로 보지 않고도 요소의 의미를 이해하도록 돕습니다. DecoyLens는 특정 영역의 의미를 의도적으로 치환해, 장면의 일관성은 유지하면서도 예상 밖의 단서를 만들어냅니다. 두 전략을 함께 사용하면 전달 목적에 따라 명확성과 모호성의 균형을 조절할 수 있습니다.
    image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "EchoLens and DecoyLens offer two distinct pathways for anticipation-preserving transformation."

  - title: "How TwistLens Works"
    body_en: >-
      The pipeline follows four stages. First, the system receives an artwork image and a docent-style description. Second, it analyzes the text to extract interpretive targets such as object-level cues, stylistic characteristics, symbolic elements, and compositional structure. Third, text-guided segmentation locates the corresponding visual regions in the image. Finally, TwistLens applies either EchoLens or DecoyLens to selected regions according to design intent and information type. The resulting preview retains interpretive relevance while avoiding a direct visual spoiler.
    body_kr: >-
      시스템 파이프라인은 4단계로 구성됩니다. 첫째, 작품 이미지와 도슨트 설명 텍스트를 입력받습니다. 둘째, 텍스트를 분석해 객체 단서, 스타일 특성, 상징 요소, 구도 구조 등 해석에 중요한 타깃을 추출합니다. 셋째, 텍스트 유도 세그멘테이션으로 해당 시각 영역을 찾습니다. 넷째, 정보 유형과 디자인 의도에 따라 EchoLens 또는 DecoyLens를 적용합니다. 최종 프리뷰는 해석 가능성은 유지하면서 원본의 직접 노출은 피하도록 설계됩니다.
    image: "/projects/2026-twistlens/_[opt]teaser.jpg"
    caption: "Pipeline overview: input, semantic analysis, segmentation, and transformation."

  - title: "Co-Design with Art Enthusiasts"
    body_en: >-
      To refine the transformation behavior, we conducted a co-design study with art enthusiasts. Participants reviewed transformed previews before seeing the originals and reflected on spoiler prevention, visual comfort, and curiosity stimulation. The feedback showed that transformation preference depends on information type. For style-focused and symbolic cues, participants generally favored EchoLens because it preserved narrative coherence and artistic character. For object-focused cues, participants often preferred DecoyLens because targeted replacements prompted closer attention and motivated viewers to infer what the original might contain.
    body_kr: >-
      변형 전략을 정교화하기 위해 미술 애호가와 코디자인 연구를 진행했습니다. 참여자는 원본을 보기 전에 변형 프리뷰를 평가하고, 스포일러 방지, 시각적 편안함, 호기심 유발 측면에서 피드백을 제공했습니다. 결과적으로 선호 전략은 정보 유형에 따라 달랐습니다. 스타일 및 상징 중심 정보에는 EchoLens가 더 적합했고, 객체 중심 정보에는 DecoyLens가 더 높은 몰입과 추론을 유도했습니다.
    image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "Co-design feedback guided when to apply EchoLens versus DecoyLens."

  - title: "Evaluation in a Museum Scenario"
    body_en: >-
      We then evaluated TwistLens in a controlled scenario comparing two conditions: a baseline preview with original artwork images plus docent text, and a TwistLens preview with transformed images plus docent text. After exploring the preview materials, participants visited virtual exhibitions. Compared with the baseline, TwistLens increased pre-visit anticipation, raised curiosity, and produced stronger surprise upon encountering the original artworks. It also encouraged more active interpretation, as participants tended to compare the transformed preview, their own mental reconstruction, and the final original piece rather than consuming information passively.
    body_kr: >-
      이후 박물관 맥락의 통제 실험에서 두 조건을 비교했습니다. 기준 조건은 원본 이미지 + 도슨트 텍스트였고, 실험 조건은 TwistLens 변형 프리뷰 + 도슨트 텍스트였습니다. 참여자는 프리뷰 탐색 후 가상 전시를 관람했습니다. 기준 조건 대비 TwistLens는 방문 전 기대감과 호기심을 높였고, 원작을 마주했을 때 더 큰 놀라움을 유도했습니다. 또한 프리뷰-상상-원작을 비교하는 능동적 해석 행동을 촉진했습니다.
    image: "/projects/2026-twistlens/_[opt]teaser.jpg"
    caption: "TwistLens improved anticipation, curiosity, and interpretive engagement in evaluation."

  - title: "Design Implications"
    body_en: >-
      From these findings, we derive several implications for anticipation-preserving media design. Curated visibility appears more effective than complete hiding, because visitors still need interpretive anchors to engage meaningfully. Curiosity can be intentionally designed through calibrated information gaps rather than random distortion. For style and symbolic meaning, semantic reinterpretation is often preferable to blunt obfuscation. Finally, transformation intensity should be scale-aware, since small but meaningful elements may require stronger visual intervention to remain noticeable in preview contexts.
    body_kr: >-
      연구 결과를 바탕으로 anticipation-preserving 미디어 디자인 원칙을 제안합니다. 첫째, 완전한 비공개보다 선별적 가시화가 효과적입니다. 둘째, 무작위 왜곡이 아니라 조절된 정보 공백으로 호기심을 설계할 수 있습니다. 셋째, 스타일·상징 정보는 단순 은폐보다 의미 재해석이 바람직합니다. 넷째, 작은 핵심 요소는 프리뷰에서 눈에 띄도록 더 강한 변형이 필요할 수 있으므로 스케일 인지가 중요합니다.
    image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "Design principles focus on balancing interpretive clarity with controlled ambiguity."

  - title: "Beyond Museums"
    body_en: >-
      Although TwistLens was developed for museum visits, the same principle can extend to other domains where pre-exposure may reduce discovery. Educational content could use transformed previews to support hypothesis-building before full explanation. Tourism platforms could communicate atmosphere without disclosing exact scenes too early. Fine dining services could hint ingredients and concept while preserving surprise in final plating. Across these contexts, anticipation-preserving previews can function as a practical strategy for balancing understanding with curiosity.
    body_kr: >-
      TwistLens는 박물관 방문 맥락에서 개발되었지만, 사전 노출이 발견 경험을 약화시키는 다른 영역에도 확장 가능합니다. 교육에서는 정답 제시 전에 가설 형성을 유도할 수 있고, 관광에서는 장소의 분위기만 전달하며 핵심 장면 노출을 늦출 수 있습니다. 파인다이닝에서는 재료와 콘셉트만 암시하고 플레이팅의 놀라움을 보존할 수 있습니다. 즉 이해와 호기심의 균형을 설계하는 실용적 전략으로 활용될 수 있습니다.
    image: "/projects/2026-twistlens/_[opt]teaser.jpg"
    caption: "The anticipation-preserving preview concept can scale beyond museum experiences."

---
