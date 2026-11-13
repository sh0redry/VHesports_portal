# 更新日志 / Changelog

记录 vhesports.com 每一次更新的日期和内容,最新的在最上面。

A record of every update to vhesports.com, with dates. Newest first.

## 2026-11-13

### 第二批优化:视觉和体验 / Upgrade batch 2: look and feel

- 品牌色:保留荧光绿为主色,把队徽的紫色定为统一的辅助色(首页光晕、卡片标签、新闻占位图、页脚分隔线等)。
  Brand colours: lime stays the main colour, and the logo's purple is now the consistent secondary colour (hero glow, card labels, news placeholders, footer divider and more).
- 队徽:导航栏和首页改用提亮后的纯图形队徽,在深色背景上清晰可见;首页不再使用白色底牌。网站图标改为深色底上的浅色队徽。
  Logo: the header and homepage now use a brightened, emblem-only version that reads clearly on the dark background; the white plaque on the homepage is gone. The site icon is now the light emblem on a dark tile.
- 首页精简:"介绍" 和 "使命" 合并为一个板块;去掉与导航栏重复的四张入口卡片;"最新新闻" 提前到第二屏,只显示最近 3 篇。
  Leaner homepage: the intro and mission sections are merged; the four portal cards that duplicated the navigation are removed; Latest News moves up and shows only the three most recent posts.
- 游戏板块:三个分类合并为一个 "Games we play" 板块,8 个游戏排满两行,每张卡片标注平台(Mobile / PC / Console)。
  Games: the three categories are merged into one "Games we play" section, eight games filling two rows, each card labelled with its platform (Mobile / PC / Console).
- 轮播图:图片更亮,每 6 秒自动切换(系统开启 "减少动画" 时不自动切换)。
  Highlights: brighter images, and the slides now advance every 6 seconds (not when the system "reduce motion" setting is on).
- 新闻配图:新闻卡片和新闻列表显示封面图;没有封面的文章显示紫色队徽占位图。封面在文章文件里用 `cover:` 指定。
  News covers: news cards and the news list now show a cover photo; posts without one show a purple emblem tile. A cover is set with `cover:` in the post file.
- 委员会页:改为整齐的两列排版;Telegram 账号可以直接点击。
  Committee page: a tidy two-column layout; Telegram handles are now clickable.
- 手机端:菜单按钮加大到 44×44 并换成标准的三横线图标;全站的 `->` 字符换成真正的箭头 →。
  Mobile: the menu button is now 44×44 with a standard three-bar icon; the `->` characters across the site are now real arrows →.
- 表格:VHCG 积分榜在手机上完整显示,不用横向滑动(表头简化为 MLBB / VALORANT / Total);Top 5 表格在电脑上完整显示;其余较宽的表格在手机上提示 "可横向滑动"。
  Tables: the VHCG standings fit on a phone without sideways scrolling (headers shortened to MLBB / VALORANT / Total); the Top 5 table fits on desktop; other wide tables show a "swipe sideways" hint on phones.
- 字体:Inter 字体随网站一起加载,所有设备上显示一致。
  Font: the Inter typeface now ships with the site, so it looks the same on every device.

### 第四批优化:代码重构 / Upgrade batch 4: code restructuring

这一批主要是内部整理,页面外观和文字基本不变。
This batch is mostly internal clean-up; the pages look and read almost the same.

- 把原来写在一个文件里的整个网站拆成每页一个文件(`app/pages/`)、公共部分(`app/components/`)和特殊排版的新闻(`app/articles/`)。
  Split the site, previously written in a single file, into one file per page (`app/pages/`), shared parts (`app/components/`) and news posts with a hand-built layout (`app/articles/`).
- 新闻现在支持标准 Markdown:标题、加粗、斜体、链接、列表和图片。以后发新闻只需要在 `src/content/news/` 加一个文本文件,写法见 README。
  News posts now support standard Markdown: headings, bold, italic, links, lists and images. Publishing a post only needs a text file in `src/content/news/`; see the README for the format.
- 普通新闻页不再把摘要在正文里重复显示一遍。
  Standard news pages no longer repeat the summary a second time in the body.
- VHCG 积分榜的各项得分和名次改为根据比赛记录自动计算,不再手动填写(计算结果与之前完全一致)。
  VHCG placement points and overall ranks are now calculated from the match records instead of typed in by hand (the results are identical to before).
- 颜色统一为主题变量,放在 `app/globals.css` 顶部,以后换主题色只需改一处。
  Colours are now theme variables at the top of `app/globals.css`, so a theme colour can be changed in one place.
- 新闻卡片、入口卡片和站内按钮改为真正的链接,可以右键 "在新标签页打开"。
  News cards, portal cards and in-site buttons are now real links, so "open in new tab" works.
- 修复透明边框按钮(如 "View all")显示成灰白底的问题。
  Fixed outline buttons (such as "View all") showing a grey-white fill.
- 无障碍改进:键盘操作时显示焦点框;尊重系统的 "减少动画" 设置。
  Accessibility: keyboard focus is now visible, and the system "reduce motion" setting is respected.
- 构建时为每个页面生成独立文件,带各自的标题和简介,并生成 `sitemap.xml` 和 `robots.txt`。直接打开或分享子页面时不再先返回 404,搜索引擎也能收录各个页面。
  The build now writes a separate file for every page with its own title and description, plus `sitemap.xml` and `robots.txt`. Opening or sharing a sub-page no longer returns a 404 first, and search engines can index each page.
- 升级部署流程使用的 GitHub Actions 版本(checkout v7、setup-node v7、upload-pages-artifact v5、deploy-pages v5),消除弃用警告。
  Upgraded the GitHub Actions used for deployment (checkout v7, setup-node v7, upload-pages-artifact v5, deploy-pages v5) to clear the deprecation warnings.
- 重写 README,说明各类内容在哪里改、怎么发新闻、怎么加页面。
  Rewrote the README to explain where each kind of content lives, how to publish a news post and how to add a page.

### 第一批优化:加载速度与问题修复 / Upgrade batch 1: loading speed and fixes

- 压缩网站图片:首页背景图从 4.4 MB 降到 0.26 MB,图片目录总计从 35 MB 降到 2.7 MB。部分 PNG 改存为 JPG(游戏封面、轮播图、嘉年华截图)。
  Compressed the site images: the homepage background went from 4.4 MB to 0.26 MB, and the image folder from 35 MB to 2.7 MB in total. Some PNGs are now JPGs (game covers, highlight slides, a Carnival screenshot).
- 从网站目录移除 14 张未使用的图片(原件仍保留在仓库的 `pics/` 文件夹中)。
  Removed 14 unused images from the site folder (the originals remain in the repository's `pics/` folder).
- 首屏以下的游戏封面和轮播图改为滚动到附近时才加载。
  Game covers and highlight images below the first screen now load only when scrolled near.
- 修复导航栏:向下滚动时导航栏现在会固定在页面顶部。
  Fixed the navigation bar: it now stays at the top of the page while scrolling.
- 新增网站图标(浏览器标签页上显示队徽),替换掉未被引用的通用图标文件。
  Added a site icon (the team logo now shows on the browser tab), replacing a generic icon file that was never referenced.
- 分享预览图改用专门的 `og.jpg`(1200×675),并补充了分享所需的网页信息。
  Link previews now use the dedicated `og.jpg` (1200×675), and the page metadata for sharing was completed.
- 新增 "Page not found" 页面:不存在的网址或新闻链接不再显示首页或最新一篇新闻。
  Added a "Page not found" page: unknown addresses and news links no longer show the homepage or the latest article.
- 每个页面有了自己的浏览器标签页标题(如 "Committee | Valour House E-Sports")。
  Every page now has its own browser tab title (for example "Committee | Valour House E-Sports").
- 修复在 Windows 电脑上本地预览时新闻摘要显示整篇正文的问题(线上不受影响)。
  Fixed news excerpts showing the whole article when previewing locally on Windows (the live site was not affected).

### VHCG 页面改为赛后版本,网址改为 /vhcg / VHCG page switched to post-event version; URL moved to /vhcg

- VHCG 板块的网址从 `/icg` 改为 `/vhcg`(包括 `/vhcg/match-records`、`/vhcg/mlbb-rules`、`/vhcg/valorant-rules`)。旧的 `/icg` 链接会自动跳转到新地址。
  The VHCG section moved from `/icg` to `/vhcg` (including `/vhcg/match-records`, `/vhcg/mlbb-rules` and `/vhcg/valorant-rules`). Old `/icg` links redirect to the new addresses.
- VHCG 页面改为赛后口吻:
  The VHCG page now uses post-event wording:
  - 顶部介绍改为比赛已结束,并祝贺总冠军 Cluster 5。
    The intro says the competition has concluded and congratulates the overall champions, Cluster 5.
  - 赛程板块标题由 "COMPETITION SCHEDULE" 改为 "COMPETITION ARCHIVE"。
    The schedule section label changed from "COMPETITION SCHEDULE" to "COMPETITION ARCHIVE".
  - 规则书板块的说明改为 "本届比赛使用的规则书"。
    The rulebook section now describes them as the rulebooks used for this year's competition.
  - 底部的报名入口("Ready to register?" 和报名表按钮)换成感谢语和加入 Telegram 的按钮。
    The registration prompt at the bottom ("Ready to register?" and the form button) was replaced with a thank-you message and a Join Telegram button.
- 修正 VALORANT Top 5 第 5 名的名字拼写:Wayen → Wayne。
  Fixed the spelling of the 5th-ranked VALORANT top player: Wayen → Wayne.
- README 中的 "ICG" 改为 "VHCG"。
  Changed "ICG" to "VHCG" in the README.

### 新增更新日志 / Changelog added

- 新增本文件 `CHANGELOG.md`,从这一天起记录每次更新;日志使用中英双语。
  Added this file, `CHANGELOG.md`, to record every update from this date on, in both Chinese and English.
