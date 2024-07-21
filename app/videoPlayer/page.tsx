"use client";
import React, { Suspense } from 'react';
import Player from './player';
import { useSearchParams } from 'next/navigation';
import videoStats from './videoStats';
const VideoPlayerPage = () =>{

  const searchParams= useSearchParams();
  const iframeVideo=(searchParams.get("watchVideo"))
 

  return (
    <div className='pt-20'> 
     <Suspense><Player videoId={iframeVideo} ></Player></Suspense>
    </div>
  );
};

export default VideoPlayerPage;
