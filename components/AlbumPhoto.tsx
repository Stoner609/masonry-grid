"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { resizeMasonryItem } from "@/utils/masonry";

export const AlbumPhoto = React.memo(
  function AlbumPhotoItem({
    src,
    alt,
    className = "",
  }: {
    src: string;
    alt: string;
    className?: string;
  }) {
    const refAlbumPhoto = useRef<HTMLDivElement | null>(null);

    return (
      <div
        className="masonry-item a relative cursor-pointer"
        ref={refAlbumPhoto}
      >
        <a href={src}>
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            className={className}
            onLoadingComplete={(img) => {
              resizeMasonryItem(refAlbumPhoto.current);
            }}
          />
        </a>
      </div>
    );
  },
  () => {
    return false;
  },
);
