<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import HeaderComponent from "$lib/components/Header.svelte";
  import { cocktails } from "$lib/store";
  import type { Cocktail } from "$lib/types/Cocktail";
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  let cocktail: Cocktail;
  let displayedText = "Welcome to Svelte Cocktails";
  let openModal: boolean = false;
  let searchQuery: string = "mar";

  // Fetch cocktail data from the API and update the store
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
      $cocktails = data.drinks as Cocktail[]; // Update the store
    } catch (error) {
      console.error("Error fetching cocktails:", error);
    }
  };

  // Update filtered cocktails based on search query (using a derived store value)
  $: filteredCocktails = $cocktails.filter((cocktail) =>
    cocktail.strDrink.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchCocktail = async () => {
    await fetchCocktails(); // Directly calls fetchCocktails
  };

  const getRandomCocktail = async () => {
    try {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      cocktail = data.drinks[0];
      openModal = true;
    } catch (error) {
      console.error("Error fetching random cocktail:", error);
    }
  };

  const closeModal = () => {
    openModal = false;
  };

  const closeModalOnClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest(".modal-content")) {
      return;
    }
    closeModal();
  };

  onMount(() => {
    fetchCocktails();
    window.addEventListener("click", closeModalOnClickOutside);
    return () => {
      window.removeEventListener("click", closeModalOnClickOutside);
    };
  });
</script>

<svelte:head>
  <title>Svelte Cocktails - About</title>
  <meta
    name="description"
    content="Discover the best cocktails, recipes, and more on Svelte Cocktails. Your ultimate cocktail destination."
  />
</svelte:head>

<HeaderComponent title="Svelte Cocktails" />

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
        class="text-lg md:text-xl mb-2"
        in:fly={{ x: -200, duration: 500, delay: 200 }}
      >
        Discover your favorite cocktails and recipes
      </p>

      <div class="flex items-center space-x-2 mb-6">
        <div class="relative w-full">
          <input
            type="text"
            placeholder="Search for a cocktail..."
            bind:value={searchQuery}
            class="w-full p-2 pl-10 border text-black border-gray-300 rounded"
          />
          <Icon
            icon="mdi:magnify"
            class="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            width="20"
            height="20"
          />
        </div>
            <div class="flex space-x-4">
            <button
              type="button"
              class="btn bg-primary text-white hover:bg-secondary transition-colors duration-150"
              on:click={searchCocktail}
              aria-label="Search for cocktails"
              in:fly={{ x: 200, duration: 500, delay: 400 }}
            >
              Search
            </button>
            <button
              type="button"
              class="btn bg-secondary text-white hover:bg-tertiary transition-colors duration-150"
              on:click={getRandomCocktail}
              aria-label="Get a random cocktail"
              in:fly={{ x: 200, duration: 500, delay: 300 }}
            >
              Random Cocktail
            </button>
            </div>
      </div>
    </div>
  </div>
</section>

<section class="p-6">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {#if filteredCocktails.length > 0}
      {#each filteredCocktails as cocktail}
        <div class="bg-accent rounded-lg shadow-md overflow-hidden">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            class="w-full h-48 object-cover"
          />
          <div class="p-4 bg-accent-dark">
            <h3 class="text-xl text-tertiary font-bold mb-2">{cocktail.strDrink}</h3>
            <p class="text-sm text-tertiary">
              Category: {cocktail.strCategory}
            </p>
            <p class="text-sm text-tertiary">
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

<!-- Modal -->
{#if openModal}
  <div
    class="fixed inset-0 bg-secondary bg-opacity-50 flex items-center justify-center z-50"
    in:fly={{ y: 200, duration: 1000 }}
    out:fly={{ y: 200, duration: 1000 }}
  >
    <div
      class="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2"
      in:fade={{ duration: 1000 }}
      out:fade={{ duration: 1000 }}
    >
      <button
        class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        on:click={closeModal}
        aria-label="Close modal"
      >
        <Icon icon="mdi:close" width="24" height="24" />
      </button>
      {#if cocktail}
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
          class="w-full h-48 object-cover rounded mb-4"
        />
        <h2 class="text-2xl font-bold mb-2">{cocktail.strDrink}</h2>
        <p class="text-gray-600 mb-2">Category: {cocktail.strCategory}</p>
        <p class="text-gray-600 mb-2">Alcoholic: {cocktail.strAlcoholic}</p>
        <p class="text-gray-600">{cocktail.strInstructions}</p>
      {/if}
    </div>
  </div>
{/if}
