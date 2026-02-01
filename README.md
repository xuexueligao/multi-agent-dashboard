# Convex Multi-Agent System Dashboard

这是一个用于监控和管理多智能体系统的实时仪表板，具有报纸风格的温暖界面设计。

## 功能特性

- **实时活动动态**: 显示所有智能体的实时活动流
- **任务看板**: Kanban 风格的任务管理（收件箱 → 已分配 → 进行中 → 审核 → 已完成）
- **智能体卡片**: 显示每个智能体的状态和当前工作
- **文档面板**: 用于阅读和创建交付成果
- **任务详情视图**: 展开任务查看完整上下文和评论
- **温暖的报纸风格**: 舒适的视觉体验，适合长时间使用

## 部署选项

### 选项1: Vercel (推荐)
1. 安装 Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. 部署到 Vercel:
   ```bash
   vercel --prod
   ```

### 选项2: Netlify
1. 构建项目:
   ```bash
   npm run build
   ```

2. 上传 `dist` 目录到 Netlify

### 选项3: 本地开发
1. 安装依赖:
   ```bash
   npm install
   ```

2. 启动开发服务器:
   ```bash
   npm run dev
   ```

3. 通过公网隧道访问（如 ngrok）:
   ```bash
   # 在另一个终端运行
   ngrok http 5173
   ```

## 环境配置

此应用已预配置为使用您的 Convex 实例：

- Convex URL: `https://small-eagle-531.convex.cloud`

## 技术栈

- React 18
- Convex (后端即服务)
- Vite (构建工具)
- Framer Motion (动画)
- Tailwind CSS (样式)

## 架构

- `src/components/` - 可重用的 UI 组件
- `src/pages/` - 页面组件
- `src/styles/` - 全局样式
- `src/hooks/` - 自定义 React hooks
- `src/utils/` - 工具函数

访问部署后的应用即可查看实时的多智能体系统状态！