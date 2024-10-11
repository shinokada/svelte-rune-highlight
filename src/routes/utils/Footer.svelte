<script>
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer
  class="rounded-none border-t border-gray-200 shadow-none dark:border-gray-600 dark:bg-gray-900"
  footerType="logo"
>
  <div class="mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://www.codewithshin.com/" name="codewithshin.com" />
    <FooterUl
      class="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/highlight">Highlight</FooterLi>
      <FooterLi href="/auto">Auto</FooterLi>
      <FooterLi href="/svelte">Svelte</FooterLi>
      <FooterLi href="/line-numbers">Line Numbers</FooterLi>
      <FooterLi href="/extend">Extend</FooterLi>
    </FooterUl>
  </div>
</Footer>
