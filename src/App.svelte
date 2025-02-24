<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Cocktail from "./layouts/Cocktail.svelte";

  // No Layout Pages
  import Home from "./views/Home.svelte";

  export let url = "";
</script>

<Router url={url}>
  <!-- coktail layout -->
  <Route path="cocktail/*cocktail" component="{Cocktail}" />
  <Route path="/" component="{Home}" />
</Router>
