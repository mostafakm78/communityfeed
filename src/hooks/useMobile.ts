'use client';

import { useSyncExternalStore } from 'react';

const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;
const WIDE_BREAKPOINT = 1280;

function useMediaQuery(query: string): boolean {
  function subscribe(callback: () => void): () => void {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', callback);
    return () => mql.removeEventListener('change', callback);
  }

  function getSnapshot(): boolean {
    return window.matchMedia(query).matches;
  }

  function getServerSnapshot(): boolean {
    return false;
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useMobile(): boolean {
  return useMediaQuery(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);
}

export function useTablet(): boolean {
  return useMediaQuery(`(min-width: ${TABLET_BREAKPOINT}px) and (max-width: ${DESKTOP_BREAKPOINT - 1}px)`);
}

export function useDesktop(): boolean {
  return useMediaQuery(`(min-width: ${DESKTOP_BREAKPOINT}px) and (max-width: ${WIDE_BREAKPOINT - 1}px)`);
}

export function useWide(): boolean {
  return useMediaQuery(`(min-width: ${WIDE_BREAKPOINT}px)`);
}
