<script>
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer
  footerclass="shadow-none dark:bg-gray-900 rounded-none border-t border-gray-200 dark:border-gray-600"
  footerType="logo"
>
  <div class="mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://www.codewithshin.com/" name="codewithshin.com" />
    <FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/highlight">Highlight</FooterLi>
      <FooterLi href="/auto">Auto</FooterLi>
      <FooterLi href="/svelte">Svelte</FooterLi>
      <FooterLi href="/line-numbers">Line Numbers</FooterLi>
      <FooterLi href="/extend">Extend</FooterLi>
    </FooterUl>
  </div>
</Footer>
