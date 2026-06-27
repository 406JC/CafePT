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
        position: "의원개발3팀 팀장",
        blood: "-",
        mbti: "ENFP",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member1.png",
        recipe: {
            type: "coffee",
            size: "M",
            shot: "2샷",
            milk: "오트밀크",
            syrup: "바닐라",
            topping: "휘핑"
        }
    },
    {
        id: 2,
        name: "한제현",
        position: "NixPen 2.0 시니어매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: "M",
            main: "루이보스 티백",
            ice: "많이"
        }
    },
    {
        id: 3,
        name: "임병철",
        position: "NixPen 2.0 매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: "M",
            main: "아이스티 가루",
            ice: "많이"
        }
    },
    {
        id: 4,
        name: "남민우",
        position: "NixPen 5.0 매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: "L",
            main: "제로 탄산",
            ice: "적게"
        }
    },
    {
        id: 5,
        name: "윤지석",
        position: "NixPen 2.0 매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: "S",
            main: "일반 탄산",
            ice: "없음"
        }
    },
    {
        id: 6,
        name: "정주찬",
        position: "NixPen 2.0 매니저",
        blood: "-",
        mbti: "ISTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member6.png",
        recipe: {
            type: "juice",
            size: "M",
            main: "루이보스 티백",
            ice: "없음"
        }
    },
    {
        id: 7,
        name: "정제형",
        position: "NixPen 5.0 매니저",
        blood: "-",
        mbti: "INTJ",
        work: "-",
        hobby: "-",
        food: "-",
        interest: "-",
        special: "-",
        image: "assets/members/member2.png",
        recipe: {
            type: "juice",
            size: "L",
            main: "아이스티 가루",
            ice: "적게"
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
                { v: "2샷", e: "☕☕" },
                { v: "3샷", e: "💪" },
                { v: "4샷", e: "⚡" }
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
                { v: "헤이즐넛", e: "🌰" }
            ]
        },
        {
            key: "topping", label: "마지막 토핑을 올리세요", icon: "✨", color: "#EFE0C0",
            options: [
                { v: "휘핑",   e: "☁️" },
                { v: "초코",   e: "🍫" },
                { v: "시나몬", e: "🍂" },
                { v: "없음",   e: "🚫" }
            ]
        }
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
                { v: "제로 탄산",    e: "🫧" },
                { v: "일반 탄산",    e: "🥤" }
            ]
        },
        {
            key: "ice", label: "얼음을 선택하세요", icon: "🧊", color: "#A8D8EA",
            options: [
                { v: "많이", e: "🧊🧊" },
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
            btn.onclick = () => pickOption(step, opt, idx);
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
            setTimeout(() => finishBtn.click(), 500);

        }

    }, 300);
}


// =============================
// 11. 결과 계산 (핵심)
// =============================

function showResult() {

    let found = null;

    if (true) {

        found = members.find(m => {

            const r = m.recipe;

            if (currentType !== r.type) return false;

            return Object.keys(r).every(k => {
                if (k === "type") return true;
                return r[k] === selected[k];
            });
        });
    }

    renderResult(found);

    showScreen("resultScreen");
}


// =============================
// 12. 결과 출력
// =============================

function renderResult(member) {

    const drinkName = document.getElementById("drinkName");
    const img = document.getElementById("drinkImage");

    const badge = document.getElementById("newBadge");
    const already = document.getElementById("alreadyCollected");

    if (!member) {

        drinkName.innerText = "❌ 실패한 음료";
        img.src = "assets/drinks/fail.png";

        document.getElementById("memberName").innerText = "실패";
        document.getElementById("memberPosition").innerText = "";
        document.getElementById("memberIntro").innerText = "";
        document.getElementById("memberImage").src = "";

        badge.style.display = "none";
        already.innerText = "잘못된 조합입니다.";

        return;
    }

    drinkName.innerText = "☕ 완성!";
    img.src = "assets/drinks/latte.png";

    document.getElementById("memberName").innerText = member.name;
    document.getElementById("memberPosition").innerText = member.position;
    document.getElementById("memberImage").src = member.image;

    document.getElementById("memberBlood").innerText = member.blood || "-";
    document.getElementById("memberMBTI").innerText = member.mbti || "-";
    document.getElementById("memberWork").innerText = member.work || "-";
    document.getElementById("memberHobby").innerText = member.hobby || "-";
    document.getElementById("memberFood").innerText = member.food || "-";
    document.getElementById("memberInterest").innerText = member.interest || "-";
    document.getElementById("memberSpecial").innerText = member.special || "-";

    // 컬렉션 처리
    if (!collection.includes(member.id)) {

        collection.push(member.id);
        saveCollection();

        badge.style.display = "block";
        already.innerText = "";

    } else {

        badge.style.display = "none";
        already.innerText = "이미 컬렉션에 등록되어 있습니다.";
    }

    updateCollectionUI();
}


// =============================
// 13. 컬렉션 UI
// =============================

function updateCollectionUI() {

    const count = document.getElementById("collectionCount");

    count.innerText = `${collection.length} / ${members.length}`;

    document.getElementById("collectionRate").innerText =
        `${collection.length} / ${members.length}명`;
}


// =============================
// 14. 컬렉션 렌더
// =============================

function renderCollection() {

    const grid = document.getElementById("collectionGrid");

    grid.innerHTML = "";

    members.forEach(m => {

        const isGot = collection.includes(m.id);

        const div = document.createElement("div");

        div.className = "collection-card " + (isGot ? "" : "locked");

        div.innerText = isGot ? m.name : "???";

        div.onclick = () => {

            if (!isGot) return;

            showPopup(m);

        };

        grid.appendChild(div);
    });
}


// =============================
// 15. 팝업
// =============================

function showPopup(m) {

    document.getElementById("popup").classList.remove("hidden");

    document.getElementById("popupImage").src = m.image;
    document.getElementById("popupName").innerText = m.name;
    document.getElementById("popupPosition").innerText = m.position;
    document.getElementById("popupBlood").innerText = m.blood || "-";
    document.getElementById("popupMBTI").innerText = m.mbti || "-";
    document.getElementById("popupWork").innerText = m.work || "-";
    document.getElementById("popupHobby").innerText = m.hobby || "-";
    document.getElementById("popupFood").innerText = m.food || "-";
    document.getElementById("popupInterest").innerText = m.interest || "-";
    document.getElementById("popupSpecial").innerText = m.special || "-";
}