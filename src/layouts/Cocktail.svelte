<script>
  import { Router, Route } from "svelte-routing";

  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  // pages for this layout
  import Cocktail from "../views/Cocktail.svelte";
</script>

<div>
  <Header title="Cocktail" />
  <div class="relative md:ml-64 bg-blueGray-100">
    <div class="px-4 md:px-10 mx-auto w-full -m-24">
      <Router url="">
        <Route path="/" component="{Cocktail}" />
      </Router>
    </div>
  </div>
  <Footer />
</div>
