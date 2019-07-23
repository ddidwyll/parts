<Search />
<br />
{#if $router.type}
  <BreadCrumbs />
{/if}
{#each $catalog.type as type}
  {#if !$router.type || ($router.type === type.id && !$router.prod)}
    {#if !$router.type && prods(type.id).length}
      <Button
        clean
        on:click={() => router.go({ type: type.id, query: null })}>
        {type.name}
      </Button>
    {/if}
    <div hidden={!prods(type.id).length}>
      {#each prods(type.id) as prod}
        <Button
          style="order:{search(prod)}"
          on:click={() => router.go({
              type: type.id,
              prod: prod.id,
              query: models(type.id, prod.id).length
                ? $router.query
                : null
            })}>
          {prod.name}
        </Button>
      {/each}
    </div>
  {/if}
{/each}
{#if $router.type && $router.prod && !$router.model}
  <div hidden={!models().length}>
    {#each models() as model}
      <Button
        on:click={() => catalog.chModel(model.id)}
        style="order:{search(model)}">
        {model.name}
      </Button>
    {/each}
  </div>
{/if}
{#if $router.type && $router.prod && $router.model && !$router.cat}
  <div hidden={!cats.length}>
    {#each cats as cat}
      <Button
        on:click={() => catalog.chCat(cat.id)}
        style="order:{search(cat)}">
        {cat.name}
      </Button>
    {/each}
  </div>
{/if}

<script>
  import BreadCrumbs from './BreadCrumbs.svelte'
  import { catalog } from '../stores/test.js'
  import router from 'svelte3-router'
  import { Button } from 'forui'
  import Search from '../header/Search.svelte'

  const search = (obj, string = $router.search) =>
    !string
      ? 0
      : !~string.indexOf(' ')
        ? (obj.name + obj.alias).toLowerCase().indexOf(string)
        : string
          .split(' ')
          .reduce(
            (acc, str) =>
              acc + (obj.name + obj.alias).toLowerCase().indexOf(str),
            string.split(' ').length
          ) - string.split(' ').length

  const sort = (a, b) => (a.name < b.name ? -1 : 1)

  $: prods = type =>
    $catalog.prod
      .sort(sort)
      .filter(
        prod =>
          prod.type === type &&
          (search(prod, $router.search) > -1 ||
            models(prod.type, prod.id).length)
      )
  $: models = (type = $router.type, prod = $router.prod) =>
    $catalog.model
      .sort(sort)
      .filter(
        model =>
          model.type === type &&
          model.prod === prod &&
          search(model, $router.search) > -1
      )
  $: cats = $catalog.cat
    .sort(sort)
    .filter(
      cat =>
        cat.type === $router.type && search(cat, $router.search) > -1
    )
  $: subcats = $catalog.subcat
    .sort(sort)
    .filter(
      subcat =>
        subcat.type === $router.type &&
        subcat.cat === $router.cat &&
        search(subcat, $router.search) > -1
    )
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    margin-bottom: 0.8rem;
  }
  div > :global(*) {
    flex: 1 1;
  }
</style>
