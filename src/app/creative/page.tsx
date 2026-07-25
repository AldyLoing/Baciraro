"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Play, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { useEffect, useRef, useState, type RefObject } from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const featureCards = [
  {
    title: "Jejak Waraney.",
    number: "01",
    icon: "/lg.png",
    items: [
      "Berasal dari tradisi keprajuritan Minahasa.",
      "Dulu ditarikan para penjaga kampung.",
      "Kini menjadi simbol kehormatan budaya.",
      "Energi gerak menegaskan semangat juang.",
    ],
  },
  {
    title: "Ritme dan Senjata.",
    number: "02",
    icon: "/pic.png",
    items: [
      "Diiringi tambur, gong, atau kolintang.",
      "Gerak pedang santi dan tombak wengko.",
      "Langkah 4/4 terasa kokoh dan presisi.",
    ],
  },
  {
    title: "Tiga Babak Inti.",
    number: "03",
    icon: "/pic.png",
    items: [
      "Cakalele: daya tempur dan kewaspadaan.",
      "Kumoyak: ayunan senjata yang terarah.",
      "Lalaya'an: penutup yang lebih cair dan lega.",
    ],
  },
];

export default function CreativePage() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const tributeVideoRef = useRef<HTMLVideoElement | null>(null);
  const featureVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageParallaxY = useTransform(heroProgress, [0, 1], ["0%", "80%"]);
  const imageParallaxRotate = useTransform(heroProgress, [0, 1], [0, -15]);
  const videoParallaxY = useTransform(heroProgress, [0, 1], ["0%", "-65%"]);
  const videoParallaxRotate = useTransform(heroProgress, [0, 1], [0, 14]);

  useEffect(() => {
    const playVideos = () => {
      const videos = [heroVideoRef.current, tributeVideoRef.current, featureVideoRef.current].filter(
        Boolean,
      ) as HTMLVideoElement[];

      videos.forEach((video) => {
        video.defaultMuted = true;
        video.muted = true;
        video.volume = 0;
        void video.play().catch(() => {
          // Ignore autoplay rejections; they can be retried after a gesture.
        });
      });
    };

    playVideos();

    const retryPlay = () => playVideos();
    window.addEventListener("pointerdown", retryPlay, { once: true });
    window.addEventListener("keydown", retryPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", retryPlay);
      window.removeEventListener("keydown", retryPlay);
    };
  }, []);

  useEffect(() => {
    const video = featureVideoRef.current;
    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    void video.play().catch(() => {
      // Silently tolerate autoplay restrictions.
    });

    const handleLoadedData = () => {
      video.muted = true;
      video.volume = 0;
    };

    video.addEventListener("loadeddata", handleLoadedData);
    return () => video.removeEventListener("loadeddata", handleLoadedData);
  }, []);

  const handleVideoClick = (videoRef: RefObject<HTMLVideoElement | null>) => {
    if (!videoRef.current) {
      return;
    }

    [heroVideoRef, tributeVideoRef, featureVideoRef].forEach((ref) => {
      if (ref.current) {
        ref.current.muted = true;
        ref.current.volume = 0;
      }
    });

    videoRef.current.muted = false;
    videoRef.current.volume = 1;
    void videoRef.current.play();
  };

  return (
    <main className="relative overflow-hidden text-primary-text min-h-screen">
      <div aria-hidden="true" className="page-bg" />
      <div className="relative z-[1]">
      <section ref={heroRef} className="h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-[3rem] md:rounded-[5rem]">
          <video
            ref={heroVideoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onClick={() => handleVideoClick(heroVideoRef)}
            className="absolute inset-0 h-full w-full cursor-pointer rounded-[3rem] object-cover md:rounded-[5rem]"
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

          <motion.div
            style={{ y: imageParallaxY, rotate: imageParallaxRotate }}
            className="pointer-events-none absolute -left-10 top-1/2 z-0 w-64 -translate-y-1/2 opacity-90 md:-left-16 md:w-96 lg:left-0 lg:w-[38rem]"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: [0, 30, 0], opacity: 1 }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 1,
                },
              }}
            >
              <Image
                src="/pic.png"
                alt="Floating decorative element"
                width={960}
                height={960}
                className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>

          <nav className="absolute left-1/2 top-0 z-20 w-full max-w-[95vw] -translate-x-1/2 sm:max-w-max">
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-b-2xl bg-background px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
              {["navAsal", "navMakna", "navGerakan", "navBusana", "navWarisan"].map((key) => (
                <a
                  key={key}
                  href="#"
                  className="text-[10px] text-white/60 transition-colors hover:text-white sm:text-xs md:text-sm"
                >
                  {t(`creative.${key}`)}
                </a>
              ))}
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex min-h-[50%] flex-col justify-end p-4 sm:p-5 md:p-8">
            <div className="relative z-20 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
              <div className="md:col-span-7 lg:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-[24vw] font-medium leading-[0.85] tracking-[-0.07em] text-primary-text sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw]"
                >
                  Kawasaran
                </motion.h1>
              </div>

              <div className="relative z-30 mb-16 flex flex-col items-center text-center sm:mb-24 md:col-span-5 md:items-end md:text-right md:pb-6 lg:col-span-4 lg:mb-48 xl:mb-56">
                <motion.div
                  style={{ y: videoParallaxY, rotate: videoParallaxRotate }}
                  className="relative z-30 mb-6 mt-4 flex w-full max-w-sm items-center justify-center md:-ml-[35%] md:-mt-56 md:w-[135%] md:justify-end lg:-ml-[50%] lg:-mt-72 lg:w-[150%]"
                >
                  <AnimatePresence mode="wait">
                    {!isVideoOpen ? (
                      <motion.button
                        key="play-button"
                        layoutId="tribute-video"
                        type="button"
                        onClick={() => setIsVideoOpen(true)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: springEase }}
                        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/20 px-5 py-3 text-sm font-medium text-white shadow-xl backdrop-blur-md hover:bg-white/30"
                      >
                        <Play className="h-4 w-4" fill="currentColor" />
                        {t("creative.tontonVideo")}
                      </motion.button>
                    ) : (
                      <motion.div
                        key="video-player"
                        layoutId="tribute-video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative aspect-[21/9] w-full overflow-hidden rounded-md shadow-2xl"
                      >
                        <button
                          type="button"
                          onClick={() => setIsVideoOpen(false)}
                          className="absolute right-4 top-4 z-40 rounded-full bg-black/50 p-2 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                        >
                          <X className="h-5 w-5" />
                        </button>
                        <video
                          ref={tributeVideoRef}
                          src="/tribute.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          onClick={() => handleVideoClick(tributeVideoRef)}
                          className="h-full w-full cursor-pointer rounded-md object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div className="w-full max-w-sm rounded-xl border border-white/10 bg-background/40 p-4 shadow-xl backdrop-blur-md">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: springEase }}
                    className="text-center text-xs leading-[1.4] text-white sm:text-sm md:text-left md:text-base"
                  >
                    {t("creative.descBody")}
                  </motion.p>

                  <div className="flex w-full justify-center md:justify-start">
                    <motion.button
                      type="button"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.7, ease: springEase }}
                      className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                    >
                      {t("creative.jelajahiBudaya")}
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-white/5 py-16">
        <div className="m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="w-full text-center md:max-w-44 md:border-r md:border-white/10 md:pr-6 md:text-right shrink-0">
              <p className="text-sm text-zinc-400">{t("creative.powering")}</p>
            </div>
            <div className="flex-1 w-full overflow-hidden">
              <LogoCloud />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/5 bg-zinc-950 px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16">
          <p className="text-[10px] text-primary sm:text-xs">{t("creative.budayaLabel")}</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-normal leading-[0.95] sm:text-4xl md:text-5xl lg:text-6xl">
            {t("creative.descTitle")}
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
            {t("creative.descBody")}
          </p>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden px-4 pb-14 pt-8 sm:px-6 md:px-8">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h3 className="text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {t("creative.warisanTitle")}
            </h3>
            <p className="mt-3 text-xl font-normal text-zinc-400 sm:text-2xl md:text-3xl lg:text-4xl">
              {t("creative.warisanSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:h-[480px]">
            <article className="relative min-h-[320px] overflow-hidden rounded-2xl">
              <video
                ref={featureVideoRef}
                src="/IMG_5184.MP4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onClick={() => handleVideoClick(featureVideoRef)}
                className="absolute inset-0 h-full w-full cursor-pointer object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-primary-text sm:text-base">{t("creative.featureCaption")}</p>
            </article>

            {featureCards.map((card) => (
              <article
                key={card.number}
                className="flex min-h-[320px] flex-col rounded-2xl border border-white/5 bg-zinc-950 p-4 sm:p-5"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12"
                />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-lg text-primary-text sm:text-xl">{card.title}</h3>
                  <span className="text-xs text-zinc-500">{card.number}</span>
                </div>

                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <Check className="mt-[2px] h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-primary transition-opacity hover:opacity-80">
                  {t("creative.bacaMakna")}
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}