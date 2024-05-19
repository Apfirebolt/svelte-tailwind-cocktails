<script>
  import { onMount } from "svelte";
  import { getRandomCocktail, cocktails } from "../store/cocktail";

  let cocktail = {};

  onMount(async () => {
    await getRandomCocktail();
  });

  $: cocktail = $cocktails[0];
  </script>

  <div class="bg-blueGray-200">
    <!-- Show loader if loading else loop through cocktails -->
   <h2 class="text-center text-red-100 text-3xl my-5">
    Random Cocktail
   </h2>

   <!-- If cocktail is not empty show the data -->
  {#if cocktail && Object.keys(cocktail).length > 0}
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-center mb-6 px-4 py-6 bg-white shadow-xl rounded-lg relative z-10">
      <div class="w-full text-center lg:w-8/12">
        <p class="text-4xl text-center">
          <span role="img" aria-label="love">
            😍
          </span>
        </p>
        <h3 class="font-semibold text-3xl">
          {cocktail.strDrink}
        </h3>
        <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
          {cocktail.strInstructions}
        </p>
        <div class="sm:block flex flex-col mt-10">
          <a
            href={cocktail.strSource}
            target="_blank"
            class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            Source
          </a>
        </div>
        <div class="text-center mt-16"></div>
      </div>
    </div>
  </div>
  {/if}
</div>
  