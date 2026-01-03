import React from "react";

const EventCardSkeleton = () => {
    return (
        <div className="card bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm animate-pulse">
            {/* Image Skeleton */}
            <div className="h-64 bg-gray-200"></div>

            {/* Content Skeleton */}
            <div className="card-body p-8">
                <div className="flex justify-between items-start mb-4">
                    {/* Title Skeleton */}
                    <div className="h-8 bg-gray-200 rounded-full w-3/4"></div>
                    {/* Price Badge Skeleton */}
                    <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
                </div>

                {/* Location Skeleton */}
                <div className="h-5 bg-gray-200 rounded-full w-1/2 mb-6"></div>

                {/* Button Skeleton */}
                <div className="mt-auto h-12 bg-gray-200 rounded-full w-full"></div>
            </div>
        </div>
    );
};

export default EventCardSkeleton;
