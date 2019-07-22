{current.id}:{childs.length}
<div>
  {#if $router.id}
    <Button clean on:click={() => router.go({ id: null })}>
      / Каталог
    </Button>
  {/if}
  {#each parents as parent}
    <Button clean on:click={() => router.go({ id: parent.id })}>
      / {parent.name}
    </Button>
  {/each}
</div>
<div>
  {#each childs as cat}
    <Button clean on:click={() => router.go({ id: cat.id })}>
      {cat.name}
    </Button>
  {/each}
</div>

<script>
  import { catalog } from '../stores/test.js'
  import router from 'svelte3-router'
  import { Button } from 'forui'

  export let current = null

  function getParents (catalog, current, result = []) {
    result.push(current)
    if (!current.parent) return result
    parent = catalog.find(cat => cat.id === current.parent)
    return getParents(catalog, parent, result)
  }

  $: childs = $catalog.filter(cat => cat.parent === current.id)
  $: parents = getParents($catalog, current).reverse()
</script>
