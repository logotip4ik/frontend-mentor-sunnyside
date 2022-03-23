<script>
  import AvatarEmily from "../assets/image-emily.jpg";
  import AvatarThomas from "../assets/image-thomas.jpg";
  import AvatarJennyie from "../assets/image-jennie.jpg";

  const texts = [
    {
      avatar: AvatarEmily,
      name: "Emily R.",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      role: "Marketing Director",
    },
    {
      avatar: AvatarThomas,
      name: "Thomas S.",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      role: "Chief Operating Officer",
    },
    {
      avatar: AvatarJennyie,
      name: "Jennie F.",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      role: "Business Owner",
    },
  ];
</script>

<section class="section">
  <h2 class="section__title">Client testimonials</h2>
  <ul class="section__list">
    {#each texts as item}
      <li class="section__list__item">
        <img
          src={item.avatar}
          alt={item.name}
          class="section__list__item__avatar"
        />
        <p class="section__list__item__text">{item.text}</p>
        <h3 class="section__list__item__name">{item.name}</h3>
        <small class="section__list__item__role">{item.role}</small>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .section {
    text-align: center;

    padding: 3.5rem 1.4rem 1.1rem;

    &__title {
      font-size: 0.89rem;
      color: var(--dark-grayish-blue);
      text-transform: uppercase;
      letter-spacing: 4.25px;

      margin-bottom: 3.75rem;

      @media screen and (min-width: #{$breakpoint-desktop}) {
        font-size: 1.2rem;

        margin-bottom: 4.25rem;
      }
    }

    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      list-style-type: none;

      &__item {
        margin-bottom: 3.9rem;

        &__avatar {
          --size: 72px;

          display: block;

          width: var(--size);
          height: auto;

          border-radius: 50%;

          margin: 0 auto 1.8rem;

          @media screen and (min-width: #{$breakpoint-desktop}) {
            margin-bottom: 3.4rem;
          }
        }

        &__text {
          font-size: 0.985rem;
          line-height: 1.77;
          color: var(--very-dark-grayish-blue);

          margin-bottom: 1.8rem;

          @media screen and (min-width: #{$breakpoint-desktop}) {
            margin-bottom: 3.9rem;
          }
        }

        &__name {
          font-size: 1.05rem;
          color: var(--very-dark-desaturated-blue);

          margin-bottom: 0.5rem;

          @media screen and (min-width: #{$breakpoint-desktop}) {
            margin-bottom: 0.7rem;
          }
        }

        &__role {
          font-size: 0.76rem;
          color: var(--grayish-blue);
        }

        @media screen and (min-width: #{$breakpoint-desktop}) {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          max-width: 350px;

          margin: 0;

          &:nth-child(2) {
            margin: 0 1.75rem;
          }
        }
      }

      @media screen and (min-width: #{$breakpoint-desktop}) {
        flex-wrap: nowrap;
      }
    }

    @media screen and (min-width: #{$breakpoint-desktop}) {
      grid-area: 4 / 2 span;

      padding: min(11vw, 9rem) 2rem;
    }
  }
</style>
