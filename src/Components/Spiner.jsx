import React from 'react';
import "../CSS/LoadingSpinner.css"; // Asegúrate de tener este archivo CSS

export const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};