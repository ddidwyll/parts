<svelte:head>
  <title>AllZip {title || ''}</title>
</svelte:head>

<h1>{title || 'AllZip'}</h1>

<script>
  import router from 'svelte3-router'

  let title = ''
  const ru = {
    catalog: 'Каталог',
    supply: 'Предложения',
    demand: 'Заявки'
  }

  $: {
    switch (true) {
      case $router.action === 'index':
        title = ''
        break
      case !!$router.id:
        title = 'Заголовок'
        break
      default:
        title = ''
    }
  }
</script>
