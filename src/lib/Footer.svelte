<script>
  import FacebookSVG from "../assets/icon-facebook.svg";
  import InstagramSVG from "../assets/icon-instagram.svg";
  import TwitterSVG from "../assets/icon-twitter.svg";
  import PinterestSVG from "../assets/icon-pinterest.svg";

  const navigationLinks = ["About", "Services", "Projects"];
  const socialLinks = [
    { svg: FacebookSVG, label: "facebook" },
    { svg: InstagramSVG, label: "instagram" },
    { svg: TwitterSVG, label: "twitter" },
    { svg: PinterestSVG, label: "pinterest" },
  ];
</script>

<footer class="footer">
  <p class="footer__title">sunnyside</p>

  <ul class="footer__navigation">
    {#each navigationLinks as link}
      <li class="footer__navigation__item">
        <a
          href="/"
          class="footer__navigation__item__link"
          on:click|preventDefault>{link}</a
        >
      </li>
    {/each}
  </ul>

  <ul class="footer__social">
    {#each socialLinks as link}
      <li class="footer__social__item">
        <a
          href="/"
          class="footer__social__item__link"
          aria-label={link.label}
          on:click|preventDefault
        >
          <svelte:component this={link.svg} />
        </a>
      </li>
    {/each}
  </ul>
</footer>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: hsl(166, 45%, 32%);

    padding: 3.125rem 2.125rem 4.5rem;
    background-color: hsl(167, 44%, 70%);

    &__title {
      font-size: 1.99rem;
      font-weight: 900;
      letter-spacing: 1px;

      margin-bottom: 2.3rem;
    }

    &__navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 400px;

      margin-bottom: 5rem;
      list-style-type: none;

      &__item {
        &__link {
          color: currentColor;
          text-decoration: none;
        }
      }
    }

    &__social {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      max-width: 165px;

      list-style-type: none;
    }
  }
</style>
