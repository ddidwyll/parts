import persist from 'svelte-persist'

const catalog = persist('catalog', {
  type: [
    {
      id: '1',
      name: 'Телефоны'
    },
    {
      id: '2',
      name: 'Оргтехника'
    },
    {
      id: '3',
      name: 'Компьтеры'
    }
  ],
  prod: [
    {
      id: '1',
      type: '1',
      name: 'Apple',
      alias: 'аппл;эппл;фззду;fggk;\'ggk'
    },
    {
      id: '2',
      type: '1',
      name: 'Samsung',
      alias: 'самсунг;ыфьыгтп;cfvsung'
    },
    {
      id: '3',
      type: '1',
      name: 'Nokia',
      alias: 'нокиа;тщлшф;yjrbf'
    {
      id: '4',
      type: '1',
      name: 'Huawei',
      alias: 'хуавей;[efdtq;ргфцуш'
    }
  ],
  model: [
    {
      id: '1',
      type: '1',
      prod: '1',
      name: '4',
      alias: ''
    },
    {
      id: '2',
      type: '1',
      prod: '1',
      name: '4s',
      alias: '4с;4ы'
    },
    {
      id: '3',
      type: '1',
      prod: '1',
      name: '5',
      alias: ''
    },
    {
      id: '4',
      type: '1',
      prod: '1',
      name: '5s',
      alias: '5с;5ы'
    },
    {
      id: '5',
      type: '1',
      prod: '1',
      name: '6',
      alias: '6'
    },
    {
      id: '6',
      type: '1',
      prod: '1',
      name: '6s',
      alias: '6с;6ы'
    }
  ],
  cat: [
    {
      id: '1',
      type: '1',
      name: 'Дисплей',
      alias: 'lbcgktq;display;вшыздфн;экран;\'rhfy'
    },
    {
      id: '2',
      type: '1',
      name: 'Аккумулятор',
      alias: 'frrevekznjh;fr,;акб;battery;ифееукн'
    },
    {
      id: '3',
      type: '1',
      name: 'Тачскрин',
      alias: 'nfx;crhby;touch;screen;ещгср;ыскуут'
    },
    {
      id: '4',
      type: '1',
      name: 'Динамик',
      alias: 'lbyfvbr;speaker;ызуфлук'
    },
    {
      id: '5',
      type: '1',
      name: 'Шлейф',
      alias: 'iktqa;сфиду;cable'
    }
  ]
})

export { catalog }
