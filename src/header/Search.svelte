<svelte:window on:keydown={keydown} />

<Input
  block
  label="Поиск"
  type="search"
  on:input={e => router.go({ query: e.detail || null })}
  value={$router.query}>
  {#if !$router.search}<ActionSearch width="22" />{/if}
</Input>

<script>
  import { Input } from 'forui'
  import { ActionSearch } from 'svelte-material-icons'
  import router from 'svelte3-router'

  const keydown = e => {
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !~['INPUT', 'TEXTAREA'].indexOf(e.target.nodeName) &&
      ((e.keyCode >= 48 &&
      e.keyCode <= 57) ||
      e.keyCode >= 65 &&
      e.keyCode <= 90)
    ) {
      ;(document.querySelector('input[type=search]') || {}).focus()
    }
  }
</script>
