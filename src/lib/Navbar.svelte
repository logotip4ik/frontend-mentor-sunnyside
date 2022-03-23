<script>
  import { onMount, onDestroy } from "svelte";
  import { gsap } from "gsap";

  import SunnySideSVG from "../assets/logo.svg";
  import HamburgerSVG from "../assets/icon-hamburger.svg";
  import { breakpoints } from "./constants";

  const links = ["About", "Services", "Projects", "Contact"];
  let isMenuOpened = false;

  let logoSVG;

  function circleIn(node, params) {
    gsap.fromTo(
      node,
      { clipPath: "circle(0% at 120% -10%)", opacity: 0, y: -10, x: 10 },
      {
        clipPath: "circle(170% at 120% -10%)",
        opacity: 1,
        y: 0,
        x: 0,
        duration: window.innerWidth >= breakpoints.DESKTOP ? 0 : 0.5,
      }
    );
    return {};
  }

  function circleOut(node, params) {
    gsap.to(node, {
      clipPath: "circle(0% at 120% -10%)",
      opacity: 0,
      y: -10,
      x: 10,
      duration: 0.3,
    });
    return {};
  }

  function checkSpaceForMenu() {
    if (window.innerWidth >= breakpoints.DESKTOP) isMenuOpened = true;
    else isMenuOpened = false;
  }

  onMount(() => {
    checkSpaceForMenu();
    window.addEventListener("resize", checkSpaceForMenu);
  });

  onDestroy(() => {
    window.removeEventListener("resize", checkSpaceForMenu);
  });
</script>

<nav class="navbar">
  <span class="navbar__logo">
    <SunnySideSVG />
  </span>

  <button
    class="navbar__menu-button"
    aria-label="menu"
    on:click={() => (isMenuOpened = !isMenuOpened)}
  >
    <HamburgerSVG />
  </button>

  {#if isMenuOpened}
    <ul class="navbar__links" in:circleIn out:circleOut>
      {#each links as link, key}
        <li
          class="navbar__links__link"
          class:navbar__links__link--active={key === links.length - 1}
        >
          {link}
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<style lang="scss">
  .navbar {
    --y-pd: 1.76rem;
    --x-pd: 1.3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100%;

    padding: var(--y-pd) var(--x-pd);

    &__logo {
      @media screen and (min-width: #{$breakpoint-desktop}) {
        transform-origin: left center;
        transform: scale(1.36);
      }
    }

    &__menu-button {
      appearance: none;
      background-color: transparent;
      border: none;

      @media screen and (min-width: #{$breakpoint-desktop}) {
        display: none;
      }
    }

    &__links {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      position: absolute;
      top: 120%;
      left: 50%;
      z-index: 1;

      width: calc(100% - calc(var(--x-pd) * 2));

      padding: 2.4rem 1rem 2rem;

      list-style-type: none;
      background-color: var(--white);

      transform: translateX(-50%);
      clip-path: circle(0% at 100% 0);

      &__link {
        font-size: 1.1rem;

        margin: 0.95rem 0;

        cursor: pointer;

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        &--active {
          font-family: "Fraunces", serif;
          font-size: 0.81rem !important;
          color: black;
          text-transform: uppercase;

          padding: 1.1rem 1.9rem;
          margin: 0.9rem;

          border-radius: 99999px;
          background-color: var(--yellow);

          @media screen and (min-width: #{$breakpoint-desktop}) {
            color: black !important;
            background-color: white;
          }
        }

        @media screen and (min-width: #{$breakpoint-desktop}) {
          font-size: 1rem;
          color: var(--white);

          margin: 0;
          margin-left: 2.75rem;
        }
      }

      &::after {
        --size: 24px;

        content: "";

        position: absolute;
        bottom: 100%;
        right: 0;

        width: 0;
        height: 0;

        border-width: 0 0 var(--size) var(--size);
        border-color: transparent transparent var(--white) transparent;
        border-style: solid;

        @media screen and (min-width: #{$breakpoint-desktop}) {
          content: none;
        }
      }

      @media screen and (min-width: #{$breakpoint-desktop}) {
        flex-direction: row;

        position: static;

        width: auto;

        padding: 0;

        background-color: transparent;

        transform: none;
      }
    }

    @media screen and (min-width: #{$breakpoint-desktop}) {
      --y-pd: 2rem;
      --x-pd: 2.25rem;
    }
  }
</style>
