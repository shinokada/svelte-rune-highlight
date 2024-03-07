<script>
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
</script>

<Footer
  footerclass="shadow-none dark:bg-gray-900 rounded-none border-t border-gray-200 dark:border-gray-600"
  footerType="logo"
>
  <div class="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://www.codewithshin.com/" name="codewithshin.com" />
    <FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLi href="/highlight">Highlight</FooterLi>
      <FooterLi href="/auto">Auto</FooterLi>
      <FooterLi href='/svelte'>Svelte</FooterLi>
      <FooterLi href='/line-numbers'>Line Numbers</FooterLi>
      <FooterLi href='/wrapper'>Wrapper</FooterLi>
    </FooterUl>
  </div>
</Footer>