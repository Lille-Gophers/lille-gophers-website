<script>
  import { t } from 'svelte-i18n';
  import Container from './_shared/Container.svelte';
  import Title from './_shared/Title.svelte';
</script>

<Container class="bg-gradient-to-tr from-purple to-dark-purple">
  <Title id="about" title="{$t('about.title')}" />
  <div class="flex flex-col md:flex-row justify-center items-center">
    <div class="max-w-xs px-5 mb-5 md:mb-0">
      <img src="images/lille_gophers_logo.jpg" alt="Lille Gophers logo" class="rounded-full" />
    </div>
    <div class="max-w-md md:px-5">
      {#each new Array(4) as _, index}
        <p class="py-3">{$t(`about.description.${index}`)}</p>
      {/each}
    </div>
  </div>
</Container>
