<script>
  import { t } from 'svelte-i18n';
  import Tooltip from '@fouita/tooltip';
  import LogoTwitter24 from 'carbon-icons-svelte/lib/LogoTwitter24';
  import LogoGithub24 from 'carbon-icons-svelte/lib/LogoGithub24';
  import Link from './_shared/Link.svelte';

  const currentYear = new Date().getFullYear();

  let showPhotosCredits = false;
</script>

<footer class="flex flex-col md:flex-row justify-between flex-wrap p-6 bg-dark-purple">
  <div class="flex flex-col md:flex-row">
    <p class="w-full text-center pb-5 md:p-0 md:w-auto">
      {$t('footer.made_with')} 🍺 {$t('in')}
      <Link
        href="https://www.google.com/maps/search/?api=1&amp;query=Lille%2C%20France"
        title="Lille {$t('on')} Google Map">
        Lille, France
      </Link>
      -
      <span class="font-bold">{currentYear}</span>
    </p>
    <span class="mx-3 hidden md:block">|</span>
    <p
      class="text-center hover:text-pink hover:underline cursor-pointer relative pb-5 md:pb-0"
      on:click="{() => {
        showPhotosCredits = !showPhotosCredits;
      }}"
      on:mouseenter="{() => {
        showPhotosCredits = true;
      }}"
      on:mouseleave="{() => {
        showPhotosCredits = false;
      }}">
      {$t('footer.photos_credits')}
      <Tooltip pointer="middle" position="top" color="pink" show="{showPhotosCredits}">
        <div class="flex flex-col w-full md:w-64 rounded bg-pink text-white p-4">
          <Link href="https://flic.kr/p/E7GUYw" title="Lille - Grand Place {$t('on')} Flickr" hoverColor="purple">
            Lille - Grand Place (Fred Romero)
          </Link>
          <Link href="https://flic.kr/p/aH7weB" title="Lille Grand Place {$t('on')} Flickr" hoverColor="purple">
            Lille Grand Place (MTRW)
          </Link>
          <Link href="https://flic.kr/p/29rRuis" title="Lille Grand Place {$t('on')} Flickr" hoverColor="purple">
            Lille Grand Place (Phil Beard)
          </Link>
          <Link href="https://flic.kr/p/XdsX87" title="Bourse {$t('on')} Flickr" hoverColor="purple">
            Bourse (Jems Baker)
          </Link>
        </div>
      </Tooltip>
    </p>
  </div>
  <div class="flex justify-center">
    <Link href="https://twitter.com/LilleGophers" title="{$t('footer.follow_us')} {$t('on')} Twitter" class="mx-3">
      <LogoTwitter24 />
    </Link>
    <Link href="https://github.com/lille-gophers" title="{$t('footer.find_us')} {$t('on')} Github" class="mx-3">
      <LogoGithub24 />
    </Link>
  </div>
</footer>
