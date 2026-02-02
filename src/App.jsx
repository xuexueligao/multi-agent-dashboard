import React from 'react';

// 最简化版本的App组件，确保页面不会空白
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Multi-Agent Dashboard</h1>
        <p>系统正在运行...</p>
      </header>
      <main className="app-main">
        <div className="status-section">
          <h2>系统状态</h2>
          <p>前端：运行正常</p>
          <p>后端连接：尝试中...</p>
        </div>
        <div className="debug-info">
          <h2>调试信息</h2>
          <p>如果此文本可见，则JavaScript正在运行</p>
        </div>
      </main>
    </div>
  );
}

export default App;