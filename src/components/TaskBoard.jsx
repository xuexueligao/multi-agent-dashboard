import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TaskBoard = ({ onSelectTask }) => {
  const [columns, setColumns] = useState({
    Inbox: [
      { id: 1, title: 'Research market trends', priority: 'high', assignee: 'Jacky', description: 'Analyze current market conditions and emerging trends' },
      { id: 2, title: 'Draft quarterly report', priority: 'medium', assignee: '', description: 'Prepare the quarterly performance report' }
    ],
    Assigned: [
      { id: 3, title: 'Analyze competitor pricing', priority: 'high', assignee: 'Jacky', description: 'Compare our pricing with competitors' }
    ],
    'In Progress': [
      { id: 4, title: 'Write executive summary', priority: 'high', assignee: 'Loki', description: 'Summarize key findings for executives' }
    ],
    Review: [
      { id: 5, title: 'Market analysis for Q4', priority: 'medium', assignee: 'Loki', description: 'Complete analysis of Q4 market trends' }
    ],
    Done: [
      { id: 6, title: 'Update company roadmap', priority: 'low', assignee: 'Jarvis', description: 'Update strategic roadmap based on new insights' }
    ]
  });

  const columnNames = ['Inbox', 'Assigned', 'In Progress', 'Review', 'Done'];

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDrop = (e, columnName) => {
    e.preventDefault();
    const task = JSON.parse(e.dataTransfer.getData('task'));
    
    // Update task status in state
    setColumns(prev => {
      const newColumns = { ...prev };
      
      // Find and remove from current column
      Object.keys(newColumns).forEach(col => {
        newColumns[col] = newColumns[col].filter(t => t.id !== task.id);
      });
      
      // Add to new column
      newColumns[columnName] = [...newColumns[columnName], { ...task }];
      
      return newColumns;
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="task-board">
      <h2 className="section-title">任务看板</h2>
      <div className="kanban-columns">
        {columnNames.map(columnName => (
          <div 
            key={columnName} 
            className="kanban-column"
            onDrop={(e) => handleDrop(e, columnName)}
            onDragOver={handleDragOver}
          >
            <h3 className="column-header">
              {columnName} 
              <span className="task-count">({columns[columnName]?.length || 0})</span>
            </h3>
            <div className="task-list">
              {(columns[columnName] || []).map(task => (
                <motion.div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task)}
                  className={`task-card priority-${task.priority}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectTask(task)}
                >
                  <h4 className="task-title">{task.title}</h4>
                  <div className="task-meta">
                    <span className="priority-badge">{task.priority}</span>
                    <span className="assignee">{task.assignee || 'Unassigned'}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;