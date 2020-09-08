<script>
  import { t } from 'svelte-i18n';
  import Email24 from 'carbon-icons-svelte/lib/Email24';
  import LogoTwitter24 from 'carbon-icons-svelte/lib/LogoTwitter24';
  import Container from './_shared/Container.svelte';
  import Title from './_shared/Title.svelte';
  import Link from './_shared/Link.svelte';
</script>

<Container class="bg-gradient-to-tr from-light-blue to-blue">
  <Title title="Contacts" />
  <div class="flex flex-col md:flex-row justify-center align-middle items-center">
    <p class="inline-flex mx-5 my-2">
      <span class="mr-2">
        <LogoTwitter24 />
      </span>
      <Link href="https://twitter.com/LilleGophers" title="{$t('contacts.contact_us')} {$t('on')} Twitter">
        @LilleGophers
      </Link>
    </p>
    <p class="inline-flex mx-5 my-2">
      <span class="mr-2">
        <Email24 />
      </span>
      <Link href="mailto:lille.gophers@gmail.com" title="{$t('contacts.contact_email')} ">lille.gophers@gmail.com</Link>
    </p>
  </div>
</Container>
