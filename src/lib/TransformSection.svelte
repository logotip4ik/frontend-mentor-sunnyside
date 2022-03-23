<script>
  import SectionImage from "../assets/mobile/image-transform.jpg";
</script>

<section class="section">
  <img
    src={SectionImage}
    alt="egg"
    loading="lazy"
    class="section__image"
    width="400"
    height="400"
  />
  <div class="section__content">
    <h2 class="section__content__title">Transform your brand</h2>
    <p class="section__content__info">
      We are a full-service creative agency specializing in helping brands grow
      fast. Engage your clients through compelling visuals that do most of the
      marketing for you.
    </p>
    <a href="/" class="section__content__learn-more" on:click|preventDefault>
      Learn More
    </a>
  </div>
</section>

<style lang="scss">
  .section {
    text-align: center;

    &__image {
      display: block;

      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    &__content {
      padding: 3.55rem 1.4rem 3.75rem;

      &__title {
        font-size: 1.75rem;
        font-weight: 900;
        line-height: 1.225;
        letter-spacing: 0.125px;
        color: var(--very-dark-desaturated-blue);

        margin-bottom: 1.4rem;

        @media screen and (min-width: #{$breakpoint-desktop}) {
          font-size: 2.25rem;
          letter-spacing: -0.75px;

          margin-bottom: 1.75rem;
        }
      }

      &__info {
        font-size: 0.99rem;
        line-height: 1.65;
        color: var(--very-dark-grayish-blue);

        margin-bottom: 1.95rem;

        @media screen and (min-width: #{$breakpoint-desktop}) {
          letter-spacing: -0.025px;

          margin-bottom: 2.4rem;
        }
      }

      &__learn-more {
        position: relative;
        z-index: 1;

        font-family: "Fraunces", serif;
        font-weight: 900;
        font-size: 0.905rem;
        color: var(--very-dark-desaturated-blue);
        text-transform: uppercase;
        text-decoration: none;

        &::after {
          content: "";

          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;

          width: 115%;
          height: 120%;

          opacity: 0.25;
          background-color: var(--yellow);

          transform: translate(-50%, -50%) scaleY(0.4);
          transform-origin: bottom center;

          transition: transform 300ms, opacity 300ms;
        }

        &:is(:hover, :focus-visible)::after {
          opacity: 1;

          transform: translate(-50%, -50%) scaleY(1);
        }

        @media screen and (min-width: #{$breakpoint-desktop}) {
          margin-left: 0.5rem;
        }
      }

      @media screen and (min-width: #{$breakpoint-desktop}) {
        grid-area: 1 / 1;

        text-align: left;

        padding: max(7rem, 10.5vw) max(2rem, 7vw) 3.75rem max(3rem, 11.5vw);
      }
    }

    @media screen and (min-width: #{$breakpoint-desktop}) {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(2, 1fr);

      grid-area: 1 / 2 span;
    }
  }
</style>
