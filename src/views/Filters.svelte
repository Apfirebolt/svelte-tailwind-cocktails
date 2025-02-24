<script>
  import { onMount } from "svelte";
  import {
    getCategory,
    getGlass,
    getIngredient,
    glass,
    ingredient,
    category,
  } from "../store/cocktail";

  onMount(async () => {
    await getCategory();
    await getGlass();
    await getIngredient();
  });

  let glassList = [];
  let ingredientList = [];
  let categoryList = [];
  let loading = true;

  $: glassList = $glass;
  $: ingredientList = $ingredient;
  $: categoryList = $category
  $: loading = $glass.length === 0 || $ingredient.length === 0 || $category.length === 0;

</script>

<div class="bg-blueGray-200">
  <!-- Show loader if loading else loop through cocktails -->
  <h2 class="text-center text-red-700 text-3xl my-5">
    List of ingredients, glasses and categories
  </h2>
  {#if loading}
    <div class="flex justify-center items-center h-64">
      <div
        class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
      ></div>
    </div>
  {:else}
  <div>
    <div class="container mx-auto my-3">
      <h2 class="text-2xl my-3 text-rose-600">
        Ingredients
      </h2>
  
      <div class="grid grid-cols-3 gap-4">
        {#each ingredientList as ingredient}
          <div class="bg-white p-3 rounded-lg shadow-md">
            <p>{ingredient.strIngredient1}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <div class="container mx-auto my-3">
      <h2 class="text-2xl my-3 text-rose-600">
        Glasses
      </h2>
  
      <div class="grid grid-cols-3 gap-4">
        {#each glassList as glass}
          <div class="bg-white p-3 rounded-lg shadow-md">
            <p>{glass.strGlass}</p>
          </div>
        {/each}
      </div>
    </div>
  
    <div class="container mx-auto my-3">
      <h2 class="text-2xl my-3 text-rose-600">
        Category
      </h2>
  
      <div class="grid grid-cols-3 gap-4">
        {#each categoryList as category}
          <div class="bg-white p-3 rounded-lg shadow-md">
            <p>{category.strCategory}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
  {/if}
</div>
