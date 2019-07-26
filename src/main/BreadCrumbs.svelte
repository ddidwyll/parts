<div>
  {#if $router.type}
    <Button
      clean
      label="Каталог"
      on:click={() => catalog.chType(null)} />
    <Button
      clean
      label={type.name || '404'}
      on:click={() => catalog.chType(type.id || null)} />
  {/if}
  {#if $router.cat}
    <Button
      clean
      label={cat.name || '404'}
      on:click={() => catalog.chCat(cat.id || null)} />
  {/if}
  {#if $router.subcat}
    <Button
      clean
      label={subcat.name || '404'}
      on:click={() => catalog.chSubcat(subcat.id || null)} />
  {/if}
  {#if $router.prod}
    <Button
      clean
      label={prod.name || '404'}
      on:click={() => catalog.chProd(prod.id || null)} />
  {/if}
  {#if $router.model}
    <Button
      clean
      label={model.name || '404'}
      on:click={() => catalog.chModel(model.id || null)} />
  {/if}
</div>

<script>
  import router from 'svelte3-router'
  import { catalog } from '../stores/test.js'
  import { Button } from 'forui'

  $: type = $catalog.type.find(type => type.id === $router.type) || {}
  $: prod =
    $catalog.prod.find(
      prod => prod.id === $router.prod && prod.type === $router.type
    ) || {}
  $: cat =
    $catalog.cat.find(
      cat => cat.id === $router.cat && cat.type === $router.type
    ) || {}
  $: model =
    $catalog.model.find(
      model =>
        model.id === $router.model &&
        model.prod === $router.prod &&
        model.type === $router.type
    ) || {}
  $: subcat =
    $catalog.subcat.find(
      subcat =>
        subcat.id === $router.subcat &&
        subcat.type === $router.type &&
        subcat.cat === $router.cat
    ) || {}
</script>

<style>
  div {
    display: flex;
    flex-direction: row;
  }
</style>
