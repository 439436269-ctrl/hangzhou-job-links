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
  {
    title: "夸克 · 高级 Agent 开发工程师（千问事业部）",
    url: "https://talent.quark.cn/off-campus/position-detail?lang=zh&positionId=100039620001&track_id=SSP1790637716174KKOjMBYpxz9279",
    cat: "AI / 大模型",
    note: "千问事业部-高级Agent开发工程师-杭州（技术类-开发，更新于 2026-09-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "夸克 · 高级前端开发工程师（AI协作工具产品）",
    url: "https://talent.quark.cn/off-campus/position-detail?lang=zh&positionId=100003740002&track_id=SSP1790637795139cgDrzHaleN6649",
    cat: "AI / 大模型",
    note: "千问事业部-高级前端开发工程师-AI协作工具产品（技术类-前端，杭州/广州，更新于 2026-09-28）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "夸克 · AI 全栈开发专家（运营业务）",
    url: "https://talent.quark.cn/off-campus/position-detail?lang=zh&positionId=7000003712&track_id=SSP1790637814324ImOOWszgkB1680",
    cat: "AI / 大模型",
    note: "千问事业部-AI全栈开发专家-运营业务（技术类-前端，广州，更新于 2026-09-22）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "夸克 · AI 全栈工程技术专家（千问事业部）",
    url: "https://talent.quark.cn/off-campus/position-detail?lang=zh&positionId=100023140002&track_id=SSP1790637814324jvZcZOJvof9529",
    cat: "AI / 大模型",
    note: "千问事业部-AI全栈工程技术专家-杭州（技术类-开发，更新于 2026-09-20）。2026-09-29 投递。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "长鑫存储 · 岗位投递（QQ 邮箱）",
    url: "",
    cat: "半导体 / 存储",
    note: "长鑫存储（CXMT）岗位，通过 QQ 邮箱投递，2026-09-29。暂无在线岗位链接，拿到招聘页地址后可补。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "Open Design · 招聘（猎头盼盼）",
    url: "https://github.com/nexu-io/open-design",
    cat: "AI / 设计工具",
    note: "微信猎头顾问盼盼推荐，2026-09-29 投递。开源 Agent-native 设计平台（前身 Refly/龙虾），创始团队来自字节扣子核心成员，base 上海、约 20 人核心团队；GitHub 98K+ star（Apache-2.0/TypeScript），官网 open-design.ai。JD 详见《Open Design.pdf》。",
    added: "2026-09-29",
    status: "已投",
  },
  {
    title: "DeepSeek（幻方量化）· Agent Harness 团队",
    url: "https://app.mokahr.com/m/social-recruitment/high-flyer/140576#/job/8d40c764-d2b2-49b1-826c-e3f2adb75c01?from=qrcode",
    cat: "AI / 大模型",
    note: "DeepSeek（杭州幻方量化）Harness 团队招聘，全职/实习均可，浙江·杭州市 / 北京市。团队理念「Model + Harness = Agent」，把模型能力转化为科研突破与 Agent 产品；招聘方向含深度学习研究员、研发工程师、开发者关系、产品经理、产品设计师、项目经理、产品运营。要求熟练使用 AI Agent 工具做软件开发，熟悉 LLM 与 Agent 机制（LLM API、KV Cache、Agent Loop、Tool Use、Reasoning、Planning、Skills、MCP、Memory、Subagent、Multi-Agent）及 Prompt/Context/Harness Engineering，且是 Agent 产品的高强度用户。链接为扫码来源，直达该团队职位详情。",
    added: "2026-10-04",
  },
  {
    title: "腾讯 · 招聘搜索页（杭州）",
    url: "https://careers.tencent.com/search.html",
    cat: "互联网 / 大厂",
    note: "腾讯招聘官网搜索入口。杭州岗位较少——2026-10-04 经官方公开接口查到 51 个（同口径全站 2300，深圳 1283、北京 232、上海 212、广州 181、成都 70）。接口 careers.tencent.com/tencentcareer/api/post/Query，cityId 对应：1 深圳 / 2 北京 / 3 上海 / 5 广州 / 7 杭州 / 8 成都；单条岗位页形如 jobdesc.html?postId=xxx。",
    added: "2026-10-04",
  },
  {
    title: "拼多多集团-PDD · 前端工程师（大数据方向）",
    url: "https://www.quanzhi.com/job/68e71d6c7f2732863ff1c6e4",
    cat: "互联网 / 电商",
    note: "上海（技术类，全职，招 1 人）：负责大数据产品的前端架构设计、核心模块开发与性能优化；主导复杂数据可视化组件（图表库、报表引擎、交互式分析界面）的设计实现；建设并维护前端数据可视化通用组件库；解决海量数据渲染、实时数据更新场景下的渲染性能与内存管理问题。要求精通 HTML5/CSS3/JS/TS，熟练 React/Vue 及其生态，有大型数据可视化项目的深度使用与定制开发经验。链接为「全职招聘网」聚合页（JD 原发布于 PDD 官网，聚合页现标注「已结束」）；PDD 社招官网 careers.pddglobalhr.com 的岗位搜索页未给出可直连的岗位地址，官方直链待补。",
    added: "2026-10-10",
  },
  {
    title: "网易严选 · 全栈开发工程师（AI Coding Agent 方向）",
    url: "https://hr.163.com/job-detail.html?id=77317",
    cat: "互联网 / 电商",
    note: "杭州（技术类，招 1 人，不限学历/年限，更新于 2026-09-21）。网易严选 AI 赋能新型全栈研发岗：依托 Coding Agent 独立完成开发、测试、部署、运维全链路闭环交付，聚焦 AI 编码工具深度落地、Prompt 工程与 Agent 任务编排调优、模型调用成本优化。要求熟练 Vue/React + TS 及工程化，Java/Node.js/Python 任一后端栈，精通数据库设计、SQL 优化与线上排障；核心是能靠 Coding Agent 完成完整全栈交付并调教 Agent。加分项：长期深度使用 Cursor/Claude Code/Codex 等做全栈落地、沉淀过 Prompt 模板与任务编排方案。",
    added: "2026-10-10",
  },
  {
    title: "网易伏羲 · 机器人平台开发工程师（全栈）",
    url: "https://hr.163.com/job-detail.html?id=76809&lang=zh",
    cat: "AI / 机器人",
    note: "杭州（技术类，招 1 人，本科 / 3-5 年，更新于 2026-09-21）。网易伏羲机器人自动化作业平台全栈岗：核心页面与复杂交互开发，调度平台与智能远控平台（可视化大屏、实时数据看板），BI 报表与数据看板全栈开发（查询接口、数据聚合、前端可视化），边缘端数据可视化与调试工具，能独立完成模块前后端联调闭环。要求熟练 React + 组件化、前端工程化（Vite/Webpack）、Node.js/Python 后端栈、WebSocket 实时通信；能熟练用 Cursor / GitHub Copilot / Claude Code 等 AI 编程工具，并了解 Agent、MCP 等概念。加分：ECharts/D3/Three.js 数据可视化与实时大屏、微前端（qiankun/Module Federation）或 Monorepo、IoT 或机器人设备管理平台、ROS/边缘计算、容器化部署、Tauri/Electron 跨端、Node BFF 或 Next.js SSR。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易游戏（互娱）· 全栈开发工程师（蛋仔派对）",
    url: "https://hr.163.com/job-detail.html?id=76749&lang=zh",
    cat: "游戏 / 互联网",
    note: "杭州（游戏程序，招 1 人，不限学历/年限，更新于 2026-06-24）。蛋仔派对项目前后端开发与迭代：参与需求评审与技术方案落地，独立完成前端页面、后端接口与数据库设计，做性能与代码质量优化、线上问题排查；跟踪 AI 在前端/后端的技术演进，引入新工具提升研发效能。要求本科计算机相关、5 年以内前后端经验，熟练 HTML/CSS/JS/TS 与 Vue/React 之一，Go/Python/Java 之一并能做 RESTful API 设计，熟悉关系型数据库及 Redis/MongoDB、Linux、CI/CD 者优先，有 AI 编程助手使用经验者优先。2026-10-10 已投递。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易游戏（互娱）· 全栈开发工程师",
    url: "https://hr.163.com/job-detail.html?id=77815&lang=zh",
    cat: "游戏 / 互联网",
    note: "杭州（游戏程序，招 1 人，不限学历/年限，更新于 2026-08-28）。JD 正文与 id=76749（蛋仔派对）完全一致，应为同一岗位的新批次/重发，投递时注意别重复。要求本科计算机相关、5 年以内前后端经验，熟练 HTML/CSS/JS/TS 与 Vue/React 之一，Go/Python/Java 之一并能做 RESTful API 设计，熟悉关系型数据库及 Redis/MongoDB、Linux、CI/CD 者优先，有 AI 编程助手使用经验者优先。2026-10-10 已投递。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "华为 · 社会招聘职位列表（J26 职类）",
    url: "https://career.huawei.com/cn/social-recruitment-job-list?jobFamilyCodeList=J26",
    cat: "互联网 / 大厂",
    note: "华为社会招聘职位列表页（URL 里 jobFamilyCodeList=J26 是职类筛选参数，站点前端渲染，具体职类名称需在页面上看筛选项）。2026-10-10 查看：杭州方向没有找到相关岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "百度 · 社会招聘职位列表",
    url: "https://talent.baidu.com/jobs/social-list",
    cat: "互联网 / 大厂",
    note: "百度社会招聘职位列表页。2026-10-10 查看：没有找到相关岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "京东 · 社会招聘职位列表",
    url: "https://zhaopin.jd.com/web/job/job_info_list/3",
    cat: "互联网 / 大厂",
    note: "京东社会招聘职位列表页（zhaopin.jd.com/web/job/job_info_list/3，路径末尾 /3 为社招频道，页面标题即「社会招聘」；站点前端渲染）。2026-10-10 查看：没有找到相关岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "美团 · AI Agent 工程师",
    url: "https://zhaopin.meituan.com/web/position/detail?jobUnionId=3424768905&highlightType=social",
    cat: "互联网 / 大厂",
    note: "美团核心本地商业-基础研发平台，社招-正式，更新于 2026-09-14；⚠️ 工作地点为北京市、上海市（不在杭州），要求 3 年经验。2026-10-10 已投递。职责：① 开发框架——CatPaw SDK/CLI 能力建设、Skill/Plugin 体系、开发者体验；② 平台集群——基于 OpenClaw 构建 CatClaw 集群、多智能体运行时、路由调度、会话管理、记忆系统；③ AI 编排——多模型调度、Prompt 工程、Function Calling、上下文管理；④ 场景接入——IM/社交/办公多端渠道对接、浏览器自动化；⑤ 安全隔离——多租户权限控制、数据沙箱。要求精通 TypeScript/Node.js 或 Python，是重度 AI Coding 用户（日常用 CatPaw/Cursor/Claude Code 写代码），理解 LLM 应用开发（Prompt、Tool Use、RAG），具备平台/框架级系统设计能力。加分：Agent 平台/IDE/CLI 工具链开发经验、浏览器自动化（Playwright/CDP）、自建过 AI 助理并日常使用。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "美团 · AI Builder（研发工作流方向）",
    url: "https://zhaopin.meituan.com/web/position/detail?jobUnionId=4754065646&highlightType=social",
    cat: "互联网 / 大厂",
    note: "美团核心本地商业-业务研发平台，社招（jobUnionId=4754065646）。2026-10-10 已投递。方向：面向需求分析、方案设计、编码、测试、代码评审等研发环节设计并开发 AI 原生工作流；负责研发 Agent 端到端建设（场景分析、Agent 设计、工具调用、知识库接入、效果评测、持续迭代）；推动 Agent 完成代码检索、跨仓理解、代码生成、测试生成、缺陷定位及 CI/CD 联动；把工程规范与领域知识转成可复用、可评测的 AI 解决方案。要求本科计算机相关，熟练 Python/Java/Go/JS-TS 之一，有实际业务系统开发与上线交付经验，具备大模型应用开发经验（Prompt Engineering、RAG、Tool Calling、Agent、模型评测），熟悉 Git/CI-CD/自动化测试与大型代码库协作。优先：做过 AI Coding 产品/代码 Agent/研发工作流平台/IDE 插件，熟悉代码检索、上下文工程、工具调用与 MCP，深度用过 Claude Code/Codex/Cursor。亮点：面向大型代码库与真实生产环境，建设能理解、规划、执行、验证任务的完整研发 Agent。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "快手 · 社会招聘职位列表（杭州）",
    url: "https://zhaopin.kuaishou.cn/recruit/e/#/official/social/?workLocationCode=Hangzhou&pageNum=6&positionCategoryCode=J0012",
    cat: "互联网 / 大厂",
    note: "快手官方社招频道。URL 已带筛选：workLocationCode=Hangzhou（杭州）、positionCategoryCode=J0012（岗位类别，页面上可看到类别名）；pageNum=6 只是翻页状态，去掉即回到第 1 页。2026-10-10 查看：没有合适岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "拼多多 · 官方社会招聘（PDD 官网）",
    url: "https://careers.pddglobalhr.com/jobs",
    cat: "互联网 / 电商",
    note: "拼多多集团-PDD 官方社会招聘站（Next.js 应用，同源域名 careers.pinduoduo.com / careers.pddglobalhr.net / careers.pddglobalhr.com）。页面自带「所在城市」与「职位类别」筛选，以及「热招岗位 / 最新发布」两种排序。2026-10-10 记下待投（尚未投递）。此前那条「拼多多集团-PDD · 前端工程师（大数据方向）」是通过「全职招聘网」聚合页收录的、原页已标已结束，官网直链以本条为准。站点数据前端异步加载、服务端 HTML 里岗位数为 0，抓不到统计。",
    added: "2026-10-10",
  },
  {
    title: "滴滴 · 社会招聘职位列表",
    url: "https://talent.didiglobal.com/social?page=1&size=100",
    cat: "互联网 / 大厂",
    note: "滴滴官方社会招聘职位列表页（talent.didiglobal.com/social；URL 里 page/size 只是分页与每页条数的展示参数，size=100 即一页列 100 条）。2026-10-10 查看：没有合适的岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "OPPO · 社会招聘职位列表",
    url: "https://career.oppo.com/official/oppo/recruitment/post?recruitType=SOCIAL-RECRUITMENT",
    cat: "硬件 / 消费电子",
    note: "OPPO 官方招聘的职位列表页（URL 里 recruitType=SOCIAL-RECRUITMENT 即社招频道）。2026-10-10 查看：杭州没有岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "vivo · 招聘职位列表（杭州）",
    url: "https://hr.vivo.com/jobs?_p=1&_irjl=%E6%9D%AD%E5%B7%9E&_irjc=M1718986166464483330",
    cat: "硬件 / 消费电子",
    note: "vivo 官方招聘职位列表。URL 已带筛选：_irjl=杭州（URL 编码 %E6%9D%AD%E5%B7%9E）、_irjc=M1718986166464483330（岗位类别/职位族参数，页面上能看到具体名称）、_p=1 为页码。2026-10-10 查看：没有前端岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "Zoom · 招聘职位列表",
    url: "https://www.zoomcareer.cn/job-results#/",
    cat: "互联网 / SaaS",
    note: "Zoom 中国招聘站的职位列表页（zoomcareer.cn；站点为前端路由，URL 以 #/ 结尾）。2026-10-10 查看：杭州没有前端岗位，先记下入口备用。",
    added: "2026-10-10",
  },
  {
    title: "哔哩哔哩 · 社会招聘职位列表（上海）",
    url: "https://jobs.bilibili.com/social/positions?code=01&location=%E4%B8%8A%E6%B5%B7&type=3",
    cat: "互联网 / 大厂",
    note: "B 站官方社会招聘职位列表，URL 已带筛选：location=上海（URL 编码 %E4%B8%8A%E6%B5%B7）、code=01 与 type=3（职位类别/类型参数，页面上可看到对应名称）。2026-10-10 查看：相关岗位仅在上海、且偏后端方向，与杭州前端/全栈的定位不匹配。",
    added: "2026-10-10",
  },
  {
    title: "观猹（Watcha）· 邮件投递（hr@watcha.cn）",
    url: "https://watcha.cn/",
    cat: "AI / 社区",
    note: "观猹（Watcha.cn），定位「前沿科技爱好者聚集地」的 AI 社区/产品，站点为 Nuxt 前端应用。官网没有招聘页或在线投递入口，2026-10-10 通过邮件投递至 hr@watcha.cn，故这里记官网地址 + 投递邮箱备用。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "携程 · 前端技术专家（酒店研发）",
    url: "https://job.ctrip.com/#/experienced/job-detail/MJ022585",
    cat: "互联网 / 大厂",
    note: "⚠️ 工作地点：上海（上海住宿业务开发），非杭州。更新于 2026-08-31。2026-10-10 已投递。本职与本人经历高度重合：负责酒店大前端技术架构，主导跨端架构（Trip.com / 携程旅行 APP、H5、PC、小程序）演进与开发规范，主导基础设施建设提升工程效率；核心要求「主导研发范式向 AI-Native 升级」——建设基于 Claude Code / Codex 等 Coding Agent 的 AI 辅助研发流程，覆盖需求理解、方案生成、代码实现、测试验证、Code Review、线上排障全链路，并建立 AI 交付质量体系（工程知识库、评测集、回归门禁、结果校验与上线风险控制）、持续度量 AI 提效收益；负责端上性能优化（首屏、交互、弱网）；牵头 Generative UI、对话式交互、端侧智能化等新技术试点。任职要求：5 年+ 大前端且有主导大型前端架构落地案例；跨端（React Native / KMP）深入且有生产规模应用；AI Coding 深度实践者（重度用 Claude Code / Cursor / Codex，能结合 Context Engineering、MCP、Agent 工作流重塑研发流程，理解 Agent / RAG / 评测体系）；性能优化系统性认知；社区活跃 / 开源 / 博客优先。加分：英文口语与海外项目、Node.js 服务端或全栈、AI Coding 工具或 AI 效能平台建设、LLM 应用开发（Agent / RAG / Function Calling）。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "携程 · 高级/资深前端开发工程师（酒店研发）",
    url: "https://job.ctrip.com/#/experienced/job-detail/MJ023132",
    cat: "互联网 / 大厂",
    note: "⚠️ 工作地点：上海（上海住宿业务开发），非杭州。更新于 2026-08-26。2026-10-10 已投递。负责携程酒店业务研发、保证多平台兼容性，善用 AI Coding 工具高质量交付；负责前端技术方案选型与架构设计、技术攻坚，持续提升质量/性能/架构合理性；参与前端技术体系建设（公共组件、工具、文档）与团队 AI 提效建设——Prompt、Skills、MCP 工具的沉淀与共享，自动化测试与 Code Review；探索 AI 场景的前端落地：流式渲染（SSE/WebSocket）、对话式交互、Generative UI，把不确定的模型输出转化为可控体验（反馈机制、解释性展示、兜底策略）。要求 3 年以上、熟练 JS/TS/ES6+，React 或 Vue 之一深入使用并了解实现原理；熟练使用 Claude Code/Cursor/Codex 并融入日常开发流程；了解 LLM 基本概念，在 Prompt Engineering、Agent 工作流、流式渲染、RAG 至少一个方向有实践；对 AI 生成代码具备校验与质量意识（Prompt 拆解、上下文管理、结果校验、理解幻觉风险与兜底约束）。加分：AI 应用 0→1 落地、社区活跃/开源/博客、Node.js 或全栈。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易智企 · 云商-资深 Agent 平台全栈工程师",
    url: "https://hr.163.com/job-detail.html?id=78192",
    cat: "AI / Agent 平台",
    note: "杭州（技术类，招 1 人，本科/3-5 年，更新于 2026-08-24）。2026-10-10 已投递。【本轮 S 级首选】AI-Native Agent 平台全栈研发：支撑 Agent 工作台、会话、任务执行、工具调用、日志流与评测等核心能力；前端基于 React + TypeScript 构建复杂中后台，设计稳定可维护的 Agent 交互体验；后端基于 Java/Spring Boot 开发平台核心模块（会话、任务、权限、执行记录、审计追踪）；设计并实现 API、WebSocket/SSE 数据协议、任务状态模型、事件流模型与错误处理规范；建设 Agent 长任务、流式输出、实时日志、失败恢复、Human-in-the-loop 端到端能力。要求熟练 React+TS 与现代前端工程化（Vite/Next.js/Webpack 之一），熟练 Java/Spring Boot/Spring Cloud，熟悉 MySQL/Redis/消息队列/缓存/限流/幂等/异步任务，熟悉 WebSocket/SSE/流式响应与长任务状态推送，具备领域建模与 UI 抽象能力；明确要求深度使用 Codex、Claude Code、Cursor 等 Coding Agent 并参与 AI-Native 研发流程建设。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易职能 · 资深AI Agent 开发工程师（效率工程部）",
    url: "https://hr.163.com/job-detail.html?id=58561",
    cat: "AI / Agent 平台",
    note: "杭州（人工智能类，招 1 人，本科/3-5 年，更新于 2026-09-21）。2026-10-10 已投递。【本轮 S 级首选】加入效率工程部，深度参与 AI Agent 工具产品研发，主导 AI 工具链设计与建设；主导上下文工程与多 Agent 架构设计，构建工具 Skill 生态与 Workflow 编排体系，打造灵活可扩展的 Multi-Agent 协作架构，保障 Prompt 工程稳定性；构建高可用 AI Agent 工具系统；落地多 Agent 协作、长上下文处理、MCP 协议、Function Calling、工具链扩展等前沿技术栈。要求本科计算机相关、4 年以上项目开发经验，熟练 Java/Python 之一；有扎实的 AI Agent/LLM 应用开发经验，深入理解 ReAct、Plan-and-Execute、Multi-Agent 等范式，熟悉上下文工程、模型调优、效果评测；熟悉 LangGraph/LangChain 等框架或有二次开发经验者优先；熟练使用 Cursor/Codex/Claude Code 等 AI Coding 工具。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易游戏（雷火）· AI全栈开发工程师（暴雪）",
    url: "https://hr.163.com/job-detail.html?id=77484",
    cat: "游戏 / 互联网",
    note: "杭州（技术类，招 1 人，不限学历/年限，更新于 2026-09-10；另有同岗位批次 id=78036）。2026-10-10 已投递。【本轮 S 级首选，前端为主场】负责游戏宣发官网、活动专题页、小程序等前台展示类业务的研发与迭代，承担核心模块与复杂交互；基于 Vue3 + Vite 做复杂页面架构设计、组件封装、状态管理、性能优化及跨端（H5/PC/小程序）适配；参与前后端一体化，基于 Go 构建轻量 BFF/业务接口服务；深度使用 AI 编程工具链（Claude Code/Codex/Cursor）结合 OpenSpec + SDD 开发范式，参与需求拆解、方案设计、代码生成、单测生成、联调验证与问题定位；参与 AI 工程体系建设（Prompt/Spec 结构化设计、Skill 能力沉淀、自动化开发工作流）。要求 2 年以上前端经验、熟练 Vue3 生态与 Vite/Webpack/Git/CI-CD，具备前端性能优化能力，具备一定 Go 后端与 BFF/API 开发能力。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "网易职能 · 高级/资深全栈开发工程师（综合产品）",
    url: "https://hr.163.com/job-detail.html?id=77774",
    cat: "互联网 / 大厂",
    note: "杭州（技术类，招 1 人，本科/5-10 年，更新于 2026-09-07）。2026-10-10 已投递。负责综合域相关系统的技术方案设计、核心功能开发与上线交付，保障性能与稳定性；独立完成前后端全链路开发（React + Java），主导解决复杂业务场景技术难点，推动系统架构持续演进。要求 3 年以上前后端经验、有企业信息化等复杂业务系统经验优先；熟悉 Spring Cloud 生态、MySQL/Redis/MongoDB 及常用中间件，具备复杂业务系统架构设计与实施能力；熟悉 React 及常用组件库，具备复杂表单交互、组件抽象与性能优化能力；明确要求深度使用 Claude Code、Codex、Cursor、OpenCode 等 AI 编程工具，形成高效的 AI 辅助调试、代码审查及重构习惯。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "影刀 RPA · 岗位详情（positionId 7670352873042331940）",
    url: "https://join.yingdao.com/index/position/7670352873042331940/detail",
    cat: "AI / RPA",
    note: "杭州分叉智能科技有限公司（影刀 RPA）的岗位，走飞书招聘门户（自建域名 join.yingdao.com）。2026-10-10 已投递。⚠️ 投递后用户自行查询薪资，判断**该司薪资水平偏低、与自身预期不符**，不作为主要目标跟进（投递记录保留备查）。⚠️ 该门户详情页是前端路由，服务端对详情 URL 返回 404、/api/* 亦被 CDN 兜底页接管，未能取到岗位名称与 JD——标题暂以 positionId 代记。公司背景：杭州本土 RPA + AI Agent 厂商，总部在杭州市未来科技城鼎创财富中心 B1 幢，另设北京/上海/深圳/广州/成都/厦门/南京分部，投递邮箱 fc@yingdao.com。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "YouMind · AI 产品全干工程师",
    url: "https://offerdao.ai/j/69f319f90000000035025aa9",
    cat: "AI / 内容创作工具",
    note: "YouMind（玉伯发起的创业项目，杭州；内容创作工具，帖内标签：知名初创 / 正式+实习）。2026-10-10 **通过邮件投递至 contact@youmind.ai**，投的是「AI 产品全干工程师」。该岗位描述：参与 YouMind 入口层（网页、插件、客户端、爬虫等）的产品迭代；探索新的 Agent 功能和玩法，把灵感口喷成 demo，再上线面向用户；不被框死在单一环节。要求：有过完整作品（开源项目/上线产品/副业都行）；**年限不卡**（实习生、校招生、1-2 年、十年老兵都欢迎）；熟练使用 Claude Code / Codex / OpenClaw 等；加分项是本身为创作者、有自媒体账号和粉丝基础。同帖另有 4 个岗位：① 增长工程实习生（前端熟悉、能独立做全栈项目、海外社媒单平台粉丝 1000+）② 产品工程师（AI writing & Editor 方向，加分项 Tiptap/ProseMirror/Slate/Lexical 富文本框架）③ AI Infra 工程师（Agent 基础设施、模型接入/上下文工程/权限体系、写 Skill 与 Prompt、Agent 工程化、加分项熟悉 Claude Code/OpenClaw/Hermes 源码）④ AI Computer 工程师（MicroVM/Firecracker/Sandbox、长期记忆 Agent）。公司福利：不限量使用 Claude Code/Codex 等 Coding agents 且公司报销、高额设备补贴、年度创作补贴（涨粉给现金）、YouCoffee 免费、公司猫狗双全。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "Ateve（前夜实验室）· Agent / Search / AI Infra 研究员",
    url: "https://offerdao.ai/j/agent_tt12re3gtlc4me",
    cat: "AI / 搜索基础设施",
    note: "Ateve 是一家 AI 原生搜索基础设施公司，为 LLM 与 AI Agent 提供 Search（搜索）/ Retrieval（检索）/ Data verification（数据验证）能力。前夜实验室（Ateve Lab Plan）是其面向 agent、search、ai infra 做前沿探索与快速验证的小组——不只研究新的可能，也把它真正做出来。本次招全职 2-3 人（Base 北京 / 杭州）+ 实习生 7-8 人（实习 800-1800 元/天）。要求 Smart·Curious·Builder：会读 paper 也能把 paper 变成 code；**做过 agent，而不是只调用过 agent**；做过 agent platform / search / rag；GitHub 上有真正自己做出来的项目；论文/开源项目/star 加分；计算机·数学·统计·物理背景，海内外一流高校硕博优先；全职 1-3 年经验。2026-10-10 **通过邮箱投递至 join@ateve-inc.com**（邮件主题需注明「Ateve Lab Plan 前夜实验室｜姓名｜学校/公司｜岗位」）。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "杭州了不起科技（Labuki）· Agent 工程师",
    url: "https://offerdao.ai/j/agent_f4wycsfytj8hiw",
    cat: "AI / Agent",
    note: "AI Agent 创业公司（Labuki，杭州）多岗开放招聘，本岗属 AGENT 组：把企业级 Agent 从 0 到 1 做成真实可用的产品——设计并实现 AI Agent 产品与技术路线、优化 RAG 召回/准确率/Agent 体验、与产品运营协作打磨真实用户场景。要求 5 年+ 软件开发且具备 0-1 Agent 经验，精通 Python 与至少一种 Agent 框架，理解 Agent 范式、LLM 工作方式与工作流架构。同帖另有 Harness 工程师（AI Agent Runtime/工程控制层）、企业本体建模师、数据质量负责人、国际用工专家、涉外法务。⚠️ 2026-10-10 记录：**看过、未投递**（招聘邮箱 recruit@labukitech.com）。",
    added: "2026-10-10",
  },
  {
    title: "个性进化 Indievolve · 资深 AI 技术架构师",
    url: "https://offerdao.ai/j/manual_0tpceh5lthtbln",
    cat: "AI / 教育科技",
    note: "个性进化（INDIEVOLVE）是 AI 原生教育科技公司（成员来自 MIT、哈佛、港中文、北师大），把顶尖 AI 能力通过工程手段落地到网络环境差、资源受限的县域和乡村学校，商业模式已在真实环境跑通并产生收益。本岗「资深 AI 技术架构师」：产品线端到端技术负责（一人闭环）；设计边界清晰、可演化的架构；**多 Agent 系统设计与治理**（任务规划、工具调用、记忆、监控，建评测与可观测性，为模型不确定性设计兜底降级）；调用成本与延迟优化；真实场景快速迭代。要求 3 年+ 全栈开发含深度 LLM 应用经验（RAG/Agent/Prompt）且做过真实上线运营的 AI 产品；能独立完成生产级系统架构；后端精通 Python(FastAPI) 或 Java(Spring) 之一，前端 React/Vue，能处理流式响应（SSE/WebSocket）与向量检索；理解多 Agent 核心问题。薪资范畴不设限面议 + 早期期权，地点杭州拱墅区远洋国际中心，汇报对象 CEO，双休+弹性工作。⚠️ 2026-10-10 记录：**看过、未投递**（team@indievolve.com）。同帖另有 CTO / 技术合伙人、创始人助理。",
    added: "2026-10-10",
  },
  {
    title: "宇生月伴（VUI Labs）· AI Native 全栈工程师",
    url: "https://offerdao.ai/j/manual_37xadafvtg5n5x",
    cat: "AI / 语音交互",
    note: "宇生月伴（VUI Labs）是一家杭州的 AI-native startup（团队含上海交通大学钱彦旻教授团队），专注 real-time voice generation、multimodal interaction、AI companionship 与 AI education，做下一代自然人机交互。本岗「AI Native 全栈工程师」：参与 AI 产品前后端核心功能开发，从需求、方案到上线完整交付；**技术栈不限（Python / TypeScript / Go / Java 均可）**，希望既能写后端，也愿意做前端页面和接口联调；非常鼓励用 AI 工具提升开发效率。要求本科 985 以上。2026-10-10 **通过邮箱投递至 chaijingya@vuilabs.ai**。同帖另有 大模型数据管线/后端开发、AI Infra/推理优化 岗。",
    added: "2026-10-10",
    status: "已投",
  },
  {
    title: "Converge AI · AI Agent 前端开发工程师（Combos 方向）",
    url: "https://converge.ai/",
    cat: "AI / Agent 产品",
    note: "【状态：面试邀约】Converge AI（converge.ai）——AI-native 企业级套件，官网自述「AI-native Suite for Your Whole Business」「All-in-one AI platform—specialized AI products that share context across teams. Automate workflows, deliver real business results without adding headcount.」（专门化 AI 产品跨团队共享上下文、工作流自动化、不靠加人出结果）。产品线：Converge / Enter / Framia / **Combos** / Concat，本岗属 **Combos** 线。**九坤创投被投**（九坤投资系国内头部量化私募，其创投臂）。⚠️ converge.ai 在中国大陆返回「该服务目前暂未在您所在的地区开放」——**大陆不可访问**，判断为面向海外市场/海外架构的团队；面试务必确认**发薪主体**、**期权归属**与**大陆网络能否正常使用其产品与内部系统**。\n\nJD 要点：负责 AI Native 产品的前端架构设计与核心功能开发；参与 AI Agent、多智能体协作、AI Workflow、智能创作、开发者工具等产品前端研发；与产品/设计/算法/后端紧密协作，推动大模型、Agent、MCP、Tool Calling、多模态等能力落地；负责复杂交互场景（Chat、Workflow、可视化编辑器）核心模块；持续优化前端工程化、性能与体验。要求本科+计算机相关、3 年+ 前端、JS/TS 扎实、熟悉 React 与 Next.js、现代前端工程化且能独立负责复杂项目、对 AI 产品与开发者工具有浓厚兴趣。加分项：AI Agent/AI 应用/开发者工具/SaaS/复杂交互产品经验；熟悉 MCP、Function Calling、RAG、Agent Workflow、多 Agent；深度使用 Cursor/Claude Code/GitHub Copilot/Windsurf 并将 AI 融入日常开发；海外或全球化产品、开源项目经验。",
    added: "2026-10-10",
    status: "面试邀约",
  },
  {
    title: "Mewtant（PixAI.art）· 资深前端/产品工程师（消费级 AIGC）",
    url: "https://pixai.art/",
    cat: "AI / 二次元 AIGC",
    note: "【待投/待评估】Mewtant 是一家专注 AIGC 的科技公司，核心产品 **PixAI.art（AI 角色引擎）**：面向二次元/ACG 的动漫风格 AI 图像与视频生成——文生图/图生图（含吉卜力等专项模型）、AI 短视频互动模板（AI Kiss / AI Hug Video）、在线训练专属 LoRA 与角色一致性生成（同角色跨姿势/场景稳定复现）、模型市场与画廊社区、Upscaler 高清放大、实时生成；商业模式为基础免费额度（每日赠送积分）+ 付费订阅（高分辨率/更快速度/商用授权）。差异化：几乎只做二次元/动漫/ACG（不像 Midjourney/SD 全风格）、角色优先（虚拟人/OC/IP 一致性）、移动端友好、社区属性强、视频偏短互动。\n\nJD 要点（数百万用户消费级产品的资深前端/产品工程师）：全程 own 核心功能与页面（想法→上线→持续打磨）；把产品想法转化为精致高性能的 React/TS Web 体验，**亲手做出而非只写规格**；主导跨页面复用的前端架构与组件/设计体系，必要时下探 API/BFF 层做端到端；**自己定义埋点与验证方式、用数据判断是否真解决用户问题**；own 领域内用户反馈与长期产品成败、定义核心指标；指导其他工程师。要求：本科+（但**作品、判断力与产品品味比文凭更重要**）；React/TS 扎实，熟悉现代 React（Hooks、SSR/服务端组件、并发特性）与可扩展前端架构；product sense（能分辨「做得好」与「技术上做完了」）；用户同理心（对卡顿/掉帧/困惑流程敏感）；会用数据（假设→指标→dashboard/实验）；沟通清晰。经验：**5-8+ 年**构建真实用户使用的 Web/消费级产品；做过 product owner 或 own 过核心产品指标；有基于反馈或指标持续改进的实绩；**B2C/消费级产品经验，最好在游戏/社交领域**；有 A/B 测试或产品实验一手经验。加分：快速增长消费级产品经验、或自己上线过的 indie 项目/网站；**对动漫、宅文化、创作者社区或 AI 图像生成有兴趣**；带过小团队；后端全栈（Node/Postgres 等）。\n\n来源：微信公众号文章 https://mp.weixin.qq.com/s/2izzOsPHG_swDOCvMBNLCA ⚠️ 2026-10-10 抓取 pixai.art 无响应（疑似反爬），公司主体与地点未能独立核实；JD 未写工作地点，需确认是否远程/所在城市与发薪主体。",
    added: "2026-10-10",
  },
  {
    title: "Meshy AI · 生成式 AI 3D 内容创建平台",
    url: "https://offerdao.ai/c/company_73dbc4baa72b451288781af0f764eaab",
    cat: "AI / 3D 生成",
    note: "公司档案（Offer岛）。Meshy AI 是全球领先的生成式 AI 驱动的 3D 内容创建平台：通过文本或图片快速生成高质量、**可编辑**的 3D 资产，约 20-30 秒出模型，可直接投入游戏开发、AR/VR、产品设计与 3D 打印。2021 年成立，创始人**胡渊鸣**（清华姚班、MIT 博士，「太极」Taichi 图形编程语言作者）；2026-09 计算机图形学领军人物**童欣**博士出任首席科学家。累计用户超千万。2026-07 完成 **B 轮近 4 亿美元**融资，投后估值 **15 亿美金**（官方口径超 100 亿人民币）——领投 IDG 资本、经纬中国、Monolith 砺思资本，跟投 Granite Asia、红杉中国、BAI 资本、源码资本。标签：**3D / 世界模型 / Agent**；公司分类：**独角兽**；地点：**北京 / 上海 / 湾区**。官网 https://www.meshy.ai ——⚠️ 请认准此官方域名；另有近似域名 meshyai.net，**非官方渠道**，不要在其上传素材。Offer岛 档案当前无在招岗位，投递需走官网。",
    added: "2026-10-10",
  },
  {
    title: "蚂蚁集团 · 大前端研发工程师（AI Native）- 证券",
    url: "https://www.jdwatch.work/jobs/jozu3y6fl",
    cat: "互联网 / 大厂",
    note: "JD 取自 JDWatch（第三方岗位聚合站）的该岗页面，发布日期 2026-10-09，**工作地点：上海**（⚡ 非杭州）。【岗位职责】① 参与证券核心业务平台的大前端建设，围绕业务增长、机构服务与行情市场扩展等方向，负责**财富移动端 H5、股票产品核心模块、Hybrid 混合开发与容器框架**的设计/研发/优化/演进，保障稳定性、性能与业务体验；② **打破传统前端与客户端界限**，负责大前端架构设计与性能优化（启动、功耗、卡顿、内存、网络、**高频数据渲染**等），引入或研发工具与产品提升研发效率；③ **采用 AI Native 研发模式，参与大前端多 Agent 工程体系建设**，把 **AI Coding、Agentic Workflow** 应用于需求分析、架构设计、编码开发、测试验证、上线交付等大前端研发**全流程**；④ 参与证券领域大前端 **Agent / Context / Knowledge / Skill 等组织级 AI 能力建设**，探索前端智能（AI 辅助交互、UI/代码生成）差异化落地，沉淀可复用领域资产；⑤ 与产品/运营/视觉/后端/算法/测试协作，参与代码评审，端到端交付。【任职要求】① 本科+计算机相关，计算机基础扎实（数据结构、网络、操作系统）；② 大前端能力扎实：JS/CSS/HTML/DOM，**深入理解 React/Vue 设计原理与 Webpack/Vite 等构建工具**；或具备 **Android/iOS/鸿蒙** 开发经验、精通客户端框架原理、掌握 C/C++/Rust 跨平台开发或小程序/WebApp 容器建设者优先；③ 代码质量与架构设计能力；在**绘图、动画、协议、安全、性能（启动/卡顿/内存/网络）优化**方面有实践经验；④ **熟悉 AI Coding、LLM、Agent、Workflow 等 AI 工程技术**，有用 AI 工具辅助研发的实践，愿探索 AI Native 研发模式；⑤ 对**证券、行情、交易、金融数据**等业务有浓厚兴趣或研发经验者优先；⑥ 业务理解、深度分析与解决问题能力，主动性与推动力强。【加分项】有独立产品思考、能以技术驱动业务；**有 Node.js、Go 等后端能力，或有提升工作效率的工具建设经验**。特色标签（节选）：AI Agent / AI-First 研发模式 / 多智能体系统 / 智能研发 / 工作流引擎 / 实时行情 / 跨端技术 / Hybrid App / WebView 容器 / 鸿蒙系统开发经验 / 小程序框架 / 研发效能 / 金融数据。官方投递入口：https://talent.antgroup.com/off-campus-position",
    added: "2026-10-14",
  },
  {
    title: "蚂蚁集团 · AI应用工程师-证券（北京/上海/杭州）",
    url: "https://talent.antgroup.com/off-campus-position?positionId=260803011204314&tid=",
    cat: "金融科技",
    note: "蚂蚁集团官方社招（2026-10-09 发布），技术类-开发，工作地：北京 / 上海 / 杭州。与另一条「大前端研发工程师（AI Native）- 证券」同批发布（岗位号同批 26080301），说明证券线在集中招人。职责：①参与证券核心业务平台建设，围绕业务增长、机构服务及全球市场扩展做系统设计研发；②深入证券行情、交易服务、用户服务等核心能力建设；③采用 AI Native 研发模式，参与业务级多 Agent 工程体系建设，将 AI Coding、Agentic Workflow 应用于需求分析、架构设计、编码开发、测试验证、上线交付全流程；④参与证券领域 Agent、Context、Knowledge、Skill 等组织级 AI 能力建设，沉淀可复用领域知识与工程资产。要求：至少一种服务端语言（Java / Go / C++），熟悉高并发高可用低延迟系统，熟悉 AI Coding、大模型、Agent、Workflow 并有 AI 工具辅助研发实践。标签含证券业务、证券交易、证券行情、量化交易开发经验、多Agent、AI编程、AI辅助编码、研发效能、有前端经验/技能。",
    added: "2026-10-15",
  },
  {
    title: "蚂蚁集团 · 财富AI Lab-大模型应用架构师（知识与工具平台方向）",
    url: "https://talent.antgroup.com/off-campus-position?positionId=26041509593822&tid=",
    cat: "AI / Agent 产品",
    note: "蚂蚁集团官方社招（2026-10-08 发布），技术类-开发，工作地：北京 / 杭州。围绕金融智能体的「知识获取」与「工具执行」能力，主导金融专业搜索、DataAgent、金融数据供给与 MCP 工具平台的技术架构。四块内容：①金融专业搜索（金融资讯/研报/公告统一检索，百亿级索引、混合召回、近实时更新）；②金融 DataAgent（NL2SQL，支持自然语言选股选基选 ETF，覆盖意图理解 → Schema Linking → 任务规划 → 代码执行 → 结果校验）；③金融数据供给中心（多源接入、清洗加工、实体对齐、指标计算、口径与血缘治理）；④MCP 工具平台（基于 MCP 标准建设工具注册、发现、路由、编排与执行框架，含权限控制、限流降级、监控审计与效果评测）。要求 3-5 年后端/系统架构经验，其中 1-2 年搜索推荐引擎/Agent 引擎落地经验；且明确要求「AI 辅助研发能力：深度使用 Claude Code、Codex 等 AI 编程工具，能设计团队级 AI 辅助研发 Workflow，并通过规范、测试、评审与评测机制保证 AI 生成代码达到生产要求」。加分项：证券/基金/银行理财或金融数据服务经历；主导过 0-1 的 AI Native 应用、智能体引擎、搜索或数据平台；GitHub 上有 LLM / Agent / MCP / RAG / Workflow 相关开源贡献。",
    added: "2026-10-15",
  },
  {
    title: "蚂蚁集团 · 财富AI Lab-Agent 记忆与推荐系统工程师",
    url: "https://talent.antgroup.com/off-campus-position?positionId=260922012196402&tid=",
    cat: "AI / Agent 产品",
    note: "蚂蚁集团官方社招（2026-09-22 发布），技术类-开发，工作地：北京 / 杭州。负责新一代 AI Agent Memory 系统架构与核心模块研发，建设支持长期记忆、会话记忆、任务记忆的统一记忆平台；基于记忆做个性化与主动服务推荐（时机判断、候选召回、排序决策与触达全链路）；负责记忆系统与 Agent 运行框架的深度集成，设计记忆读写接口、触发机制、上下文组装与压缩策略；设计记忆的写入、整合、检索、更新、压缩与遗忘全链路，支持版本化、可回溯与证据溯源；建设自进化机制，打通用户反馈的采集、归因与回流。标签含记忆平台、记忆框架、长时记忆、上下文摘要、上下文精简、检索增强、智能体、研发效能、金融、理财。",
    added: "2026-10-15",
  },
  {
    title: "蚂蚁集团 · 财富AI Lab-高级研发工程师（AI 体验方向）· 杭州",
    url: "https://www.liepin.com/job/1983517971.shtml",
    cat: "金融科技",
    note: "杭州，蚂蚁财富 AI Lab，猎聘在招（8月24日更新，标注 30-60k）。职责：①AI 体验功能交付——负责蚂蚁财富 App 体验侧 AI 功能端到端落地，并熟练使用 Claude Code 等 AI 编程工具优化个人与团队研发工作流；②Agent 搭建与应用——面向真实业务场景搭建、编排并调优 Agent / Agentic Workflow，负责 Prompt 工程、上下文管理、Tool Use 链路设计与效果调优；③端到端能力交付——从方案设计、Agent 链路搭建、前端/客户端实现到灰度上线与数据验证完整闭环；④体验工程实现——基于 H5 / iOS / Android 之一实现高质量界面，并针对大模型流式输出、异步响应、长会话保持等 AI 交互特性设计前端体验；⑤沉淀可复用 Agent 组件、交互协议与 AI 辅助研发流程。任职要求技术背景以前端/客户端为主，熟练使用 Claude Code 并能建立 AI 辅助研发工作流；加分项含 AI Native App 0-1 落地经验、金融/理财/证券研发经验、开发过有影响力的 CLI / VSCode 插件等工程化工具。⚠️ 该岗在蚂蚁官方社招接口中检索不到，来源为猎聘渠道。",
    added: "2026-10-15",
  },
  {
    title: "爱建证券 · 全栈开发工程师（证券APP方向）· 上海",
    url: "https://www.liepin.com/job/1985863417.shtml",
    cat: "金融科技",
    note: "上海-浦东，猎聘在招（9月24日更新）。证券 APP 方向全栈岗。前端要求：精通 HTML/CSS/JavaScript，熟练掌握 Vue / React，具备 H5、小程序、混合开发实战经验。客户端侧涉及 Android Gradle 构建、签名机制、多渠道打包及国内主流应用市场上架规范。服务端要求：扎实 Java 基础，熟悉 Spring Boot / MyBatis 等框架与 Redis、消息队列等中间件，有高并发系统开发经验。明确要求「具备 AI Coding 实践经验，熟练运用 Claude Code、Cursor 等 AI 编程工具完成需求拆解、代码生成、重构与测试，能独立设计 AI 辅助开发工作流，并严格校验 AI 生成代码的安全性、准确性与业务合规性」——是证券侧少见的把 AI Coding 与 AI 辅助工作流写进任职要求的岗位。",
    added: "2026-10-15",
  },
  {
    title: "小红书 · AI 全栈工程师（C2C 交易）",
    url: "https://job.xiaohongshu.com/social/position/18865",
    cat: "AI / Agent 产品",
    note: "小红书官方社招（2026-08-31 发布），工作地：上海 / 北京。交易线 AI 全栈岗，前端（React / Vue）或后端任一方向均可；关键点是它把 AI / LLM 应用开发能力（Agent、RAG、NLU）写成基础要求而非加分项。",
    added: "2026-10-15",
  },
  {
    title: "阿里巴巴 · 集团安全部-AI研发工程师-业务风控 · 杭州",
    url: "https://talent-holding.alibaba.com/off-campus/position-detail?positionId=100033940002",
    cat: "AI / Agent 产品",
    note: "阿里官方社招（2026-09-02 发布），杭州。业务风控方向的 AI 研发岗，重点是用 AI 做端到端工程交付，并能沉淀 Skills / Workflow / 知识资产。",
    added: "2026-10-15",
  },
  {
    title: "阿里巴巴 · 晓天衡宇-大模型标注评测工程师-前端方向 · 杭州",
    url: "https://talent-holding.alibaba.com/off-campus/position-detail?positionId=100026520001",
    cat: "AI / 数据标注",
    note: "阿里官方社招（2026-10-08 发布），杭州。要求真实 Web 前端能力（TypeScript / React / Vue）与工程化工具链，负责 AI Coding 相关数据的质检与评测规范建设——用前端工程经验转做 AI 研发数据侧，属前端背景可平移的窄门岗位。",
    added: "2026-10-15",
  },
  {
    title: "东方财富 · 前端开发工程师（大模型服务平台控制台）· 上海",
    url: "https://zhaopin.eastmoney.com/social-recruitment/eastmoney/57970/#/jobs?keyword=%E5%89%8D%E7%AB%AF",
    cat: "金融科技",
    note: "东方财富官方招聘门户·社招。前端开发工程师负责大模型服务平台控制台，有大模型应用开发经验者优先。⚠️ 该门户为 SPA，此链接进入后仍需在门户内搜「前端」定位到岗位。",
    added: "2026-10-15",
  },
  {
    title: "哩布哩布AI（LiblibAI）· AI 开发（全栈 / 前端可转）· 北京",
    url: "https://www.liblib.art/us/joinus",
    cat: "AI / 内容创作工具",
    note: "【内推机会 · 待投】哩布哩布AI（LiblibAI，母公司北京演语科技 Evoken），北京海淀，2023 年 5 月成立。推荐人（内推）口径：团队有 AI 开发（全栈开发）需求，接受前端开发同学转，落点在 AI 应用（图像 / 视频 / 设计多模态），不是纯模型研究；团队 C9 背景为主，字节 / 小红书 / 腾讯 / 阿里 出身居多，技术氛围「跟 DeepSeek 类似」。公司背景：AI-Native 创作基础设施；B 轮 1.3 亿美元（2025-10，红杉中国、CMC 资本领投）、B+ 轮近 3 亿美元（2026-06，Granite Asia、腾讯、顺为领投），截至 2026-05 集团 ARR 超 3 亿美元。\n\n岗位链接（均为在招页面）：① 官方招聘页（本条）——前端开发工程师 北京 / 上海，React + TypeScript + Node，AI 文生图产品与 C 端体验、社区建设；另有 iOS / 安卓（北京）。② 后端开发工程师 · 北京海淀 · 猎聘 25-55k（AIGC 社区方向，Golang/Java/Python 之一 + Redis/MQ）：https://www.liepin.com/job/1981473469.shtml ③ Agent 开发工程师 · 上海 · 猎聘 25-45k·15 薪（Multi-Agent / Memory / 工具调用 / MCP / RAG）：https://www.liepin.com/job/1980111243.shtml\n\n投递：官方邮箱 join@liblib.ai（邮件标题「姓名-岗位名称」，附简历 + 作品集 / 项目链接），或走内推人。⚠️ 官网目前没有名为「AI 全栈」的岗位，本条按内推口径记录；投递前先与内推人确认岗位名、职责边界、职级与薪资。",
    added: "2026-10-20",
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
    const card = it.url
      ? Object.assign(document.createElement("a"), {
          className: "card",
          href: it.url,
          target: "_blank",
          rel: "noopener noreferrer",
        })
      : Object.assign(document.createElement("article"), { className: "card" });

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
    domain.textContent = it.url ? domainOf(it.url) : "无链接 · 邮箱投递";

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
    if (it.url) {
      const urlSpan = document.createElement("span");
      urlSpan.className = "domain";
      urlSpan.textContent = it.url;
      metaLine.appendChild(urlSpan);
    }
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
