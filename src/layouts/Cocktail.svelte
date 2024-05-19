<script>
  import { Router, Route } from "svelte-routing";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  // pages for this layout
  import Cocktail from "../views/Cocktail.svelte";
  import About from "../views/About.svelte";

  export const cocktail = "";
</script>

<div>
  <Header title="Cocktail" />
  <div class="bg-blueGray-100">
    <div class="px-4 md:px-10 mx-auto">
      <Router url="cocktail">
        <Route path="/" component="{Cocktail}" />
        <Route path="/about" component="{About}" />
      </Router>
    </div>
  </div>
  <Footer />
</div>
