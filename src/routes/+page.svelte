<script lang="ts">
    import { fly } from "svelte/transition";
    import HeaderComponent from "$lib/components/Header.svelte";
    import type { Cocktail } from "$lib/types/Cocktail";
  
    let cocktails: Cocktail[] = [];
    let displayedText = "Welcome to Svelte Cocktails";
    let openModal: Boolean = false;
    let searchQuery: string = "";
    let filteredCocktails: Cocktail[] = [];
  
    // Fetch cocktail data from the API
    const fetchCocktails = async () => {
      try {
        let res = null;
        if (searchQuery) {
          res = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
        } else {
          res = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
        }
        const data = await res.json();
        cocktails = data.drinks || [];
        filteredCocktails = cocktails; // Initialize filteredCocktails
      } catch (error) {
        console.error("Error fetching cocktails:", error);
      }
    };
  
    // Update filtered cocktails based on search query
    $: filteredCocktails = cocktails.filter((cocktail) =>
      cocktail.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const searchCocktail = async () => {
      if (searchQuery) {
        await fetchCocktails();
      } else {
        cocktails = [];
      }
    };
  </script>
  
  <svelte:head>
    <title>Svelte Cocktails - About</title>
    <meta
      name="description"
      content="Discover the best cocktails, recipes, and more on Svelte Cocktails. Your ultimate cocktail destination."
    />
  </svelte:head>
  
  <HeaderComponent title="About" />
  
  <section
    class="relative bg-cover bg-center h-[500px]"
    style="background-image: url('https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg');"
  >
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="text-center text-white">
        <h1
          class="text-4xl md:text-6xl font-bold mb-4"
          in:fly={{ x: -200, duration: 500 }}
        >
          {displayedText}
        </h1>
        <p
          class="text-lg md:text-xl mb-6"
          in:fly={{ x: -200, duration: 500, delay: 200 }}
        >
          Discover your favorite cocktails and recipes
        </p>
  
        <div class="flex items-center space-x-2 mb-6">
          <input
            type="text"
            placeholder="Search for a cocktail..."
            bind:value={searchQuery}
            class="w-full p-2 border text-black border-gray-300 rounded"
          />
          <button
            type="button"
            class="btn preset-filled-primary-500"
            on:click={searchCocktail}
            aria-label="Search for cocktails"
            in:fly={{ x: 200, duration: 500, delay: 400 }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <section class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#if filteredCocktails.length > 0}
        {#each filteredCocktails as cocktail}
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">{cocktail.strDrink}</h3>
              <p class="text-sm text-gray-600">
                Category: {cocktail.strCategory}
              </p>
              <p class="text-sm text-gray-600">
                Alcoholic: {cocktail.strAlcoholic}
              </p>
            </div>
          </div>
        {/each}
      {:else}
        <p class="text-gray-600">No cocktails found for "{searchQuery}".</p>
      {/if}
    </div>
  </section>
  
  