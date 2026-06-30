'use client';

import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../api/getBooks';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

type SelectBookProps = {
  value?: string;
  onValueChange?: (value: string) => void;
};

export function SelectBook({ value, onValueChange }: SelectBookProps) {
  // Fetch available book options from the API
  const { data: books, isLoading } = useQuery({ queryKey: ['books'], queryFn: getBooks });

  return (
    // Book selector populated from API
    <Select value={value} onValueChange={onValueChange} disabled={isLoading}>
      {/* Trigger button showing selected book or placeholder */}
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder={isLoading ? 'در حال بارگذاری...' : 'انتخاب کتاب'} />
      </SelectTrigger>
      {/* Dropdown list of available books */}
      <SelectContent>
        <SelectGroup>
          <SelectLabel>کتاب‌ها</SelectLabel>
          {books?.map((book) => (
            <SelectItem key={book} value={book}>
              {book}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
