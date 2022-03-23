<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  import { breakpoints } from "./constants";
  import ArrowDown from "../assets/icon-arrow-down.svg";
  import HeaderDesktopImage from "../assets/desktop/image-header.jpg";
  import HeaderMobileImage from "../assets/mobile/image-header.jpg";

  const titleText = "We are creatives";

  $: titleChars = titleText.split("");

  onMount(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".header__title__char",
      { color: "#3ebffe", filter: "blur(10px)" },
      {
        delay: 0.125,
        color: "#ffffff",
        filter: "blur(0px)",
        stagger: { amount: 0.2, from: "center" },
      }
    );

    tl.fromTo(".header svg", { opacity: 0, y: -30 }, { opacity: 1, y: 0 }, 0.4);
  });
</script>

<svelte:head>
  <!-- <link rel="preload" as="image" href={HeaderImage} /> -->
</svelte:head>

<header class="header">
  <picture class="header__image__wrapper">
    <source
      srcset={HeaderDesktopImage}
      media={`(min-width: ${breakpoints.DESKTOP}px)`}
    />
    <img src={HeaderMobileImage} alt="orange" class="header__image" />
  </picture>
  <p class="header__title">
    {#each titleChars as titleChar}
      <span class="header__title__char">{titleChar}</span>
    {/each}
  </p>
  <ArrowDown />
</header>

<style lang="scss">
  .header {
    position: relative;

    text-align: center;

    padding: 8rem 1rem 7.25rem;

    &__image {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center center;

      &__wrapper {
        display: block;

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        overflow: hidden;
      }
    }

    &__title {
      font-family: "Fraunces", serif;
      font-weight: 900;
      font-size: 2.25rem;
      letter-spacing: 6.25px;
      line-height: 1.2;
      text-transform: uppercase;

      margin-bottom: 2.75rem;

      &__char {
        color: #3ebffe;
      }

      @media screen and (min-width: #{$breakpoint-desktop}) {
        font-size: 3rem;
        letter-spacing: 10.5px;

        margin-bottom: 5.25rem;
      }
    }

    @media screen and (min-width: #{$breakpoint-desktop}) {
      padding: max(13.75vw, 8rem) 1rem 23vw;
    }
  }
</style>
