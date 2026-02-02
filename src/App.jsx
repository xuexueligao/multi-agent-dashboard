import React from 'react';
import Dashboard from './pages/Dashboard';

// 简化版App组件，移除可能导致崩溃的Convex依赖
function App() {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;