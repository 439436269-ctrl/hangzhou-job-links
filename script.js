// 链接列表：你说一条，我往这个数组里加一条
const LINKS = [
  {
    title: "智谱华章 · 社会招聘",
    url: "https://app.mokahr.com/social-recruitment/zphz/148983#/job/53fcccb6-ce43-451a-aa2c-4020ef6c6c04?from=qrcode&isRecommendation=undefined",
    cat: "AI / 大模型",
    note: "Moka 社招页（扫码来源），直达某个岗位的详情页。",
  },
];

const listEl = document.getElementById("list");
const statsEl = document.getElementById("stats");
const searchEl = document.getElementById("search");

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function render(query = "") {
  const q = query.trim().toLowerCase();
  const items = LINKS.filter((it) =>
    !q ||
    [it.title, it.url, it.cat, it.note]
      .filter(Boolean)
      .some((s) => s.toLowerCase().includes(q))
  );

  statsEl.textContent =
    q ? `${items.length} / ${LINKS.length} 条` : `共 ${LINKS.length} 条`;

  listEl.innerHTML = "";

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML =
      "<strong>没有匹配的记录</strong>换个关键词试试，或者发我新链接帮你加上。";
    listEl.appendChild(empty);
    return;
  }

  items.forEach((it, i) => {
    const idx = String(i + 1).padStart(3, "0");
    const card = document.createElement("a");
    card.className = "card";
    card.href = it.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const head = document.createElement("div");
    head.className = "card-head";

    const idxSpan = document.createElement("span");
    idxSpan.className = "idx";
    idxSpan.textContent = idx;

    const title = document.createElement("span");
    title.className = "card-title";
    title.textContent = it.title;

    const leader = document.createElement("span");
    leader.className = "leader";

    const domain = document.createElement("span");
    domain.className = "domain-mini";
    domain.textContent = domainOf(it.url);

    head.append(idxSpan, title, leader, domain);

    const body = document.createElement("div");
    body.className = "card-body";

    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = Array.from(it.title)[0] || "·";

    const meta = document.createElement("div");
    meta.className = "meta";

    const metaLine = document.createElement("div");
    metaLine.className = "meta-line";
    const urlSpan = document.createElement("span");
    urlSpan.className = "domain";
    urlSpan.textContent = it.url;
    metaLine.appendChild(urlSpan);
    if (it.cat) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = it.cat;
      metaLine.appendChild(tag);
    }

    const note = document.createElement("p");
    note.className = "note" + (it.note ? "" : " empty");
    note.textContent = it.note || "暂无备注";

    meta.append(metaLine, note);
    body.append(badge, meta);
    card.append(head, body);
    listEl.appendChild(card);
  });
}

searchEl.addEventListener("input", () => render(searchEl.value));
render();
