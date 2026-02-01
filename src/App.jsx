import React from 'react';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import Dashboard from './pages/Dashboard';

// 使用您的 Convex URL
const convex = new ConvexReactClient("https://small-eagle-531.convex.cloud");

function App() {
  return (
    <ConvexProvider client={convex}>
      <div className="app">
        <Dashboard />
      </div>
    </ConvexProvider>
  );
}

export default App;