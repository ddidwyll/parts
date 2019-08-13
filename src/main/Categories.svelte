<!--<div>
  <Search />
</div>
{#if $router.type}
  <BreadCrumbs />
{/if}
{#each sorted.type as type}
  {#if !$router.type || ($router.type === type.id && (!$router.cat || !$router.prod))}
    {#if !$router.type && (cats(type.id).length || (prods(type.id).length && $router.search))}
      <div>
        <Button
          clean
          on:click={() => router.go({ type: type.id, query: null })}>
          {type.name}
        </Button>
      </div>
    {/if}
    <div hidden={!cats(type.id).length || $router.cat}>
      {#each $router.type || $router.search ? cats(type.id) : cats(type.id).slice(0, 12) as cat}
        <Button
          style="order:{search(cat)}"
          on:click={() => router.go({
              type: type.id,
              cat: cat.id,
              query: subcats(cat.id, type.id).length
                ? $router.query
                : null
            })}>
          {cat.name}
          {$router.search ? subcats(cat.id, type.id).length || '' : ''}
        </Button>
      {/each}
    </div>
    {#if ($router.type || $router.search) && !$router.prod}
      <div hidden={!prods(type.id).length}>
        {#each prods(type.id) as prod}
          <Button
            on:click={() => router.go({
                type: type.id,
                prod: prod.id,
                query: models(prod.id, type.id).length
                  ? $router.query
                  : null
              })}
            style="order:{search(prod)}">
            {prod.name}
            <span>
              {$router.search ? models(prod.id, type.id).length || '' : ''}
            </span>
          </Button>
        {/each}
      </div>
    {/if}
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
{/if}-->

<div>
{#each $type.store as type}
  <Button label={type.name} />
{/each}
</div>

<script>
  import { type } from '../stores/api.js'
  import BreadCrumbs from './BreadCrumbs.svelte'
  import { catalog } from '../stores/test.js'
  import router from 'svelte3-router'
  import { Button } from 'forui'
  import Search from '../header/Search.svelte'

  const index = (obj, string) =>
    (obj.name + obj.alias).toLowerCase().indexOf(string)

  const search = (obj, string = $router.search) =>
    string
      ? !~string.indexOf(' ')
        ? index(obj, string)
        : string
          .split(' ')
          .reduce((acc, str) => acc + index(obj, str), 0)
      : 100

  const sort = (a, b) => (a.name < b.name ? -1 : 1)

  $: sorted = {
    type: $catalog.type.sort(sort),
    prod: $catalog.prod.sort(sort),
    model: $catalog.model.sort(sort),
    cat: $catalog.cat.sort(sort),
    subcat: $catalog.subcat.sort(sort)
  }

  $: prods = (type = $router.type) =>
    sorted.prod
      .sort(sort)
      .filter(
        prod =>
          prod.type === type &&
          (search(prod, $router.search) > -1 ||
            models(prod.id, prod.type).length)
      )
  $: models = (prod = $router.prod, type = $router.type) =>
    sorted.model
      .sort(sort)
      .filter(
        model =>
          model.type === type &&
          model.prod === prod &&
          search(model, $router.search) > -1
      )
  $: cats = (type = $router.type) =>
    sorted.cat
      .sort(sort)
      .filter(
        cat =>
          cat.type === type &&
          (search(cat, $router.search) > -1 ||
            subcats(cat.id, cat.type).length)
      )
  $: subcats = (cat = $router.cat, type = $router.cat) =>
    sorted.subcat
      .sort(sort)
      .filter(
        subcat =>
          subcat.type === type &&
          subcat.cat === cat &&
          search(subcat, $router.search) > -1
      )
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  :global(div) {
    margin: 7px 2px 0;
  }
  div:first-child {
    margin: 0 2px 0.6rem;
  }
  div > :global(:not(.clean)) {
    flex: 1 1;
    min-width: 250px;
    margin: 2px;
  }
</style>
