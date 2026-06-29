'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import TagsInput from './TagsInput';
import { toPersian } from '@/lib/utils';

const formSchema = z.object({
  title: z.string().min(10, 'عنوان نمیتواند کمتر از ١٠ کارکتر باشد').max(120, 'عنوان نمیتواند بیشتر از ١٢٠ کارکتر باشد'),
  description: z.string().min(50, 'توضیحات باید حداقل ٥٠ کارکتر باشد').max(3000, 'توضیحات شما نباید بیشتر از ٣٠٠٠ باشد'),
  tags: z.array(z.string().min(1)).min(1, 'حداقل یک تگ اضافه کنید').max(5, 'حداکثر ٥ تگ مجاز است'),
});

export function NewAnswerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      tags: [],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    });
  }

  return (
    <form className="xl:w-2/3 w-full px-6 pb-10" id="new-answer-form" onSubmit={form.handleSubmit(onSubmit)}>
      <span className='text-2xl font-bold block mb-8'>ساخت سوال</span>
      <FieldGroup>
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="text-xl" htmlFor="form-title">
                عنوان
              </FieldLabel>
              <Input className="h-12" {...field} id="form-title" aria-invalid={fieldState.invalid} placeholder="به عنوان مثال : چطوری میتونم یک پروژه ری‌اکت بسازم؟" autoComplete="off" />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="description"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="text-xl" htmlFor="form-description">
                توضیحات
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea {...field} id="form-description" placeholder="من در ساخت پروژه جدید با ری‌اکت به مشکل میخورم..." rows={6} className="min-h-40 resize-none" aria-invalid={fieldState.invalid} />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="tabular-nums">{toPersian(field.value.length)}/۳۰۰۰ کارکتر</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="tags"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <div className="flex items-center justify-between">
                <FieldLabel className="text-xl" htmlFor="form-tags">
                  تگ‌ها
                </FieldLabel>
                <span className="text-sm text-muted-foreground">{toPersian(field.value.length)} / ۵</span>
              </div>
              <TagsInput value={field.value} onChange={field.onChange} />
              <FieldDescription className="text-right">با زدن دکمه Enter تگ خود را وارد کنید.</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="w-full flex items-center justify-between mt-10">
        <Button type='submit' className="h-12.5 w-37.5 text-xl">ارسال سوال</Button>
        <Button variant="outline" className="h-12.5 w-37.5 text-xl">
          انصراف
        </Button>
      </div>
    </form>
  );
}
