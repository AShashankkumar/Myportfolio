import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Don't render anything if there's an error
  if (hasError) {
    return null;
  }

  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-accent-blue border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div className={`w-full h-full ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <Spline 
          scene="https://prod.spline.design/6Wq1Q7YGyHsaqeZH/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          className="pointer-events-auto"
        />
      </div>
    </div>
  );
};

export default SplineScene;