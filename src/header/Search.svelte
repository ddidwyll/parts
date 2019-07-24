<Input
  block
  label="Поиск"
  autofocus
  on:input={e => router.go({ query: e.detail || null })}
  value={$router.query}>
  <ActionSearch width="22" />
</Input>

<script>
  import { Input } from 'forui'
  import { ActionSearch } from 'svelte-material-icons'
  import router from 'svelte3-router'
</script>
