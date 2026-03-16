import React from "react";
// constants
import { albumPhotos } from "@/constants/albumPhotos";
// components
import { AlbumPhoto } from "@/components/AlbumPhoto";
// utils
import { cn } from "@/utils/cn";

export default function Home() {
  const columnItems = [
    { id: 1, height: 78 },
    { id: 2, height: 132 },
    { id: 3, height: 96 },
    { id: 4, height: 158 },
    { id: 5, height: 84 },
    { id: 6, height: 118 },
  ];
  const denseNoSpanItems = [
    { id: 1, height: 70 },
    { id: 2, height: 140 },
    { id: 3, height: 90 },
    { id: 4, height: 160 },
    { id: 5, height: 80 },
    { id: 6, height: 120 },
  ];
  const denseSpanItems = [
    { id: 1, span: 3 },
    { id: 2, span: 2 },
    { id: 3, span: 4 },
    { id: 4, span: 2 },
    { id: 5, span: 5 },
    { id: 6, span: 2 },
  ];
  const orderItems = [
    { id: 1, size: "short" },
    { id: 2, size: "tall" },
    { id: 3, size: "medium" },
    { id: 4, size: "short" },
    { id: 5, size: "tall" },
    { id: 6, size: "medium" },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-6xl font-bold">Demo</h2>

      <section className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">
          Column flow (top-to-bottom, then next column)
        </h3>
        <div className="column-grid">
          {columnItems.map((item) => (
            <div
              key={item.id}
              className="column-card"
              style={{ "--card-h": `${item.height}px` } as React.CSSProperties}
            >
              {item.id}
            </div>
          ))}
        </div>
        <p className="text-sm opacity-70">
          Items fill the left column first, then continue at the top of the
          next column.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">
          Order-preserving grid (left-to-right, top-to-bottom)
        </h3>
        <div className="order-grid">
          {orderItems.map((item) => (
            <div key={item.id} className={`order-card ${item.size}`}>
              {item.id}
            </div>
          ))}
        </div>
        <p className="text-sm opacity-70">
          Items stay in order, but fixed row height leaves empty space under
          shorter cards.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">
          Dense auto-flow (no span)
        </h3>
        <div className="dense-no-span-grid">
          {denseNoSpanItems.map((item) => (
            <div
              key={item.id}
              className="dense-card"
              style={{ "--card-h": `${item.height}px` } as React.CSSProperties}
            >
              {item.id}
            </div>
          ))}
        </div>
        <p className="text-sm opacity-70">
          Dense packing does not change layout without track spans, so you
          still get gaps inside each row.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">
          Dense auto-flow (with span)
        </h3>
        <div className="dense-span-grid">
          {denseSpanItems.map((item) => (
            <div
              key={item.id}
              className={`dense-card span-${item.span}`}
            >
              {item.id}
            </div>
          ))}
        </div>
        <p className="text-sm opacity-70">
          With spans, dense mode can back-fill holes, which may change the
          visual order.
        </p>
      </section>

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
