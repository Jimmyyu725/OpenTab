# OpenTab

作者：`jimmyu725`

OpenTab 是一个 Chrome Manifest V3 新标签页扩展，提供快捷网站、壁纸、搜索、待办事项、书签、历史记录、天气和账户同步等功能。

## 目录

- `app/`：可直接由 Chrome 开发者模式加载的扩展。
- `source/`：58 个主要 JavaScript 文件的可读源码。
- `scripts/check.mjs`：项目完整性与语法检查。

## 使用

1. 打开 `chrome://extensions/`。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展程序”，选择本项目的 `app/` 目录。

## 检查

```bash
node scripts/check.mjs
```
