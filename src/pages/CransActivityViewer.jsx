import React, { useState } from 'react';
import { Widget } from 'near-social-vm';

const CransActivityViewer = () => {
  const [view, setView] = useState('activity');
  
  return (
    <div className="container py-4">
      <div className="d-flex flex-column h-100"> 
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-2xl font-bold m-0">Crans.near Activity</h2>
          
          <div className="d-flex gap-2">
            <button 
              className={`btn ${view === 'activity' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setView('activity')}
            >
              Activity Feed
            </button>
            <button 
              className={`btn ${view === 'explore' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setView('explore')}
            >
              Explore
            </button>
          </div>
        </div>

        <div className="flex-grow-1">
          {view === 'activity' && (
            <Widget
              src="crans.near/widget/A0C"
              props={{
                GRAPHQL_ENDPOINT: "https://near-social-api-g.near.social/graphql"
              }}
            />
          )}
          
          {view === 'explore' && (
            <div className="border rounded p-4">
              <Widget
                src="crans.near/widget/ActivityFeeds.DetermineActivityFeed_fork"
                props={{
                  filteredAccountIds: ["crans.near"],
                  GRAPHQL_ENDPOINT: "https://near-social-api-g.near.social/graphql",
                  showFlagAccountFeature: true,
                  limit: 20,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CransActivityViewer;
