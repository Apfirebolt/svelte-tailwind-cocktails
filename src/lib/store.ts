// store.ts
import { writable, derived } from 'svelte/store';
import type { Category, Glass, Ingredient, Cocktail } from "$lib/types/Cocktail";

export const count = writable<number>(0);
export const name = writable<string>('Guest');
export const categories = writable<Category[]>([]);
export const glasses = writable<Glass[]>([]);
export const ingredients = writable<Ingredient[]>([]);
export const cocktails = writable<Cocktail[]>([]);
export const cocktail = writable<Cocktail | null>(null);

