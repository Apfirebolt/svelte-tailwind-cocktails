<script>
  import { Router, Route } from "svelte-routing";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  // pages for this layout
  import Cocktail from "../views/Cocktail.svelte";
  import About from "../views/About.svelte";
  import Filters from "../views/Filters.svelte";
  
  export let cocktail;
</script>

<div>
  <Header title="Cocktail Database App" />
  <div class="bg-blueGray-100">
    <div class="px-4 mx-auto">
      <Router url="cocktail">
        <Route path="/" component="{Cocktail}" />
        <Route path="/about" component="{About}" />
        <Route path="/filters" component="{Filters}" />
      </Router>
    </div>
  </div>
  <Footer />
</div>
