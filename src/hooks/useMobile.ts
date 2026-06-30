'use client';

import { useSyncExternalStore } from 'react';

// Breakpoint values matching the project's responsive design tiers
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;
const WIDE_BREAKPOINT = 1280;

// Reactive media query hook — SSR-safe via useSyncExternalStore (server snapshot returns false)
function useMediaQuery(query: string): boolean {
  // Subscribe to media query changes and re-render when it toggles
  function subscribe(callback: () => void): () => void {
    const mql = window.matchMedia(query);
    mql.addEventListener('change', callback);
    return () => mql.removeEventListener('change', callback);
  }

  // Client snapshot: current match state
  function getSnapshot(): boolean {
    return window.matchMedia(query).matches;
  }

  // Server snapshot: always false to avoid hydration mismatch
  function getServerSnapshot(): boolean {
    return false;
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// True when viewport is narrower than the tablet breakpoint
export function useMobile(): boolean {
  return useMediaQuery(`(max-width: ${TABLET_BREAKPOINT - 1}px)`);
}

// True when viewport is in the tablet range
export function useTablet(): boolean {
  return useMediaQuery(`(min-width: ${TABLET_BREAKPOINT}px) and (max-width: ${DESKTOP_BREAKPOINT - 1}px)`);
}

// True when viewport is in the desktop range
export function useDesktop(): boolean {
  return useMediaQuery(`(min-width: ${DESKTOP_BREAKPOINT}px) and (max-width: ${WIDE_BREAKPOINT - 1}px)`);
}

// True when viewport is wider than the wide breakpoint
export function useWide(): boolean {
  return useMediaQuery(`(min-width: ${WIDE_BREAKPOINT}px)`);
}
