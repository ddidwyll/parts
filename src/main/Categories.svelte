{#each types as type}
  <Button clean on:click={() => chType(type.id)}>{type.name}</Button>
{/each}
  <br />
{#each $catalog.prod as prod}
  <Button clean on:click={() => chProd(prod.id)}>{prod.name}</Button>
{/each}
  <br />
{#each $catalog.model as model}
  <Button clean on:click={() => chModel(model.id)}>{model.name}</Button>
{/each}
  <br />
{#each $catalog.cat as cat}
  <Button clean on:click={() => chCat(cat.id)}>{cat.name}</Button>
{/each}
  <br />

<script>
  import Category from './Category.svelte'
  import { catalog } from '../stores/test.js'
  import router from 'svelte3-router'
  import { Button } from 'forui'

  $: type = $router.type
  $: prod = $router.prod
  $: model = $router.model
  $: cat = $router.cat
  $: subcat = $router.subcat
  $: search = $router.search

  $: types = !type ? $catalog.type : []

  const chType = val =>
    val !== type
      ? router.go({
          type: val,
          prod: null,
          model: null,
          cat: null,
          subcat: null
        })
      : ''
  const chProd = val =>
    val !== prod
      ? router.go({
          prod: val,
          model: null,
          cat: null,
          subcat: null
        })
      : ''
  const chModel = val =>
    val !== model
      ? router.go({
          model: val,
          cat: null,
          subcat: null
        })
      : ''
  const chCat = val =>
    val !== cat ? router.go({ cat: val, subcat: null }) : ''
  const chSubcat = val =>
    val !== subcat ? router.go({ subcat: val }) : ''
</script>

<style>

</style>
