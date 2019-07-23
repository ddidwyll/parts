import persist from 'svelte-persist'
import router from 'svelte3-router'

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
      name: 'Ноутбуки'
    }
  ],
  prod: [
    {
      id: '1',
      type: '1',
      name: 'Apple',
      alias: "аппл;эппл;фззду;fggk;'ggk;iphone;айфон;шзрщту;fqajy"
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
    },
    {
      id: '4',
      type: '1',
      name: 'Huawei',
      alias: 'хуавей;[efdtq;ргфцуш'
    },
    {
      id: '5',
      type: '2',
      name: 'Xerox',
      alias: 'ксерокс;чукщч;rcthjrc'
    },
    {
      id: '6',
      type: '3',
      name: 'Lenovo',
      alias: 'леново;дутщмщ;ktyjdj'
    },
    {
      id: '7',
      type: '3',
      name: 'HP',
      alias: "хп;эйчпи;[g;'qxgb;рз"
    },
    {
      id: '8',
      type: '2',
      name: 'HP',
      alias: "хп;эйчпи;[g;'qxgb;рз"
    },
    {
      id: '9',
      type: '3',
      name: 'Acer',
      alias: "асер;'qcth;эйсер;acth;фсук"
    }
  ],
  model: [
    {
      id: '1',
      type: '1',
      prod: '1',
      name: 'iphone 4',
      alias: ''
    },
    {
      id: '2',
      type: '1',
      prod: '1',
      name: 'iphone 4s',
      alias: '4с;4ы'
    },
    {
      id: '3',
      type: '1',
      prod: '1',
      name: 'iphone 5',
      alias: ''
    },
    {
      id: '4',
      type: '1',
      prod: '1',
      name: 'iphone 5s',
      alias: '5с;5ы'
    },
    {
      id: '5',
      type: '1',
      prod: '1',
      name: 'iphone 6',
      alias: '6'
    },
    {
      id: '6',
      type: '1',
      prod: '1',
      name: 'iphone 6s',
      alias: '6с;6ы'
    },
    {
      id: '7',
      type: '1',
      prod: '3',
      name: 'n8',
      alias: 'т8;y8;н8'
    },
    {
      id: '8',
      type: '1',
      prod: '2',
      name: 'galaxy s2',
      alias: 'гэлэкси;галакси;с2;c2;пфдфчн'
    },
    {
      id: '9',
      type: '1',
      prod: '2',
      name: 'galaxy s3',
      alias: 'гэлэкси;галакси;с3;c3;пфдфчн'
    },
    {
      id: '10',
      type: '1',
      prod: '2',
      name: 'galaxy s4',
      alias: 'гэлэкси;галакси;с4;c4;пфдфчн'
    },
    {
      id: '10',
      type: '1',
      prod: '2',
      name: 'galaxy s5',
      alias: 'гэлэкси;галакси;с5;c5;пфдфчн'
    },
    {
      id: '11',
      type: '1',
      prod: '3',
      name: 'n9',
      alias: 'т9;y9;н9'
    },
    {
      id: '12',
      type: '1',
      prod: '3',
      name: 'n95',
      alias: 'т95;y95;н95'
    },
    {
      id: '13',
      type: '1',
      prod: '3',
      name: '8800',
      alias: ''
    }
  ],
  cat: [
    {
      id: '1',
      type: '1',
      name: 'Дисплей',
      alias: "lbcgktq;display;вшыздфн;экран;'rhfy"
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
  ],
  subcat: []
})

catalog.chType = val =>
  router.go({
    type: val,
    prod: null,
    model: null,
    cat: null,
    subcat: null,
    query: null
  })
catalog.chProd = val =>
  router.go({
    prod: val,
    model: null,
    cat: null,
    subcat: null,
    query: null
  })
catalog.chModel = val =>
  router.go({
    model: val,
    cat: null,
    subcat: null,
    query: null
  })
catalog.chCat = val =>
  router.go({ cat: val, subcat: null, query: null })
catalog.chSubcat = val => router.go({ subcat: val, query: null })

export { catalog }
