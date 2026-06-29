// =============================
// CAFE PT - script.js
// (랜덤 없음 / 레시피 매칭 방식)
// =============================


// =============================
// 1. 팀원 데이터 (고정)
// =============================

const members = [
    {
        id: 1,
        name: "이유리",
        position: "팀장",
        blood: "A",
        mbti: "INFJ-T",
        work: "차트 수납, 청구, 고시",
        hobby: "음악감상",
        food: "만두",
        interest: "맛집 탐방",
        special: "-",
        image: "assets/members/member1.png",
        recipe: {
            type: "coffee",
            size: ["S", "M"],
            shot: null,
            milk: null,
            syrup: ["없음", "헤이즐넛"],
        }
    },
    {
        id: 2,
        name: "한제현",
        position: "시니어매니저",
        blood: "A",
        mbti: "ISTJ",
        work: "개발 및 운영 (청구, 계산)",
        hobby: "유튜브 감상",
        food: "-",
        interest: "건강",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: null,
            main: "루이보스 티백",
            water: "일반 물",
            ice: null
        }
    },
    {
        id: 3,
        name: "임병철",
        position: "매니저",
        blood: "O",
        mbti: "ISTP",
        work: "개발",
        hobby: "게임",
        food: "회",
        interest: "전자기기",
        special: "-",
        image: "assets/members/member3.png",
        recipe: {
            type: "coffee",
            size: ["M", "L"],
            shot: null,
            milk: "없음",
            syrup: "없음",
        }
    },
    {
        id: 3,
        name: "임병철",
        position: "매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member3.png",
        recipe: {
            type: "juice",
            size: null,
            main: "아이스티 가루",
            water: "일반 물",
            ice: null
        }
    },
    {
        id: 4,
        name: "남민우",
        position: "매니저",
        blood: "B",
        mbti: "INTP",
        work: "개발, 헬로100 연동, 키오스크, 수탁연동, Posivision, 카드단말기 연동, 그외 전반적인 기능",
        hobby: "야구시청",
        food: "햄버거, 샌드위치",
        interest: "-",
        special: "-",
        image: "assets/members/member4.png",
        recipe: {
            type: "coffee",
            size: ["M", "L"],
            shot: null,
            milk: "없음",
            syrup: "없음",
        }
    },
    {
        id: 4,
        name: "남민우",
        position: "매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member4.png",
        recipe: {
            type: "coffee",
            size: ["M", "L", "XL"],
            shot: null,
            milk: "없음",
            syrup: "없음",
        }
    },
    {
        id: 5,
        name: "윤지석",
        position: "매니저",
        blood: "B",
        mbti: "INTP",
        work: "개발 및 운영 TFT 안과 장비 연동 기능",
        hobby: "게임, 웹소설",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member5.png",
        recipe: {
            type: "coffee",
            size: ["M", "L","XL"],
            shot: null,
            milk: "없음",
            syrup: "없음",
        }
    },
    {
        id: 5,
        name: "윤지석",
        position: "매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member4.png",
        recipe: {
            type: "coffee",
            size: ["M", "L", "XL"],
            shot: null,
            milk: "없음",
            syrup: "없음",
        }
    },
    {
        id: 6,
        name: "정주찬",
        position: "매니저",
        blood: "AB",
        mbti: "ISTJ",
        work: "개발 및 이관 해결",
        hobby: "연극 뮤지컬 감상",
        food: "회 종류",
        interest: "주식 재테크",
        special: "NixPen 2.0, 5.0 eGhis 1.0, 2.0 개발 경험",
        image: "assets/members/member6.png",
        recipe: {
            type: "coffee",
            size: ["M", "L"],
            shot: null,
            milk: "없음",
            syrup: "헤이즐넛",
        }
    },
    {
        id: 6,
        name: "정주찬",
        position: "매니저",
        blood: "AB",
        mbti: "ISTJ",
        work: "개발 및 이관 해결",
        hobby: "연극 뮤지컬 감상",
        food: "회 종류",
        interest: "주식 재테크",
        special: "NixPen 2.0, 5.0 eGhis 1.0, 2.0 개발 경험",
        image: "assets/members/member6.png",
        recipe: {
            type: "coffee",
            size: ["M", "L"],
            shot: null,
            milk: "일반",
            syrup: "카라멜",
        }
    },
    {
        id: 6,
        name: "정주찬",
        position: "매니저",
        blood: "AB",
        mbti: "ISTJ",
        work: "개발 및 이관 해결",
        hobby: "연극 뮤지컬 감상",
        food: "회 종류",
        interest: "주식 재테크",
        special: "NixPen 2.0, 5.0 eGhis 1.0, 2.0 개발 경험",
        image: "assets/members/member6.png",
        recipe: {
            type: "juice",
            size: ["M", "L"],
            main: "레몬",
            water: ["제로 탄산", "일반 탄산", "일반 물"],
            ice: "적게"
        }
    },
    {
        id: 6,
        name: "정주찬",
        position: "매니저",
        blood: "AB",
        mbti: "ISTJ",
        work: "개발 및 이관 해결",
        hobby: "연극 뮤지컬 감상",
        food: "회 종류",
        interest: "주식 재테크",
        special: "NixPen 2.0, 5.0 eGhis 1.0, 2.0 개발 경험",
        image: "assets/members/member6.png",
        recipe: {
            type: "juice",
            size: ["M", "L"],
            main: "아이스티 가루",
            water: "일반 물",
            ice: "적게"
        }
    },
    {
        id: 7,
        name: "정제형",
        position: "매니저",
        blood: "B",
        mbti: "INTJ",
        work: "차트 개발 및 유지보수",
        hobby: "운동, 주말에 하루종일 게임",
        food: "-",
        interest: "-",
        special: "고양이를 좋아하는데 털 알러지 있음",
        image: "assets/members/member7.png",
        recipe: {
            type: "coffee",
            size: ["M", "L", "XL"],
            shot: null,
            milk: "없음",
            syrup: "헤이즐넛",
        }
    },
    {
        id: 7,
        name: "정제형",
        position: "매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member7.png",
        recipe: {
            type: "juice",
            size: null,
            main: "레몬",
            water: "일반 물",
            ice: "보통"
        }
    }
];


// =============================
// 2. 컬렉션 저장
// =============================

let collection = JSON.parse(localStorage.getItem("collection")) || [];

function saveCollection() {
    localStorage.setItem("collection", JSON.stringify(collection));
}


// =============================
// 3. 재료 스텝 데이터
// =============================

const STEPS = {
    coffee: [
        {
            key: "size", label: "사이즈를 선택하세요", icon: "📏", color: "#BFA07A",
            options: [
                { v: "S",  e: "🔹" },
                { v: "M",  e: "🔶" },
                { v: "L",  e: "🔷" },
                { v: "XL", e: "💫" }
            ]
        },
        {
            key: "shot", label: "샷 추가를 선택하세요", icon: "☕", color: "#2C1208",
            options: [
                { v: "1샷", e: "☕" },
                { v: "2샷", e: "☕☕" }
            ]
        },
        {
            key: "milk", label: "우유를 고르세요", icon: "🥛", color: "#D4B896",
            options: [
                { v: "오트밀크", e: "🌾" },
                { v: "일반",     e: "🥛" },
                { v: "없음",     e: "🚫" }
            ]
        },
        {
            key: "syrup", label: "시럽을 추가하세요", icon: "🍯", color: "#C17D3C",
            options: [
                { v: "바닐라",   e: "🍦" },
                { v: "카라멜",   e: "🍮" },
                { v: "헤이즐넛", e: "🌰" },
                { v: "없음",     e: "🚫" }
            ]
        },
    ],
    juice: [
        {
            key: "size", label: "사이즈를 선택하세요", icon: "📏", color: "#BFA07A",
            options: [
                { v: "S",  e: "🔹" },
                { v: "M",  e: "🔶" },
                { v: "L",  e: "🔷" },
                { v: "XL", e: "💫" }
            ]
        },
        {
            key: "main", label: "주재료를 선택하세요", icon: "🍵", color: "#7BA17D",
            options: [
                { v: "루이보스 티백", e: "🍵" },
                { v: "아이스티 가루", e: "🫖" },
                { v: "레몬",         e: "🍋" }
            ]
        },
        {
            key: "water", label: "물 베이스를 선택하세요", icon: "💧", color: "#AED6F1",
            options: [
                { v: "일반 물",  e: "💧" },
                { v: "제로 탄산", e: "🫧" },
                { v: "일반 탄산", e: "🥤" }
            ]
        },
        {
            key: "ice", label: "얼음을 선택하세요", icon: "🧊", color: "#A8D8EA",
            options: [
                { v: "많이", e: "🧊🧊" },
                { v: "보통", e: "🧊" },
                { v: "적게", e: "🧊" },
                { v: "없음", e: "🚫" }
            ]
        }
    ]
};


// =============================
// 4. 현재 선택 상태
// =============================

let currentType = "coffee";
let currentStep = 0;
let selected = {};


// =============================
// 4. 화면 전환
// =============================

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo(0, 0);
}


// =============================
// 5. 초기 실행
// =============================

window.onload = function () {

    updateCollectionUI();

    showIngredientUI();

    bindEvents();

};


// =============================
// 6. 이벤트 연결
// =============================

function bindEvents() {

    // 로고 클릭 → 메인
    document.getElementById("logoBtn").onclick = () => {
        showScreen("homeScreen");
    };

    // 시작
    document.getElementById("startBtn").onclick = () => {
        showScreen("selectScreen");
        showIngredientUI();
    };

    // 제조 버튼
    document.getElementById("makeBtn").onclick = () => {
        startMaking();
    };

    // 완료 버튼
    document.getElementById("finishBtn").onclick = () => {
        showResult();
    };

    // 다시 만들기
    document.getElementById("againBtn").onclick = () => {
        showScreen("selectScreen");
        showIngredientUI();
    };

    // 컬렉션 이동
    document.getElementById("goCollectionBtn").onclick = () => {
        showScreen("collectionScreen");
        renderCollection();
    };

    // 메인 이동
    document.getElementById("homeCollectionBtn").onclick = () => {
        showScreen("collectionScreen");
        renderCollection();
    };

    document.getElementById("backHomeBtn").onclick = () => {
        showScreen("homeScreen");
    };

    // 컬렉션 초기화
    document.getElementById("resetCollectionBtn").onclick = () => {
        if (confirm("컬렉션을 초기화할까요?")) {
            collection = [];
            saveCollection();
            updateCollectionUI();
            renderCollection();
        }
    };

    // 컬렉션 버튼
    document.getElementById("collectionBtn").onclick = () => {
        showScreen("collectionScreen");
        renderCollection();
    };

    // 팝업 닫기
    document.getElementById("closePopup").onclick = () => {
        document.getElementById("popup").classList.add("hidden");
    };

    // 이전 단계
    document.getElementById("prevStepBtn").onclick = () => {
        if (currentStep > 0) {
            currentStep--;
            renderStep(currentStep);
        }
    };

    // 타입 변경
    document.querySelectorAll(".type-btn").forEach(btn => {
        btn.onclick = () => {
            currentType = btn.dataset.type;

            document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            selected = {};
            showIngredientUI();
        };
    });
}


// =============================
// 7. 재료 UI (스텝 빌더)
// =============================

function showIngredientUI() {

    currentStep = 0;
    selected = {};

    document.getElementById("cupLayers").innerHTML = "";
    document.getElementById("cupEffects").innerHTML = "";
    document.getElementById("ingredientTags").innerHTML = "";
    document.getElementById("makeBtn").style.display = "none";

    // member-card 원래 구조로 초기화
    document.querySelector(".member-card").innerHTML = `
        <div id="newBadge" style="display:none">✨ NEW</div>
        <img id="memberImage" src="" alt="member">
        <h2 id="memberName"></h2>
        <h4 id="memberPosition"></h4>
        <ul>
            <li>혈액형 : <span id="memberBlood"></span></li>
            <li>MBTI : <span id="memberMBTI"></span></li>
            <li>주요업무 : <span id="memberWork"></span></li>
            <li>취미 : <span id="memberHobby"></span></li>
            <li>최애음식 : <span id="memberFood"></span></li>
            <li>관심사 : <span id="memberInterest"></span></li>
            <li>특이사항 : <span id="memberSpecial"></span></li>
        </ul>
        <p id="alreadyCollected"></p>
    `;

    buildStepProgress();
    renderStep(0);
}

function buildStepProgress() {

    const steps = STEPS[currentType];
    const container = document.getElementById("stepProgress");
    container.innerHTML = "";

    steps.forEach((step, i) => {

        const dot = document.createElement("div");
        dot.className = "step-dot";
        dot.dataset.idx = i;
        dot.innerHTML = `<span>${i + 1}</span>`;
        dot.onclick = () => {
            if (dot.classList.contains("done") || dot.classList.contains("active")) {
                currentStep = i;
                renderStep(i);
            }
        };
        container.appendChild(dot);

        if (i < steps.length - 1) {
            const line = document.createElement("div");
            line.className = "step-connector";
            line.dataset.after = i;
            container.appendChild(line);
        }
    });
}

function renderStep(idx) {

    const steps = STEPS[currentType];
    const step = steps[idx];

    // 도트 업데이트
    document.querySelectorAll(".step-dot").forEach((d, i) => {
        d.classList.remove("active", "done", "clickable");
        if (i === idx) {
            d.classList.add("active");
            d.innerHTML = `<span>${i + 1}</span>`;
        } else if (selected[steps[i].key]) {
            d.classList.add("done", "clickable");
            d.innerHTML = "✓";
        } else {
            d.innerHTML = `<span>${i + 1}</span>`;
        }
    });

    // 커넥터 업데이트
    document.querySelectorAll(".step-connector").forEach(c => {
        const after = parseInt(c.dataset.after);
        c.classList.toggle("done", !!selected[steps[after].key]);
    });

    // 콘텐츠 전환 애니메이션
    const content = document.getElementById("stepContent");
    content.classList.add("transitioning");

    setTimeout(() => {

        document.getElementById("stepTitle").textContent = step.label;

        const optsEl = document.getElementById("stepOpts");
        optsEl.innerHTML = "";

        step.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.className = "step-opt";
            btn.style.animationDelay = `${i * 0.07}s`;
            btn.innerHTML = `<span class="opt-emoji">${opt.e}</span><span class="opt-text">${opt.v}</span>`;
            if (selected[step.key] === opt.v) btn.classList.add("selected");

            const isSodaOpt = (opt.v === "제로 탄산" || opt.v === "일반 탄산");
            const mainNoSoda = (selected["main"] === "루이보스 티백" || selected["main"] === "아이스티 가루");
            if (step.key === "water" && isSodaOpt && mainNoSoda) {
                btn.disabled = true;
                btn.style.opacity = "0.35";
                btn.style.cursor = "not-allowed";
            } else {
                btn.onclick = () => pickOption(step, opt, idx);
            }

            optsEl.appendChild(btn);
        });

        content.classList.remove("transitioning");

    }, 180);

    // 이전 버튼
    document.getElementById("prevStepBtn").disabled = (idx === 0);
}

function pickOption(step, opt, stepIdx) {

    const steps = STEPS[currentType];
    selected[step.key] = opt.v;

    // 주재료가 루이보스/아이스티로 바뀌었는데 탄산이 선택된 경우 초기화
    if (step.key === "main" && (opt.v === "루이보스 티백" || opt.v === "아이스티 가루")) {
        if (selected["water"] === "제로 탄산" || selected["water"] === "일반 탄산") {
            delete selected["water"];
        }
    }

    // 옵션 선택 표시
    document.querySelectorAll(".step-opt").forEach(b => {
        b.classList.toggle("selected",
            b.querySelector(".opt-text").textContent === opt.v);
    });

    // 컵 레이어 업데이트
    updateCupLayer(stepIdx, step.color);
    updateIngredientTags();

    const allDone = steps.every(s => selected[s.key]);

    setTimeout(() => {
        if (allDone) {
            celebrateCup();
            showMakeButton();
        } else {
            let next = stepIdx + 1;
            while (next < steps.length && selected[steps[next].key]) next++;
            if (next < steps.length) {
                currentStep = next;
                renderStep(next);
            } else {
                showMakeButton();
            }
        }
    }, 460);
}

function updateCupLayer(layerIdx, color) {

    const svgG = document.getElementById("cupLayers");
    const totalSteps = STEPS[currentType].length;
    const innerTop = 20, innerBottom = 244;
    const layerH = (innerBottom - innerTop) / totalSteps;
    const y = innerBottom - (layerIdx + 1) * layerH;

    const existing = svgG.querySelector(`[data-layer="${layerIdx}"]`);
    if (existing) {
        existing.setAttribute("fill", color);
        return;
    }

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "0");
    rect.setAttribute("width", "200");
    rect.setAttribute("y", String(y));
    rect.setAttribute("height", String(layerH + 0.5));
    rect.setAttribute("fill", color);
    rect.setAttribute("data-layer", String(layerIdx));
    rect.classList.add("liquid-layer");
    svgG.appendChild(rect);

    addBubbles(layerIdx);
}

function addBubbles(layerIdx) {

    const effG = document.getElementById("cupEffects");
    const totalSteps = STEPS[currentType].length;
    const layerH = 224 / totalSteps;
    const surfaceY = 244 - (layerIdx + 1) * layerH + layerH * 0.5;

    [65, 100, 135].forEach((cx, i) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(cx));
        circle.setAttribute("cy", String(surfaceY));
        circle.setAttribute("r", String(2.5 + i));
        circle.setAttribute("fill", "rgba(255,255,255,0.45)");
        circle.classList.add("bubble-particle");
        circle.style.animationDelay = `${i * 0.18}s`;
        effG.appendChild(circle);
        setTimeout(() => circle.remove(), 1400 + i * 200);
    });
}

function updateIngredientTags() {

    const tagsEl = document.getElementById("ingredientTags");
    tagsEl.innerHTML = "";

    STEPS[currentType].forEach(step => {
        if (selected[step.key]) {
            const tag = document.createElement("span");
            tag.className = "ing-tag";
            tag.textContent = selected[step.key];
            tagsEl.appendChild(tag);
        }
    });
}

function celebrateCup() {

    const svg = document.querySelector(".cup-svg");
    svg.style.animation = "cupCelebrate .6s ease";
    setTimeout(() => { svg.style.animation = ""; }, 700);
}

function showMakeButton() {

    const btn = document.getElementById("makeBtn");
    btn.style.display = "block";
    setTimeout(() => btn.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
}


// =============================
// 10. 제조 시작
// =============================

function startMaking() {

    showScreen("makingScreen");

    let progress = 0;

    const bar = document.getElementById("progressBar");
    const text = document.getElementById("makingText");

    const interval = setInterval(() => {

        progress += 10;

        bar.style.width = progress + "%";

        if (progress === 30) text.innerText = "재료 준비 중...";
        if (progress === 60) text.innerText = "제조 진행 중...";
        if (progress === 90) text.innerText = "마무리 중...";

        if (progress >= 100) {

            clearInterval(interval);

            const finishBtn = document.getElementById("finishBtn");
            finishBtn.disabled = false;
            setTimeout(() => showResult(), 500);
            finishBtn.style.display = "none";

        }

    }, 300);
}


// =============================
// 11. 결과 계산 (핵심)
// =============================

function showResult() {

    // 매칭되는 멤버 전체 찾기 (중복 id 제거)
    const allMatched = members.filter(m => {
        const r = m.recipe;
        if (currentType !== r.type) return false;
        return Object.keys(r).every(k => {
            if (k === "type") return true;
            if (r[k] === null) return true;
            if (Array.isArray(r[k])) return r[k].includes(selected[k]);
            return r[k] === selected[k];
        });
    });

    // 중복 id 제거
    const uniqueMatched = allMatched.filter((m, idx, arr) =>
        arr.findIndex(x => x.id === m.id) === idx
    );

    if (uniqueMatched.length === 0) {
        renderResult([]);
    } else {
        // 미수집 우선
        const notCollected = uniqueMatched.filter(m => !collection.includes(m.id));
        const allCollected = notCollected.length === 0;

        if (allCollected) {
            // 전원 수집됐으면 전체 표시
            renderResult(uniqueMatched);
        } else {
            // 미수집 중 랜덤 1명
            const pick = notCollected[Math.floor(Math.random() * notCollected.length)];
            renderResult([pick]);
        }
    }

    showScreen("resultScreen");
}


// =============================
// 12. 결과 출력
// =============================

function getDrinkImage() {
    const { syrup, milk, main, water } = selected;

    if (currentType === "coffee") {
        if (syrup === "바닐라" && (milk === "일반" || milk === "오트밀크")) return "assets/drinks/vanillaLatte.png";
        if (syrup === "카라멜" && (milk === "일반" || milk === "오트밀크")) return "assets/drinks/CaramelMacchiato.png";
        if (syrup === "헤이즐넛" && (milk === "일반" || milk === "오트밀크")) return "assets/drinks/HazelnutLatte.png";
        if (syrup === "바닐라" && milk === "없음") return "assets/drinks/vanillaCoffee.png";
        if (syrup === "카라멜" && milk === "없음") return "assets/drinks/CaramelCoffee.png";
        if (syrup === "헤이즐넛" && milk === "없음") return "assets/drinks/HazelnutCoffee.png";
        if (syrup === "없음" && milk === "없음") return "assets/drinks/Americano.png";
        if (syrup === "없음" && (milk === "일반" || milk === "오트밀크")) return "assets/drinks/cafeLatte.png";
        return "assets/drinks/Americano.png";
    } else {
        if (main === "루이보스 티백") return "assets/drinks/RooibosTea.png";
        if (main === "레몬" && water === "일반 물") return "assets/drinks/lemonTea.png";
        if (main === "레몬" && (water === "제로 탄산" || water === "일반 탄산")) return "assets/drinks/lemonAde.png";
        if (main === "아이스티 가루") return "assets/drinks/IceTea.png";
        return "assets/drinks/fail.png";
    }
}

function infoRow(label, value) {
    if (!value || value === "-") return "";
    return `<li>${label} : <span>${value}</span></li>`;
}

function renderResult(members_list) {

    const drinkName = document.getElementById("drinkName");
    const img = document.getElementById("drinkImage");
    const badge = document.getElementById("newBadge");
    const already = document.getElementById("alreadyCollected");
    const memberCard = document.querySelector(".member-card");

    if (members_list.length === 0) {

        const combo = STEPS[currentType].map(s => selected[s.key]).filter(Boolean).join(" / ");
        drinkName.innerText = `❌ 매칭 실패한 음료\n${combo}`;
        img.src = getDrinkImage();

        document.getElementById("memberName").innerText = "";
        document.getElementById("memberPosition").innerText = "";
        document.getElementById("memberImage").src = "assets/drinks/fail.png";

        memberCard.querySelectorAll("li").forEach(li => li.style.display = "none");

        badge.style.display = "none";
        already.innerText = "만든 음료를 좋아하는 팀원이 없어요. ㅠㅡㅠ";

        return;
    }

    drinkName.innerText = "☕ 완성!";
    img.src = getDrinkImage();

    if (members_list.length === 1) {

        // 1명일 때 기존 방식
        const member = members_list[0];

        memberCard.innerHTML = `
            <div id="newBadge" style="display:none">✨ NEW</div>
            <img id="memberImage" src="${member.image}" alt="member">
            <h2 id="memberName">${member.name}</h2>
            <h4 id="memberPosition">${member.position}</h4>
            <ul>
                ${infoRow("혈액형", member.blood)}
                ${infoRow("MBTI", member.mbti)}
                ${infoRow("주요업무", member.work)}
                ${infoRow("취미", member.hobby)}
                ${infoRow("최애음식", member.food)}
                ${infoRow("관심사", member.interest)}
                ${infoRow("특이사항", member.special)}
            </ul>
            <p id="alreadyCollected"></p>
        `;

        const newBadgeEl = document.getElementById("newBadge");
        const alreadyEl = document.getElementById("alreadyCollected");

        if (!collection.includes(member.id)) {
            collection.push(member.id);
            saveCollection();
            newBadgeEl.style.display = "block";
            alreadyEl.innerText = "";
        } else {
            newBadgeEl.style.display = "none";
            alreadyEl.innerText = "이미 컬렉션에 등록되어 있습니다.";
        }

    } else {

        // 여러 명일 때 카드 나란히 표시
        memberCard.innerHTML = `<p style="font-weight:bold;margin-bottom:12px;">🎉 ${members_list.length}명을 모두 만났어요!</p>`;

        members_list.forEach(member => {
            const card = document.createElement("div");
            card.style.cssText = "border:2px solid #8B5E3C;border-radius:14px;padding:12px;margin-bottom:12px;text-align:center;";
            card.innerHTML = `
                <img src="${member.image}" alt="${member.name}" style="width:60px;height:60px;border-radius:50%;object-fit:cover;">
                <h3 style="margin:6px 0 2px;">${member.name}</h3>
                <p style="font-size:13px;color:#888;">${member.position}</p>
            `;
            card.onclick = () => showPopup(member);
            memberCard.appendChild(card);
        });

        const hint = document.createElement("p");
        hint.style.cssText = "font-size:13px;color:#888;margin-top:8px;";
        hint.innerText = "카드를 클릭하면 자세히 볼 수 있어요";
        memberCard.appendChild(hint);
    }

    updateCollectionUI();
}


// =============================
// 13. 컬렉션 UI
// =============================

function updateCollectionUI() {

    const uniqueCount = [...new Set(members.map(m => m.id))].length;
    const count = document.getElementById("collectionCount");

    count.innerText = `${collection.length} / ${uniqueCount}`;

    document.getElementById("collectionRate").innerText =
        `${collection.length} / ${uniqueCount}명`;
}


// =============================
// 14. 컬렉션 렌더
// =============================

function renderCollection() {

    const grid = document.getElementById("collectionGrid");
    grid.innerHTML = "";

    // 중복 id 제거 (정주찬처럼 레시피 여러 개인 경우)
    const uniqueMembers = members.filter((m, idx, arr) =>
        arr.findIndex(x => x.id === m.id) === idx
    );

    // 그룹 분류
    const nixpen20ids = [2, 3, 5, 6];
    const groups = {
        left:  uniqueMembers.filter(m => nixpen20ids.includes(m.id)),
        right: uniqueMembers.filter(m => !nixpen20ids.includes(m.id)),
    };

    // 2열 컬럼 래퍼
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "1fr 1fr";
    grid.style.gap = "20px";
    grid.style.alignItems = "start";

    ["left", "right"].forEach(side => {
        const col = document.createElement("div");
        col.className = "collection-col";

        // 컬럼 라벨
        const label = document.createElement("div");
        label.className = "col-label";
        label.innerText = side === "left" ? "NixPen 2.0" : "NixPen 5.0";
        col.appendChild(label);

        const cardGrid = document.createElement("div");
        cardGrid.className = "collection-col-grid";

        groups[side].forEach(m => {
            const isGot = collection.includes(m.id);
            cardGrid.appendChild(isGot ? makeGotCard(m) : makeLockedCard(m));
        });

        col.appendChild(cardGrid);
        grid.appendChild(col);
    });
}

function makeGotCard(m) {
    const div = document.createElement("div");
    div.className = "collection-card";
    div.innerText = m.name;
    div.onclick = () => showPopup(m);
    return div;
}

function makeLockedCard(m) {
    const allRecipes = members.filter(x => x.id === m.id);
    const coffeeRecipe = allRecipes.find(x => x.recipe.type === "coffee");
    const juiceRecipe  = allRecipes.find(x => x.recipe.type === "juice");
    const coffeeHint = coffeeRecipe ? buildHint(coffeeRecipe.recipe) : "커피 X";
    const juiceHint  = juiceRecipe  ? buildHint(juiceRecipe.recipe)  : "논커피 X";

    const wrapper = document.createElement("div");
    wrapper.className = "flip-card";
    wrapper.innerHTML = `
        <div class="flip-inner">
            <div class="flip-front locked">
                <span class="flip-q">???</span>
            </div>
            <div class="flip-back">
                <span class="flip-hint-title">☕ 커피 힌트</span>
                <span class="flip-hint-text"></span>
            </div>
        </div>
    `;

    const flipBack  = wrapper.querySelector(".flip-back");
    const hintTitle = wrapper.querySelector(".flip-hint-title");
    const hintText  = wrapper.querySelector(".flip-hint-text");
    let state = 0;

    wrapper.onclick = () => {
        if (state === 0) {
            state = 1;
            wrapper.classList.add("flipped");
            flipBack.classList.remove("juice");
            hintTitle.textContent = "☕ 커피 힌트";
            hintText.classList.remove("no-juice");
            hintText.innerHTML = coffeeHint;
        } else if (state === 1) {
            state = 2;
            flipBack.classList.add("juice");
            hintTitle.textContent = "🧋 논커피 힌트";
            const isNoJuice = juiceHint === "논커피 X";
            hintText.classList.toggle("no-juice", isNoJuice);
            hintText.innerHTML = isNoJuice ? "❌" : juiceHint;
        } else {
            state = 0;
            wrapper.classList.remove("flipped");
            flipBack.classList.remove("juice");
        }
    };

    return wrapper;
}

function buildHint(recipe) {
    const fmt = (v) => {
        if (v === null) return "무관";
        if (Array.isArray(v)) return v.join(" / ");
        return v;
    };
    const parts = [];
    if (recipe.type === "coffee") {
        if (recipe.size    !== undefined) parts.push(`사이즈: ${fmt(recipe.size)}`);
        if (recipe.shot    !== undefined) parts.push(`샷: ${fmt(recipe.shot)}`);
        if (recipe.milk    !== undefined) parts.push(`우유: ${fmt(recipe.milk)}`);
        if (recipe.syrup   !== undefined) parts.push(`시럽: ${fmt(recipe.syrup)}`);
    } else {
        if (recipe.size  !== undefined) parts.push(`사이즈: ${fmt(recipe.size)}`);
        if (recipe.main  !== undefined) parts.push(`주재료: ${fmt(recipe.main)}`);
        if (recipe.water !== undefined) parts.push(`물 베이스: ${fmt(recipe.water)}`);
        if (recipe.ice   !== undefined) parts.push(`얼음: ${fmt(recipe.ice)}`);
    }
    return parts.join("<br>");
}


// =============================
// 15. 팝업
// =============================

function showPopup(m) {

    document.getElementById("popup").classList.remove("hidden");

    document.getElementById("popupImage").src = m.image;
    document.getElementById("popupName").innerText = m.name;
    document.getElementById("popupPosition").innerText = m.position;

    const fields = [
        { id: "popupBlood",    value: m.blood },
        { id: "popupMBTI",     value: m.mbti },
        { id: "popupWork",     value: m.work },
        { id: "popupHobby",    value: m.hobby },
        { id: "popupFood",     value: m.food },
        { id: "popupInterest", value: m.interest },
        { id: "popupSpecial",  value: m.special },
    ];

    fields.forEach(({ id, value }) => {
        const span = document.getElementById(id);
        const li = span.closest("li");
        const empty = !value || value === "-";
        li.style.display = empty ? "none" : "";
        span.innerText = empty ? "" : value;
    });
}