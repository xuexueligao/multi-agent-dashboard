import React from 'react';
import Dashboard from './pages/Dashboard';

// 简化版App组件，移除对Convex的强依赖以避免崩溃
function App() {
  return (
    <div className="app">
      <Dashboard />
    </div>
  );
}

export default App;