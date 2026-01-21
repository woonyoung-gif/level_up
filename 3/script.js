const curriculum = {
    "1": {
        "literature": [
            { code: "2국05-01", desc: "그림책을 읽고 상상력을 발휘하여 이야기하기", keywords: ["그림책", "상상"] },
            { code: "2국05-02", desc: "시나 노래의 재미를 느끼며 소리 내어 읽기", keywords: ["소리내어읽기", "리듬"] }
        ],
        "informational": [
            { code: "2국02-01", desc: "글자, 낱말, 문장을 정확하게 소리 내어 읽기", keywords: ["해독", "정확성"] },
            { code: "2국02-02", desc: "글을 읽고 주요 내용을 확인하기", keywords: ["내용확인", "사실적이에"] }
        ],
        "persuasive": [
            { code: "2국02-03", desc: "글쓴이의 생각이나 느낌을 파악하며 읽기", keywords: ["생각", "느낌"] }
        ]
    },
    "2": {
        "literature": [
            { code: "2국05-03", desc: "인물의 모습, 행동, 마음을 상상하며 읽기", keywords: ["인물", "상상"] },
            { code: "2국05-04", desc: "말의 재미를 느끼며 시나 이야기를 읽기", keywords: ["말놀이", "재미"] }
        ],
        "informational": [
            { code: "2국02-04", desc: "문장과 문장 사이의 관계를 알기", keywords: ["문장관계", "연결"] },
            { code: "2국02-05", desc: "설명하는 대상을 확인하며 글 읽기", keywords: ["설명대상", "확인"] }
        ],
        "persuasive": [
            { code: "2국02-06", desc: "누가 무엇을 했는지 확인하며 글 읽기", keywords: ["육하원칙", "사실확인"] }
        ]
    },
    "3": {
        "literature": [
            { code: "4국05-01", desc: "시각적 표현이나 감각적 표현에 주의하며 읽기", keywords: ["감각", "표현"] },
            { code: "4국05-02", desc: "인물의 성격을 짐작하며 이야기 읽기", keywords: ["성격", "짐작"] }
        ],
        "informational": [
            { code: "4국02-01", desc: "문단과 문단의 중심 내용을 파악하기", keywords: ["문단", "중심내용"] },
            { code: "4국02-02", desc: "글의 전개 방식(시간 순서 등)을 파악하기", keywords: ["전개방식", "순서"] }
        ],
        "persuasive": [
            { code: "4국02-03", desc: "글쓴이의 의견을 파악하며 읽기", keywords: ["의견", "주장"] }
        ]
    },
    "4": {
        "literature": [
            { code: "4국05-03", desc: "작품 속 배경이나 사건의 전개를 파악하기", keywords: ["배경", "사건"] },
            { code: "4국05-04", desc: "이어질 내용을 상상하여 쓰거나 말하기", keywords: ["상상", "뒷이야기"] }
        ],
        "informational": [
            { code: "4국02-04", desc: "사실과 의견을 구별하며 읽기", keywords: ["사실", "의견"] },
            { code: "4국02-05", desc: "자료를 찾아 읽고 내용을 요약하기", keywords: ["자료검색", "요약"] }
        ],
        "persuasive": [
            { code: "4국02-06", desc: "제안하는 글을 읽고 타당성 판단하기", keywords: ["제안", "타당성"] }
        ]
    },
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

const strategies = {
    "read_aloud": {
        name: "소리 내어 읽기 (Reading Aloud)",
        desc: "글자, 소리, 뜻을 연결하며 정확하게 읽는 전략",
        activities: ["선생님 따라 읽기", "돌아가며 읽기", "역할극 하며 읽기"],
        phase: "DuringReading"
    },
    "picture_walk": {
        name: "그림 읽기 (Picture Walk)",
        desc: "그림만 보고 내용을 상상하거나 이야기하는 전략",
        activities: ["그림 보고 퀴즈", "숨은 그림 찾기", "장면 상상하기"],
        phase: "BeforeReading"
    },
    "inference": {
        name: "추론하며 읽기",
        desc: "글에 드러나지 않은 내용을 짐작하기",
        activities: ["단서 찾기 게임", "탐정 놀이", "빈칸 채우기"],
        phase: "DuringReading"
    },
    "prediction": {
        name: "예측하기",
        desc: "제목, 그림을 보고 내용 짐작하기",
        activities: ["표지 보고 내용 맞히기", "뒷이야기 상상하기"],
        phase: "BeforeReading"
    },
    "kwl": {
        name: "KWL 표 작성",
        desc: "아는 것, 알고 싶은 것, 배운 것 정리",
        activities: ["KWL 차트 채우기"],
        phase: "BeforeReading"
    },
    "questioning": {
        name: "질문 생성하기",
        desc: "스스로 질문을 만들어 답 찾기",
        activities: ["Q&A 카드 만들기", "거꾸로 질문하기"],
        phase: "DuringReading"
    },
    "summary": {
        name: "요약하기",
        desc: "중심 내용을 간추려 재구성하기",
        activities: ["핵심 단어 찾기", "한 문장 요약", "마인드맵"],
        phase: "AfterReading"
    },
    "critical": {
        name: "비판적 읽기",
        desc: "관점, 의도, 타당성 판단하기",
        activities: ["신호등 토론", "광고 의도 파악하기"],
        phase: "AfterReading"
    },
    "structuring": {
        name: "구조 파악하기",
        desc: "글의 짜임(처음-중간-끝) 분석하기",
        activities: ["도해 조직자 그리기", "문단 나누기"],
        phase: "DuringReading"
    },
    "monitoring": {
        name: "점검하며 읽기",
        desc: "이해했는지 스스로 확인하기",
        activities: ["이해 신호등 표시", "다시 읽기"],
        phase: "DuringReading"
    }
};

const gagne9Events = [
    { id: 1, label: "주의 획득", phase: "BeforeReading", defaultAct: "흥미 유발 질문 또는 자료 제시" },
    { id: 2, label: "학습 목표 제시", phase: "BeforeReading", defaultAct: "공부할 문제 확인하기" },
    { id: 3, label: "선수학습 상기", phase: "BeforeReading", defaultAct: "관련된 경험이나 지식 떠올리기" },
    { id: 4, label: "자극 자료 제시", phase: "DuringReading", defaultAct: "본문 읽기 및 자료 탐색" },
    { id: 5, label: "학습 안내", phase: "DuringReading", defaultAct: "이해를 돕는 설명이나 질문" },
    { id: 6, label: "성취 수행 유도", phase: "AfterReading", defaultAct: "배운 내용을 활용하여 연습하기" },
    { id: 7, label: "피드백 제공", phase: "AfterReading", defaultAct: "활동에 대한 칭찬 및 교정" },
    { id: 8, label: "수행 평가", phase: "AfterReading", defaultAct: "오늘 배운 내용 확인하기" },
    { id: 9, label: "파지 및 전이", phase: "AfterReading", defaultAct: "생활 속에서 실천 다짐하기" }
];

// Chat State
const state = {
    step: 'INIT', // INIT, GRADE, TOPIC, TYPE, SELECT_STRATEGY, DONE
    grade: '',
    textType: '',
    topic: '',
    selectedStrategies: [], // Array of strategy objects
    selectionTemp: [] // Temporary storage for checkboxes
};

// DOM Elements
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Initial Greeting
window.onload = () => {
    addBotMessage("안녕하세요! <strong>초등 전 학년(1~6학년)</strong> 대상 독서 수업 설계를 도와드립니다.<br>먼저, 수업 대상 <strong>학년</strong>이 어떻게 되나요?");
    addOptions(["1학년", "2학년", "3학년", "4학년", "5학년", "6학년"]);
};

// Event Listeners
sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    addUserMessage(text);
    userInput.value = '';

    setTimeout(() => {
        processInput(text);
    }, 500);
}

function processInput(text) {
    // Global Back Button Logic
    if (text === "뒤로 가기" || text === "학년 다시 선택하기") {
        state.step = 'INIT';
        state.grade = '';
        addBotMessage("학년 선택 화면으로 돌아갑니다.<br>수업 대상 <strong>학년</strong>을 다시 선택해주세요.");
        addOptions(["1학년", "2학년", "3학년", "4학년", "5학년", "6학년"]);
        return;
    }

    switch (state.step) {
        case 'INIT':
            // Simple parsing for 1~6
            const match = text.match(/[1-6]/);
            if (match) {
                state.grade = match[0];
            } else {
                addBotMessage("1학년부터 6학년 사이에서 선택해주세요.");
                addOptions(["1학년", "2학년", "3학년", "4학년", "5학년", "6학년"]);
                return;
            }
            state.step = 'TOPIC';
            addBotMessage(`${state.grade}학년이군요! 이번 수업에서 다룰 <strong>책 제목</strong>이나 <strong>주제</strong>가 무엇인가요?`);
            addOptions(["학년 다시 선택하기"]); // Add back button here
            break;

        case 'TOPIC':
            state.topic = text;
            state.step = 'TYPE';
            // Customize prompt slightly based on grade
            if (state.grade <= 2) {
                addBotMessage("어떤 종류의 글인가요? (1-2학년은 주로 이야기나 그림책이 많습니다)");
                addOptions(["이야기 (문학, 그림책)", "설명하는 글 (지식)", "생각을 나타낸 글"]);
            } else {
                addBotMessage("글의 종류는 무엇인가요?");
                addOptions(["문학 (이야기, 시)", "정보 전달 (설명문)", "설득 (논설문/연설문)"]);
            }
            break;

        case 'TYPE':
            if (text.includes('문학') || text.includes('이야기') || text.includes('그림')) state.textType = 'literature';
            else if (text.includes('정보') || text.includes('설명') || text.includes('지식')) state.textType = 'informational';
            else if (text.includes('설득') || text.includes('논설') || text.includes('생각') || text.includes('연설')) state.textType = 'persuasive';
            else {
                addBotMessage("글의 종류를 다시 선택해주세요.");
                return;
            }
            showStrategySelector();
            break;

        case 'DONE':
            if (text.includes('처음')) {
                location.reload();
            }
            break;
    }
}

function showStrategySelector() {
    state.step = 'SELECT_STRATEGY';
    state.selectionTemp = [];

    // Filter useful strategies based on grade and difficulty
    // e.g. 'read_aloud', 'picture_walk' are good for low grades
    // 'critical', 'structuring' are better for high grades

    let recs = [];
    const grade = parseInt(state.grade);

    // Simple Recommendation Logic
    if (grade <= 2) {
        recs = ['read_aloud', 'picture_walk', 'prediction', 'questioning'];
    } else if (grade <= 4) {
        recs = ['summary', 'inference', 'structuring', 'questioning', 'kwl'];
    } else {
        recs = ['critical', 'summary', 'inference', 'monitoring', 'questioning', 'kwl'];
    }

    // Sort keys so recommended ones come first
    const allKeys = Object.keys(strategies).sort((a, b) => {
        const aRec = recs.includes(a);
        const bRec = recs.includes(b);
        return bRec - aRec; // true (1) comes first
    });

    let html = `<div style="margin-bottom:10px;">${grade}학년에 적합한 전략을 상단에 표시했습니다.<br>수업에 활용할 전략을 모두 선택해주세요.</div>`;
    html += `<div class="strategy-list">`;

    allKeys.forEach(key => {
        const s = strategies[key];
        const isRec = recs.includes(key);
        html += `
            <label class="strategy-item" style="${isRec ? 'border-left: 4px solid var(--primary);' : ''}">
                <input type="checkbox" value="${key}" onchange="toggleStrategy(this)">
                <div class="s-info">
                    <span class="s-name">
                        ${s.name} 
                        ${isRec ? '<span style="font-size:0.7em; color:#fff; background:var(--primary); padding:2px 6px; border-radius:10px; margin-left:5px;">추천</span>' : ''}
                    </span>
                    <span class="s-desc">${s.desc}</span>
                </div>
            </label>
        `;
    });
    html += `</div>`;
    html += `<button class="action-btn" onclick="finishSelection()">선택 완료 및 지도안 생성</button>`;

    addBotMessage(html);
}

// Global function for checkbox interaction
window.toggleStrategy = function (el) {
    if (el.checked) {
        state.selectionTemp.push(el.value);
    } else {
        state.selectionTemp = state.selectionTemp.filter(k => k !== el.value);
    }
};

window.finishSelection = function () {
    if (state.selectionTemp.length === 0) {
        alert("최소한 하나 이상의 전략을 선택해주세요.");
        return;
    }

    // Map keys to objects
    state.selectedStrategies = state.selectionTemp.map(k => strategies[k]);

    // Start generating
    addUserMessage(`${state.selectedStrategies.length}개의 전략 선택 완료`);
    setTimeout(generatePlan, 500);
}

function generatePlan() {
    state.step = 'DONE';

    // 1. Get Standards (Fallback if missing)
    const stds = curriculum[state.grade] && curriculum[state.grade][state.textType]
        ? curriculum[state.grade][state.textType]
        : [{ code: "", desc: "해당 학년/유형의 상세 성취기준 데이터를 불러올 수 없습니다." }];

    const stdHtml = stds.map(s => `<li>${s.code ? '<strong>' + s.code + '</strong> ' : ''}${s.desc}</li>`).join('');

    // 2. Build Gagne Events
    let eventHtml = '';

    gagne9Events.forEach(event => {
        const relevant = state.selectedStrategies.filter(s => s.phase === event.phase);

        // Activity Text Construction
        let acts = [];

        // Default Activity Logic (Grade based)
        let defAct = event.defaultAct;
        if (state.grade <= 2 && event.id === 4) defAct = "큰 소리로 따라 읽기"; // Customize for lower grades

        acts.push(`<span style="color:#6b7280;">• ${defAct}</span>`);

        // Insert Strategies at key moments
        // Prioritize: 
        // Intro -> Recall (3)
        // Body -> Guidance (5) (Or present stimulus 4?) 
        // Conclusion -> Performance (6)

        // This is a heuristic mapping
        let targetEventId = -1;
        if (event.phase === 'BeforeReading') targetEventId = 3;
        if (event.phase === 'DuringReading') targetEventId = 5;
        if (event.phase === 'AfterReading') targetEventId = 6;

        if (event.id === targetEventId) {
            relevant.forEach(s => acts.push(`<span style="color:#4f46e5; font-weight:700; background:#e0e7ff; padding:2px 4px; border-radius:4px;">★ [전략] ${s.name}</span><br><span style="margin-left:14px; color:#374151;">: ${s.activities[0]}</span>`));
        }

        eventHtml += `
            <div class="event-row">
                <div class="event-header">
                    <span class="event-num">${event.id}</span> ${event.label}
                </div>
                <div class="event-content">
                    ${acts.join('<br>')}
                </div>
            </div>
        `;
    });

    const planHtml = `
        <div class="plan-card">
            <h2 style="text-align:center; margin-bottom:1rem; color:#111827; font-size:1.4rem;">${state.grade}학년 국어 교수·학습 과정안</h2>
            
            <table class="plan-meta">
                <tbody>
                    <tr>
                        <th>단원(주제)</th>
                        <td>${state.topic}</td>
                        <th>글의 종류</th>
                        <td>${state.textType === 'literature' ? '문학' : state.textType === 'informational' ? '정보전달' : '설득/생각'}</td>
                    </tr>
                    <tr>
                        <th>성취기준</th>
                        <td colspan="3"><ul style="margin:0; padding-left:1.2rem; line-height:1.4;">${stdHtml}</ul></td>
                    </tr>
                </tbody>
            </table>

            <h3 style="margin-top:1.5rem; margin-bottom:1rem; font-size:1.1rem; color:#4f46e5; border-bottom:2px solid #e5e7eb; padding-bottom:0.5rem; display:flex; align-items:center;">
                <span style="background:#4f46e5; color:white; width:24px; height:24px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:14px; margin-right:8px;">G</span>
                 가네(Gagne)의 수업 사태 적용
            </h3>
            
            <div class="gagne-container">
                ${eventHtml}
            </div>
        </div>
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button class="action-btn" onclick="window.print()">🖨️ 지도안 인쇄하기</button>
            <button class="action-btn secondary" onclick="location.reload()">🔄 처음으로</button>
        </div>
    `;

    addBotMessage(planHtml);
    addOptions(["처음으로 돌아가기"]);
}

// UI Helpers
function addBotMessage(html) {
    const el = document.createElement('div');
    el.className = 'message bot';
    el.innerHTML = `
        <div class="msg-bubble">${html}</div>
    `;
    chatHistory.appendChild(el);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function addUserMessage(text) {
    const el = document.createElement('div');
    el.className = 'message user';
    el.innerHTML = `
         <div class="msg-bubble">${text}</div>
    `;
    chatHistory.appendChild(el);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

function addOptions(options) {
    const container = document.createElement('div');
    container.className = 'options-container';

    options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-chip';
        btn.textContent = opt;
        btn.onclick = () => {
            userInput.value = opt;
            handleSend();
            container.remove();
        };
        container.appendChild(btn);
    });
    chatHistory.appendChild(container);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}
