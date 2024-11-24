import React from 'react';
import { Widget } from 'near-social-vm';

const CransActivityViewer = () => {
  return (
    <div className="container py-4">
      <Widget
        src="crans.near/widget/A0C"
        props={{
          GRAPHQL_ENDPOINT: "https://near-social-api-g.near.social/graphql"
        }}
      />
    </div>
  );
};

export default CransActivityViewer;
