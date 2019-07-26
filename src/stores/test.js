import persist from 'svelte-persist'
import router from 'svelte3-router'

const catalog = persist('catalog', {
  type: [
    {
      id: '1',
      name: 'Телефоны, Смартфоны, Планшеты, Электронные книги'
    },
    {
      id: '2',
      name: 'Зарядные устройства, Блоки питания, Аккумуляторы'
    },
    {
      id: '3',
      name: 'Ноутбуки, Ультрабуки, Нетбуки'
    },
    {
      id: '4',
      name: 'Компьютеры, Комплектующие к ПК'
    },
    {
      id: '5',
      name: 'Мониторы, Телевизоры, Видеотехника'
    },
    {
      id: '6',
      name: 'Оргтехника'
    },
    {
      id: '7',
      name: 'Аудиотехника'
    },
    {
      id: '8',
      name: 'Фотоаппараты, Видеокамеры, Экшн камеры'
    },
    {
      id: '9',
      name: 'Электронные компоненты'
    }
  ],
  prod: [
    {
      id: '1',
      type: '1',
      name: 'Apple',
      alias:
        "аппл;эппл;фззду;fggk;'ggk;iphone;айфон;шзрщту;fqajy;ujdyj;говно"
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
      alias: 'хуавей;[efdtq;ргфцуш;хуявей;хуевей'
    },
    {
      id: '5',
      type: '1',
      name: 'Asus',
      alias: 'асус;фыгы'
    },
    {
      id: '6',
      type: '1',
      name: 'Xiaomi',
      alias: 'rczjvb;rcbfjvb;xaomi;ксяоми;ксияоми;ксеоми'
    },
    {
      id: '7',
      type: '1',
      name: 'MEIZU',
      alias: 'мейзу;vtqpe'
    },
    {
      id: '8',
      type: '1',
      name: 'GINZZU',
      alias: 'ubype;гинзу'
    },
    {
      id: '9',
      type: '1',
      name: 'Prestigio',
      alias: 'престижио;престигио;ghtcnbubj;ghtcnb;bj'
    },
    {
      id: '10',
      type: '1',
      name: 'Digma',
      alias: 'lbuvf;диджма;lbl;vf'
    },
    {
      id: '11',
      type: '1',
      name: 'Motorolla',
      alias: 'vjnjhjkkf;моторолла'
    },
    {
      id: '12',
      type: '1',
      name: 'Fly',
      alias: 'ake;akfq;флай;флу'
    },
    {
      id: '13',
      type: '1',
      name: 'ZTE',
      alias: 'pnt;зте'
    },
    {
      id: '14',
      type: '1',
      name: 'Alcatel',
      alias: "алкатэль;алкатель;fkrfntk;fkrfn'km"
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
    },

    {
      id: '1',
      type: '6',
      name: 'HP',
      alias: 'рз;'
    },
    {
      id: '2',
      type: '6',
      name: 'Canon',
      alias: "r'yjy;кэнон;канон"
    },
    {
      id: '3',
      type: '6',
      name: 'Xerox',
      alias: 'ксерокс;чукщч;rcthjrc'
    },
    {
      id: '4',
      type: '6',
      name: 'Samsung',
      alias: 'самсунг;ыфьыгтп;cfvsung'
    },
    {
      id: '5',
      type: '6',
      name: 'Kyocera',
      alias: 'лнщсукф;киосера;куесера;каясера;rtjcthf;rfzcthf'
    },
    {
      id: '5',
      type: '6',
      name: 'Epson',
      alias: 'gcjy;эпсон'
    },
    {
      id: '6',
      type: '6',
      name: 'Brother',
      alias: 'брозер;,hjpth'
    },
    {
      id: '7',
      type: '6',
      name: 'Lexmark',
      alias: 'ktrcvfhr'
    },
    {
      id: '8',
      type: '6',
      name: 'Ricoh',
      alias: 'hbrjy;hbrj[];кшлщр'
    },
    {
      id: '9',
      type: '6',
      name: 'Oki',
      alias: 'щлш;jrb;оки'
    },
    {
      id: '10',
      type: '6',
      name: 'Xerox',
      alias: 'ксерокс;чукщч;rcthjrc'
    },
    {
      id: '11',
      type: '6',
      name: 'Sharp',
      alias: 'ырфкз;ifhg;cifhg;схарп;шарп'
    },
    {
      id: '12',
      type: '6',
      name: 'Toshiba',
      alias: 'njib,f;ещыршиф;тошиба'
    },
    {
      id: '13',
      type: '6',
      name: 'Pantum',
      alias: 'gfynev;пантум'
    },
    {
      id: '14',
      type: '6',
      name: 'Riso',
      alias: 'ризо;рисо;кшыщ'
    },
    {
      id: '14',
      type: '6',
      name: 'Panasonic',
      alias: 'gfyfcjybr;панасоник;gfyfcjybr'
    },
    {
      id: '14',
      type: '6',
      name: 'Konica Minolta',
      alias: 'rjybrf;vbyjknhf;vbyjknf;коника;минолта;минолтра'
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
    },

    {
      id: '6',
      type: '3',
      name: 'Матрицы, Дисплеи',
      alias: "mfnhbws;display;'rhfys"
    },
    {
      id: '7',
      type: '3',
      name: 'Клавиатуры',
      alias: 'rkfdbfnehs'
    },
    {
      id: '8',
      type: '3',
      name: 'Блоки питания и аккумуляторы',
      alias: ',kjrb;gbnfybt'
    },
    {
      id: '9',
      type: '3',
      name: 'жесткие диски и ssd',
      alias: ';tcnrbq;lbcr'
    },
    {
      id: '10',
      type: '3',
      name: 'Модули памяти',
      alias: 'ddr;llh'
    },
    {
      id: '11',
      type: '3',
      name: 'Микросхемы',
      alias: 'vbrhjc[tvs'
    },
    {
      id: '12',
      type: '3',
      name: 'Видеокарты и видеочипы',
      alias: 'dbltjrfhn;dbltjxbg'
    },
    {
      id: '13',
      type: '3',
      name: 'Мосты',
      alias: 'vjcns'
    },
    {
      id: '14',
      type: '3',
      name: 'Корпусные детали',
      alias: 'крышка;rjhgec;rhtgktybz;крепления;pfukeirf;заглушка'
    },
    {
      id: '15',
      type: '3',
      name: 'Процессоры',
      alias: 'ghjwtccjh'
    },
    {
      id: '16',
      type: '3',
      name: 'Посткарты',
      alias: 'gjcnrfhns;зщыесфке;post'
    },
    {
      id: '17',
      type: '3',
      name: 'Материнские платы',
      alias: 'vfnthbycrfz;плата'
    },
    {
      id: '18',
      type: '3',
      name: 'Охлаждение',
      alias: 'rekth;кулер;nhe,rf;трубка;hflbfnjh;радиатор'
    },
    {
      id: '18',
      type: '3',
      name: 'Шлейфы',
      alias: 'iktqas;провод;кабель;ghjdjl;rf,tkm'
    },
    {
      id: '18',
      type: '3',
      name: 'Разъёмы',
      alias: 'hfp]tvs;гнездо;uytplj'
    },
    {
      id: '19',
      type: '6',
      name: 'Ролики захвата и тормозные площадки',
      alias: 'hjkbrb;njhvjpyfz'
    },
    {
      id: '20',
      type: '6',
      name: 'Термопленки, Тефлоновые валы, Прижимные валы',
      alias: 'nthvjgktyrf;ntakjy;dfk;вал'
    },
    {
      id: '21',
      type: '6',
      name: 'Шестерни, Бушинги, подшипники',
      alias: 'hfp]tvs;гнездо;uytplj'
    },
    {
      id: '22',
      type: '6',
      name: 'Платы, Электроника, Дисплеи',
      alias: 'gbnfybz;gkfnf;питание;ajhvfnnth;форматер'
    },
    {
      id: '23',
      type: '6',
      name: 'Детали корпуса, лотки',
      alias: 'kjnjr;rhsirf;лоток;крышка'
    },
    {
      id: '24',
      type: '6',
      name: 'Сканеры, Автоподатчики, Стекла',
      alias: 'crfyth;adf'
    },
    {
      id: '25',
      type: '6',
      name: 'Картриджи, Запчасти картриджей, Тонер',
      alias: 'njyth;rfhnhbl;фотовалы;ракели;PRC'
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
    query: null
  })
catalog.chModel = val =>
  router.go({
    model: val,
    query: null
  })
catalog.chCat = val =>
  router.go({
    cat: val,
    prod: null,
    model: null,
    subcat: null,
    query: null
  })
catalog.chSubcat = val => router.go({ subcat: val, query: null })

export { catalog }
