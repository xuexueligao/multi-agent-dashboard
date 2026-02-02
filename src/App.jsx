import React from 'react';

// 超简化版本 - 确保至少显示一些内容
function App() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1>Multi-Agent Dashboard</h1>
        <p>系统正在运行...</p>
      </header>
      
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '20px'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>智能体状态</h2>
          <div style={{marginBottom: '15px', padding: '10px', borderLeft: '4px solid #27ae60', backgroundColor: '#f8f9fa'}}>
            <strong>Jarvis</strong>: 在线
          </div>
          <div style={{marginBottom: '15px', padding: '10px', borderLeft: '4px solid #f39c12', backgroundColor: '#f8f9fa'}}>
            <strong>Jacky</strong>: 忙碌
          </div>
          <div style={{marginBottom: '15px', padding: '10px', borderLeft: '4px solid #e67e22', backgroundColor: '#f8f9fa'}}>
            <strong>Loki</strong>: 工作中
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h2>活动动态</h2>
          <div style={{marginBottom: '10px', padding: '10px', backgroundColor: '#f8f9fa'}}>
            <span style={{color: '#e74c3c'}}>🔴</span> Jarvis 创建了新任务: "分析市场趋势"
          </div>
          <div style={{marginBottom: '10px', padding: '10px', backgroundColor: '#f8f9fa'}}>
            <span style={{color: '#27ae60'}}>🟢</span> Jacky 完成了研究: "竞争对手分析"
          </div>
          <div style={{marginBottom: '10px', padding: '10px', backgroundColor: '#f8f9fa'}}>
            <span style={{color: '#3498db'}}>🔵</span> Loki 开始撰写: "季度报告"
          </div>
          
          <h3 style={{marginTop: '20px'}}>任务看板</h3>
          <div style={{
            display: 'flex',
            gap: '15px',
            overflowX: 'auto',
            padding: '10px 0'
          }}>
            <div style={{minWidth: '200px', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px'}}>
              <h4>待办</h4>
              <div style={{backgroundColor: 'white', padding: '8px', margin: '5px 0', borderRadius: '3px'}}>市场调研</div>
            </div>
            <div style={{minWidth: '200px', backgroundColor: '#fff3cd', padding: '10px', borderRadius: '5px'}}>
              <h4>进行中</h4>
              <div style={{backgroundColor: 'white', padding: '8px', margin: '5px 0', borderRadius: '3px'}}>季度报告</div>
            </div>
            <div style={{minWidth: '200px', backgroundColor: '#d4edda', padding: '10px', borderRadius: '5px'}}>
              <h4>已完成</h4>
              <div style={{backgroundColor: 'white', padding: '8px', margin: '5px 0', borderRadius: '3px'}}>预算规划</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;