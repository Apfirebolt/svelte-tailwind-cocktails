<script>
  import { onMount } from "svelte";
  import { getCocktailData, getCocktailDataByFirstLetter, cocktails, loader } from "../store/cocktail";

  onMount(async () => {
    await getCocktailData();
  });

  let cocktailList = [];
  let loading = false;
  let searchText = "";
  let filterBy = "";

  cocktails.subscribe((value) => {
    cocktailList = value;
  });

  loader.subscribe((value) => {
    loading = value;
  });

  const searchCockTail = async () => {
    await getCocktailData(searchText);
  };

  const searchCockTailByFirstLetter = async () => {
    const firstLetter = searchText.charAt(0);
    await getCocktailDataByFirstLetter(firstLetter);
  };

  const getRandomCocktail = async () => {
    // redirect to the cocktail/about page
    window.location.href = "/cocktail/about";
  };
</script>

<div class="pb-6 bg-blueGray-200 pt-10">
  <!-- Create a search bar here -->
  <div class="flex justify-center items-center">
    <!-- Create a filter by select dropdown with category, glass and alcoholic -->

    <select
      class="w-1/4 p-2 border border-gray-300 rounded-lg"
      bind:value={filterBy}
    >
      <option value="">Select Filter</option>
      <option value="category">Category</option>
      <option value="glass">Glass</option>
      <option value="alcoholic">Alcoholic</option>
    </select>
    <input
      type="text"
      class="w-1/2 p-2 mx-2 border border-gray-300 rounded-lg"
      bind:value={searchText}
      placeholder="Search for a cocktail"
    />
    <button
      class="bg-blue-500 text-white p-2 rounded-lg ml-2"
      on:click={() => searchCockTail()}>Search</button
    >
    <button
      class="bg-blue-500 text-white p-2 rounded-lg ml-2"
      on:click={() => searchCockTailByFirstLetter()}>Character</button
    >
    <button
      class="bg-blue-500 text-white p-2 rounded-lg ml-2"
      on:click={() => getRandomCocktail()}>Random</button
    >
  </div>
  <!-- Show loader if loading else loop through cocktails -->
  {#if loading}
    <div class="flex justify-center items-center h-64">
      <div
        class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
      ></div>
    </div>
  {:else}
    <div class="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each cocktailList as cocktail}
        <div class="bg-white shadow-lg rounded-lg p-8">
          <h2 class="text-2xl font-bold text-blueGray-800">
            {cocktail.strDrink}
          </h2>
          <p class="text-blueGray-500 mt-2">
            {cocktail.strInstructions}
          </p>
          <img
            class="w-96 h-64 object-cover mt-4"
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />
          <p class="text-blue-800 mt-2">
            Category: {cocktail.strCategory}
          </p>
          <p class="text-blueGray-800 mt-2">
            Alcoholic: {cocktail.strAlcoholic}
          </p>
          <p class="text-blueGray-800 mt-2">
            Glass: {cocktail.strGlass}
          </p>
        </div>
        
      {/each}
      {#if cocktailList.length === 0}
        <div class="flex justify-center items-center h-64">
          <p class="text-xl text-blueGray-500">No results found.</p>
        </div>
      {/if}
    </div>
  {/if}
</div>
