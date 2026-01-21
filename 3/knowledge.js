export const curriculum = {
    "5": {
        "literature": [
            { code: "6국05-01", desc: "작품 속 인물의 생각과 행동을 통해 삶의 의미 이해하기", keywords: ["인물", "삶", "이해"] },
            { code: "6국05-02", desc: "작품에서 비유적 표현의 특성과 효과를 생각하며 읽기", keywords: ["비유", "표현"] }
        ],
        "informational": [
            { code: "6국02-01", desc: "글의 구조를 파악하며 요약하기", keywords: ["구조", "요약"] },
            { code: "6국02-02", desc: "대상을 설명하는 방법을 파악하며 읽기", keywords: ["설명", "방법"] }
        ],
        "persuasive": [
            { code: "6국02-03", desc: "글쓴이의 주장과 근거의 타당성을 판단하며 읽기", keywords: ["주장", "타당성"] }
        ]
    },
    "6": {
        "literature": [
            { code: "6국05-03", desc: "작품의 구성 요소를 이해하고 이야기 전체의 줄거리 파악하기", keywords: ["구성요소", "줄거리"] },
            { code: "6국05-04", desc: "작품에 나타난 글쓴이의 생각이나 가치를 비판적으로 이해하기", keywords: ["가치", "비판"] }
        ],
        "informational": [
            { code: "6국02-04", desc: "다양한 매체 자료를 활용하여 내용을 추론하며 읽기", keywords: ["매체", "추론"] },
            { code: "6국02-05", desc: "글의 내용과 자신의 배경지식을 비교하며 읽기", keywords: ["배경지식", "비교"] }
        ],
        "persuasive": [
            { code: "6국02-06", desc: "관점이나 의도를 파악하며 비판적으로 읽기", keywords: ["관점", "의도"] }
        ]
    }
};

export const strategies = {
    "inference": {
        name: "추론하며 읽기 (Inference)",
        desc: "글에 직접 드러나지 않은 내용을 단서와 배경지식을 통해 짐작하는 전략입니다.",
        activities: ["단서 찾기 게임", "탐정 놀이 (내가 셜록홈즈)", "빈칸 채우기"],
        phase: "DuringReading"
    },
    "summary": {
        name: "요약하기 (Summarizing)",
        desc: "글의 중심 내용을 찾고 이를 간추려 재구성하는 전략입니다.",
        activities: ["중요도 평점 매기기", "본문 내용 한 문장 만들기", "마인드맵 그리기"],
        phase: "AfterReading"
    },
    "questioning": {
        name: "질문 생성하기 (Question Generation)",
        desc: "읽기 전, 중, 후에 스스로 질문을 만들어 답을 찾아가는 전략입니다.",
        activities: ["Q&A 카드 만들기", "작가 인터뷰 질문 짜기", "꼬리에 꼬리를 무는 질문"],
        phase: "DuringReading"
    },
    "critical": {
        name: "비판적 읽기 (Critical Reading)",
        desc: "글쓴이의 의도, 관점, 자료의 신뢰성을 판단하며 읽는 전략입니다.",
        activities: ["찬반 토론", "신호등 토론 (타당성 판단)", "광고 속 숨은 의도 찾기"],
        phase: "AfterReading"
    },
    "kwl": {
        name: "KWL 표 작성",
        desc: "아는 것(K), 알고 싶은 것(W), 배운 것(L)을 정리하는 전략입니다.",
        activities: ["KWL 차트 채우기"],
        phase: "BeforeReading"
    },
    "prediction": {
        name: "예측하기 (Prediction)",
        desc: "제목, 그림 등을 보고 이어질 내용을 미리 짐작해보는 전략입니다.",
        activities: ["표지 보고 내용 맞히기", "다음 장면 상상해서 그리기"],
        phase: "BeforeReading"
    }
};

export const gagneFlow = [
    { id: "intro", label: "도입", events: ["주의 획득", "수업 목표 제시", "선수학습 상기"] },
    { id: "body", label: "전개", events: ["자극 자료 제시", "학습 안내", "성취 수행 유도"] },
    { id: "conclusion", label: "정리", events: ["피드백 제공", "수행 평가", "파지 및 전이"] }
];
