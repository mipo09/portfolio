
// =========================
// モーダルの基本設定
// =========================

const modal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");

const skillDetail = document.getElementById("skillDetail");
const workDetail = document.getElementById("workDetail");


// モーダルを開く
function openModal() {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

// モーダルを閉じる
function closeModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

// 閉じるボタン
modalClose.addEventListener("click", closeModal);

// 背景をクリックして閉じる
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Escapeキーで閉じる
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// =========================
// Skillsの設定
// =========================

const skills = {

  html: {
    name: "HTML",
    stars: 2,
    level: "学習中",
    description:
      "Webページの構造を作成するための言語。見出しや文章、画像などの配置を学習しています。"
  },

  css: {
    name: "CSS",
    stars: 2,
    level: "学習中",
    description:
      "Webページのデザインを作成するための言語。色やレイアウト、レスポンシブデザインなどを学習しています。"
  },

  javascript: {
    name: "JavaScript",
    stars: 2,
    level: "学習中",
    description:
      "Webページに動きを追加するための言語。ボタン操作や画面の切り替えなどを学習しています。"
  },

  python: {
    name: "Python",
    stars: 3,
    level: "学習中",
    description:
      "さまざまな処理を自動化できるプログラミング言語。音声認識やAIを活用したシステムなどを制作しています。"
  }

};


// Skillsカードをクリック
document.querySelectorAll("[data-skill]").forEach(card => {

  card.addEventListener("click", () => {

    const skill = skills[card.dataset.skill];

    if (!skill) return;

    // Skillsを表示
    skillDetail.style.display = "block";
    workDetail.style.display = "none";

    // 内容を設定
    document.getElementById("skillName").textContent =
      skill.name;

    document.getElementById("skillLevel").textContent =
      skill.level;

    document.getElementById("skillDescription").textContent =
      skill.description;

    // 星を表示
    const stars = document.getElementById("skillStars");

    stars.replaceChildren();

    for (let i = 1; i <= 5; i++) {

      const star = document.createElement("span");

      star.textContent = "★";
      star.className = i <= skill.stars
        ? "star active"
        : "star";

      stars.appendChild(star);
    }

    openModal();

  });

});


// =========================
// Worksの設定
// =========================

const works = {

  planner: {
    name: "Study Planner",
    description:
      "課題や予定を管理するWebアプリケーション。カレンダーや課題一覧などを活用し、予定を分かりやすく管理できるように制作しました。",
    images: [
      "images/works/planner1.png",
      "images/works/planner2.png",
      "images/works/planner3.png",
      "images/works/planner4.png"
    ]
  },

  minutes: {
    name: "ハンズフリー議事録システム",
    description:
      "音声認識や画像解析を活用して、会議の内容を自動で記録・整理するシステムです。",
    images: [
      "images/works/minutes1.png",
      "images/works/minutes2.png",
      "images/works/minutes3.png",
      "images/works/minutes4.png"
    ]
  },

  cafe: {
    name: "Cafe Manager",
    description:
      "商品販売や売上管理などを行いながら、カフェを経営するシミュレーションゲームです。",
    images: [
      "images/works/cafe1.png",
      "images/works/cafe2.png",
      "images/works/cafe3.png",
      "images/works/cafe4.png"
    ]
  }

};


// 現在の画像番号
let currentImage = 0;

// 現在選択している作品
let currentWork = null;


// 画像を表示する関数
function showImage() {

  if (!currentWork) return;

  const images = currentWork.images;

  document.getElementById("sliderImage").src =
    images[currentImage];

  document.getElementById("sliderCounter").textContent =
    `${currentImage + 1} / ${images.length}`;

}


// Worksカードをクリック
document.querySelectorAll("[data-work]").forEach(card => {

  card.addEventListener("click", () => {

    currentWork = works[card.dataset.work];

    if (!currentWork) return;

    currentImage = 0;

    // Worksを表示
    skillDetail.style.display = "none";
    workDetail.style.display = "block";

    // 内容を設定
    document.getElementById("workName").textContent =
      currentWork.name;

    document.getElementById("workDescription").textContent =
      currentWork.description;

    showImage();

    openModal();

  });

});


// =========================
// スライダー操作
// =========================

// 次の画像
document.getElementById("nextImage")
  .addEventListener("click", () => {

    if (!currentWork) return;

    currentImage++;

    if (currentImage >= currentWork.images.length) {
      currentImage = 0;
    }

    showImage();

  });


// 前の画像
document.getElementById("prevImage")
  .addEventListener("click", () => {

    if (!currentWork) return;

    currentImage--;

    if (currentImage < 0) {
      currentImage = currentWork.images.length - 1;
    }

    showImage();

  });
