'use client';

import { KeyboardEvent, useState } from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const MAX_TAGS = 5;

type TagsInputProps = {
  value: string[];
  onChange: (tags: string[]) => void;
};

const TagsInput = ({ value, onChange }: TagsInputProps) => {
  const [input, setInput] = useState('');

  const addTag = (raw: string) => {
    const tag = raw.trim().toLowerCase();
    if (!tag || value.includes(tag) || value.length >= MAX_TAGS) return;
    onChange([...value, tag]);
    setInput('');
  };

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(input);
    } else if (e.key === 'Backspace' && !input && value.length > 0) {
      removeTag(value[value.length - 1]);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 min-h-12 rounded-lg border border-input bg-background px-3 py-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-ring">
      {value.map((tag) => (
        <Badge key={tag} className="py-4 px-3 bg-blue-500 hover:bg-blue-700 text-white gap-1.5 text-sm font-normal">
          {tag}
          <button type="button" onClick={() => removeTag(tag)} className="hover:opacity-70 cursor-pointer">
            <X size={12} />
          </button>
        </Badge>
      ))}
      {value.length < MAX_TAGS && <input className="flex-1 min-w-24 bg-transparent outline-none text-sm placeholder:text-muted-foreground" placeholder="اضافه کنید..." value={input} onChange={(e) => setInput(e.target.value.replace(',', ''))} onKeyDown={handleKeyDown} onBlur={() => addTag(input)} />}
    </div>
  );
};

export default TagsInput;
