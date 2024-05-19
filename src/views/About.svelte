<script>
  import { onMount } from "svelte";
  import { getRandomCocktail, cocktails } from "../store/cocktail";

  let cocktail = {};

  onMount(async () => {
    await getRandomCocktail();
  });

  // reactive statement to get the first cocktail
  $: cocktail = $cocktails[0];
</script>

<div class="bg-blueGray-200">
  <!-- Show loader if loading else loop through cocktails -->
  <h2 class="text-center text-red-100 text-3xl my-5">Random Cocktail</h2>

  <!-- If cocktail is not empty show the data -->
  {#if cocktail && Object.keys(cocktail).length > 0}
    <div class="container mx-auto">
      <div
        class="flex flex-wrap justify-center mb-6 px-4 py-6 bg-white shadow-xl rounded-lg relative z-10"
      >
        <div class="w-full text-center lg:w-8/12">
          <p class="text-4xl text-center">
            <span role="img" aria-label="love"> 😍 </span>
          </p>
          <h3 class="font-semibold text-3xl">
            {cocktail.strDrink}
          </h3>
          <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            {cocktail.strInstructions}
          </p>
          <p class="text-blueGray-500 mt-2">
            {cocktail.strInstructions}
          </p>
          <img
            class="w-96 h-64 my-4 mx-auto shadow-lg rounded-md object-cover"
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
      </div>
    </div>
  {/if}
</div>
