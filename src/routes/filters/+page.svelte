<script lang="ts">
    import { fly, fade } from "svelte/transition";
    import HeaderComponent from "$lib/components/Header.svelte";
    import type { Cocktail } from "$lib/types/Cocktail";
    import { onMount } from "svelte";

    let cocktails: Cocktail[] = [];
    let filteredCocktails: Cocktail[] = [];
    let alcoholicFilter: string = "";
    let categoryFilter: string = "";
    let glassFilter: string = "";
    let displayedText = "";
    let index = 0;
    let text = "Filter Cocktails";

    let categories: string[] = [];
    let glasses: string[] = [];
    let alcoholicOptions: string[] = [];

    // Typewriter effect logic
    const typeWriter = () => {
      if (index < text.length) {
        displayedText += text[index];
        index++;
        setTimeout(typeWriter, 100); // Adjust speed here
      }
    };
  
    // Start the typewriter effect when the component is mounted
    typeWriter();

    // Fetch cocktail data from the API
    const fetchCocktails = async () => {
        try {
            const url = new URL("https://www.thecocktaildb.com/api/json/v1/1/filter.php");
            if (alcoholicFilter) url.searchParams.append("a", alcoholicFilter);
            if (categoryFilter) url.searchParams.append("c", categoryFilter);
            if (glassFilter) url.searchParams.append("g", glassFilter);

            const res = await fetch(url.toString());
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            cocktails = data.drinks || [];
            filteredCocktails = cocktails;
        } catch (error) {
            console.error("Error fetching cocktails:", error);
        }
    };

    const fetchFilters = async () => {
        try {
            const [categoriesRes, glassesRes, alcoholicRes] = await Promise.all([
                fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"),
                fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"),
                fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"),
            ]);

            if (!categoriesRes.ok || !glassesRes.ok || !alcoholicRes.ok) {
                throw new Error("Failed to fetch filter options");
            }

            const categoriesData = await categoriesRes.json();
            const glassesData = await glassesRes.json();
            const alcoholicData = await alcoholicRes.json();

            categories = categoriesData.drinks.map((item) => item.strCategory);
            glasses = glassesData.drinks.map((item) => item.strGlass);
            alcoholicOptions = alcoholicData.drinks.map((item) => item.strAlcoholic);
        } catch (error) {
            console.error("Error fetching filter options:", error);
        }
    };

    const searchCocktail = async () => {
        await fetchCocktails();
    };

    onMount(() => {
        fetchFilters();
    });
</script>

<svelte:head>
    <title>Svelte Cocktails - Filters</title>
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
          in:fly={{ y: 50, duration: 500 }}
        >
            {displayedText}
        </h1>
        <p
          class="text-lg md:text-xl mb-6"
          in:fly={{ y: 50, duration: 500, delay: 200 }}
        >
          Discover your favorite cocktails, glasses, ingredients and more
        </p>
        <div class="flex flex-wrap gap-4 mb-6 text-tertiary font-semibold">
            <select bind:value={alcoholicFilter} class="p-2 border rounded" on:change={searchCocktail}>
                <option value="">All Alcoholic Types</option>
                {#each alcoholicOptions as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>
    
            <select bind:value={categoryFilter} class="p-2 border rounded" on:change={searchCocktail}>
                <option value="">All Categories</option>
                {#each categories as category}
                    <option value={category}>{category}</option>
                {/each}
            </select>
    
            <select bind:value={glassFilter} class="p-2 border rounded" on:change={searchCocktail}>
                <option value="">All Glass Types</option>
                {#each glasses as glass}
                    <option value={glass}>{glass}</option>
                {/each}
            </select>
        </div>
      </div>
    </div>
  </section>

<section class="p-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade">
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
                    </div>
                </div>
            {/each}
        {:else}
            <p class="text-gray-600">No cocktails found.</p>
        {/if}
    </div>
</section>
