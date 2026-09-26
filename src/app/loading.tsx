import React from 'react';

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#05070d]">
      <span className="loading loading-spinner loading-lg text-lime-400"></span>
      <p className="text-3xl text-gray-400">Loading workouts…</p>
    </div>
  );
};

export default GlobalLoading;