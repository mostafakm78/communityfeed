'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group';
import { toPersian } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SelectBook } from './SelectBook';
import { postQuestion } from '../api/postQuestion';

const formSchema = z.object({
  title: z.string().min(10, 'عنوان نمیتواند کمتر از ١٠ کارکتر باشد').max(120, 'عنوان نمیتواند بیشتر از ١٢٠ کارکتر باشد'),
  description: z.string().min(50, 'توضیحات باید حداقل ٥٠ کارکتر باشد').max(3000, 'توضیحات شما نباید بیشتر از ٣٠٠٠ باشد'),
  book: z.string().min(1, 'لطفاً یک کتاب انتخاب کنید'),
});

export function NewAnswerForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      book: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: postQuestion,
    onSuccess: () => {
      toast.success('سوال شما با موفقیت ثبت شد');
      form.reset();
      router.push('/');
    },
    onError: () => {
      toast.error('ارسال سوال با خطا مواجه شد. لطفاً دوباره تلاش کنید.', { position: 'top-center' });
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate({ content: `${data.title}\n\n${data.description}`, book: data.book });
  }

  return (
    <form className="xl:w-2/3 w-full px-6 pb-10" id="new-answer-form" onSubmit={form.handleSubmit(onSubmit)}>
      <span className="text-2xl font-bold block mb-8">ساخت سوال</span>
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
          name="book"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel className="text-xl" htmlFor="form-book">
                کتاب
              </FieldLabel>
              <SelectBook value={field.value} onValueChange={field.onChange} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="w-full flex items-center justify-between mt-10">
        <Button type="submit" disabled={isPending} className="h-12.5 w-37.5 text-xl">
          {isPending ? 'در حال ارسال...' : 'ارسال سوال'}
        </Button>
        <Button asChild type="button" variant="outline" className="h-12.5 w-37.5 text-xl">
          <Link href="/">انصراف</Link>
        </Button>
      </div>
    </form>
  );
}
