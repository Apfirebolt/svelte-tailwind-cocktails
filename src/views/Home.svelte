<script>
    import { Link } from "svelte-routing";
    const landing = "/assets/img/landing.jpg";
    export let location;
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
            Do you love this Starter Kit?
          </h3>
          <p class="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
            Cause if you do, it can be yours now. Hit the buttons below to
            navigate to get the Free version for your next project. Build a new
            web app or give an old project a new look!
          </p>
          <div class="sm:block flex flex-col mt-10">
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus?ref=ns-index"
              target="_blank"
              class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-red-400 active:bg-red-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              Get started
            </a>
          </div>
          <div class="text-center mt-16"></div>
        </div>
      </div>
    </div>
  </section>
  