<script>
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';
  import TypedJs from '@loscrackitos/svelte-typed-js';
  import ArrowDown20 from 'carbon-icons-svelte/lib/ArrowDown20';
  import Header from './Header.svelte';

  let photoID = Math.floor(Math.random() * 4 + 1);

  onMount(() => {
    setInterval(() => {
      photoID = photoID === 4 ? 1 : (photoID += 1);
    }, 20000);
  });
</script>

<section
  class="h-screen flex flex-col justify-between bg-overlay"
  style="--overlay-image: url('images/background_lille_{photoID}-op.jpg'); --overlay-colors: rgba(150, 37, 100, .7),
  rgba(120, 75, 160, .7), rgba(43, 134, 197, .7);">
  <Header />
  <div class="h-full flex flex-col items-center justify-center">
    <TypedJs
      strings="{[`${$t('home.welcome_all')} Gophers`, `${$t('home.welcome_all')} Lillois`, `${$t('home.welcome_all')} Golang Lovers`]}"
      loop="{true}"
      shuffle="{true}">
      <h1 class="uppercase text-4xl md:text-5xl font-hairline mx-10 md:mx-0 md:text-center">
        👋
        <span class="typing"></span>
      </h1>
    </TypedJs>
    <h2 class="text-lg md:text-xl mt-5 mx-10 md:mx-0">{$t('home.subtitle')}</h2>
  </div>
  <div class="flex justify-center mb-10">
    <a
      href="#about"
      aria-label="Scrolling to about section button"
      class="group border border-white hover:border-pink rounded-full transition-colors duration-150 ease-in-out pb-2
      pt-4 px-1">
      <ArrowDown20
        class="animate-bounce fill-current group-hover:text-pink transition-colors duration-150 ease-in-out" />
    </a>
  </div>
</section>
