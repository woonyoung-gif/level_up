const allQuestions = [
    // 1급 (매우 쉬움 - 생활 속 현상, 물, 불)
    { q: "우리 몸의 약 70%를 차지하며, 생명에 꼭 필요한 것은?", options: ["물", "소금", "설탕"], answer: 0, level: 1 },
    { q: "불이 타기 위해서 꼭 필요한 기체는 무엇일까요?", options: ["이산화탄소", "산소", "질소"], answer: 1, level: 1 },
    { q: "얼음이 녹아서 물이 되는 현상을 무엇이라고 할까요?", options: ["응고", "기화", "융해"], answer: 2, level: 1 },
    { q: "철이 녹슬지 않게 하려면 무엇을 차단해야 할까요?", options: ["햇빛", "공기와 물", "소리"], answer: 1, level: 1 },
    { q: "식초처럼 신맛이 나는 물질을 무엇이라고 부를까요?", options: ["산성", "염기성", "중성"], answer: 0, level: 1 },
    { q: "비누처럼 미끌미끌하고 쓴맛이 나는 물질은?", options: ["산성", "염기성", "자석"], answer: 1, level: 1 },
    { q: "물에 뜨는 물체는?", options: ["돌", "나무 도막", "쇠구슬"], answer: 1, level: 1 },
    { q: "자석에 붙는 물체는?", options: ["지우개", "철못", "유리컵"], answer: 1, level: 1 },
    { q: "소금이 물에 녹는 현상을 무엇이라고 할까요?", options: ["용해", "증발", "확산"], answer: 0, level: 1 },
    { q: "물이 끓어서 수증기가 되는 현상은?", options: ["기화", "액화", "승화"], answer: 0, level: 1 },
    { q: "김이 서리는 것은 수증기가 물방울로 변하는 OO 현상이다.", options: ["기화", "액화", "융해"], answer: 1, level: 1 },
    { q: "드라이아이스 크기가 작아지는 현상은?", options: ["승화", "기화", "액화"], answer: 0, level: 1 },
    { q: "식물이 광합성을 할 때 필요한 기체는?", options: ["산소", "이산화탄소", "헬륨"], answer: 1, level: 1 },
    { q: "우리가 숨을 쉴 때 내뱉는 기체는?", options: ["산소", "이산화탄소", "수소"], answer: 1, level: 1 },
    { q: "공기 중에 가장 많은 기체는?", options: ["산소", "질소", "이산화탄소"], answer: 1, level: 1 },
    { q: "과자 봉지에 채워져 있는 기체는?", options: ["질소", "산소", "수소"], answer: 0, level: 1 },
    { q: "냄새가 퍼져나가는 현상은?", options: ["확산", "증발", "용해"], answer: 0, level: 1 },
    { q: "빨래가 마르는 것은 물이 OO하기 때문이다.", options: ["증발", "응고", "액화"], answer: 0, level: 1 },
    { q: "물과 기름을 섞이게 해주는 물질은?", options: ["계면활성제", "설탕", "소금"], answer: 0, level: 1 },
    { q: "촛불을 끄면 생기는 흰 연기의 정체는?", options: ["그을음", "촛농(액체)", "기체"], answer: 1, level: 1 },

    // 2급 (쉬움 - 물질의 상태, 혼합물)
    { q: "고체, 액체, 기체 중 모양과 부피가 일정한 것은?", options: ["고체", "액체", "기체"], answer: 0, level: 2 },
    { q: "담은 그릇에 따라 모양은 변하지만 부피는 변하지 않는 것은?", options: ["고체", "액체", "기체"], answer: 1, level: 2 },
    { q: "모양과 부피가 모두 변할 수 있는 것은?", options: ["고체", "액체", "기체"], answer: 2, level: 2 },
    { q: "두부와 콩나물을 섞었다. 이것은?", options: ["혼합물", "화합물", "원소"], answer: 0, level: 2 },
    { q: "소금물에서 소금과 물을 분리하는 방법은?", options: ["증발", "거름", "자석"], answer: 0, level: 2 },
    { q: "모래와 물을 분리할 때 쓰는 종이는?", options: ["거름종이", "색종이", "신문지"], answer: 0, level: 2 },
    { q: "사이다 속에 들어있는 기체는?", options: ["이산화탄소", "산소", "질소"], answer: 0, level: 2 },
    { q: "설탕을 더 빨리 녹이려면?", options: ["찬물에 넣는다", "젓지 않는다", "뜨거운 물에 넣는다"], answer: 2, level: 2 },
    { q: "물질이 타면서 빛과 열을 내는 현상은?", options: ["연소", "소화", "폭발"], answer: 0, level: 2 },
    { q: "연소의 3요소가 아닌 것은?", options: ["탈 물질", "산소", "물"], answer: 2, level: 2 },
    { q: "불을 끄는 것을 무엇이라고 할까요?", options: ["소화", "점화", "발화"], answer: 0, level: 2 },
    { q: "기름에 불이 붙었을 때 끄는 방법은?", options: ["물을 붓는다", "모래로 덮는다", "부채질한다"], answer: 1, level: 2 },
    { q: "리트머스 종이가 푸른색에서 붉은색으로 변하는 용액은?", options: ["산성", "염기성", "중성"], answer: 0, level: 2 },
    { q: "페놀프탈레인 용액을 떨어뜨리면 붉게 변하는 용액은?", options: ["산성", "염기성", "중성"], answer: 1, level: 2 },
    { q: "우유는 어떤 상태일까요?", options: ["고체", "액체", "기체"], answer: 1, level: 2 },
    { q: "풍선 안에 들어있는 공기는 어떤 상태일까요?", options: ["고체", "액체", "기체"], answer: 2, level: 2 },
    { q: "나무 책상은 어떤 상태일까요?", options: ["고체", "액체", "기체"], answer: 0, level: 2 },
    { q: "물에 가라앉는 물체는?", options: ["스티로폼", "나무젓가락", "동전"], answer: 2, level: 2 },
    { q: "플라스틱은 자석에 붙을까요?", options: ["붙는다", "안 붙는다", "가끔 붙는다"], answer: 1, level: 2 },
    { q: "자석의 N극과 S극은 서로?", options: ["민다", "당긴다", "상관없다"], answer: 1, level: 2 },

    // 3급 (보통 - 입자, 분자, 원소 기초)
    { q: "물질을 이루는 가장 작은 알갱이는?", options: ["원자", "분자", "세포"], answer: 0, level: 3 },
    { q: "물질의 성질을 가지는 가장 작은 입자는?", options: ["원자", "분자", "전자"], answer: 1, level: 3 },
    { q: "물(H2O)은 수소와 무엇으로 이루어져 있나?", options: ["산소", "탄소", "질소"], answer: 0, level: 3 },
    { q: "이산화탄소(CO2)에는 산소 원자가 몇 개?", options: ["1개", "2개", "3개"], answer: 1, level: 3 },
    { q: "가장 가벼운 기체는?", options: ["수소", "헬륨", "산소"], answer: 0, level: 3 },
    { q: "헬륨 가스를 마시면 목소리가 변하는 이유는?", options: ["공기보다 가벼워서", "독성이 있어서", "차가워서"], answer: 0, level: 3 },
    { q: "다이아몬드는 무엇으로 이루어져 있을까요?", options: ["탄소", "금", "은"], answer: 0, level: 3 },
    { q: "연필심도 탄소로 이루어져 있다. (O/X)", options: ["O", "X", "모른다"], answer: 0, level: 3 },
    { q: "소금(염화나트륨)의 화학식은?", options: ["NaCl", "H2O", "CO2"], answer: 0, level: 3 },
    { q: "지구의 대기 중 산소의 비율은 약 얼마?", options: ["21%", "50%", "78%"], answer: 0, level: 3 },
    { q: "지구 대기 중 가장 많은 비율을 차지하는 기체는?", options: ["질소", "산소", "아르곤"], answer: 0, level: 3 },
    { q: "금속이 전기가 잘 통하는 성질은?", options: ["전도성", "절연성", "자성"], answer: 0, level: 3 },
    { q: "열이 이동하는 방법 3가지가 아닌 것은?", options: ["전도", "대류", "직진"], answer: 2, level: 3 },
    { q: "햇빛이 지구까지 도달하는 열 이동 방식은?", options: ["복사", "전도", "대류"], answer: 0, level: 3 },
    { q: "냄비의 손잡이를 플라스틱으로 만드는 이유는?", options: ["열 전도를 막으려고", "예뻐서", "무거워서"], answer: 0, level: 3 },
    { q: "겨울철 패딩 점퍼가 따뜻한 이유는?", options: ["공기층이 단열해서", "열을 만들어서", "무거워서"], answer: 0, level: 3 },
    { q: "온도를 측정하는 기구는?", options: ["온도계", "시계", "저울"], answer: 0, level: 3 },
    { q: "섭씨 온도의 단위는?", options: ["℃", "℉", "K"], answer: 0, level: 3 },
    { q: "물은 몇 도에서 얼까요?", options: ["0도", "100도", "50도"], answer: 0, level: 3 },
    { q: "물은 몇 도에서 끓을까요?", options: ["0도", "100도", "50도"], answer: 1, level: 3 },

    // 4급 (어려움 - 산화, 환원, 에너지)
    { q: "사과를 깎아두면 갈색으로 변하는 현상은?", options: ["갈변(산화)", "부패", "발효"], answer: 0, level: 4 },
    { q: "산소가 다른 물질과 결합하는 반응은?", options: ["산화", "환원", "중화"], answer: 0, level: 4 },
    { q: "산소를 잃어버리는 반응은?", options: ["환원", "산화", "분해"], answer: 0, level: 4 },
    { q: "철이 녹스는 것을 막기 위해 기름칠을 하는 이유는?", options: ["산소 차단", "온도 유지", "모양 유지"], answer: 0, level: 4 },
    { q: "음식물이 상하는 것을 막는 '방부제'는 어떤 작용을 방해할까?", options: ["산화", "환원", "용해"], answer: 0, level: 4 },
    { q: "식물이 빛에너지를 이용해 양분을 만드는 것은?", options: ["광합성", "호흡", "증산작용"], answer: 0, level: 4 },
    { q: "화석 연료가 아닌 것은?", options: ["석유", "석탄", "태양열"], answer: 2, level: 4 },
    { q: "환경 오염을 일으키지 않는 에너지는?", options: ["신재생 에너지", "화석 연료", "원자력"], answer: 0, level: 4 },
    { q: "자동차 배기가스에서 나오는 산성비의 원인은?", options: ["황산화물/질소산화물", "산소", "수소"], answer: 0, level: 4 },
    { q: "지구 온난화의 주범인 온실기체는?", options: ["이산화탄소", "산소", "질소"], answer: 0, level: 4 },
    { q: "오존층은 우리에게 해로운 무엇을 막아주나?", options: ["자외선", "적외선", "가시광선"], answer: 0, level: 4 },
    { q: "플라스틱을 태우면 발생하는 유해 물질은?", options: ["다이옥신", "산소", "물"], answer: 0, level: 4 },
    { q: "산과 염기가 만나서 성질을 잃는 반응은?", options: ["중화 반응", "산화 반응", "앙금 생성"], answer: 0, level: 4 },
    { q: "벌에 쏘였을 때(산성) 바르는 암모니아수(염기성)는 무슨 원리?", options: ["중화", "산화", "환원"], answer: 0, level: 4 },
    { q: "생선 비린내(염기성)를 없애기 위해 뿌리는 것은?", options: ["레몬즙(산성)", "비눗물", "소금"], answer: 0, level: 4 },
    { q: "위액(강한 산성) 때문에 속이 쓰릴 때 먹는 제산제는?", options: ["염기성", "산성", "중성"], answer: 0, level: 4 },
    { q: "건전지 내부에서 일어나는 반응은?", options: ["화학 반응", "물리 반응", "핵 반응"], answer: 0, level: 4 },
    { q: "화학 반응이 일어날 때 변하지 않는 것은?", options: ["원자의 종류와 수", "분자의 종류", "물질의 성질"], answer: 0, level: 4 },
    { q: "물리 변화의 예시는?", options: ["얼음이 녹음", "못이 녹슴", "종이가 탐"], answer: 0, level: 4 },
    { q: "화학 변화의 예시는?", options: ["김치가 익음", "유리컵이 깨짐", "물이 끓음"], answer: 0, level: 4 },

    // 5급 (매우 어려움 - 주기율표, 심화 개념)
    { q: "원소 주기율표를 만든 사람은?", options: ["멘델레예프", "뉴턴", "아인슈타인"], answer: 0, level: 5 },
    { q: "주기율표의 1번 원소는?", options: ["수소", "헬륨", "리튬"], answer: 0, level: 5 },
    { q: "모든 물질의 기본이 되는 성분은?", options: ["원소", "세포", "조직"], answer: 0, level: 5 },
    { q: "물은 원소일까?", options: ["아니요(화합물)", "네", "모른다"], answer: 0, level: 5 },
    { q: "순수한 금 24K는 원소일까?", options: ["네", "아니요", "모른다"], answer: 0, level: 5 },
    { q: "공기는 혼합물일까?", options: ["네", "아니요", "원소다"], answer: 0, level: 5 },
    { q: "밀도가 큰 물질은 밀도가 작은 물질보다?", options: ["아래로 가라앉는다", "위로 뜬다", "섞인다"], answer: 0, level: 5 },
    { q: "물과 식용유 중 밀도가 더 작은 것은?", options: ["식용유", "물", "같다"], answer: 0, level: 5 },
    { q: "잠수함이 뜨고 가라앉는 원리는?", options: ["부력", "중력", "마찰력"], answer: 0, level: 5 },
    { q: "배가 물에 뜨는 힘은?", options: ["부력", "자기력", "탄성력"], answer: 0, level: 5 },
    { q: "용수철 저울은 무슨 힘을 이용하나?", options: ["탄성력", "마찰력", "자기력"], answer: 0, level: 5 },
    { q: "미끄럼 방지 패드는 무슨 힘을 크게 한 것인가?", options: ["마찰력", "중력", "부력"], answer: 0, level: 5 },
    { q: "지구가 물체를 당기는 힘은?", options: ["중력", "자기력", "전기력"], answer: 0, level: 5 },
    { q: "달에서의 중력은 지구의 얼마?", options: ["1/6", "1/2", "2배"], answer: 0, level: 5 },
    { q: "질량 보존의 법칙을 발견한 사람은?", options: ["라부아지에", "돌턴", "보일"], answer: 0, level: 5 },
    { q: "기체의 부피는 압력에 반비례한다는 법칙은?", options: ["보일의 법칙", "샤를의 법칙", "뉴턴의 법칙"], answer: 0, level: 5 },
    { q: "기체의 부피는 온도에 비례한다는 법칙은?", options: ["샤를의 법칙", "보일의 법칙", "옴의 법칙"], answer: 0, level: 5 },
    { q: "찌그러진 탁구공을 뜨거운 물에 넣으면 펴지는 이유는?", options: ["샤를의 법칙", "보일의 법칙", "관성의 법칙"], answer: 0, level: 5 },
    { q: "높은 산에 올라가면 과자 봉지가 빵빵해지는 이유는?", options: ["보일의 법칙", "샤를의 법칙", "가속도의 법칙"], answer: 0, level: 5 },
    { q: "에너지는 생성되거나 소멸되지 않고 형태만 바뀐다는 법칙은?", options: ["에너지 보존 법칙", "질량 보존 법칙", "관성 법칙"], answer: 0, level: 5 }
];

let gameQuestions = [];
let currentIdx = 0;
let score = 0;
let currentLevel = 1;

// 게임 초기화
function initGame() {
    // 1~5단계 문제들을 섞어서 각각 4문제씩 뽑음 (총 20문제)
    gameQuestions = [];
    score = 0;
    currentIdx = 0;
    currentLevel = 1;
    
    for (let i = 1; i <= 5; i++) {
        const levelQuestions = allQuestions.filter(q => q.level === i);
        // 무작위 섞기
        levelQuestions.sort(() => Math.random() - 0.5);
        // 4문제 추출
        gameQuestions.push(...levelQuestions.slice(0, 4));
    }
    
    updateScoreBoard();
    loadQuestion();
}

function loadQuestion() {
    const q = gameQuestions[currentIdx];
    
    // 레벨 계산 (4문제마다 레벨업)
    const newLevel = Math.floor(currentIdx / 4) + 1;
    if (newLevel > currentLevel) {
        currentLevel = newLevel;
        alert(`축하합니다! ${currentLevel}급으로 승급했습니다! 🚀`);
    }

    // UI 업데이트
    const levelDisplay = document.getElementById("level-display");
    if(levelDisplay) levelDisplay.innerText = `${currentLevel}급 도전 중!`;
    
    const questionCount = document.getElementById("question-count");
    if(questionCount) questionCount.innerText = `${currentIdx + 1} / 20`;
    
    document.getElementById("question").innerText = q.q;
    document.getElementById("btn0").innerText = q.options[0];
    document.getElementById("btn1").innerText = q.options[1];
    document.getElementById("btn2").innerText = q.options[2];
    document.getElementById("result").classList.add("hidden");
    
    // 캐릭터 초기화
    document.getElementById("character-mouth").style.borderRadius = "0 0 10px 10px";
    document.getElementById("character-mouth").style.height = "10px";
    
    const glasses = document.querySelector('.glasses');
    if(glasses) glasses.style.top = "35px"; // 안경 위치 원복
}

function checkAnswer(idx) {
    if (document.getElementById("result").classList.contains("hidden") === false) return; // 이미 답함

    const q = gameQuestions[currentIdx];
    const mouth = document.getElementById("character-mouth");
    const glasses = document.querySelector('.glasses');

    if (idx === q.answer) {
        score += 10; // 문제당 10점 (총 200점 만점)
        document.getElementById("message").innerText = "정답이야! 정말 대단해! ✨";
        mouth.style.height = "20px"; // 크게 웃음
        mouth.style.borderRadius = "0 0 20px 20px";
        
        // 정답 시 안경 들썩임 효과
        if(glasses) {
            glasses.style.top = "30px";
            setTimeout(() => { glasses.style.top = "35px"; }, 300);
        }
    
    } else {
        document.getElementById("message").innerText = `아쉬워! 정답은 '${q.options[q.answer]}'야. 💧`;
        mouth.style.borderRadius = "10px 10px 0 0"; // 슬픈 표정
        mouth.style.height = "10px";
    }
    
    updateScoreBoard();
    document.getElementById("result").classList.remove("hidden");
}

function updateScoreBoard() {
    document.getElementById("score").innerText = score;
}

function nextQuestion() {
    currentIdx++;
    if (currentIdx < gameQuestions.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    let finalMsg = "";
    if (score >= 180) finalMsg = "화학 박사님! 🎓";
    else if (score >= 140) finalMsg = "화학 우등생! 🥇";
    else if (score >= 100) finalMsg = "멋진 탐험가! 🚩";
    else finalMsg = "조금 더 힘내자! 🌱";

    alert(`게임 끝!\n당신의 점수는 ${score}점입니다.\n(${finalMsg})`);
    
    if(confirm("다시 도전하시겠습니까?")) {
        initGame();
    }
}

// 게임 시작
initGame();
