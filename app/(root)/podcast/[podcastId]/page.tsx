import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div>
      <p>this is {params.podcastId}</p>
    </div>
  );
};

export default PodcastDetails;
