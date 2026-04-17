"use client";

import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Play, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type TextSegment = {
  text: string;
  className?: string;
};

type WordsPullUpProps = {
  text: string;
  className?: string;
  showAsterisk?: boolean;
};

const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

function WordsPullUp({ text, className, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        const endsWithA = /a$/i.test(word);

        return (
          <span key={`${word}-${index}`} className="mr-[0.22em] inline-block last:mr-0">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: springEase, delay: index * 0.08 }}
              className="inline-block"
            >
              {showAsterisk && isLastWord && endsWithA ? (
                <span className="relative inline-block">
                  {word}
                  <span className="pointer-events-none absolute -right-[0.3em] top-[0.65em] text-[0.31em]">*</span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}

function WordsPullUpMultiStyle({
  segments,
  className,
}: {
  segments: TextSegment[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const words = useMemo(
    () =>
      segments.flatMap((segment) =>
        segment.text.split(" ").map((word) => ({
          word,
          className: segment.className,
        })),
      ),
    [segments],
  );

  return (
    <div ref={ref} className={className}>
      <div className="inline-flex flex-wrap justify-center">
        {words.map(({ word, className: itemClass }, index) => (
          <span key={`${word}-${index}`} className="mr-[0.22em] inline-block last:mr-0">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.7, ease: springEase, delay: index * 0.08 }}
              className={`inline-block ${itemClass ?? ""}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>
    </div>
  );
}

function AnimatedLetter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1], { clamp: true });

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function Home() {
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

  const aboutParagraphRef = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: aboutParagraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const featureGridRef = useRef<HTMLDivElement | null>(null);
  const featuresInView = useInView(featureGridRef, { once: false, margin: "-100px" });

  const aboutText =
    "Kabasaran adalah tarian perang Minahasa yang kini hidup sebagai tari penyambutan. Geraknya tegas, ritmenya kuat, dan tiap langkah membawa pesan keberanian, disiplin, serta hormat pada leluhur.";

  const playVideos = () => {
    const videos = [heroVideoRef.current, tributeVideoRef.current, featureVideoRef.current].filter(
      Boolean,
    ) as HTMLVideoElement[];

    videos.forEach((video) => {
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;
      void video.play().catch(() => {
        // Ignore play rejection; browser policies may still require direct media control interaction.
      });
    });
  };

  useEffect(() => {
    playVideos();

    const retryPlay = () => playVideos();
    window.addEventListener("pointerdown", retryPlay, { once: true });
    window.addEventListener("keydown", retryPlay, { once: true });

    return () => {
      window.removeEventListener("pointerdown", retryPlay);
      window.removeEventListener("keydown", retryPlay);
    };
  }, []);

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

  return (
    <main className="bg-background text-primary-text">
      <section ref={heroRef} className="h-screen p-4 md:p-6">
        <div className="relative h-full overflow-hidden rounded-2xl md:rounded-[2rem]">
          <video
            ref={heroVideoRef}
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
            autoPlay
            loop
            muted={false}
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />

          {/* Parallax & Floating Image */}
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
              <img
                src="/pic.png"
                alt="Floating decorative element"
                className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </motion.div>

          <nav className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-b-2xl bg-background px-4 py-2 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14 sm:gap-6">
              {["Asal-usul", "Makna", "Gerakan", "Busana", "Warisan"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[10px] transition-colors sm:text-xs md:text-sm"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 z-10 flex min-h-[50%] flex-col justify-end p-4 sm:p-5 md:p-8">
            <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12 relative z-20">
              <div className="md:col-span-7 lg:col-span-8">
                <WordsPullUp
                  text="Kabasaran"
                  showAsterisk
                  className="font-medium leading-[0.85] tracking-[-0.07em] text-[24vw] text-primary-text sm:text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[17vw] 2xl:text-[18vw]"
                />
              </div>

              <div className="relative z-30 md:col-span-5 lg:col-span-4 md:pb-6 flex flex-col items-end text-right">
                <motion.div
                  style={{ y: videoParallaxY, rotate: videoParallaxRotate }}
                  className="mb-2 -mt-40 sm:-mt-48 md:-mt-56 lg:-mt-72 w-[115%] -ml-[15%] md:w-[135%] md:-ml-[35%] lg:w-[150%] lg:-ml-[50%] z-30 relative flex justify-end items-center"
                >
                  <AnimatePresence mode="wait">
                    {!isVideoOpen ? (
                      <motion.button
                        key="play-button"
                        layoutId="tribute-video"
                        onClick={() => setIsVideoOpen(true)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: springEase }}
                        className="flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-5 py-3 text-sm font-medium text-white hover:bg-white/30 border border-white/10 shadow-xl"
                      >
                        <Play className="h-4 w-4" fill="currentColor" />
                        Tonton Video
                      </motion.button>
                    ) : (
                      <motion.div
                        key="video-player"
                        layoutId="tribute-video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative overflow-hidden rounded-md aspect-[21/9] w-full shadow-2xl"
                      >
                        <button
                          onClick={() => setIsVideoOpen(false)}
                          className="absolute right-4 top-4 z-40 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                        <video
                          ref={tributeVideoRef}
                          src="/tribute.mp4"
                          autoPlay
                          loop
                          muted={false}
                          playsInline
                          preload="auto"
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div className="bg-background/40 backdrop-blur-md p-4 rounded-xl border border-white/10 z-30 shadow-xl max-w-sm">
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5, ease: springEase }}
                    className="text-xs leading-[1.4] text-white sm:text-sm md:text-base text-left"
                  >
                    Tarian ksatria Minahasa yang lahir dari semangat menjaga tanah, lalu bertransformasi menjadi
                    identitas budaya yang gagah, ritmis, dan penuh wibawa.
                  </motion.p>

                  <div className="w-full flex justify-start">
                    <motion.button
                      type="button"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.7, ease: springEase }}
                      className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                    >
                      Jelajahi budaya
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

      {/* Logo Cloud Section */}
      <section className="bg-background overflow-hidden py-16 border-t border-white/5 relative z-10">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r border-white/10 md:pr-6 w-full text-center md:text-right mb-6 md:mb-0">
              <p className="text-sm text-zinc-400">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)] w-full overflow-hidden flex items-center">
              <div 
                className="flex overflow-hidden w-full" 
                style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
              >
                <motion.div
                  className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                >
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />

                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                </motion.div>
                <motion.div
                  className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16"
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                >
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />

                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  
                  <img src="/Baciraro cap.png" alt="Baciraro Cap" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo (1).png" alt="Logo 1" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                  <img src="/Logo Kemenbud.png" alt="Kemenbud" className="h-10 sm:h-12 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-4 pb-20 pt-12 sm:px-6 md:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-zinc-950 border border-white/5 px-5 py-12 text-center sm:px-8 sm:py-14 md:px-12 md:py-16">
          <p className="text-[10px] text-primary sm:text-xs">Budaya Minahasa</p>

          <WordsPullUpMultiStyle
            className="mx-auto mt-5 max-w-3xl text-3xl font-normal leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            segments={[
              { text: "Kabasaran bukan sekadar tari," },
              { text: "ia adalah napas keberanian.", className: "font-serif italic" },
              {
                text: "Setiap hentak langkah menyalakan ingatan, martabat, dan akar tradisi Minahasa.",
              },
            ]}
          />

          <p
            ref={aboutParagraphRef}
            className="mx-auto mt-8 max-w-4xl text-xs leading-relaxed text-foreground/90 sm:text-sm md:text-base"
          >
            {aboutText.split("").map((char, index) => {
              const totalChars = aboutText.length;
              const charProgress = index / totalChars;
              const range: [number, number] = [charProgress - 0.1, charProgress + 0.05];

              return (
                <AnimatedLetter
                  key={`${char}-${index}`}
                  char={char}
                  progress={scrollYProgress}
                  range={range}
                />
              );
            })}
          </p>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-background px-4 pb-14 pt-8 sm:px-6 md:px-8">
        <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <WordsPullUpMultiStyle
            className="mx-auto mb-10 max-w-4xl text-center"
            segments={[
              {
                text: "Warisan gerak yang lahir dari keberanian.",
                className: "text-primary-text text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl",
              },
              {
                text: "Hari ini tetap hidup sebagai wajah budaya Sulawesi Utara.",
                className: "text-zinc-400 text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl",
              },
            ]}
          />

          <div ref={featureGridRef} className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4 sm:gap-2">
            <motion.article
              initial={{ opacity: 0, scale: 0.95 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-[320px] overflow-hidden rounded-2xl"
            >
              <video
                ref={featureVideoRef}
                src="/IMG_5184.MP4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm text-primary-text sm:text-base">Gagah, sakral, dan berakar.</p>
            </motion.article>

            {featureCards.map((card, index) => (
              <motion.article
                key={card.number}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={featuresInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, delay: (index + 1) * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex min-h-[320px] flex-col rounded-2xl bg-zinc-950 border border-white/5 p-4 sm:p-5"
              >
                <img src={card.icon} alt={card.title} className="h-10 w-10 rounded-xl object-cover sm:h-12 sm:w-12" />

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

                <a
                  href="#"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm text-primary transition-opacity hover:opacity-80"
                >
                  Baca maknanya
                  <ArrowRight className="h-4 w-4 -rotate-45" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
