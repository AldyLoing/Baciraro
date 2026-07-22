"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { trackRecordData } from "@/lib/track-record-data";
import { MapPin } from "lucide-react";

interface Cell {
  cols: number;
  rows: number;
}

const layouts: Cell[][] = [
  [{ cols: 2, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 1 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }],
  [{ cols: 1, rows: 1 }, { cols: 2, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 1 }],
  [{ cols: 1, rows: 2 }, { cols: 1, rows: 1 }, { cols: 2, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }],
  [{ cols: 3, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 1 }],
  [{ cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 2 }, { cols: 1, rows: 1 }, { cols: 1, rows: 1 }, { cols: 2, rows: 1 }],
  [{ cols: 2, rows: 1 }, { cols: 1, rows: 2 }, { cols: 1, rows: 1 }, { cols: 2, rows: 2 }, { cols: 1, rows: 1 }],
];

function getLayout(year: number, count: number): Cell[] {
  const pattern = layouts[year % layouts.length];
  const cells: Cell[] = [];
  for (let i = 0; i < Math.min(count, 8); i++) {
    cells.push(pattern[i % pattern.length]);
  }
  return cells;
}

const eraAccents: Record<string, string> = {
  awal: "from-emerald-600/40",
  tumbuh: "from-teal-600/40",
  meluas: "from-blue-600/40",
  transformasi: "from-amber-600/40",
};

export function PhotoWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative">
      <div className="sticky top-0 left-0 right-0 z-30 h-0.5 bg-zinc-900">
        <motion.div
          className="h-full bg-emerald-400"
          style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
        />
      </div>

      {trackRecordData.map((yearData, yearIdx) => {
        const allPhotos = yearData.activities.flatMap((a) => a.photos);
        const cells = getLayout(yearData.year, allPhotos.length);
        const era = yearData.activities[0]?.era || "awal";

        return (
          <div key={yearData.year} className="relative">
            {/* Year divider */}
            <div
              id={`chapter-${yearData.year}`}
              className="relative h-screen flex items-center justify-center overflow-hidden"
            >
              {allPhotos[0] && (
                <Image
                  src={allPhotos[0].src}
                  alt=""
                  fill
                  className="object-cover"
                  priority={yearIdx === 0}
                />
              )}
              <div className={`absolute inset-0 bg-gradient-to-b ${eraAccents[era]} via-black/50 to-black z-10`} />

              <div className="relative z-20 text-center">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="block text-[20vw] sm:text-[18vw] font-bold leading-none text-white/30 select-none"
                >
                  {yearData.year}
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-400 font-medium"
                >
                  {yearData.activities.length} Kegiatan &middot; {allPhotos.length} Foto
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-3 max-w-xl mx-auto text-xs text-zinc-500 leading-relaxed px-4 line-clamp-2"
                >
                  {yearData.activities[0]?.narrative || ""}
                </motion.p>
              </div>
            </div>

            {/* Photo grid — no cards, just images with text overlay */}
            <div className="px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
              <div className="mx-auto max-w-7xl">
                {yearData.activities.map((activity, actIdx) => {
                  const photos = activity.photos;
                  if (photos.length === 0) return null;
                  const layout = getLayout(actIdx + yearData.year, photos.length);

                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.6, delay: actIdx * 0.1 }}
                      className="mb-6 last:mb-0"
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                        {/* Title row — text over first photo */}
                        {photos.slice(0, 8).map((photo, i) => {
                          const cell = layout[i] || { cols: 1, rows: 1 };
                          return (
                            <div
                              key={i}
                              className={`relative overflow-hidden group cursor-pointer ${
                                cell.cols === 2 ? "col-span-2" : "col-span-1"
                              } ${
                                cell.rows === 2 ? "row-span-2" : "row-span-1"
                              }`}
                              style={{
                                aspectRatio: cell.rows === 2 ? `${cell.cols}/${cell.rows}` : `${cell.cols}/1`,
                                minHeight: cell.rows === 2 ? "300px" : "150px",
                              }}
                            >
                              <Image
                                src={photo.src}
                                alt={photo.alt || ""}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                              />

                              {/* Text overlay — only on first photo of each activity */}
                              {i === 0 && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10">
                                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                      {activity.location && (
                                        <span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-zinc-300 backdrop-blur-sm uppercase tracking-wider">
                                          <MapPin className="h-2.5 w-2.5 text-emerald-400" />
                                          {activity.location}
                                        </span>
                                      )}
                                      {activity.role && (
                                        <span className="inline-flex rounded-full bg-emerald-950/60 px-2 py-0.5 text-[9px] font-medium text-emerald-300 backdrop-blur-sm uppercase tracking-wider">
                                          {activity.role}
                                        </span>
                                      )}
                                    </div>
                                    <h3 className="text-sm sm:text-base font-medium text-white leading-tight">
                                      {activity.title}
                                    </h3>
                                    {activity.narrative && (
                                      <p className={`mt-1.5 text-xs text-zinc-300/80 leading-relaxed ${
                                        photos.length <= 2 ? "line-clamp-4" : "line-clamp-2"
                                      }`}>
                                        {activity.narrative}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}


                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
