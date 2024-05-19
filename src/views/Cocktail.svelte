<script>
    import { onMount } from "svelte";
    import { getCocktailData, cocktails } from "../store/cocktail"

    onMount(async () => {
        await getCocktailData();
    });

    cocktails.subscribe(value => {
        console.log(value);
    });
  </script>

  <section class="pb-16 bg-blueGray-200 relative pt-32">
    <p>
        Cocktail Page
    </p>
  </section>
  