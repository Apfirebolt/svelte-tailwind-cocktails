// store.ts
import { writable, derived } from 'svelte/store';

export const count = writable<number>(0);
export const name = writable<string>('Guest');

export const greeting = derived<[typeof name, typeof count], string>(
  [name, count],
  ([$name, $count]) => {
    return `Hello, ${$name}! You've clicked ${$count} times.`;
  }
);