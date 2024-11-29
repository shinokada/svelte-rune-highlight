import { Y as spread_attributes, V as attr, a3 as bind_props, S as pop, Q as push, X as escape_html, R as setContext, a4 as element, Z as getContext } from "../../chunks/index.js";
import { i as banner, j as closeButtonVariants, l as list, t as twMerge } from "../../chunks/theme.js";
import { A } from "../../chunks/A.js";
import { H as HighlightCompo } from "../../chunks/HighlightCompo.js";
const linear = (x) => x;
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function Banner($$payload, $$props) {
  push();
  let {
    children,
    header,
    bannerStatus = true,
    position = "sticky",
    dismissable = true,
    color = "gray",
    bannerType = "default",
    class: className,
    innerClass,
    transition = fade,
    params,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, insideDiv } = banner({ bannerType, color });
  let bannerClass = base({ position, bannerType, color, className });
  let innerCls = insideDiv({ bannerType, class: innerClass });
  if (bannerStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      tabindex: "-1",
      class: bannerClass,
      ...restProps
    })}>`;
    if (header) {
      $$payload.out += "<!--[-->";
      header($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", innerCls)}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex items-center">`;
      CloseButton($$payload, {
        class: "-mx-1.5 -my-1.5",
        color,
        ariaLabel: "Remove badge",
        onclick: () => {
          bannerStatus = false;
        }
      });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { bannerStatus });
  pop();
}
function CloseButton($$payload, $$props) {
  push();
  let {
    color = "gray",
    onclick,
    name = "Close",
    ariaLabel,
    size = "md",
    href,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, svg } = closeButtonVariants({ color, size });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: base({ class: className }),
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <svg${attr("class", svg())} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...restProps,
      class: base({ class: className }),
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <svg${attr("class", svg())} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function List($$payload, $$props) {
  push();
  let {
    children,
    tag = "ul",
    isContenteditable = false,
    position = "inside",
    ctxClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let contextClass = ctxClass || "";
  setContext("ctxClass", () => contextClass);
  let classList = list({ position, tag, className });
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...restProps,
        class: classList,
        contenteditable: isContenteditable
      })}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
function Li($$payload, $$props) {
  push();
  let {
    children,
    icon,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const getCtxClass = getContext("ctxClass");
  let liCls = twMerge(getCtxClass(), icon && "flex items-center", className);
  $$payload.out += `<li${spread_attributes({ ...restProps, class: liCls })}>`;
  children($$payload);
  $$payload.out += `<!----></li>`;
  pop();
}
const __vite_glob_0_0 = "<script lang=\"ts\">\n  import { HighlightAuto } from 'svelte-rune-highlight';\n  const code3 = `body {\\n  padding: 0;\\n  color: red;\\n}`;\n<\/script>\n\n<HighlightAuto code={code3} />\n";
const __vite_glob_0_1 = "<script lang=\"ts\">\n  import { HighlightSvelte } from 'svelte-rune-highlight';\n  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;\n<\/script>\n\n<HighlightSvelte code={code2} />\n";
const __vite_glob_0_2 = `<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from "svelte-rune-highlight/languages/typescript";
  const code = "const add = (a: number, b: number) => a + b;";
<\/script>

<Highlight language={typescript} {code} />
`;
const __vite_glob_0_3 = "import adapter from '@sveltejs/adapter-auto';\nimport { vitePreprocess } from '@sveltejs/vite-plugin-svelte';\n\n/** @type {import('@sveltejs/kit').Config} */\nconst config = {\n  preprocess: [vitePreprocess({})],\n  compilerOptions: {\n    runes: true\n  },\n  kit: {\n    adapters.\n    adapter: adapter()\n  }\n};\n\nexport default config;\n";
const __vite_glob_0_4 = "pnpm i -D svelte-rune-highlight highlight.js\n";
const __vite_glob_0_5 = `<Sidebar aclass='p-2'>
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
const __vite_glob_0_6 = "<script>\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';\n  import { ChartSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, EditSolid, ShoppingBagSolid, FireSolid, BookSolid, RestoreWindowOutline } from 'flowbite-svelte-icons';\n  import PlusPlaceholder from '../../utils/PlusPlaceholder.svelte';\n  const spanclass = 'flex-1 ms-3 whitespace-nowrap';\n  const activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';\n  const nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';\n<\/script>\n";
const __vite_glob_0_7 = `<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<HighlightCompo code={modules['./md/setup.md'] as string} />
`;
const __vite_glob_0_8 = `// utils/HighlightCompo.svelte

<script lang="ts">
  import { HighlightSvelte, Highlight } from '$lib';
  // check colorscheme at https://highlightjs.org/demo
  import githubDark from 'svelte-rune-highlight/styles/github-dark';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  let { code, codeLang }: { code: string; codeLang?: string } = $props();
<\/script>

<svelte:head>
{@html githubDark}
</svelte:head>

<div class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700">
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>
`;
function removeHyphensAndCapitalize(str) {
  if (!str.includes("-")) {
    return str;
  }
  const capitalized = str.replace(
    /(^|\s|-)\w/g,
    (match) => match.toUpperCase()
  );
  return capitalized.replace(/-|\s{2,}/g, " ");
}
function CheckOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "check outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M5 11.917 9.724 16.5 19 7.5"></path></svg>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const modules = /* @__PURE__ */ Object.assign({
    "./md/highlight-auto.md": __vite_glob_0_0,
    "./md/highlight-svelte.md": __vite_glob_0_1,
    "./md/highlight.md": __vite_glob_0_2,
    "./md/installation-svelte5.md": __vite_glob_0_3,
    "./md/installation.md": __vite_glob_0_4,
    "./md/sample-markdown.md": __vite_glob_0_5,
    "./md/setup.md": __vite_glob_0_6,
    "./md/usage.md": __vite_glob_0_7,
    "./md/wrapper.md": __vite_glob_0_8
  });
  const name = "svelte-rune-highlight";
  const version = "0.5.13";
  const svelteVersion = "5.2.11";
  const svelteKitVersion = "2.8.5";
  const viteVersion = "5.4.11";
  const highlightjsVersion = "11.10.0";
  Banner($$payload, {
    id: "default-banner",
    dismissable: false,
    divClass: "p-2",
    children: ($$payload2) => {
      $$payload2.out += `<p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">To Keep It Going, Please Show Your Love. <a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"><img height="42" style="border:0px;height:42px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com"></a></p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <h1>${escape_html(removeHyphensAndCapitalize(name))}: v${escape_html(version)}</h1> <p>Syntax highlighting for Svelte 5 Runes using <a class="hover:underline dark:text-primary-500" href="https://github.com/highlightjs/highlight.js">highlight.js</a> .</p> <h2>Installation</h2> <p>Install Svelte 5 and enable runes in svelte.config.js:</p> `;
  HighlightCompo($$payload, { code: modules["./md/installation-svelte5.md"] });
  $$payload.out += `<!----> <p>Install svelte-rune-highlight:</p> `;
  HighlightCompo($$payload, { code: modules["./md/installation.md"] });
  $$payload.out += `<!----> <h2>Components</h2> `;
  List($$payload, {
    tag: "ul",
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      Li($$payload2, {
        icon: true,
        class: "gap-3",
        children: ($$payload3) => {
          CheckOutline($$payload3, {
            class: "h-5 w-5 text-green-500 dark:text-green-400"
          });
          $$payload3.out += `<!----> `;
          A($$payload3, {
            href: "/highlight",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Highlight`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        icon: true,
        class: "gap-3",
        children: ($$payload3) => {
          CheckOutline($$payload3, {
            class: "h-5 w-5 text-green-500 dark:text-green-400"
          });
          $$payload3.out += `<!----> `;
          A($$payload3, {
            href: "/auto",
            children: ($$payload4) => {
              $$payload4.out += `<!---->HighlightAuto`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        icon: true,
        class: "gap-3",
        children: ($$payload3) => {
          CheckOutline($$payload3, {
            class: "h-5 w-5 text-green-500 dark:text-green-400"
          });
          $$payload3.out += `<!----> `;
          A($$payload3, {
            href: "/svelte",
            children: ($$payload4) => {
              $$payload4.out += `<!---->HighlightSvelte`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        icon: true,
        class: "gap-3",
        children: ($$payload3) => {
          CheckOutline($$payload3, {
            class: "h-5 w-5 text-green-500 dark:text-green-400"
          });
          $$payload3.out += `<!----> `;
          A($$payload3, {
            href: "/code-block-switcher",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Line numbers`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <h2>Credit</h2> <p><a class="hover:underline dark:text-primary-500" href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a></p> <h2>Technical Details of this website</h2> <ul><li>Svelte: ${escape_html(svelteVersion)}</li> <li>SvelteKit: ${escape_html(svelteKitVersion)}</li> <li>Vite: ${escape_html(viteVersion)}</li> <li>highlight.js: ${escape_html(highlightjsVersion)}</li></ul>`;
  pop();
}
export {
  _page as default
};
