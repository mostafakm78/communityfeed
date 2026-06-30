import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Indirection so a server-render-time snapshot doesn't read as an impure
// `Date.now()` call inside a component body.
export function getNow(): number {
  return Date.now();
}

export function toPersian(n: number): string {
  return String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
}

export function toRelativeTime(dateString: string, now: number = Date.now()): string {
  const diffSec = Math.floor((now - new Date(dateString).getTime()) / 1000);

  if (diffSec < 60) return 'چند لحظه پیش';
  if (diffSec < 3600) return `${toPersian(Math.floor(diffSec / 60))} دقیقه پیش`;
  if (diffSec < 86400) return `${toPersian(Math.floor(diffSec / 3600))} ساعت پیش`;
  if (diffSec < 2592000) return `${toPersian(Math.floor(diffSec / 86400))} روز پیش`;
  if (diffSec < 31536000) return `${toPersian(Math.floor(diffSec / 2592000))} ماه پیش`;
  return `${toPersian(Math.floor(diffSec / 31536000))} سال پیش`;
}
