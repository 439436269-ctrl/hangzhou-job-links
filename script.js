// 链接列表：你说一条，我往这个数组里加一条
const LINKS = [
  {
    title: "智谱华章 · 社会招聘",
    url: "https://app.mokahr.com/social-recruitment/zphz/148983#/job/53fcccb6-ce43-451a-aa2c-4020ef6c6c04?from=qrcode&isRecommendation=undefined",
    cat: "AI / 大模型",
    note: "Moka 社招页（扫码来源），直达某个岗位的详情页。",
    added: "2026-09-25",
  },
  {
    title: "群核科技（酷家乐）· 社会招聘",
    url: "https://app.mokahr.com/apply/qunhemail/2833#/job/857ee2fb-1d6c-40bd-86db-de011ff52c2c",
    cat: "互联网 / SaaS",
    note: "杭州群核信息技术有限公司的 Moka 社招页，直达某个岗位详情。",
    added: "2026-09-25",
  },
  {
    title: "同花顺 · 社会招聘岗位列表",
    url: "https://campus.10jqka.com.cn/jobSocial/list?type=social",
    cat: "金融科技",
    note: "浙江核新同花顺社招岗位汇总（页面当前 6 个，均在杭州）：算法工程师（量化投资）、大模型开发-摘星计划、机器人机械设计工程师、金融研究员（大模型投研方向）、宏观研究员、行业研究。",
    added: "2026-09-25",
  },
  {
    title: "字节跳动 · 全栈产品工程师（存储）",
    url: "https://www.volcengine.com/product/vepfs?_vtm_=a441938.b105878.0_0.0_0.0.45_7681565453689439794",
    cat: "云计算 / 存储",
    note: "基础设施存储团队岗位：负责存储产品控制面 Web 端、AI Copilot/Agent、原生客户端（iOS/Android/Electron/Tauri）；要求 TS/React/Vue + Node.js 及至少一项下沉能力，会用 AI 编程工具。链接为 vePFS 产品页，顶部「产品-存储」可看部门对外产品，另有日志服务 TLS、消息队列等；站内自研系统公开资料较少。",
    added: "2026-09-25",
  },
  {
    title: "阿里巴巴 · AI 全栈技术工程师（Qoder）",
    url: "https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100013543004&track_id=SSP1790291233823qAEPDMqEed6378",
    cat: "AI / 大模型",
    note: "ATH-AI创新事业部 Qoder 岗位（杭州，技术类-前端，本科/2 年+, 更新于 2026-09-22）：打造 AI Native 平台与 Agent 核心架构；要求 TS/Node.js + React/Next.js 端到端能力，深度理解 Agent 架构与上下文工程。",
    added: "2026-09-25",
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
    if (it.added) {
      const added = document.createElement("span");
      added.className = "added";
      added.textContent = `添加于 ${it.added}`;
      metaLine.appendChild(added);
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
