import { cn } from '@/lib/utils';

describe('cn utility', () => {
  it('joins class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('ignores falsy values', () => {
    expect(cn('foo', false && 'bar', undefined, null, '')).toBe('foo');
  });

  it('merges tailwind classes', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });
});
