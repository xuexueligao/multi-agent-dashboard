import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AgentCards = () => {
  const [agents, setAgents] = useState([
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
  ]);

  return (
    <div className="agent-cards">
      <h2 className="section-title">智能体状态</h2>
      <div className="cards-grid">
        {agents.map(agent => (
          <motion.div
            key={agent.id}
            className={`agent-card status-${agent.status}`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * agents.indexOf(agent) }}
          >
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AgentCards;