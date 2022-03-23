<script>
  import Navbar from "./lib/Navbar.svelte";
  import Header from "./lib/Header.svelte";
  import TransformSection from "./lib/TransformSection.svelte";
  import StandOutSection from "./lib/StandOutSection.svelte";
  import GraphicDesignSection from "./lib/GraphicDesignSection.svelte";
  import PhotographySection from "./lib/PhotographySection.svelte";
  import TestimonialsSection from "./lib/TestimonialsSection.svelte";
  import GallerySection from "./lib/GallerySection.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<Navbar />
<Header />
<main class="main">
  <TransformSection />
  <StandOutSection />
  <GraphicDesignSection />
  <PhotographySection />
  <TestimonialsSection />
  <GallerySection />
</main>
<Footer />

<style lang="scss">
  @media screen and (min-width: #{$breakpoint-desktop}) {
    .main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr) fit-content fit-content;
    }
  }
</style>
