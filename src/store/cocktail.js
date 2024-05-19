import { writable } from "svelte/store";
import httpClient from "../plugins/interceptor";

export const cocktails = writable([]);
export const loader = writable(false);

export function setCocktail(data) {
  cocktails.set(data);
}

export function setLoading(value) {
  loader.set(value);
}

export async function getCocktailData(search = '') {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/search.php?s=${search}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function getCocktailDataByIngredient(search = '') {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/search.php?s=${search}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function getCocktailDataById(id) {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/lookup.php?i=${id}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function getRandomCocktail() {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/random.php`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function getCocktailDataByFirstLetter(letter) {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/search.php?f=${letter}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function filterCocktailByCategory(category) {  
  setLoading(true);
  try {
    const response = await httpClient.get(`1/filter.php?c=${category}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function filterCocktailByGlass(glass) {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/filter.php?g=${glass}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export async function filterCocktailByIngredient(ingredient) {
  setLoading(true);
  try {
    const response = await httpClient.get(`1/filter.php?i=${ingredient}`);
    if (response.status === 200) {
      if (response.data.drinks === null) {
        setCocktail([]);
      } else {
        setCocktail(response.data.drinks);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
}

export function reset() {
  cocktails.set([]);
  loader.set(false);
}
