/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "A tiny village in the fields. The villagers are poor, but kind and hardworking": "田野里的一个小村庄。 村民虽然贫穷，但善良、勤劳",
    "Age:": "年龄：",
    "all": "全部",
    "Atk": "攻击力",
    "Attack": "攻击",
    "Autosell": "自动出售",
    "Basic Punch": "基础拳头",
    "Block": "堵塞",
    "Breakthrough": "突破",
    "Breathing Practice": "呼吸练习",
    "Climb Mountains": "爬山",
    "Crafting": "制作",
    "Current Location": "当前位置",
    "Def": "定义",
    "Defence": "防御",
    "Defence Stance": "防御姿态",
    "Dodge": "躲闪",
    "Equipment": "装备",
    "Fighting": "战斗",
    "Game Speed: x": "游戏速度：x",
    "Gathering": "收集",
    "Health Regen": "生命恢复",
    "Herbs": "草药",
    "Hit the Scarecrows": "击中稻草人",
    "Hp": "生命值",
    "Hp.regen": "生命值恢复",
    "idle": "空闲",
    "Insight": "洞察力",
    "Inventory": "库存",
    "Manuals": "手册",
    "minerals": "矿石",
    "Mining": "采矿",
    "money": "钱",
    "Mortal": "凡人",
    "Quality": "数量",
    "Realm": "领域",
    "Realm:": "领域：",
    "Relaxation": "松弛",
    "Running": "跑步",
    "Situps": "仰卧起坐",
    "Skills": "技能",
    "Spring blossom village": "春花村",
    "Squats": "深蹲",
    "Stats": "属性",
    "Swimming": "游泳",
    "training": "训练",
    "Training": "训练",
    "treasures": "宝藏",
    "Type": "类型",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "A gangster from the streets": "来自街头的歹徒",
    "A pathetic person with no prospects in life": "一个没有人生前途的可怜人",
    "Breathing Practice)": "呼吸练习）",
    "Celestial Gold)": "天金）",
    "Cold Steel)": "冷钢）",
    "Collect grass)": "收集草）",
    "Copper)": "铜）",
    "Dodge)": "闪避）",
    "Iron)": "活性（铁）",
    "Pick tree leaves)": "摘树叶）",
    "Running)": "跑步）",
    "Situps)": "仰卧起坐）",
    "Squats)": "深蹲）",
    "Steel)": "钢）",
    "Arrogant Young Master": "嚣张少爷",
    "Atk:": "攻击：",
    "attack": "攻击",
    "Attack x": "攻击 x",
    "Base": "根据",
    "Black Boar": "黑野猪",
    "Blazing Leopard": "火焰豹",
    "boosts attack": "增加攻击力",
    "boosts attack and training": "提升攻击和训练",
    "boosts health": "提升生命",
    "boosts health and defence": "提升生命和防御",
    "boosts health and regen": "提升生命和恢复",
    "breakthrough": "突破",
    "Celestial Gold": "天体金",
    "Character": "角色",
    "Cold Steel": "冷钢",
    "Cold Steel Armor": "冷钢铠甲",
    "Cold Steel Helmet": "冷钢头盔",
    "Cold Steel Pendant": "冷钢吊坠",
    "Cold Steel Ring": "冷钢戒指",
    "Cold Steel Sword": "冷钢剑",
    "Collect grass": "收集草",
    "common": "普通",
    "Copper": "铜",
    "Copper Armor": "铜甲",
    "Copper Coin": "铜币",
    "Copper Helmet": "铜头盔",
    "Copper Pendant": "铜吊坠",
    "Copper Ring": "铜戒指",
    "Copper Sword": "铜剑",
    "Craft time:": "制作耗时：",
    "crafting": "手工制作",
    "Def:": "防御：",
    "defence": "防御",
    "Defence x": "防御 x",
    "Equipped Manuals": "装备的手册",
    "Evil Bat": "邪恶蝙蝠",
    "exponential": "指数",
    "Export Save": "导出存档",
    "Feral Rat": "野鼠",
    "Fight": "斗争",
    "Random Nobody)": "随机无人）",
    "Fist Strike": "拳击",
    "Flee": "逃跑",
    "Forest Bandit": "森林强盗",
    "Forest Bandit Leader": "森林强盗首领",
    "Forest Wolf": "森林狼",
    "Game speed:": "游戏速度：",
    "Game tick rate:": "游戏 Tick 率：",
    "gathering": "收集",
    "Golden Armor": "黄金铠甲",
    "Golden Coin": "金币",
    "Golden Helmet": "金头盔",
    "Golden Pendant": "金色吊坠",
    "Golden Ring": "金戒指",
    "Golden Sword": "金剑",
    "Grass Stalk": "草秆",
    "health": "生命",
    "Health regen x": "生命恢复 x",
    "Health x": "生命x",
    "healthRegen": "生命再生",
    "Hp:": "生命值：",
    "Hp.regen:": "生命值再生：",
    "Import Save": "导入保存",
    "insight": "洞察力",
    "Insight x": "洞察力 ×",
    "Iron": "铁",
    "Iron Armor": "铁甲",
    "Iron Helmet": "铁盔",
    "Iron Pendant": "铁吊坠",
    "Iron Ring": "铁戒指",
    "Iron Sword": "铁剑",
    "Known manuals": "已知手册",
    "Level:": "等级：",
    "Manuals bonus:": "手册奖金：",
    "Meditation": "冥想",
    "mining": "矿业",
    "name": "姓名",
    "Never heard of you!": "从来没有听说过你！",
    "Next realm:": "下一个境界：",
    "No manual selected": "未选择手册",
    "Number Notation": "数字表示法",
    "Oak leaf": "橡树叶",
    "Ordinary rabbit": "普通兔子",
    "Passed tribulations": "渡过了磨难",
    "Pick tree leaves": "摘树叶",
    "potion": "药水",
    "Random Nobody": "随机无人",
    "Realm bonus:": "境界奖励：",
    "Save Manager": "保存管理器",
    "Select": "选择",
    "Silver Coin": "银币",
    "Spirit Hare": "灵兔",
    "Steel": "钢",
    "Steel Armor": "钢甲",
    "Steel Helmet": "钢盔",
    "Steel Pendant": "钢吊坠",
    "Steel Ring": "钢戒指",
    "Steel Sword": "钢剑",
    "Steel Turtle": "钢龟",
    "Stone Wolf": "石狼",
    "Stop": "停止",
    "Street Thug": "街头暴徒",
    "Studying Manual": "学习手册",
    "Swamp Alligator": "沼泽鳄鱼",
    "Thunder Lizard": "雷霆蜥蜴",
    "Training Guidance": "培训指导",
    "treasure": "宝藏",
    "Treasures bonus:": "宝藏奖励：",
    "Treasures multi:": "宝藏乘数：",
    "Tribulation power:": "劫难之力：",
    "trivial": "正常",
    "Turns out, they are pretty dangerous": "事实证明，它们非常危险",
    "Turtle": "龟",
    "What in the world is this thing?": "这到底是什么东西？",
    "White Tiger": "白老虎",
    "Wipe Save": "擦除存档",
    "A leaf from a big tree": "大树上的一片叶子",
    "armor": "护甲",
    "Base stats": "基础属性",
    "helmet": "头盔",
    "pendant": "吊坠",
    "Just an ordinary grass": "只是一颗普通的草",
    "Nothing (": "无 (",
    "ring": "戒指",
    "weapon": "武器",
    "The most common currency of the Mortal World": "人间最常见的货币",
    "A good for nothing material": "一无是处的材料",
    "Copper Armor)": "铜甲）",
    "Copper Helmet)": "铜头盔）",
    "Copper Sword)": "铜剑）",
    "craft": "制作",
    "Drop": "丢弃",
    "Equip": "装备",
    "Manuals multi:": "手册多：",
    "power:": "力量：",
    "Price Multi": "价格乘数",
    "quality:": "质量：",
    "Quality:": "质量：",
    "stop": "停止",
    "The basic crafting necessity": "基本的制作必要性",
    "Treasures Multi:": "宝藏乘数：",
    "Ordinary Steel": "普通钢",
    "Unequip": "脱下",
    "estim. stage": "estim. 阶段",
    "Steel Ring)": "钢戒指)",
    "Iron Ring)": "铁戒指)",
    "Copper Ring)": "铜戒指)",
    "Iron Pendant)": "铁吊坠)",
    "Much harder than regular Steel": "比普通钢材坚硬得多",
    "The best material for treasures": "宝藏的最佳材料",
    "/s": "/秒",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Qi Gath.": "炼气",
    "Body Ref.": "炼体",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Health: ": "生命值: ",
    "activity (": "活跃 (",
    "fighting (": "战斗 (",
    "Tribulation stages:": "渡劫阶段：",
    "Tribulation stage: ": "渡劫阶段：",
    "Power multi: ": "力量乘数：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) m$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\-([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.]+) \/ ([\d\.]+)e\+([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)k$/,
    /^([\d\.]+)k \/ ([\d\.]+)k$/,
    /^([\d\.]+) \/ ([\d\.]+)m$/,
    /^([\d\.]+)k \/ ([\d\.]+)m$/,
    /^([\d\.]+)m \/ ([\d\.]+)m$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.]+)\/s$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) y ([\d\.]+) m$/, '$1 年 $2 月'],
    [/^([\d\.]+) years ([\d\.]+) months$/, '$1 年 $2 月'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Body Refinement ([\d\.,]+)$/, '炼体 $1'],
    [/^Qi Gathering ([\d\.,]+)$/, '炼气 $1'],
    [/^Foundation ([\d\.,]+)$/, '筑基 $1'],
    [/^Mortal ([\d\.,]+)$/, '凡人 $1'],
    [/^Qi Transformation ([\d\.,]+)$/, '金丹 $1'],
    [/^Qi Gat ([\d\.,]+)$/, '气洞 $1'],
    [/^Body R ([\d\.,]+)$/, '身体 R $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);