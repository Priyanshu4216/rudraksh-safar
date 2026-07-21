import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col animate-pulse h-full">
      <div className="aspect-square rounded-[1.5rem] bg-gray-200 mb-4 w-full"></div>
      <div className="flex flex-col flex-grow px-1">
        <div className="flex justify-between items-start gap-2 mb-2">
          <div className="h-5 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1.5"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="mt-auto pt-2">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};
