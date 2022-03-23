<script>
  import { breakpoints } from "./constants";

  import SectionMobileImage from "../assets/mobile/image-photography.jpg";
  import SectionDesktopImage from "../assets/desktop/image-photography.jpg";
</script>

<section class="section">
  <picture class="section__image__wrapper">
    <source
      srcset={SectionDesktopImage}
      media={`(min-width: ${breakpoints.DESKTOP}px)`}
    />
    <img
      src={SectionMobileImage}
      alt="orange"
      loading="lazy"
      class="section__image"
      width="400"
      height="400"
    />
  </picture>
  <div class="section__content">
    <h2 class="section__content__title">Photography</h2>
    <p class="section__content__info">
      Increase your credibility by getting the most stunning, high-quality
      photos that improve your business image.
    </p>
  </div>
</section>

<style lang="scss">
  .section {
    position: relative;

    text-align: center;

    &__image {
      display: block;

      width: 100%;
      height: auto;

      object-fit: cover;
      object-position: center center;

      &__wrapper {
        display: block;

        width: 100%;
        height: auto;
      }
    }

    &__content {
      position: absolute;
      left: 0;
      bottom: 3.25rem;

      color: var(--dark-blue);

      width: 100%;

      padding: 0 1rem;

      &__title {
        font-size: 1.55rem;
        font-weight: 900;
        line-height: 1.225;
        letter-spacing: 0.125px;

        margin-bottom: 1.5rem;
      }

      &__info {
        font-size: 0.88rem;
        line-height: 1.725;
      }

      @media screen and (min-width: #{$breakpoint-desktop}) {
        left: 50%;
        bottom: 3.5rem;

        width: 75%;

        transform: translate(-50%);
      }

      @media screen and (min-width: #{$breakpoint-desktop + 200}) {
        width: 51%;
      }
    }
  }
</style>
