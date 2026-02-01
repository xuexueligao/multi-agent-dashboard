import React, { useState } from 'react';
import ActivityFeed from '../components/ActivityFeed';
import TaskBoard from '../components/TaskBoard';
import AgentCards from '../components/AgentCards';
import DocumentPanel from '../components/DocumentPanel';
import Navigation from '../components/Navigation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div className="dashboard">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="dashboard-content container">
        {activeTab === 'overview' && (
          <div className="overview-layout">
            <div className="left-column">
              <AgentCards />
              <ActivityFeed />
            </div>
            <div className="right-column">
              <TaskBoard onSelectTask={setSelectedTask} />
            </div>
          </div>
        )}
        
        {activeTab === 'documents' && (
          <DocumentPanel />
        )}
        
        {selectedTask && (
          <div className="modal-overlay" onClick={() => setSelectedTask(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Task Details: {selectedTask.title}</h3>
              <p><strong>Description:</strong> {selectedTask.description}</p>
              <p><strong>Priority:</strong> {selectedTask.priority}</p>
              <p><strong>Assignee:</strong> {selectedTask.assignee || 'Unassigned'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;