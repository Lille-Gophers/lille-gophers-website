<script>
  import { t, locale } from 'svelte-i18n';
  import Time20 from 'carbon-icons-svelte/lib/Time20';
  import Location20 from 'carbon-icons-svelte/lib/Location20';
  import Container from './_shared/Container.svelte';
  import Title from './_shared/Title.svelte';

  const talks = [];
</script>

<Container class="bg-gradient-to-br from-pink to-dark-pink">
  <Title title="{$t('events.title')}" />
  <div>
    {#if talks.length > 0}
      <h3 class="text-xl text-center mb-10">
        {$t('events.scheduled_talks', {
          values: { talksNumber: talks.length, multipleTalks: talks.length > 1 ? 's' : '' },
        })}
      </h3>
      <div class="flex flex-col lg:flex-row justify-center">
        {#each talks as talk}
          <div
            class="flex flex-col border rounded-md border-white hover:border-pink transition-colors ease-in-out
            duration-200 px-12 py-8 my-5 md:mx-5">
            <p class="mb-5 capitalize inline-block text-lg font-bold">{talk.name}</p>
            <p class="mb-5 inline-block">{talk.description}</p>
            <p class="inline-flex content-middle capitalize my-1">
              <Location20 />
              <span class="ml-2">{talk.location}</span>
            </p>
            <p class="inline-flex content-middle my-1">
              <Time20 />
              <span class="ml-2">
                {new Intl.DateTimeFormat($locale, {
                  timeStyle: 'short',
                  dateStyle: 'short',
                }).format(new Date(talk.date))}
              </span>
            </p>
          </div>
        {/each}
      </div>
    {:else}
      <h3 class="text-center">{$t('events.no_talk')}</h3>
      <p class="text-center">{$t('events.give_idea')}</p>
      <p class="text-center mt-3">{$t('events.stay_touch')}</p>
    {/if}
  </div>
</Container>
