import PodcastCard from "@/components/PodcastCard";
import { Button } from "@/components/ui/button"; //if hadnt imported this then i wont be able to use button tag
import { podcastData } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending podcast</h1>
        {/* <Button className='text-white-1 bg-orange-1'>Button</Button>  commented this*/}
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imageURL }) => (
            <PodcastCard
              key={id}
              imgUrl={imageURL}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;