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
description: "TwistLens project page: CHI 2026 paper on anticipation-preserving, docent-informed image previews for museum experiences by Thao Phuong Vu and Bokyung Lee."
keywords: ["TwistLens", "CHI 2026", "museum preview", "anticipation-preserving", "docent-informed", "image transformation", "Bokyung Lee", "CXD Lab"]

# 상세 상단 메타
conference: "ACM CHI / 2026"
conference_full: "ACM CHI Conference on Human Factors in Computing Systems (2026)"
researcher: "Thao Phuong Vu, Bokyung Lee"
summary: "Pre-visit information can enrich museum experiences, yet creates a dilemma: text-only descriptions can overwhelm without visual anchors, while viewing artworks in advance can spoil surprise. To address this tension, we introduce _TwistLens_, a docent-informed, AI-supported image transformation system that generates twisted _previews_--transformed images that convey interpretive cues while concealing original visuals. TwistLens extracts key cues from docent text using a _structured taxonomy_, then applies two strategies: _EchoLens_, which preserves intended description while altering representation, and _DecoyLens_, which distorts described information while maintaining representational coherence. A co-design study identified strategy preferences by information type, informing category-specific refinements. A controlled evaluation further showed that TwistLens preserves _anticipation_, triggers _curiosity_, and supports _active learning_ without visual spoil. These findings demonstrate how semantically-aware image transformation can balance knowledge delivery and anticipation in museum contexts."
#citation: "Thao Phuong Vu and Bokyung Lee. (2026). TwistLens: A Docent-Informed Image #Transformation to Create Previews That Prompt Anticipation and Interpretive Experiences Before Museum Visits. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)."
acknowledgement: "This work was supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government (MSIT) [RS-2024-00340828]. "

# 버튼 링크
links:
  - label: "Paper"
    link: "https://doi.org/10.1145/3772318.3790352"
  - label: "PDF"
    link: "/papers/2026-TwistLens.pdf"

# To embed videos at the bottom-left (col-8), add:
video_embeds:
   - url: "https://youtu.be/ggtlLv9Wabc"
     title: "Optional iframe title"
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
      Before visiting a museum, people often check exhibition previews on museum websites. These previews usually include a short description and an image of the artwork. Both help visitors understand the exhibition, but they also create a dilemma. Text descriptions explain the meaning of the artwork but are difficult to visualize, while images are easy to understand but may reveal too much and weaken the sense of discovery. This raises a question: can previews help visitors understand artworks without spoiling the experience?
    body_kr: >-
      많은 관람객은 전시장에 실제로 방문하기 전에 전시 웹사이트나 온라인 페이지에 있는 프리뷰를 먼저 확인한다. 이러한 프리뷰는 보통 작품을 설명하는 텍스트와 작품 이미지를 함께 제공한다. 두 방식 모두 전시를 이해하는 데 도움을 주지만 동시에 하나의 딜레마를 만든다. 텍스트 설명은 작품의 의미와 맥락을 전달하지만 시각적으로 구체적으로 상상하기 어렵다. 반대로 작품 이미지는 한눈에 이해하기 쉽지만 원본을 미리 노출하여 실제 관람에서의 발견의 즐거움을 약화시킬 수 있다. 그렇다면 작품을 너무 일찍 보여주지 않으면서도 관람객의 이해를 도울 수 있는 프리뷰는 가능할까?
    image: "/projects/2026-twistlens/web_goal.jpg"
    caption: 

  - title: "TwistLens System: Workflow"
    body_en: >-
      To address this dilemma, we developed TwistLens, a system that generates transformed preview images based on docent descriptions. The system takes an artwork image and its accompanying text as input and analyzes the key visual information described in the text. It then identifies the corresponding regions in the image and selectively transforms those parts while keeping the overall scene intact. Through this process, TwistLens produces previews that provide interpretive cues without revealing the original artwork too early.
    body_kr: >-
      이러한 딜레마를 해결하기 위해 TwistLens라는 시스템을 개발하였다. TwistLens는 도슨트 설명 텍스트를 기반으로 변형된 프리뷰 이미지를 생성하는 시스템이다. 시스템은 먼저 작품 이미지와 설명 텍스트를 입력으로 받아 텍스트에서 언급된 핵심 시각 정보를 분석한다. 이후 텍스트에서 설명된 요소가 이미지의 어느 영역에 해당하는지 식별한다. 그리고 전체 장면의 구조와 맥락은 유지한 채 특정 영역만 선택적으로 변형한다. 이러한 과정을 통해 TwistLens는 원본 작품을 그대로 노출하지 않으면서도 해석에 필요한 단서를 전달하는 프리뷰를 생성한다.
    image: "/projects/2026-twistlens/web_workflow.png"
    caption: "Twisted previews preserve interpretive cues while withholding exact visual details."

  #- layout: "image_only"
  #image: "/projects/2026-twistlens/web_workflow.png"
  #  #caption: "Image-only row example inserted between sections on the TwistLens page."


  - title: "TwistLens System: Strategies"
    body_en: >-
      TwistLens generates previews using two transformation strategies: EchoLens and DecoyLens. EchoLens preserves the semantic meaning of an element while changing its visual appearance. This allows viewers to sense the intended information without seeing the original form. DecoyLens, in contrast, intentionally replaces or distorts a specific element while keeping the overall scene coherent. This visual mismatch draws attention and stimulates curiosity. Together, these strategies balance interpretation and anticipation.
    body_kr: >-
      TwistLens는 EchoLens와 DecoyLens라는 두 가지 변형 전략을 사용하여 프리뷰 이미지를 생성한다. EchoLens는 텍스트에서 설명된 요소의 의미는 유지하면서 시각적 표현만 변화시키는 전략이다. 이를 통해 관람객은 원본 형태를 직접 보지 않더라도 해당 요소의 특성과 정보를 파악할 수 있다. 반면 DecoyLens는 특정 요소의 의미를 의도적으로 다른 것으로 바꾸거나 왜곡하면서도 전체 장면의 구조는 유지한다. 이러한 시각적 불일치는 관람객의 주의를 끌고 자연스럽게 호기심을 유도한다. 두 전략은 서로 다른 방식으로 작동하지만 함께 사용될 때 이해를 돕는 동시에 기대감을 유지하는 프리뷰를 만든다.
    image: "/projects/2026-twistlens/_[opt]teaser.webp"
    caption: "EchoLens and DecoyLens offer two distinct pathways for anticipation-preserving transformation."

  - title: "Co-Design with Art Enthusiasts"
    body_en: >-
      To refine the transformation strategies, we conducted a co-design study with art enthusiasts. Participants explored various transformed previews and shared their interpretations before seeing the original artworks. After the original images were revealed, they discussed how the previews influenced their expectations and curiosity. Through this process, we identified when each strategy works best for different types of information. These insights helped refine the transformation rules used in TwistLens.
    body_kr: >-
      변형 전략을 정교하게 설계하기 위해 예술 감상 경험이 있는 참여자들과 함께 코디자인 연구(co-design study)를 수행하였다. 참여자들은 다양한 변형 프리뷰 이미지를 먼저 살펴보고 원본 작품을 보기 전에 자신의 해석과 추측을 공유하였다. 이후 실제 작품 이미지를 확인한 뒤 프리뷰가 기대감과 호기심에 어떤 영향을 미쳤는지 논의하였다. 이러한 과정을 통해 어떤 유형의 정보에 어떤 변형 전략이 효과적인지 파악하였다. 이 연구에서 얻은 인사이트는 TwistLens의 변형 규칙을 개선하고 시스템을 정교화하는 데 활용되었다.
    image: 
    caption: "Pipeline overview: input, semantic analysis, segmentation, and transformation."

  - title: "Evaluation Study in-the-wild"
    body_en: >-
      We then conducted an evaluation study to examine how TwistLens influences museum experiences. Participants explored two types of previews: a baseline version with original images and a TwistLens version with transformed previews. After viewing the previews, they visited the exhibition and reported their experiences. The results showed that TwistLens increased anticipation and curiosity before the visit. It also helped preserve surprise when participants encountered the original artworks.
    body_kr: >-
      이후 TwistLens가 전시 경험에 어떤 영향을 미치는지 평가하기 위해 두가지의 갤러리 환경에서 사용자 평가 연구를 수행하였다. 참여자들은 먼저 두 가지 유형의 전시 프리뷰를 살펴보았다. 하나는 원본 작품 이미지를 그대로 보여주는 기본 프리뷰이고 다른 하나는 TwistLens가 생성한 변형 프리뷰이다. 프리뷰를 확인한 뒤 전시를 관람하고 자신의 경험을 평가하였다. 연구 결과 TwistLens 프리뷰는 관람 전에 기대감과 호기심을 높이는 효과가 나타났다. 또한 실제 작품을 마주했을 때의 놀라움과 발견의 경험을 더 잘 유지하는 것으로 나타났다.
    image: 
    caption: "TwistLens improved anticipation, curiosity, and interpretive engagement in evaluation."

  - title: "Design Implications"
    body_en: >-
      Based on our findings, we propose design principles for anticipation-preserving media using AI image transformation. First, selective visibility can be more effective than complete concealment, since showing a few interpretive cues helps viewers stay oriented. Second, curiosity can be designed through controlled information gaps rather than random distortions. Third, for stylistic or symbolic information, semantic reinterpretation works better than simple concealment. Finally, scale-aware transformation is important, as small key elements may need stronger visual changes.
    body_kr: >-
      연구 결과를 바탕으로 우리는 AI image transformation 테크닉이 anticipation-preserving 미디어에 활용될 수 있는 디자인 원칙을 제안한다. 첫째, 완전히 숨기는 방식보다 선별적 가시화가 더 효과적일 수 있으며, 일부 해석 단서를 보여주는 것이 관람객이 맥락을 이해하면서도 기대감을 유지하도록 돕는다. 둘째, 호기심은 무작위 왜곡이 아니라 조절된 정보 공백을 통해 설계될 수 있다. 셋째, 스타일이나 상징과 같은 정보는 단순히 가리는 것보다 의미 재해석 방식이 더 효과적이다. 마지막으로, 작은 핵심 요소는 쉽게 눈에 띄지 않을 수 있으므로 스케일을 고려한 시각적 변형이 중요하다.
    image: 
    caption: "Design principles focus on balancing interpretive clarity with controlled ambiguity."

  - title: "Beyond Museums"
    body_en: >-
      TwistLens can extend to other domains where early exposure may reduce discovery. In education, transformed previews can encourage learners to form hypotheses before full explanations. In tourism, platforms may convey the atmosphere of a place while delaying key scenes. In fine dining, previews can hint at ingredients and concepts while preserving surprise in the final plating. Across these contexts, anticipation-preserving previews can help balance understanding with curiosity.
    body_kr: >-
      TwistLens는 박물관 방문 맥락에서 개발되었지만, 사전 노출이 발견 경험을 약화시키는 다른 영역에도 적용할 수 있다. 예를 들어 교육에서는 전체 설명을 제시하기 전에 변형된 프리뷰를 통해 학습자가 먼저 가설을 세우도록 유도할 수 있다. 관광에서는 장소의 분위기만 전달하면서 핵심 장면의 노출 시점을 늦출 수 있다. 파인다이닝에서는 재료와 콘셉트를 암시하면서도 최종 플레이팅의 놀라움을 유지할 수 있다. 이러한 맥락에서 anticipation-preserving 프리뷰는 이해와 호기심 사이의 균형을 설계하는 실용적인 전략으로 활용될 수 있다.
    image: 
    caption: "The anticipation-preserving preview concept can scale beyond museum experiences."

---
