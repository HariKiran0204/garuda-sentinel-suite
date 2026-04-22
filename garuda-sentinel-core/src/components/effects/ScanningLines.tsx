
import React from 'react';

const ScanningLines = () => {
  return (
    <>
      <div className="scanning-line" style={{ animationDelay: '0s' }} />
      <div className="scanning-line" style={{ animationDelay: '1s', top: '33%' }} />
      <div className="scanning-line" style={{ animationDelay: '2s', top: '66%' }} />
    </>
  );
};

export default ScanningLines;
