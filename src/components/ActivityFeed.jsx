import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  // Mock data for demonstration
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
    },
    {
      id: 4,
      agent: 'Jarvis',
      action: 'assigned task',
      target: 'to Loki',
      timestamp: new Date(Date.now() - 60000),
      type: 'task-assigned'
    },
    {
      id: 5,
      agent: 'Jacky',
      action: 'updated status',
      target: 'Competitor analysis - In Progress',
      timestamp: new Date(Date.now() - 30000),
      type: 'status-update'
    }
  ];

  useEffect(() => {
    // In real implementation, this would subscribe to Convex for real-time updates
    setActivities(mockActivities);
  }, []);

  return (
    <div className="activity-feed">
      <h2 className="section-title">实时活动动态</h2>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <div className="activity-icon">
              {activity.type === 'task-created' && '📝'}
              {activity.type === 'research-completed' && '🔍'}
              {activity.type === 'writing-started' && '✍️'}
              {activity.type === 'task-assigned' && '📋'}
              {activity.type === 'status-update' && '🔄'}
            </div>
            <div className="activity-content">
              <span className="agent-name">{activity.agent}</span>
              <span>{activity.action}</span>
              <span className="target">{activity.target}</span>
            </div>
            <div className="activity-time">
              {format(activity.timestamp, 'HH:mm:ss')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;