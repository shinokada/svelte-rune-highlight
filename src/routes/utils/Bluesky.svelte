<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'bluesky',
    class: classname,
    title,
    desc,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $state(`${title?.id || ''} ${desc?.id || ''}`);
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label={ariaLabel}
  {role}
  viewBox="0 0 512 512"
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="m0 0H512V512H0" fill="none" /><path
    d="M159 126c-28-22-74-38-74 14 0 11 6 88 9 101 13 43 57 54 97 48-69 11-87 50-49 89 72 75 104-18 112-42l2-5 2 5c8 24 40 117 112 42 38-39 20-78-49-89 40 6 84-5 97-48 3-13 9-90 9-101 0-52-46-36-74-14-39 29-82 89-97 121-15-32-58-92-97-121Z"
    fill="#1185fe"
  />
</svg>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: size: any = ctx.size || '24';
@props:role: any = ctx.role || 'img';
@props:ariaLabel: any = 'bluesky';
@props:class: string;
@props:title: any;
@props:desc: any;
-->
