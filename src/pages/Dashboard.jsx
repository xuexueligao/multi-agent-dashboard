import React, { useState } from 'react';
import Navigation from '../components/Navigation';

// 简化版Dashboard组件，使用模拟数据
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟数据
  const mockAgents = [
    {
      id: 'jarvis',
      name: 'Jarvis',
      role: '任务协调器',
      status: 'active',
      currentTask: '分配新任务',
      workload: 3,
      efficiency: 95,
      lastActive: new Date(Date.now() - 120000)
    },
    {
      id: 'jacky',
      name: 'Jacky',
      role: '信息研究员',
      status: 'busy',
      currentTask: '市场趋势研究',
      workload: 5,
      efficiency: 88,
      lastActive: new Date(Date.now() - 60000)
    },
    {
      id: 'loki',
      name: 'Loki',
      role: '内容创作者',
      status: 'working',
      currentTask: '撰写季度报告',
      workload: 2,
      efficiency: 92,
      lastActive: new Date(Date.now() - 180000)
    }
  ];

  const mockActivities = [
    {
      id: 1,
      agent: 'Jarvis',
      action: 'created task',
      target: 'Research market trends',
      timestamp: new Date(Date.now() - 300000),
      type: 'task-created'
    },
    {
      id: 2,
      agent: 'Jacky',
      action: 'completed research',
      target: 'Market analysis for Q4',
      timestamp: new Date(Date.now() - 180000),
      type: 'research-completed'
    },
    {
      id: 3,
      agent: 'Loki',
      action: 'started writing',
      target: 'Q4 report',
      timestamp: new Date(Date.now() - 120000),
      type: 'writing-started'
    }
  ];

  return (
    <div className="dashboard">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="dashboard-content container">
        {activeTab === 'overview' && (
          <div className="overview-layout">
            <div className="left-column">
              {/* Agent Cards */}
              <div className="agent-cards">
                <h2 className="section-title">智能体状态</h2>
                <div className="cards-grid">
                  {mockAgents.map(agent => (
                    <div key={agent.id} className={`agent-card status-${agent.status}`}>
                      <div className="agent-header">
                        <h3 className="agent-name">{agent.name}</h3>
                        <div className={`status-indicator ${agent.status}`}></div>
                      </div>
                      
                      <div className="agent-role">{agent.role}</div>
                      
                      <div className="agent-stats">
                        <div className="stat">
                          <span className="stat-label">工作效率</span>
                          <span className="stat-value">{agent.efficiency}%</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">工作负载</span>
                          <span className="stat-value">{agent.workload}/10</span>
                        </div>
                      </div>
                      
                      <div className="current-task">
                        <span className="task-label">当前任务:</span>
                        <span className="task-content">{agent.currentTask}</span>
                      </div>
                      
                      <div className="last-active">
                        最后活跃: {Math.floor((Date.now() - agent.lastActive.getTime()) / 60000)}分钟前
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className="activity-feed">
                <h2 className="section-title">实时活动动态</h2>
                <div className="activity-list">
                  {mockActivities.map(activity => (
                    <div key={activity.id} className="activity-item">
                      <div className="activity-icon">
                        {activity.type === 'task-created' && '📝'}
                        {activity.type === 'research-completed' && '🔍'}
                        {activity.type === 'writing-started' && '✍️'}
                      </div>
                      <div className="activity-content">
                        <span className="agent-name">{activity.agent}</span>
                        <span>{activity.action}</span>
                        <span className="target">{activity.target}</span>
                      </div>
                      <div className="activity-time">
                        {activity.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="right-column">
              {/* Task Board */}
              <div className="task-board">
                <h2 className="section-title">任务看板</h2>
                <div className="kanban-columns">
                  {['Inbox', 'Assigned', 'In Progress', 'Review', 'Done'].map(columnName => (
                    <div key={columnName} className="kanban-column">
                      <h3 className="column-header">
                        {columnName} 
                        <span className="task-count">({columnName === 'Inbox' ? 2 : columnName === 'Assigned' ? 1 : columnName === 'In Progress' ? 1 : columnName === 'Review' ? 1 : 1})</span>
                      </h3>
                      <div className="task-list">
                        {columnName === 'Inbox' && (
                          <>
                            <div className="task-card priority-high">
                              <h4 className="task-title">Research market trends</h4>
                              <div className="task-meta">
                                <span className="priority-badge">high</span>
                                <span className="assignee">Jacky</span>
                              </div>
                            </div>
                            <div className="task-card priority-medium">
                              <h4 className="task-title">Draft quarterly report</h4>
                              <div className="task-meta">
                                <span className="priority-badge">medium</span>
                                <span className="assignee">Unassigned</span>
                              </div>
                            </div>
                          </>
                        )}
                        {columnName === 'In Progress' && (
                          <div className="task-card priority-high">
                            <h4 className="task-title">Write executive summary</h4>
                            <div className="task-meta">
                              <span className="priority-badge">high</span>
                              <span className="assignee">Loki</span>
                            </div>
                          </div>
                        )}
                        {columnName === 'Done' && (
                          <div className="task-card priority-low">
                            <h4 className="task-title">Update company roadmap</h4>
                            <div className="task-meta">
                              <span className="priority-badge">low</span>
                              <span className="assignee">Jarvis</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'documents' && (
          <div className="document-panel">
            <h2 className="section-title">文档面板</h2>
            <p>文档管理功能正在开发中...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;