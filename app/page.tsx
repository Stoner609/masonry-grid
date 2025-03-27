import React from "react";
// constants
import { albumPhotos } from "@/constants/albumPhotos";
// components
import { AlbumPhoto } from "@/components/AlbumPhoto";
// utils
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-6xl font-bold">Demo</h2>

      <div className="flex w-full items-center justify-center">
        <div className="relative w-full">
          <section className="">
            <div className="masonry relative">
              {albumPhotos.map((photo) => (
                <AlbumPhoto
                  key={photo.id}
                  src={photo.download_url}
                  alt={photo.author}
                  className="masonry-content object-cover"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
