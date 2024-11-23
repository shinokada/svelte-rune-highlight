import{a as u,t as m}from"../chunks/disclose-version.DrDYUaWN.js";import{s as e,f as c,p as h,a as b}from"../chunks/runtime.B-swgO6H.js";import{H as x}from"../chunks/Highlight.YoLsuBD8.js";import{H as y}from"../chunks/HighlightAuto.DlF3yZW8.js";import{H as S}from"../chunks/HighlightSvelte.c-_dwP9L.js";import{t as v}from"../chunks/typescript.D7mGh5x8.js";import{H as n}from"../chunks/HighlightCompo.FOXMAKYO.js";/* empty css                            */const w=`<Sidebar {activeClass} {nonActiveClass} aclass="p-2" asideclass='absolute top-6 left-6 z-40'>
<SidebarGroup>
<SidebarItem label="Dashboard" href="/">
{#snippet icon()}
<ChartSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
{/snippet}
</SidebarItem>
<SidebarItem label="Kanban" {spanclass}>
{#snippet icon()}
<GridSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
{/snippet}
{#snippet subtext()}
<span
          class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
        >
Pro
</span>
{/snippet}
</SidebarItem>
<SidebarItem label="Inbox" {spanclass}>
{#snippet icon()}
<MailBoxSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
{/snippet}
{#snippet subtext()}
<span
          class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
        >
3
</span>
{/snippet}
</SidebarItem>
<SidebarItem label="Sidebar" href="/components/sidebar">
{#snippet icon()}
<UserSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
{/snippet}
</SidebarItem>
</SidebarGroup>
</Sidebar>

<div class="px-4 sm:ml-64 overflow-scroll h-96">
  <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
    <PlusPlaceholder colnum={3} rownum={1}/>
    <PlusPlaceholder />
    <PlusPlaceholder colnum={2} rownum={2}/>
    <PlusPlaceholder />
    <PlusPlaceholder colnum={2} rownum={2}/>
  </div>
</div>
`,k=`<Sidebar>
  <SidebarGroup>
    <SidebarItem label="Dashboard" href="/">
      {#snippet icon()}
        <ChartSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Kanban" {spanclass}>
      {#snippet icon()}
        <GridSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
        >
          Pro
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Inbox" {spanclass}>
      {#snippet icon()}
        <MailBoxSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
        >
          3
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Sidebar" href="/sidebar">
      {#snippet icon()}
        <UserSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
  </SidebarGroup>
  <SidebarGroup border>
    <SidebarItem label="Upgrade to Pro">
      {#snippet icon()}
        <FireSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Documentation">
      {#snippet icon()}
        <BookSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Components">
      {#snippet icon()}
        <RestoreWindowOutline
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
  </SidebarGroup>
</Sidebar>
`,f=`<script>
	import { ButtonGroup, Button, GradientButton } from 'svelte-5-ui-lib';
	import {
		UserCircleSolid,
		AdjustmentsVerticalSolid,
		DownloadSolid
	} from 'flowbite-svelte-icons';
	const handleClick = () => {
		alert('Clicked');
	};
<\/script>

<ButtonGroup>
  <Button outline color="dark">
      <UserCircleSolid class="me-2 h-3 w-3" />
      Profile
  </Button>
  <Button outline color="dark">
      <AdjustmentsVerticalSolid class="me-2 h-3 w-3" />
      Settings
  </Button>
  <Button outline color="dark">
      <DownloadSolid class="me-2 h-3 w-3" />
      Download
  </Button>
</ButtonGroup>`,I=`<Sidebar aclass='p-2'>
  <SidebarGroup>
    <SidebarItem label="Dashboard">
      {#snippet icon()}
        <ChartSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarDropdownWrapper label="E-commerce" btnclass='p-2'>
      {#snippet icon()}
        <ShoppingBagSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      <SidebarItem label="Sidebar" href="/components/sidebar" />
      <SidebarItem label="Billing" />
      <SidebarItem label="Invoice" />
    </SidebarDropdownWrapper>
    <SidebarItem label="Kanban" {spanclass}>
      {#snippet icon()}
        <GridSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
        >
          Pro
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Inbox" {spanclass}>
      {#snippet icon()}
        <MailBoxSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
      {#snippet subtext()}
        <span
          class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
        >
          3
        </span>
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Users">
      {#snippet icon()}
        <UserSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Sign In">
      {#snippet icon()}
        <ArrowRightToBracketSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
    <SidebarItem label="Sign Up">
      {#snippet icon()}
        <EditSolid
          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        />
      {/snippet}
    </SidebarItem>
  </SidebarGroup>
</Sidebar>
`,_=`[
  {
    "id": 1,
    "product": "T-Shirt",
    "price": 19.99
  },
  {
    "id": 2,
    "product": "Jeans",
    "price": 49.99
  }
]
`,B=`<script lang="ts">
  import { Checkbox, Helper, Label } from 'svelte-5-ui-lib';
<\/script>
`;var G=m("<h1>Importing Markdown files for code blocks</h1> <h2>Highlight</h2> <!> <h2>HighlightSvelte</h2> <!> <h2>HighlightAuto</h2> <!> <h2>HighlightCompo</h2> <!> <h2>Multi-level dropdown</h2> <!> <h2>Content Separator</h2> <!>",1);function K(p,l){b(l,!0);const t=Object.assign({"./md/adding-active-class.md":w,"./md/content-separator.md":k,"./md/default-sidebar.md":f,"./md/multi-level-dropdown.md":I,"./md/outline-with-icon.json":_,"./md/setup.md":B});var r=G(),a=e(c(r),4);x(a,{get code(){return t["./md/setup.md"]},language:v});var i=e(a,4);S(i,{get code(){return t["./md/default-sidebar.md"]}});var o=e(i,4);y(o,{get code(){return t["./md/outline-with-icon.json"]}});var s=e(o,4);n(s,{get code(){return t["./md/adding-active-class.md"]}});var d=e(s,4);n(d,{get code(){return t["./md/multi-level-dropdown.md"]}});var g=e(d,4);n(g,{get code(){return t["./md/content-separator.md"]}}),u(p,r),h()}export{K as component};
