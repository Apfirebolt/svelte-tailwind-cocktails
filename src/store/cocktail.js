import { writable } from "svelte/store";
import httpClient from "../plugins/interceptor";

export const cocktails = writable([]);
export const loader = writable(false);

export function setCocktail(data) {
  cocktails.set(data);
}

export function setLoading(data) {
  loader.set(data);
}

export async function getCocktailData() {
  const response = await httpClient.get(`1/search.php?s=margarita`);
  if (response.status === 200) {
    setCocktail(response.data.drinks);
  }
}

export function reset() {
  cocktails.set([]);
  loader.set(false);
}

