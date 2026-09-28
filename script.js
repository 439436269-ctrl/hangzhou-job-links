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
  {
    title: "阿里巴巴 · 晓天睿士全栈开发工程师（晓天衡宇）",
    url: "https://talent-holding.alibaba.com/off-campus/position-detail?lang=zh&positionId=100021200008&track_id=SRPTP1790291253467QEPgrpdfbJ9178",
    cat: "AI / 数据标注",
    note: "晓天衡宇-晓天睿士平台岗位（杭州，本科/3 年+，更新于 2026-09-23）：专家社区与智能标注平台全栈开发（任务管理、质检验收、AI Agent 辅助标注）；要求 JS/TS + React 或 Java 后端，有 LLM 应用经验优先。",
    added: "2026-09-25",
  },
  {
    title: "小红书 · AI 全栈工程师（redshop）",
    url: "https://job.xiaohongshu.com/social/position/19721",
    cat: "互联网 / 电商",
    note: "小红书出海电商 redshop 岗位（上海/杭州，前端开发）：商城交易链路前端（详情/购物车/下单支付）、多语言多币种本地化、笔记种草到一键下单；精通 TypeScript、熟悉 RN，AI 工具已融入工作流，跨境/交易经验优先。",
    added: "2026-09-25",
  },
  {
    title: "佳期投资 · 技术开发岗位列表",
    url: "https://www.jqinvestments.com/positions?title=%E6%8A%80%E6%9C%AF%E5%BC%80%E5%8F%91&id=18&type=init",
    cat: "量化 / 私募",
    note: "量化私募佳期投资开放岗位（技术开发类，上海/北京）：核心系统工程师、算法开发工程师、机器学习平台工程师、高性能计算工程师、数据科学研究员、FPGA 工程师、存储工程师、技术项目经理、基础架构工程师；页面另有量化研究/深度学习/运营团队分类。",
    added: "2026-09-25",
  },
  {
    title: "MiniMax · AI 前端工程师",
    url: "https://www.zhipin.com/web/geek/jobs?city=101020100&query=ai%20%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88%20minimax",
    cat: "AI / 大模型",
    note: "BOSS直聘上海搜索页（ai 前端工程师 minimax）。对应岗位 JD：MiniMax Agent 相关 Web/桌面端前端，AI Agent 交互体验、工作流界面、多模态展示；要求扎实前端基础，有独立开发/开源/AI 工具实践优先。飞书详情页：https://vrfi1sk8a0.jobs.feishu.cn/index/position/7641118825673247027/detail（显示「Agent 前端工程师-Talkie&星野」，社招·北京/上海）。",
    added: "2026-09-25",
  },
  {
    title: "蚂蚁集团 · 前端技术（健康事业群）",
    url: "https://talent.antgroup.com/off-campus-position?positionId=24071100893841",
    cat: "互联网 / 大厂",
    note: "蚂蚁阿福前端 P6 内推（阿福 APP 业务建设、基建创新）。官网岗位：技术类-前端，上海/杭州，本科/3 年+，健康前端产品（医保、问诊、购药、健康管家）。已于 2026-09-25 投递。",
    added: "2026-09-25",
    status: "已投",
  },
  {
    title: "易方达财富 · Web 前端开发工程师",
    url: "https://wecruit.hotjob.cn/SU67ac68866202cc7916aea66e/pb/social.html",
    cat: "金融 / 基金",
    note: "系统 Web 前端框架设计、功能开发与重构优化；要求硕士及以上（计算机相关专业）、3 年+ Web 前端、扎实 JS/HTML/CSS、有完整 React 项目经验（含架构与规范）。薪资密薪制，参考现薪酬、市场涨幅与面试情况综合评定。",
    added: "2026-09-25",
  },
  {
    title: "钉钉 · 千问办公 AI Agent 全栈开发工程师",
    url: "https://talent.dingtalk.com/off-campus/position-detail?lang=zh&positionId=100034320001&track_id=SSP1790636528160KSIrdThfaf9698",
    cat: "AI / 大模型",
    note: "千问办公-AI Agent全栈开发工程师-杭州（技术类-开发，更新于 2026-09-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "钉钉 · 千问办公 AI Agent Harness 工程师",
    url: "https://talent.dingtalk.com/off-campus/position-detail?lang=zh&positionId=100030820001&track_id=SSP1790636528160vPrtgVkMmY5039",
    cat: "AI / 大模型",
    note: "千问办公-AI Agent Harness 工程师-杭州（技术类-开发，更新于 2026-09-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "钉钉 · 千问办公 AI 全栈工程师",
    url: "https://talent.dingtalk.com/off-campus/position-detail?lang=zh&positionId=100028420002&track_id=SSP1790636692058XzbtsJfSdN2491",
    cat: "AI / 大模型",
    note: "千问办公-AI全栈工程师-杭州（技术类-开发，更新于 2026-08-20）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "阿里云 · 高级 AI 前端工程师（全栈方向）",
    url: "https://careers.aliyun.com/off-campus/position-detail?lang=zh&positionId=100016763006&track_id=SSP1790636902836nsLyiMRYqC8289",
    cat: "云计算",
    note: "ATH事业群-高级 AI 前端工程师（全栈方向）-杭州（更新于 2026-09-08）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "阿里云 · 高级 AI 前端工程师（桌面端/Agent 方向）",
    url: "https://careers.aliyun.com/off-campus/position-detail?lang=zh&positionId=100008003003&track_id=SSP1790637060864QwApaZfNFv9254",
    cat: "云计算",
    note: "ATH事业群-高级 AI 前端工程师（桌面端/Agent 方向）-杭州（更新于 2026-08-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "淘天 · 阿里妈妈全栈研发工程师",
    url: "https://talent.taotian.com/off-campus/position-detail?lang=zh&positionId=100013400008&track_id=SSP1790637141510gMgCYVSQWx2647",
    cat: "互联网 / 电商",
    note: "阿里妈妈-全栈研发工程师-杭州（更新于 2026-09-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "淘天 · AI Agent 开发工程师（前端背景）",
    url: "https://talent.taotian.com/off-campus/position-detail?lang=zh&positionId=100026220005&track_id=SSP1790637203615tnBiOYhtcC9685",
    cat: "互联网 / 电商",
    note: "业务技术-AI Agent开发工程师（急招）-AI研发（前端背景）-杭州（更新于 2026-07-31）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "阿里国际站 · AI 工程师（前端开发）",
    url: "https://aidc-jobs.alibaba.com/off-campus/position-detail?lang=zh&positionId=100024655002&track_id=SSP1790637339066iczxoIynQz7353",
    cat: "跨境电商",
    note: "阿里国际站-AI工程师（前端开发工程师）-杭州（技术类-前端，更新于 2026-08-31）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "阿里国际站 · 前端开发工程师/专家（Accio）",
    url: "https://aidc-jobs.alibaba.com/off-campus/position-detail?lang=zh&positionId=100009135011&track_id=SSP1790637391345tpQIxzjoFv1348",
    cat: "跨境电商",
    note: "阿里国际站/Alibaba.com-前端开发工程师/专家-Accio-杭州（技术类-前端，更新于 2026-09-23）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
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

    head.append(idxSpan, title);
    if (it.status) {
      const st = document.createElement("span");
      st.className = "status";
      st.textContent = it.status;
      head.appendChild(st);
    }
    head.append(leader, domain);

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
