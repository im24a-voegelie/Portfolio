'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Card, { CardHeader, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/components/LanguageProvider';
import { fortunes } from '@/data/fortunes';

const STORAGE_KEY = 'fortuneCookieLastOpened';
const FRAME_COUNT = 6;
const LAST_FRAME = FRAME_COUNT - 1;
const FRAME_DURATION = 100; // ms, matches the source animation's per-frame timing
const CANVAS_ASPECT_RATIO = '3262 / 1290';
// Bounding box (as % of the sprite canvas) of the blank paper slip visible on the final frame.
const PAPER_BOX = { left: '11.3%', top: '25%', width: '75.2%', height: '40.1%' };

function getDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function getTodaysFortune(language) {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  return fortunes[dayOfYear % fortunes.length][language];
}

export function FortuneCookie() {
  const { t, language } = useTranslation();
  const [frame, setFrame] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const todayKey = getDateKey(new Date());
    if (window.localStorage.getItem(STORAGE_KEY) === todayKey) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage after mount to avoid SSR/client hydration mismatch
      setIsOpen(true);
      setFrame(LAST_FRAME);
    }
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleOpen = () => {
    if (isOpen || isAnimating) return;
    setIsAnimating(true);

    let current = 0;
    intervalRef.current = setInterval(() => {
      current += 1;
      setFrame(current);
      if (current >= LAST_FRAME) {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setIsOpen(true);
        window.localStorage.setItem(STORAGE_KEY, getDateKey(new Date()));
      }
    }, FRAME_DURATION);
  };

  const message = getTodaysFortune(language);

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="!border-b-0">
        <h3 className="text-subsection text-zinc-900 dark:text-zinc-50">
          {t.home.fortune.heading}
        </h3>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col items-center text-center gap-2">
        <button
          type="button"
          onClick={handleOpen}
          disabled={isOpen || isAnimating}
          aria-label={t.home.fortune.openButton}
          className="relative w-full max-w-[320px] disabled:cursor-default"
          style={{ aspectRatio: CANVAS_ASPECT_RATIO }}
        >
          {Array.from({ length: FRAME_COUNT }).map((_, i) => (
            <Image
              key={i}
              src={`/fortune-cookie/frame-${i}.png`}
              alt={i === 0 ? t.home.fortune.openButton : ''}
              fill
              sizes="320px"
              priority={i === 0}
              className="object-contain transition-opacity duration-75"
              style={{ opacity: frame === i ? 1 : 0 }}
            />
          ))}

          {isOpen && (
            <p
              className="absolute flex items-center justify-center px-2 text-[11px] italic leading-snug text-zinc-700 sm:text-xs"
              style={PAPER_BOX}
            >
              {message}
            </p>
          )}
        </button>

        {!isOpen && (
          <span className="text-sm font-medium text-violet-900 dark:text-violet-400">
            {t.home.fortune.prompt}
          </span>
        )}
        {isOpen && (
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {t.home.fortune.comeBackTomorrow}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
