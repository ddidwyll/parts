<svelte:head>
  <title>allZip {title || ''}</title>
</svelte:head>

<h1>{title || 'allZip'}</h1>

<script>
  import router from 'svelte3-router'
  import { catalog } from '../stores/test.js'

  $: prod =
    $router.type && $router.prod
      ? $catalog.prod.find(
        prod =>
          prod.id === $router.prod && prod.type === $router.type
      ) || { name: '' }
      : { name: '' }
  $: model =
    $router.type && $router.prod && $router.model
      ? $catalog.model.find(
        model =>
          model.id === $router.model &&
            model.type === $router.type &&
            model.prod === $router.prod
      ) || { name: '' }
      : { name: '' }
  $: cat =
    $router.type && $router.cat
      ? $catalog.cat.find(
        cat => cat.id === $router.cat && cat.type === $router.type
      ) || { name: '' }
      : { name: '' }
  $: subcat =
    $router.type && $router.cat && $router.subcat
      ? $catalog.subcat.find(
        subcat =>
          subcat.id === $router.subcat &&
            subcat.type === $router.type &&
            subcat.cat === $router.cat
      ) || { name: '' }
      : { name: '' }

  $: title =
    (subcat.name || cat.name) +
    (prod.name ? ` ${prod.name}` : '') +
    (model.name ? ` ${model.name}` : '')
</script>
