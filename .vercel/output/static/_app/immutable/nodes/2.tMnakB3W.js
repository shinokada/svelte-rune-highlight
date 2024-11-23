import{p as fe,w as le,d as J,a as t,t as C,o as ie,b as re,m as O}from"../chunks/disclose-version.DrDYUaWN.js";import{l as _e,a3 as xe,y as ye,i as D,n as de,w as ae,z as ke,x as Se,K as we,k as Ce,m as Ie,v as ge,j as ce,B as Pe,aD as ve,f as w,p as K,a as U,c as I,s,r as P,t as E,g as W,d as V,ah as He,aE as je,ar as Te,$ as Ae,aj as ue,ak as F}from"../chunks/runtime.B-swgO6H.js";import{d as Be,f as Le,s as Q,C as De,t as Ee,e as Ge,g as pe}from"../chunks/theme.DbMJ_-UE.js";import{p,a as M,r as X,b as he}from"../chunks/props.CTE-8nyO.js";import{s as $,b as Re,a as ne}from"../chunks/class.iQEJ4mK_.js";import{A as Z}from"../chunks/A.CpyyQl21.js";import{H as me,r as We}from"../chunks/HighlightCompo.FOXMAKYO.js";function ze(f,e,l,b,S,d){let g=D;D&&de();var c,m,n=null;D&&ae.nodeType===1&&(n=ae,de());var v=D?ae:f,r;_e(()=>{const i=e()||null;var h=i==="svg"?ve:null;i!==c&&(r&&(i===null?ke(r,()=>{r=null,m=null}):i===m?Se(r):(we(r),le(!1))),i&&i!==m&&(r=ye(()=>{if(n=D?n:h?document.createElementNS(h,i):document.createElement(i),fe(n,n),b){var u=D?Ce(n):n.appendChild(Ie());D&&(u===null?ge(!1):ce(u)),b(n,u)}Pe.nodes_end=n,v.before(n)})),c=i,c&&(m=c),le(!0))},xe),g&&(ge(!0),ce(v))}var Ne=C('<div class="flex items-center"><!></div>'),Me=C("<div><!> <div><!></div> <!></div>");function Ve(f,e){U(e,!0);let l=p(e,"bannerStatus",15,!0),b=p(e,"position",3,"sticky"),S=p(e,"dismissable",3,!0),d=p(e,"color",3,"gray"),g=p(e,"bannerType",3,"default"),c=p(e,"transition",3,Le),m=X(e,["$$slots","$$events","$$legacy","children","header","bannerStatus","position","dismissable","color","bannerType","class","innerClass","transition","params"]);const{base:n,insideDiv:v}=Be({bannerType:g(),color:d()});let r=V(()=>n({position:b(),bannerType:g(),color:d(),className:e.class})),i=V(()=>v({bannerType:g(),class:e.innerClass}));var h=J(),u=w(h);M(u,l,G=>{var _=Me();let H;var o=I(_);M(o,()=>e.header,N=>{var x=J(),R=w(x);Q(R,()=>e.header),t(N,x)});var a=s(o,2),j=I(a);Q(j,()=>e.children),P(a);var z=s(a,2);M(z,S,N=>{var x=Ne(),R=I(x);De(R,{class:"-mx-1.5 -my-1.5",get color(){return d()},ariaLabel:"Remove badge",onclick:()=>{l(!1)}}),P(x),t(N,x)}),P(_),E(()=>{H=$(_,H,{tabindex:"-1",class:W(r),...m}),Re(a,W(i))}),Ee(3,_,c,()=>e.params),t(G,_)}),t(f,h),K()}function Ke(f,e){U(e,!0);let l=p(e,"tag",3,"ul"),b=p(e,"isContenteditable",3,!1),S=p(e,"position",3,"inside"),d=X(e,["$$slots","$$events","$$legacy","children","tag","isContenteditable","position","ctxClass","class"]),g=He(he(e.ctxClass||""));je("ctxClass",()=>W(g)),Te(()=>{Ae(g,he(e.ctxClass||""))});let c=V(()=>Ge({position:S(),tag:l(),className:e.class}));var m=J(),n=w(m);ze(n,l,!1,(v,r)=>{let i;E(()=>i=$(v,i,{...d,class:W(c),contenteditable:b()},void 0,v.namespaceURI===ve,v.nodeName.includes("-")));var h=J(),u=w(h);Q(u,()=>e.children),t(r,h)}),t(f,m),K()}var Ue=C("<li><!></li>");function q(f,e){U(e,!0);let l=X(e,["$$slots","$$events","$$legacy","children","icon","class"]);const b=ue("ctxClass");let S=V(()=>pe(b(),e.icon&&"flex items-center",e.class));var d=Ue();let g;var c=I(d);Q(c,()=>e.children),P(d),E(()=>g=$(d,g,{...l,class:W(S)})),t(f,d),K()}const Oe=`<script lang="ts">
  import { HighlightAuto } from 'svelte-rune-highlight';
  const code3 = \`body {\\n  padding: 0;\\n  color: red;\\n}\`;
<\/script>

<HighlightAuto code={code3} />
`,Fe=`<script lang="ts">
  import { HighlightSvelte } from 'svelte-rune-highlight';
  const code2 = \`<button on:click={() => { console.log(0); }}>Increment {count}</button>\`;
<\/script>

<HighlightSvelte code={code2} />
`,Ze=`<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import typescript from "svelte-rune-highlight/languages/typescript";
  const code = "const add = (a: number, b: number) => a + b;";
<\/script>

<Highlight language={typescript} {code} />
`,qe=`import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],
  compilerOptions: {
    runes: true
  },
  kit: {
    adapters.
    adapter: adapter()
  }
};

export default config;
`,Ye=`pnpm i -D svelte-rune-highlight highlight.js
`,Je=`<Sidebar aclass='p-2'>
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
`,Qe=`<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { ChartSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketSolid, EditSolid, ShoppingBagSolid, FireSolid, BookSolid, RestoreWindowOutline } from 'flowbite-svelte-icons';
  import PlusPlaceholder from '../../utils/PlusPlaceholder.svelte';
  const spanclass = 'flex-1 ms-3 whitespace-nowrap';
  const activeClass = 'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  const nonActiveClass = 'flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
<\/script>
`,Xe=`<script lang="ts">
  import HighlightCompo from '../utils/HighlightCompo.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
<\/script>

<HighlightCompo code={modules['./md/setup.md'] as string} />
`,$e=`// utils/HighlightCompo.svelte

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
`;var et=ie("<title> </title>"),tt=ie("<desc> </desc>"),at=ie('<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 11.917 9.724 16.5 19 7.5"></path></svg>');function Y(f,e){var _,H;U(e,!0);const l=ue("iconCtx")??{},b={xs:"w-3 h-3",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-8 h-8"};let S=p(e,"size",19,()=>l.size||"md"),d=p(e,"color",19,()=>l.color||"currentColor"),g=p(e,"strokeWidth",19,()=>l.strokeWidth||"2"),c=p(e,"ariaLabel",3,"check outline"),m=X(e,["$$slots","$$events","$$legacy","size","color","title","strokeWidth","desc","class","ariaLabel"]),n=`${((_=e.title)==null?void 0:_.id)||""} ${((H=e.desc)==null?void 0:H.id)||""}`;const v=V(()=>{var o,a;return!!((o=e.title)!=null&&o.id||(a=e.desc)!=null&&a.id)});var r=at();let i;var h=I(r);M(h,()=>{var o;return((o=e.title)==null?void 0:o.id)&&e.title.title},o=>{var a=et(),j=I(a,!0);P(a),E(()=>{ne(a,"id",e.title.id),re(j,e.title.title)}),t(o,a)});var u=s(h);M(u,()=>{var o;return((o=e.desc)==null?void 0:o.id)&&e.desc.desc},o=>{var a=tt(),j=I(a,!0);P(a),E(()=>{ne(a,"id",e.desc.id),re(j,e.desc.desc)}),t(o,a)});var G=s(u);P(r),E(()=>{i=$(r,i,{xmlns:"http://www.w3.org/2000/svg",fill:"none",color:d(),...m,class:pe("shrink-0",b[S()],e.class),"aria-label":c(),"aria-describedby":W(v)?n:void 0,viewBox:"0 0 24 24"},void 0,!0),ne(G,"stroke-width",g())}),t(f,r),K()}var nt=C('<p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">To Keep It Going, Please Show Your Love. <a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"><img height="42" style="border:0px;height:42px;" src="https://storage.ko-fi.com/cdn/kofi3.png?v=3" alt="Buy Me a Coffee at ko-fi.com"></a></p>'),rt=C("<!> <!>",1),it=C("<!> <!>",1),st=C("<!> <!>",1),ot=C("<!> <!>",1),lt=C("<!> <!> <!> <!>",1),dt=C('<!> <h1> </h1> <p>Syntax highlighting for Svelte 5 Runes using <a class="hover:underline dark:text-primary-500" href="https://github.com/highlightjs/highlight.js">highlight.js</a> .</p> <h2>Installation</h2> <p>Install Svelte 5 and enable runes in svelte.config.js:</p> <!> <p>Install svelte-rune-highlight:</p> <!> <h2>Components</h2> <!> <h2>Credit</h2> <p><a class="hover:underline dark:text-primary-500" href="https://www.npmjs.com/package/svelte-highlight">Svelte-Highlight</a></p> <h2>Technical Details of this website</h2> <ul><li></li> <li></li> <li></li> <li></li></ul>',1);function bt(f,e){U(e,!0);const l=Object.assign({"./md/highlight-auto.md":Oe,"./md/highlight-svelte.md":Fe,"./md/highlight.md":Ze,"./md/installation-svelte5.md":qe,"./md/installation.md":Ye,"./md/sample-markdown.md":Je,"./md/setup.md":Qe,"./md/usage.md":Xe,"./md/wrapper.md":$e}),b="svelte-rune-highlight",S="0.5.13",d="5.2.7",g="2.8.2",c="5.4.11",m="11.10.0";var n=dt(),v=w(n);Ve(v,{id:"default-banner",dismissable:!1,divClass:"p-2",children:(z,N)=>{var x=nt();t(z,x)},$$slots:{default:!0}});var r=s(v,2),i=I(r);E(()=>re(i,`${We(b)??""}: v${S}`)),P(r);var h=s(r,8);me(h,{get code(){return l["./md/installation-svelte5.md"]}});var u=s(h,4);me(u,{get code(){return l["./md/installation.md"]}});var G=s(u,4);Ke(G,{tag:"ul",class:"space-y-1 text-gray-500 dark:text-gray-400",children:(z,N)=>{var x=lt(),R=w(x);q(R,{icon:!0,class:"gap-3",children:(T,ee)=>{var y=rt(),k=w(y);Y(k,{class:"h-5 w-5 text-green-500 dark:text-green-400"});var A=s(k,2);Z(A,{href:"/highlight",children:(B,te)=>{F();var L=O("Highlight");t(B,L)},$$slots:{default:!0}}),t(T,y)},$$slots:{default:!0}});var se=s(R,2);q(se,{icon:!0,class:"gap-3",children:(T,ee)=>{var y=it(),k=w(y);Y(k,{class:"h-5 w-5 text-green-500 dark:text-green-400"});var A=s(k,2);Z(A,{href:"/auto",children:(B,te)=>{F();var L=O("HighlightAuto");t(B,L)},$$slots:{default:!0}}),t(T,y)},$$slots:{default:!0}});var oe=s(se,2);q(oe,{icon:!0,class:"gap-3",children:(T,ee)=>{var y=st(),k=w(y);Y(k,{class:"h-5 w-5 text-green-500 dark:text-green-400"});var A=s(k,2);Z(A,{href:"/svelte",children:(B,te)=>{F();var L=O("HighlightSvelte");t(B,L)},$$slots:{default:!0}}),t(T,y)},$$slots:{default:!0}});var be=s(oe,2);q(be,{icon:!0,class:"gap-3",children:(T,ee)=>{var y=ot(),k=w(y);Y(k,{class:"h-5 w-5 text-green-500 dark:text-green-400"});var A=s(k,2);Z(A,{href:"/code-block-switcher",children:(B,te)=>{F();var L=O("Line numbers");t(B,L)},$$slots:{default:!0}}),t(T,y)},$$slots:{default:!0}}),t(z,x)},$$slots:{default:!0}});var _=s(G,8),H=I(_);H.textContent=`Svelte: ${d}`;var o=s(H,2);o.textContent=`SvelteKit: ${g}`;var a=s(o,2);a.textContent=`Vite: ${c}`;var j=s(a,2);j.textContent=`highlight.js: ${m}`,P(_),t(f,n),K()}export{bt as component};
