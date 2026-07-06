---
title: "PoseMate: AI-Generated Socially Driven Pose Guidance for Gen Z Photo-Taking"
title_official: "PoseMate: A Conceptual Framework for AI-Generated Socially Driven Pose Guidance for Gen Z Photo-Taking"
date: 2026-05-31
publishDate: 2026-05-31
draft: false

# 목록 카드
# ["XR", "AI", "Physical AI", "UX", "Embodied Interaction", "Digital Human" ,"Digital Twin" , "Convergence", "Interaction Design", "Digital Creativity","System", "Visualization", "User Study", "Cultural Technology",  "User-centered Design", "Marketing", "Patent"]
category: ["AI", "UX", "Convergence", "Interaction Design", "System", "Visualization", "User Study", "User-centered Design", "Marketing"]
image: "/projects/2026-posemate/_[opt]teaser.webp"
metacontent: "PoseMate explores how AI can support Gen Z photo-taking by turning socially shared pose trends into controllable, privacy-aware guidance. Rather than recommending a universal best pose, it helps users build meaningful reference sets from filtered social media photos and translate recurring pose patterns into interpretable prompts."
description: "PoseMate project page: Archives of Design Research (AoDR) 2026 paper on AI-generated socially driven pose guidance for Gen Z photo-taking by Nur Izzatty Binti Mohamad Jamal and Bokyung Lee."
keywords: ["AI in photo-taking", "AI for FoMO", "socially-driven AI guide" ,"pose guidance", "pose trends", "Gen Z", "social media", "photo filtering"]
shortkeys: ["Gen Z photo AI", "social pose intelligence", "privacy-aware guidance", "trend-driven UX"]

# 상세 상단 메타
conference: "Archives of Design Research / 2026"
conference_full: "Archives of Design Research (AoDR), 39(2), 77-95 (2026)"
researcher: "Nur Izzatty Binti Mohamad Jamal, Bokyung Lee"
summary: "Gen Z spends substantial time on social media and often experiences fear of missing out (FoMO), motivating them to align everyday decisions, including photo-taking, with socially visible trends. While recent design and human-computer interaction (HCI) research has examined socially driven decision support, how such support should be designed to support Gen Z's expressive photo-taking remains underexplored. We conducted a formative study to examine Gen Z's photo-taking practices and their reliance on socially shared visual references. Building on these insights, we introduced PoseMate, a conceptual artificial intelligence (AI) photo-taking assistant that frames posture trends from social media as designable knowledge. Then, we conducted a participatory design study to inform PoseMate's initial analytic workflow, focusing on how Gen Z expects AI to curate the input photo set from which pose trends are derived. The studies showed that Gen Z prefers socially shared, user-generated pose references over expert-driven, rule-based guidance, and that pose trends become meaningful only when derived from carefully filtered photo sets rather than all available images. In the participatory study, participants articulated key filtering dimensions that shape how socially driven pose trends are constructed and interpreted, suggesting design strategies for AI-supported pose-trend guidance generation. This work contributes empirical and design insights into socially inspired photo-taking in Gen Z and reframes photo filtering as a trend-making infrastructure for socially driven pose-guidance systems. By foregrounding user-controllable photo set construction, PoseMate shifts AI support away from prescribing \"best\" poses toward enabling interpretable, socially grounded pose references derived from shared visual practices."
citation: "Nur Izzatty Binti Mohamad Jamal and Bokyung Lee. (2026). **PoseMate: A Conceptual Framework for AI-Generated Socially Driven Pose Guidance for Gen Z Photo-Taking**. _Archives of Design Research (AoDR)_, 39(2), 77-95. http://dx.doi.org/10.15187/adr.2026.05.39.2.77"
acknowledgement: "This work was supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government (MSIT) [RS-2024-00340828]."

# 버튼 링크
links:
  - label: "Paper"
    link: "http://dx.doi.org/10.15187/adr.2026.05.39.2.77"
  - label: "PDF"
    link: "/papers/2026-PoseMate.pdf"

section_rows:
  - layout: "image_only"
    image: "/projects/2026-posemate/system.webp"
    caption: "PoseMate conceptualizes AI pose guidance as a pipeline from user-controllable photo filtering to anonymized pose analysis and socially grounded pose recommendations."

  - title: "Socially Driven Photo-Taking"
    body_en: >-
      PoseMate starts from a simple observation: for Gen Z, taking photos is not only about recording a moment, but also about participating in a shared visual culture. Social media makes certain poses, places, and moods highly visible, and young people often use these images as references when deciding how they want to appear. Existing photo-taking assistants usually focus on technical quality, such as framing, composition, or expert-defined posing rules. This project instead asks how AI can support photo-taking when the goal is not simply to make a technically good image, but to help users interpret socially meaningful pose trends and adapt them to their own situation.
    body_kr: >-
      PoseMate는 Gen Z에게 사진 촬영이 단순한 기록을 넘어선다는 점에서 출발합니다. 사진은 소셜 미디어에 올라가고, 친구들에게 보이며, 때로는 특정 분위기나 트렌드에 참여하는 방식이 됩니다. 그래서 포즈도 단순히 몸을 어떻게 둘지의 문제가 아닙니다. 자신감, 소속감, 유머, 스타일을 보여주는 하나의 시각적 언어가 될 수 있습니다. 하지만 기존 사진 보조 시스템은 주로 구도나 프레이밍, 전문가가 정한 좋은 포즈처럼 기술적인 기준을 중심으로 작동합니다. PoseMate는 여기서 질문을 바꿉니다. 좋은 사진을 만들어주는 AI가 아니라, 사용자가 사회적으로 의미 있는 포즈 트렌드를 이해하고 자신의 촬영 상황에 맞게 활용하도록 돕는 AI는 어떤 모습이어야 할까요?
    image:
    caption: "PoseMate reframes pose guidance around socially meaningful visual references."

  - title: "The Difficulty of Reading Pose Trends"
    body_en: >-
      In the formative study, participants described using social media photos as practical pose references, especially in travel contexts. They looked through Instagram, Pinterest, and other platforms to understand what kinds of photos people commonly take at a place. However, this was not a straightforward copying process. Participants had to browse many images, infer repeated pose patterns, judge whether a pose suited their body, clothing, preferences, or group, and then adapt it to real-world constraints such as lighting, crowds, and spatial layout. The study shows that the challenge is not a lack of reference images, but the difficulty of making sense of them.
    body_kr: >-
      형성 연구에서 참여자들은 여행지에서 사진을 찍기 전 소셜 미디어를 자주 살펴본다고 말했습니다. 인스타그램이나 핀터레스트에서 사람들이 어떤 장소에서 어떤 포즈를 취하는지 보고, 그중 자신의 사진에 참고할 만한 이미지를 찾는 것입니다. 하지만 이 과정은 마음에 드는 사진 하나를 골라 그대로 따라 하는 것처럼 단순하지 않았습니다. 수많은 이미지를 넘겨 보며 반복되는 포즈를 스스로 파악해야 했고, 그 포즈가 자신의 체형이나 옷차림, 함께 찍는 사람, 촬영 장소에 어울리는지도 판단해야 했습니다. 실제 현장에서는 조명, 사람 수, 공간 배치도 달라지기 때문에 레퍼런스를 그대로 재현하기 어렵습니다. 결국 필요한 것은 더 많은 이미지가 아니라, 이미지를 읽고 정리하고 내 상황에 맞게 해석할 수 있는 지원이었습니다.
    image: "/projects/2026-posemate/background.webp"
    caption: "Gen Z users already rely on social media references, but interpreting pose trends requires effort."

  - title: "PoseMate Concept"
    body_en: >-
      PoseMate is proposed as a conceptual AI workflow that treats pose trends from social media as designable knowledge. The workflow begins by constructing a photo set through user-controllable filtering, rather than assuming that all available social media photos are equally meaningful. It then abstracts posture information into skeleton-based representations to reduce reliance on identifiable visual details, and identifies recurring pose patterns through pose similarity or clustering. The central idea is that pose trends are not simply extracted from a large dataset. They become meaningful through the way users and AI construct the input photo set before analysis begins.
    body_kr: >-
      PoseMate는 소셜 미디어 속 포즈 트렌드를 AI가 다룰 수 있는 지식으로 바꾸는 개념적 워크플로우입니다. 여기서 중요한 점은 모든 사진을 똑같이 분석하지 않는다는 것입니다. 먼저 사용자가 촬영 목적이나 맥락에 맞게 참고할 사진 집합을 좁힙니다. 그다음 시스템은 사진 속 인물을 그대로 분석하기보다 스켈레톤 형태의 포즈 정보로 추상화해 개인정보 노출을 줄이고, 유사한 포즈가 반복되는 패턴을 찾아냅니다. PoseMate가 말하는 트렌드는 거대한 데이터셋 어딘가에 이미 정해져 있는 답이 아닙니다. 어떤 사진을 참고 대상으로 삼을지 사용자가 어떻게 고르고 걸러내는지에 따라 트렌드의 의미가 달라집니다.
    image:
    caption: "PoseMate turns filtered photo sets into privacy-aware pose patterns and interpretable guidance."

  - title: "Filtering as Trend-Making"
    body_en: >-
      The participatory design study examined how Gen Z expects AI to curate the photo set behind pose guidance. Participants reviewed Instagram photos from two travel destinations and discussed which images felt relevant, inspiring, or worth following. Their responses showed that filtering is not just a technical preprocessing step. It is the place where pose trends become visible, trustworthy, and usable. Participants wanted filtering to consider social metadata such as likes and hashtags, environmental context such as season or weather, human representations such as clothing, body type, and group size, and micro-locations within a destination. These criteria shape not only which photos are selected, but also what counts as a meaningful trend.
    body_kr: >-
      참여 디자인 연구에서는 AI가 어떤 사진을 참고해야 포즈 가이드가 더 유용해질지 함께 살펴보았습니다. 참여자들은 두 여행지의 인스타그램 사진을 보며 어떤 이미지는 참고할 만하고, 어떤 이미지는 제외하고 싶은지 이야기했습니다. 이 과정에서 필터링은 단순히 사진을 검색하거나 정리하는 단계가 아니라는 점이 드러났습니다. 어떤 사진을 남기고 어떤 사진을 빼느냐에 따라 보이는 포즈 트렌드 자체가 달라지기 때문입니다. 참여자들은 좋아요 수와 해시태그, 계절과 날씨, 옷차림과 체형, 함께 찍는 사람 수, 촬영 지점처럼 여러 기준이 반영되길 원했습니다. 이런 기준들은 포즈가 유행처럼 보이는지, 내 상황에 맞는지, 실제로 따라 할 수 있는지를 함께 결정합니다.
    image: "/projects/2026-posemate/_[opt]teaser.webp"
    caption: "Filtering defines which pose trends become visible, relevant, and actionable."

  - title: "Design Implications"
    body_en: >-
      PoseMate reframes AI photo-taking assistance as a form of social sensemaking. Rather than telling users the single best pose, AI can help them understand which pose references matter, why they feel relevant, and how they can be adapted. The paper's key design implication is to treat filtering as trend-making infrastructure. Filtering constructs social legitimacy, supports expressive intent, situates trends in context, and negotiates whether a pose feels attainable for a particular body, outfit, group, or place. Because the system relies on socially shared visual data, the paper also emphasizes ethical design directions, including user-controllable data construction, skeletonized pose representations, and privacy-aware processing.
    body_kr: >-
      PoseMate의 핵심은 AI 사진 보조를 정답 추천이 아니라 의미 해석의 문제로 본다는 데 있습니다. AI가 "이 포즈가 가장 좋다"고 말하는 대신, 사용자가 어떤 레퍼런스를 왜 참고하고 싶은지 이해하고, 그것을 자신의 몸과 옷차림, 함께 찍는 사람, 장소에 맞게 바꿔볼 수 있도록 도와야 한다는 것입니다. 따라서 이 논문에서 필터링은 단순한 전처리가 아니라 트렌드를 만드는 기반이 됩니다. 어떤 사진을 포함하느냐에 따라 사회적으로 그럴듯한 포즈, 표현하고 싶은 분위기, 실제로 가능한 포즈의 범위가 달라집니다. 동시에 소셜 미디어 사진을 다루는 만큼, 사용자가 데이터 구성을 조절할 수 있어야 하고, 식별 가능한 이미지보다 스켈레톤 기반 포즈 표현과 프라이버시를 고려한 처리 방식이 중요합니다.
    image:
    caption: "PoseMate shifts AI pose guidance from prescribing best poses to supporting user-controllable trend construction."
---
