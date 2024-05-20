<script>
    import { Link } from "svelte-routing";
    const landing = "/assets/img/landing.jpg";
  </script>
  
  <section class="pb-16 bg-blueGray-200 relative pt-32">
    <div
      class="w-full h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  
    <div class="container mx-auto">
      <div
        class="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10"
      >
        <div class="w-full text-center lg:w-8/12">
          <p class="text-4xl text-center">
            <span role="img" aria-label="love">
              😍
            </span>
          </p>
          <h3 class="font-semibold text-3xl">
            Do you love Cocktails?
          </h3>
          <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            This is an experimental application I created in Svelte to demonstrate the use of Tailwind CSS with Svelte. It is a simple application that allows you to search for cocktails and view the details of each cocktail.
          </p>
          <div class="sm:block flex flex-col mt-10">
            <Link
              to="/cocktail"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-rose-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Cocktails
            </Link>
            <Link
              to="/cocktail/filters"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Filters
            </Link>
          </div>
          <div class="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
  