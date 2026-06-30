'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { searchQuestions } from '@/featurs/questions/api/searchQuestions';
import { SearchQuestionItem } from '@/featurs/questions/types/questions';

const SEARCH_DEBOUNCE_MS = 300;

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchQuestionItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    const controller = new AbortController();

    const timeout = setTimeout(async () => {
      setIsLoading(true);
      setHasError(false);
      setIsOpen(true);

      try {
        const data = await searchQuestions(trimmedQuery, controller.signal);
        setResults(data.results);
      } catch {
        if (!controller.signal.aborted) {
          setResults([]);
          setHasError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative md:w-125 w-full h-full">
      <Search className="absolute size-4 md:size-5 right-3 top-1/2 -translate-y-1/2" />
      <Input
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);

          if (!value.trim()) {
            setResults([]);
            setIsLoading(false);
            setHasError(false);
            setIsOpen(false);
          }
        }}
        onFocus={() => results.length > 0 && setIsOpen(true)}
        className="md:pr-10 pr-8 bg-background h-full w-full text-xs"
        placeholder="سوال رو جستجو کن..."
      />

      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-secondary border border-foreground/20 rounded-xl shadow-lg max-h-80 overflow-y-auto z-50">
          {isLoading ? (
            <div className="flex items-center justify-center gap-2 py-4 text-xs text-muted-foreground">
              <Spinner />
              در حال جستجو...
            </div>
          ) : hasError ? (
            <p className="py-4 text-center text-xs text-destructive">خطا در جستجو</p>
          ) : results.length === 0 ? (
            <p className="py-4 text-center text-xs text-muted-foreground">نتیجه‌ای یافت نشد</p>
          ) : (
            results.map((item) => (
              <Link
                key={item.id}
                href={`/${item.id}`}
                onClick={() => setIsOpen(false)}
                className="block truncate px-4 py-2 text-xs transition-colors hover:bg-background"
              >
                {item.content}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
