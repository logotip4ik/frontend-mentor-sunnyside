<script>
  import { breakpoints } from "./constants";

  import ImageConeMobile from "../assets/mobile/image-gallery-cone.jpg";
  import ImageConeDesktop from "../assets/desktop/image-gallery-cone.jpg";
  import ImageMilkBottlesMobile from "../assets/mobile/image-gallery-milkbottles.jpg";
  import ImageMilkBottlesDesktop from "../assets/desktop/image-gallery-milkbottles.jpg";
  import ImageOrangeMobile from "../assets/mobile/image-gallery-orange.jpg";
  import ImageOrangeDesktop from "../assets/desktop/image-gallery-orange.jpg";
  import ImageSugarCubesMobile from "../assets/mobile/image-gallery-sugar-cubes.jpg";
  import ImageSugarCubesDesktop from "../assets/desktop/image-gallery-sugar-cubes.jpg";

  const images = [
    {
      src: { mobile: ImageMilkBottlesMobile, desktop: ImageMilkBottlesDesktop },
      alt: "milk bottles",
    },
    {
      src: { mobile: ImageOrangeMobile, desktop: ImageOrangeDesktop },
      alt: "orange",
    },
    {
      src: { mobile: ImageConeMobile, desktop: ImageConeDesktop },
      alt: "cone",
    },
    {
      src: { mobile: ImageSugarCubesMobile, desktop: ImageSugarCubesDesktop },
      alt: "sugar cubes",
    },
  ];
</script>

<ul class="gallery">
  {#each images as image}
    <li class="gallery__item">
      <picture class="gallery__item__image__wrapper">
        <source
          srcset={image.src.desktop}
          media={`(min-width: ${breakpoints.DESKTOP}px)`}
        />
        <img
          src={image.src.mobile}
          alt="orange"
          loading="lazy"
          class="gallery__item__image"
          width="400"
          height="400"
        />
      </picture>
    </li>
  {/each}
</ul>

<style lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);

    width: 100%;

    list-style-type: none;

    &__item {
      &__image {
        display: block;

        width: 100%;
        height: auto;
      }
    }

    @media screen and (min-width: #{$breakpoint-desktop}) {
      grid-area: 5 / 2 span;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
    }
  }
</style>
