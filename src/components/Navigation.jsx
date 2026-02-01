import React from 'react';

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-brand">
          <h1>Multi-Agent Dashboard</h1>
        </div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-link ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;