// TTL 데이터를 JavaScript 객체로 변환 - 각 성취기준에 맞는 실제 도서 추천
const learningStandards = [
    // 국어 성취기준 (6학년)
    {
        id: "6국06-03",
        subject: "국어",
        description: "적합한 양식과 수용자의 반응을 고려하여 복합양식 매체 자료를 제작하고 공유한다.",
        bookTitle: "미디어 리터러시 세상을 읽는 힘",
        bookAuthor: "강용철",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=미디어+리터러시+세상을+읽는+힘"
    },
    {
        id: "6국06-04",
        subject: "국어",
        description: "자신의 매체 이용 양상에 대해 성찰한다.",
        bookTitle: "광고의 비밀",
        bookAuthor: "김현주",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=광고의+비밀"
    },
    {
        id: "6국05-03",
        subject: "국어",
        description: "소설이나 극을 읽고 인물, 사건, 배경을 파악한다.",
        bookTitle: "어린이 토론 학교 문학 편",
        bookAuthor: "김은하 등",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=어린이+토론+학교"
    },
    {
        id: "6국05-04",
        subject: "국어",
        description: "인상적인 부분을 중심으로 작품에 대한 의견을 나눈다.",
        bookTitle: "질문하는 독서의 힘",
        bookAuthor: "김미자",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=질문하는+독서의+힘"
    },
    {
        id: "6국04-05",
        subject: "국어",
        description: "글과 담화에 쓰인 시간 표현을 이해하고 상황에 맞게 표현한다.",
        bookTitle: "초등 국어 문법이 쓰기다 1",
        bookAuthor: "키출판사",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등+국어+문법이+쓰기다"
    },
    {
        id: "6국04-06",
        subject: "국어",
        description: "단어 및 문장, 띄어쓰기를 바르게 고치는 태도",
        bookTitle: "바쁜 초등학생을 위한 빠른 맞춤법 5 6학년",
        bookAuthor: "이지연",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=바쁜+초등학생+맞춤법"
    },
    {
        id: "6국03-03",
        subject: "국어",
        description: "체험한 일에 대한 감상을 나타내는 글을 쓴다.",
        bookTitle: "나의 생각을 글대로 글쓰기",
        bookAuthor: "권귀헌",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=나의+생각을+글대로"
    },
    {
        id: "6국03-04",
        subject: "국어",
        description: "독자와 매체를 고려하여 글을 쓰고 표현한다.",
        bookTitle: "초등 글쓰기 비밀 노트",
        bookAuthor: "류윤환",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등+글쓰기+비밀+노트"
    },
    {
        id: "6국02-03",
        subject: "국어",
        description: "읽은 글 내용을 평가한다.",
        bookTitle: "초등 문해력 독해왕 6단계",
        bookAuthor: "이룸이앤비",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등+문해력+독해왕"
    },
    {
        id: "6국02-04",
        subject: "국어",
        description: "다양한 관점의 글을 읽고 문제 해결에 활용한다.",
        bookTitle: "초등 국어 독해력 비타민 6단계",
        bookAuthor: "한수위",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등+국어+독해력"
    },

    // 수학 성취기준 (4학년)
    {
        id: "4수01-05",
        subject: "수학",
        description: "나눗셈 의미 이해 및 곱셈/나눗셈 관계",
        bookTitle: "기적의 계산법 7권",
        bookAuthor: "기적학습연구소",
        bookUrl: "https://www.yes24.com/Product/Search?query=기적의+계산법+7권"
    },
    {
        id: "4수01-06",
        subject: "수학",
        description: "한 자리 나눗셈 계산 원리 이해",
        bookTitle: "쎈연산 초등 수학 7권",
        bookAuthor: "홍범준",
        bookUrl: "https://www.yes24.com/Product/Search?query=쎈연산+7권"
    },
    {
        id: "4수01-07",
        subject: "수학",
        description: "두 자리 나눗셈 계산 원리 이해",
        bookTitle: "디딤돌 초등수학 기본 응용 4-1",
        bookAuthor: "디딤돌",
        bookUrl: "https://www.yes24.com/Product/Search?query=디딤돌+초등수학"
    },
    {
        id: "4수01-13",
        subject: "수학",
        description: "소수 자릿값의 이해",
        bookTitle: "초등 소수 개념이 먼저다 1",
        bookAuthor: "키출판사",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등+소수+개념이+먼저다"
    },
    {
        id: "4수01-14",
        subject: "수학",
        description: "소수의 크기 비교",
        bookTitle: "바쁜 3 4학년을 위한 빠른 소수",
        bookAuthor: "징검다리 교육연구소",
        bookUrl: "https://www.yes24.com/Product/Search?query=바쁜+3+4학년+소수"
    },
    {
        id: "4수03-01",
        subject: "수학",
        description: "직선, 선분, 반직선 이해",
        bookTitle: "4학년이 꼭 알아야 할 도형",
        bookAuthor: "박명전",
        bookUrl: "https://www.yes24.com/Product/Search?query=4학년이+꼭+알아야+할+도형"
    },
    {
        id: "4수03-02",
        subject: "수학",
        description: "직각, 예각, 둔각 이해",
        bookTitle: "빨강형 도형 A1",
        bookAuthor: "시매쓰수학연구소",
        bookUrl: "https://www.yes24.com/Product/Search?query=빨강형+도형+A1"
    },
    {
        id: "4수03-03",
        subject: "수학",
        description: "수직, 평행 관계 이해",
        bookTitle: "플라토 C단계 1권",
        bookAuthor: "최수일",
        bookUrl: "https://www.yes24.com/Product/Search?query=플라토+C단계+1권"
    },
    {
        id: "4수03-24",
        subject: "수학",
        description: "각도 측정",
        bookTitle: "개념원리 초등 수학 4-1",
        bookAuthor: "이홍섭",
        bookUrl: "https://www.yes24.com/Product/Search?query=개념원리+초등+4-1"
    },
    {
        id: "4수03-25",
        subject: "수학",
        description: "삼각형, 사각형 내각합 추론",
        bookTitle: "문제 해결의 길잡이 원리 초등 수학 4-1",
        bookAuthor: "이재효",
        bookUrl: "https://www.yes24.com/Product/Search?query=문제+해결의+길잡이+원리+4-1"
    },

    // 영어 성취기준 (4, 6학년)
    {
        id: "4영01-01",
        subject: "영어",
        description: "알파벳 소리 식별",
        bookTitle: "기적의 파닉스 1",
        bookAuthor: "이선미",
        bookUrl: "https://www.yes24.com/Product/Search?query=기적의+파닉스"
    },
    {
        id: "4영01-02",
        subject: "영어",
        description: "알파벳 대소문자 구별",
        bookTitle: "맛있는 초등 영어 파닉스 1",
        bookAuthor: "이보영",
        bookUrl: "https://www.yes24.com/Product/Search?query=맛있는+초등+영어+파닉스"
    },
    {
        id: "4영02-01",
        subject: "영어",
        description: "단어, 어구, 문장을 강세, 리듬, 억양에 맞게 따라 말한다",
        bookTitle: "초등 필수 영어표현 무작정 따라하기",
        bookAuthor: "박광희",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등+필수+영어표현"
    },
    {
        id: "4영02-02",
        subject: "영어",
        description: "알파벳 대소문자를 구별하여 쓴다",
        bookTitle: "바쁜 3 4학년을 위한 빠른 영단어",
        bookAuthor: "강충인",
        bookUrl: "https://www.yes24.com/Product/Search?query=바쁜+3+4학년+영단어"
    },
    {
        id: "4영02-03",
        subject: "영어",
        description: "소리와 철자의 관계를 바탕으로 단어 쓰기",
        bookTitle: "기적의 초등 영단어 1",
        bookAuthor: "김향숙",
        bookUrl: "https://www.yes24.com/Product/Search?query=기적의+초등+영단어"
    },
    {
        id: "4영02-04",
        subject: "영어",
        description: "그림 보고 문장 표현",
        bookTitle: "미국교과서 읽는 리딩 Preschool 1",
        bookAuthor: "키출판사",
        bookUrl: "https://www.yes24.com/Product/Search?query=미국교과서+읽는+리딩"
    },
    {
        id: "4영02-05",
        subject: "영어",
        description: "자신, 주변 사람·사물 소개 문장 말/쓰기",
        bookTitle: "초등 영어 회화 100일의 기적",
        bookAuthor: "문단열",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등+영어+회화+100일의+기적"
    },
    {
        id: "6영02-06",
        subject: "영어",
        description: "감정, 경험 표현",
        bookTitle: "기적의 영어 일기 쓰기 생활일기",
        bookAuthor: "이지영",
        bookUrl: "https://www.yes24.com/Product/Search?query=기적의+영어+일기+쓰기"
    },
    {
        id: "6영02-07",
        subject: "영어",
        description: "담화 정보 묻고 답하기",
        bookTitle: "초등생활 영어회화 무작정 따라하기",
        bookAuthor: "박광희",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등생활+영어회화"
    },
    {
        id: "6영02-08",
        subject: "영어",
        description: "목적 맞는 글쓰기",
        bookTitle: "초등 완성 영어 글쓰기 로드맵",
        bookAuthor: "이서윤",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등+완성+영어+글쓰기"
    },

    // 사회 성취기준 (6학년)
    {
        id: "6사09-01",
        subject: "사회",
        description: "세계 표현 공간 자료의 특징 이해",
        bookTitle: "초등학생을 위한 세계 지도책",
        bookAuthor: "내셔널지오그래픽 키즈",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등학생을+위한+세계+지도책"
    },
    {
        id: "6사09-02",
        subject: "사회",
        description: "세계 주요 대륙·대양, 우리나라 위치 이해",
        bookTitle: "초등학생이 꼭 읽어야 할 세계 지리",
        bookAuthor: "헤더 알렉산더",
        bookUrl: "https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=초등학생이+꼭+읽어야+할+세계+지리"
    },

    // 과학 성취기준 (4, 6학년)
    {
        id: "4과05-01",
        subject: "과학",
        description: "여러 가지 물질 성질 비교 및 분류",
        bookTitle: "초등과학Q4 물질의 비밀",
        bookAuthor: "그레이트북스",
        bookUrl: "https://www.yes24.com/Product/Search?query=초등과학Q+물질"
    },
    {
        id: "4과05-02",
        subject: "과학",
        description: "고체, 액체, 기체 성질 관찰 및 비교",
        bookTitle: "놓지 마 과학! 4",
        bookAuthor: "신태훈",
        bookUrl: "https://www.yes24.com/Product/Search?query=놓지+마+과학+4"
    },
    {
        id: "4과05-03",
        subject: "과학",
        description: "물질 성질 활용 설계 및 발표",
        bookTitle: "용선생의 시끌벅적 과학교실 35 여러 가지 물질",
        bookAuthor: "사회평론",
        bookUrl: "https://www.yes24.com/Product/Search?query=용선생+과학교실+물질"
    },
    {
        id: "4과03-01",
        subject: "과학",
        description: "여러 가지 식물 관찰 및 분류",
        bookTitle: "세밀화로 그린 보리 어린이 식물 도감",
        bookAuthor: "전의식",
        bookUrl: "https://www.yes24.com/Product/Search?query=보리+어린이+식물+도감"
    },
    {
        id: "4과03-02",
        subject: "과학",
        description: "환경에 따른 식물 생활 방식 설명",
        bookTitle: "식물의 한살이",
        bookAuthor: "웅진주니어 편집부",
        bookUrl: "https://www.yes24.com/Product/Search?query=웅진주니어+식물의+한살이"
    },
    {
        id: "4과03-03",
        subject: "과학",
        description: "식물 특징 활용 설계 및 협력적 소통",
        bookTitle: "Why? 식물",
        bookAuthor: "이광웅",
        bookUrl: "https://www.yes24.com/Product/Search?query=Why+식물"
    },
    {
        id: "6과01-01",
        subject: "과학",
        description: "지층 특징 이해 및 모형 표현",
        bookTitle: "용선생의 시끌벅적 과학교실 9 지층과 화석",
        bookAuthor: "사회평론",
        bookUrl: "https://www.yes24.com/Product/Search?query=용선생+지층과+화석"
    },
    {
        id: "6과01-02",
        subject: "과학",
        description: "지층 퇴적암 이해 및 분류",
        bookTitle: "Why? 화석",
        bookAuthor: "허순봉",
        bookUrl: "https://www.yes24.com/Product/Search?query=Why+화석"
    },
    {
        id: "6과01-03",
        subject: "과학",
        description: "화석 생성 과정 이해",
        bookTitle: "비주얼 씽킹 초등 과학 4학년",
        bookAuthor: "EBS",
        bookUrl: "https://www.yes24.com/Product/Search?query=비주얼+씽킹+초등+과학"
    },
    {
        id: "6과02-01",
        subject: "과학",
        description: "빛의 성질 이해",
        bookTitle: "용선생의 시끌벅적 과학교실 16 빛과 소리",
        bookAuthor: "사회평론",
        bookUrl: "https://www.yes24.com/Product/Search?query=용선생+빛과+소리"
    }
];

// DOM 요소
const subjectFilter = document.getElementById('subject-filter');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsContainer = document.getElementById('results-container');
const statsBar = document.getElementById('stats');
const standardsButtonsContainer = document.getElementById('standards-buttons');

// 현재 선택된 성취기준
let selectedStandards = new Set();

// 초기화
function init() {
    displayAllStandards();
    updateStats(learningStandards.length);
    renderStandardButtons();
    attachEventListeners();
}

// 이벤트 리스너 연결
function attachEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    subjectFilter.addEventListener('change', handleSearch);
}

// 성취기준 버튼 렌더링
function renderStandardButtons() {
    const subjects = ['국어', '수학', '영어', '사회', '과학'];

    subjects.forEach(subject => {
        const subjectStandards = learningStandards.filter(s => s.subject === subject);

        if (subjectStandards.length > 0) {
            const subjectSection = document.createElement('div');
            subjectSection.className = 'subject-section';

            const subjectTitle = document.createElement('h3');
            subjectTitle.className = 'subject-section-title';
            subjectTitle.textContent = subject;
            subjectSection.appendChild(subjectTitle);

            const buttonsGrid = document.createElement('div');
            buttonsGrid.className = 'standards-buttons-grid';

            subjectStandards.forEach(standard => {
                const button = document.createElement('button');
                button.className = 'standard-button';
                button.dataset.standardId = standard.id;
                button.dataset.subject = standard.subject;

                const buttonId = document.createElement('div');
                buttonId.className = 'standard-button-id';
                buttonId.textContent = standard.id;

                const buttonDesc = document.createElement('div');
                buttonDesc.className = 'standard-button-desc';
                buttonDesc.textContent = standard.description;

                button.appendChild(buttonId);
                button.appendChild(buttonDesc);

                button.addEventListener('click', () => toggleStandard(standard.id, button));

                buttonsGrid.appendChild(button);
            });

            subjectSection.appendChild(buttonsGrid);
            standardsButtonsContainer.appendChild(subjectSection);
        }
    });
}

// 성취기준 선택/해제 토글
function toggleStandard(standardId, buttonElement) {
    if (selectedStandards.has(standardId)) {
        selectedStandards.delete(standardId);
        buttonElement.classList.remove('selected');
    } else {
        selectedStandards.add(standardId);
        buttonElement.classList.add('selected');
    }

    displaySelectedStandards();
}

// 선택된 성취기준 표시
function displaySelectedStandards() {
    if (selectedStandards.size === 0) {
        displayAllStandards();
        return;
    }

    const selected = learningStandards.filter(s => selectedStandards.has(s.id));
    displayResults(selected);
    updateStats(selected.length);
}

// 검색 처리
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedSubject = subjectFilter.value;

    // 선택된 버튼 초기화
    selectedStandards.clear();
    document.querySelectorAll('.standard-button').forEach(btn => {
        btn.classList.remove('selected');
    });

    let filtered = learningStandards;

    // 과목 필터
    if (selectedSubject) {
        filtered = filtered.filter(s => s.subject === selectedSubject);
    }

    // 검색어 필터
    if (searchTerm) {
        filtered = filtered.filter(s =>
            s.id.toLowerCase().includes(searchTerm) ||
            s.description.toLowerCase().includes(searchTerm) ||
            s.bookTitle.toLowerCase().includes(searchTerm)
        );
    }

    displayResults(filtered);
    updateStats(filtered.length);
}

// 모든 성취기준 표시
function displayAllStandards() {
    displayResults(learningStandards);
}

// 결과 표시
function displayResults(standards) {
    resultsContainer.innerHTML = '';

    if (standards.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <div class="empty-state-text">검색 결과가 없습니다</div>
            </div>
        `;
        return;
    }

    standards.forEach((standard, index) => {
        const card = createResultCard(standard, index);
        resultsContainer.appendChild(card);
    });
}

// 결과 카드 생성
function createResultCard(standard, index) {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = `${index * 0.05}s`;

    const badge = document.createElement('span');
    badge.className = `subject-badge subject-${standard.subject}`;
    badge.textContent = standard.subject;

    const id = document.createElement('div');
    id.className = 'standard-id';
    id.textContent = standard.id;

    const description = document.createElement('div');
    description.className = 'standard-description';
    description.textContent = standard.description;

    const bookInfo = document.createElement('div');
    bookInfo.className = 'book-info';
    bookInfo.innerHTML = `
        <div class="book-title">📚 ${standard.bookTitle}</div>
        <div class="book-author">✍️ ${standard.bookAuthor}</div>
    `;

    // 정확한 도서 검색 URL 생성
    let accurateUrl = standard.bookUrl;
    if (standard.bookTitle) {
        // 검색어에서 특수문자를 제거하여 검색 정확도 향상 (공백은 유지)
        const sanitizedTitle = standard.bookTitle.replace(/[:,\(\)\[\]]/g, '').trim();
        const titleEncoded = encodeURIComponent(sanitizedTitle);

        if (standard.bookUrl.includes('aladin.co.kr')) {
            accurateUrl = `https://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=Book&SearchWord=${titleEncoded}`;
        } else if (standard.bookUrl.includes('yes24.com')) {
            accurateUrl = `https://www.yes24.com/Product/Search?domain=BOOK&query=${titleEncoded}`;
        }
    }

    const link = document.createElement('a');
    link.className = 'book-link';
    link.href = accurateUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = '🛒 도서 구매하기 →';

    card.appendChild(badge);
    card.appendChild(id);
    card.appendChild(description);
    card.appendChild(bookInfo);
    card.appendChild(link);

    return card;
}

// 통계 업데이트
function updateStats(count) {
    const total = learningStandards.length;
    statsBar.textContent = `총 ${total}개 성취기준 중 ${count}개 표시 중이에요! 💖`;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', init);
