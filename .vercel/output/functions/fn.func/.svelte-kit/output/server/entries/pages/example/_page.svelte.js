import { S as pop, Q as push } from "../../../chunks/index.js";
import { H as Highlight } from "../../../chunks/Highlight.js";
import { H as HighlightAuto } from "../../../chunks/HighlightAuto.js";
import { H as HighlightSvelte } from "../../../chunks/HighlightSvelte.js";
import { t as typescript } from "../../../chunks/typescript.js";
import { H as HighlightCompo } from "../../../chunks/HighlightCompo.js";
/* empty css                           */
const __vite_glob_0_0 = `<Sidebar {activeClass} {nonActiveClass} aclass="p-2" asideclass='absolute top-6 left-6 z-40'>
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
`;
const __vite_glob_0_1 = '<Sidebar>\n  <SidebarGroup>\n    <SidebarItem label="Dashboard" href="/">\n      {#snippet icon()}\n        <ChartSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n    </SidebarItem>\n    <SidebarItem label="Kanban" {spanclass}>\n      {#snippet icon()}\n        <GridSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n      {#snippet subtext()}\n        <span\n          class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"\n        >\n          Pro\n        </span>\n      {/snippet}\n    </SidebarItem>\n    <SidebarItem label="Inbox" {spanclass}>\n      {#snippet icon()}\n        <MailBoxSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n      {#snippet subtext()}\n        <span\n          class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"\n        >\n          3\n        </span>\n      {/snippet}\n    </SidebarItem>\n    <SidebarItem label="Sidebar" href="/sidebar">\n      {#snippet icon()}\n        <UserSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n    </SidebarItem>\n  </SidebarGroup>\n  <SidebarGroup border>\n    <SidebarItem label="Upgrade to Pro">\n      {#snippet icon()}\n        <FireSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n    </SidebarItem>\n    <SidebarItem label="Documentation">\n      {#snippet icon()}\n        <BookSolid\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n    </SidebarItem>\n    <SidebarItem label="Components">\n      {#snippet icon()}\n        <RestoreWindowOutline\n          class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"\n        />\n      {/snippet}\n    </SidebarItem>\n  </SidebarGroup>\n</Sidebar>\n';
const __vite_glob_0_2 = `<script>
	import { ButtonGroup, Button, GradientButton } from 'flowbite-svelte';
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
</ButtonGroup>`;
const __vite_glob_0_3 = `<Sidebar aclass='p-2'>
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
`;
const __vite_glob_0_4 = '[\n  {\n    "id": 1,\n    "product": "T-Shirt",\n    "price": 19.99\n  },\n  {\n    "id": 2,\n    "product": "Jeans",\n    "price": 49.99\n  }\n]\n';
const __vite_glob_0_5 = `<script lang="ts">
  import { Checkbox, Helper, Label } from 'flowbite-svelte';
<\/script>
`;
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./md/adding-active-class.md": __vite_glob_0_0,
    "./md/content-separator.md": __vite_glob_0_1,
    "./md/default-sidebar.md": __vite_glob_0_2,
    "./md/multi-level-dropdown.md": __vite_glob_0_3,
    "./md/outline-with-icon.json": __vite_glob_0_4,
    "./md/setup.md": __vite_glob_0_5
  });
  $$payload.out += `<h1>Importing Markdown files for code blocks</h1> <h2>Highlight</h2> `;
  Highlight($$payload, {
    code: modules["./md/setup.md"],
    language: typescript
  });
  $$payload.out += `<!----> <h2>HighlightSvelte</h2> `;
  HighlightSvelte($$payload, { code: modules["./md/default-sidebar.md"] });
  $$payload.out += `<!----> <h2>HighlightAuto</h2> `;
  HighlightAuto($$payload, { code: modules["./md/outline-with-icon.json"] });
  $$payload.out += `<!----> <h2>HighlightCompo</h2> `;
  HighlightCompo($$payload, { code: modules["./md/adding-active-class.md"] });
  $$payload.out += `<!----> <h2>Multi-level dropdown</h2> `;
  HighlightCompo($$payload, { code: modules["./md/multi-level-dropdown.md"] });
  $$payload.out += `<!----> <h2>Content Separator</h2> `;
  HighlightCompo($$payload, { code: modules["./md/content-separator.md"] });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
