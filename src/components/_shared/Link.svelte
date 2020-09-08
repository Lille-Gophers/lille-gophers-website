<script>
  let className;

  export { className as class };
  export let href;
  export let title;
  export let hoverColor = 'pink';
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  {title}
  class="font-bold hover:underline fill-current hover:text-{hoverColor}
  {className}">
  <slot />
</a>
