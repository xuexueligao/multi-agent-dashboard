import React, { useState } from 'react';

const DocumentPanel = () => {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: 'Q4 Market Analysis Report',
      author: 'Loki',
      date: new Date(Date.now() - 86400000),
      status: 'completed',
      content: 'Detailed analysis of market trends for Q4. The report includes comprehensive data on customer behavior, competitive landscape, and growth projections.'
    },
    {
      id: 2,
      title: 'Competitor Pricing Strategy',
      author: 'Jacky',
      date: new Date(Date.now() - 172800000),
      status: 'in-review',
      content: 'Research on competitor pricing models and market positioning strategies. Analysis of price sensitivity and market share implications.'
    },
    {
      id: 3,
      title: 'Product Development Roadmap',
      author: 'Jarvis',
      date: new Date(Date.now() - 259200000),
      status: 'draft',
      content: 'Strategic roadmap for product development initiatives. Includes timeline, resource allocation, and success metrics.'
    }
  ]);

  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <div className="document-panel">
      <h2 className="section-title">文档面板</h2>
      <div className="panel-content">
        <div className="document-list">
          {documents.map(doc => (
            <div 
              key={doc.id} 
              className={`document-item status-${doc.status}`}
              onClick={() => setSelectedDoc(doc)}
            >
              <h3 className="document-title">{doc.title}</h3>
              <div className="document-meta">
                <span className="author">作者: {doc.author}</span>
                <span className="date">{doc.date.toLocaleDateString()}</span>
                <span className={`status-badge ${doc.status}`}>{doc.status}</span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedDoc && (
          <div className="document-viewer">
            <div className="document-header">
              <h2>{selectedDoc.title}</h2>
              <button 
                className="close-btn" 
                onClick={() => setSelectedDoc(null)}
              >
                ×
              </button>
            </div>
            <div className="document-content newspaper-text">
              {selectedDoc.content}
            </div>
            <div className="document-actions">
              <button className="btn btn-primary">编辑</button>
              <button className="btn btn-secondary">下载</button>
              <button className="btn btn-outline">分享</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentPanel;