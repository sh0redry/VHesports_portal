# 更新日志 / Changelog

记录 vhesports.com 每一次更新的日期和内容,最新的在最上面。

A record of every update to vhesports.com, with dates. Newest first.

## 2026-11-13

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
