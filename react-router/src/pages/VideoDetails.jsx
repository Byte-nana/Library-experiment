import React from 'react';
import { useParams } from 'react-router';

export default function VideoDetails() {
  const { videoId } = useParams();

  return <div>Video Details: {videoId}</div>;
}
