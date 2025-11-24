import React from "react";

export default function UIOverlay({ children }) {
  return (
    <div className="ui-overlay">
      {children}
    </div>
  );
}
