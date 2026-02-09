// Mahsulotlarni shu yerda qo'shing - juda oson!
// Yangi mahsulot qo'shish uchun shunchaki ro'yxatga qo'shing

export interface Product {
  id: string;
  name: string;
  price: number; // Coin narxi
  images: string[]; // Birinchi rasm asosiy rasm bo'ladi
  description?: string;
  category?: string;
}

export const categories = [
  "Barchasi",
  "Smart soatlar",
  "Quloqchinlar",
  "Noutbuklar",
  "Kompyuterlar",
  "Planshetlar",
  "Kitoblar",
  "Aksessuarlar",
  "To'plamlar",
  "Telefonlar",
  
];

export const products: Product[] = [
  // === SMART SOATLAR ===
  {
    id: "1",
    name: "Smart Watch X8 Pro",
    price: 250,
    images: [
      "https://images.uzum.uz/d535kv3s2tab83s7av8g/original.jpg",
      "https://images.uzum.uz/d535kurs2tab83s7av80/original.jpg",
      
    ],
    description: "Oddiy smart soat, o'quvchilar uchun qulay. Soat, xabarlar, qadamlar hisoblagich.",
    category: "Smart soatlar",
  },
  {
    id: "2",
    name: "Sport Smart Watch M5",
    price: 350,
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400",
    ],
    description: "Qadam, yurak urishi, kaloriya hisoblagich. Sport uchun ideal.",
    category: "Smart soatlar",
  },
  {
    id: "3",
    name: "Bluetooth Smart Watch T500",
    price: 400,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400",
    ],
    description: "Telefon bilan bog'lanadi, qo'ng'iroqlarni qabul qilish, musiqa boshqarish.",
    category: "Smart soatlar",
  },
  {
    id: "4",
    name: "Kids Smart Watch Y1",
    price: 200,
    images: [
      "https://olcha.uz/image/original/products/2020-07-29/xiaomi-mi-band-5-black-xmsh10hm-global-version-14931-0.jpeg",
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      
      "https://olcha.uz/image/original/products/2020-07-29/xiaomi-mi-band-5-black-xmsh10hm-global-version-14931-1.jpeg"
    ],
    description: "O'smirlar uchun smart soat, GPS tracker, SOS tugmasi.",
    category: "Smart soatlar",
  },
  {
    id: "5",
    name: "Smart Band M7 Pro",
    price: 3150,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d82c8d1619ad8176d665453cfb2e55f02024061113413066673DCPRsTEHnT.jpg.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/9f61408e3afb633e50cdf1b20de6f4662024061113413168818r767XJ6v3p.jpg.webp",
    ],
    description: "Mi Band turidagi smart bilakuzuk. Engil, uzoq batareya, sport rejimlari.",
    category: "Smart soatlar",
  },

  // === QULOQCHINLAR ===
  {
    id: "6",
    name: "TWS Bluetooth Earbuds i12",
    price: 500,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/088294b9a7476455eadcda2ef90d6f3a2024022216310082860viJEPUPd2s.png.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/b5ffd023d0808516aaae2ab080d9b28120240222163350516391VP4UsMafm.png.webp",
    ],
    description: "AirPods uslubidagi Bluetooth quloqchin. Toza ovoz, kompakt dizayn.",
    category: "Quloqchinlar",
  },
  {
    id: "7",
    name: "Gaming Earbuds G20",
    price: 1370,
    images: [
      "https://images.uzum.uz/ct9fmcui4n3ehka2k8f0/original.jpg",
      "https://images.uzum.uz/ct9fmcviub3d1eokoitg/original.jpg"
    ],
    description: "Low latency gaming quloqchin. O'yinlar uchun tez ulanish.",
    category: "Quloqchinlar",
  },
  {
    id: "8",
    name: " Sennheiser PC 3 CHAT",
    price: 870,
    images: [
      "https://asset.openshop.uz/storage/uploads/products/photos/202402/OQxcdolawnHZdQCfQwj58ABWtppI8k2hnSNsvmxk.jpg",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    ],
    description: "Katta naushnik (headband), chuqur bass, uzoq batareya.",
    category: "Quloqchinlar",
  },
  {
    id: "9",
    name: "Simli Naushnik HF-230",
    price: 500,
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
    ],
    description: "Mikrofon bilan simli naushnik. Dars va qo'ng'iroqlar uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "10",
    name: "Noise Cancelling Earbuds NC300",
    price: 600,
    images: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
      "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=400",
    ],
    description: "Shovqinni bekor qiluvchi quloqchin. Tinch muhitda ishlash uchun.",
    category: "Quloqchinlar",
  },
  {
    id: "11",
    name: "Sport Naushnik S880",
    price: 170,
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=400",
    ],
    description: "Quloqdan ushmaydigan sport naushnik. Yugurish va mashq uchun.",
    category: "Quloqchinlar",
  },

  //==fud===
  

  // === NOUTBUKLAR ===
  {
    id: "12",
    name: "MacBook Air 13inch",
    price: 40000,
    images: [
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c14f7a753888287112058264fa40b72d2025071215424298304F7KJjzbtra.webp",
      "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/737e25c07c3dfe29758e947257946a902025071215424264335rMqvr8lNWL.webp",
    ],
    description: "Apple MacBook Air 13 dyuymli noutbuk: 10 yadroli protsessor va 8 yadroli grafik protsessorga ega Apple M4 protsessori, 16 GB operativ xotira, 256 GB SSD ",
    category: "Noutbuklar",
  },
  {
    id: "13",
    name: "Noutbuk HP AMD ",
    price: 4500,
    images: [
      "https://images.uzum.uz/d4rrl33tqdhgicat60rg/original.jpg",
      "https://images.uzum.uz/d2eq5mfiub3brtuame1g/original.jpg",
    ],
    description: "Noutbuk HP AMD Ryzen 5-7520U, DDR5 8GB, SSD 512GB, Windows 11 Pro, 15.6 IPS, ",
    category: "Noutbuklar",
  },
  {
    id: "14",
    name: " Apple iPhone 15,",
    price: 31700,
    images: [
      "https://images.uzum.uz/csoa6834nkdp9akeius0/original.jpg",
      "https://images.uzum.uz/csq4hpbvgbkpg1nlvmqg/original.jpg",
    ],
    description: "Smartfon Apple iPhone 15, 128 GB, SIM+DualSIM, g'ilof sovg'a",
    category: "Telefonlar",
  },

 
  {
    id: "15",
    name: "Smartfon Infinix Note 50 Pro,",
    price: 3000,
    images: [
      "https://images.uzum.uz/cvub6plpb7fbmqmns8b0/original.jpg",
    ],
    description: "Smartfon Infinix Note 50 Pro, 128 GB, SIM+DualSIM, g'ilof sovg'a",
    category: "Telefonlar",
  },
  {
    id: "16",
    name: "Smartfon Xiaomi Poco C71",
    price: 4300,
    images: [
      "https://images.uzum.uz/d51rn2btqdhua1ut7tqg/original.jpg",
    ],
    description: "Smartfon Xiaomi Poco C71, 4+128GB, 32 Mp ikkita kamera, 6,88 displey",
    category: "Telefonlar",
  },
  //sssss
  {
    id: "17",
    name: "Monoblok Lenovo V50a-24IMB ",
    price: 16000,
    images: [
      "https://cdn.mediapark.uz/imgs/0ff4640e-d985-4f97-87e4-2956ec55db4a_Artboard-1-(6).webp",
      "https://cdn.mediapark.uz/imgs/83d01cad-dc89-4759-88b4-1b80b6bc8403_Artboard-2.webp",
    ],
    description: "Monoblok  Lenovo V50a-24IMB AIO Intel Core i3-10100T , DDR4 4GB ,  SSD 256GB , 23,8 FHD , Integrated Intel UHD",
    category: "Kompyuterlar",
  },
  {
    id: "18",
    name: "Klaviatura + Sichqoncha Komplekti",
    price: 200,
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    ],
    description: "Simsiz klaviatura va sichqoncha komplekti. Ergonomik dizayn.",
    category: "Kompyuterlar",
  },

  // === PLANSHETLAR ===
  // {
  //   id: "19",
  //   name: "Android Planshet 10.1'",
  //   price: 1200,
  //   images: [
  //     "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
  //   ],
  //   description: "Android planshet 10.1'. O'qish va video ko'rish uchun ideal.",
  //   category: "Planshetlar",
  // },
  // {
  //   id: "20",
  //   name: "O'quvchi Plansheti 8'",
  //   price: 800,
  //   images: [
  //     "https://images.unsplash.com/photo-1561154464-82e9aab32f4d?w=400",
  //   ],
  //   description: "8 dyuymli engil planshet. Kitob o'qish va dars uchun.",
  //   category: "Planshetlar",
  // },
  // {
  //   id: "21",
  //   name: "Stylus Planshet 10' (Dars uchun)",
  //   price: 1800,
  //   images: [
  //     "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400",
  //     "https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=400",
  //   ],
  //   description: "Stylus qalam bilan planshet. Darsda yozish va chizish uchun.",
  //   category: "Planshetlar",
  // },
  {
    id: "22",
    name: "Aqliy Planshet 17 Max ",
    price: 3400,
    images: [
      "https://images.uzum.uz/d63palk3obpn7570dldg/original.jpg",
    ],
    description: "Aqliy Planshet 17 Max Smart Tablet Android 15, 5G, UZIMEI, klaviatura, sichqoncha, g‘ilof.",
    category: "Planshetlar",
  },
  // {
  //   id: "23",
  //   name: "iPad 10.2' Wi-Fi",
  //   price: 3500,
  //   images: [
  //     "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
  //     "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400",
  //   ],
  //   description: "Apple iPad. O'quv va ijod uchun eng yaxshi tanlov.",
  //   category: "Planshetlar",
  // },

  // === KITOBLAR ===
  {
    id: "24",
    name: "Mukammal dasturlash 1. HTML va CSS",
    price: 320,
    images: [
      "https://images.uzum.uz/d5vgjdnqkmamvfqs0edg/original.jpg",
    ],
    description: "HTML va CSS asoslarini o'rganish uchun eng yaxshi kitob.",
    category: "Kitoblar",
  },
  {
    id: "25",
    name: "JavaScript",
    price: 300,
    images: [
      "https://images.uzum.uz/d3l64mrq345l7k05htug/original.jpg",
    ],
    description: "JavaScript asoslari va eng yaxshi amaliyotlar kitobi.",
    category: "Kitoblar",
  },
  {
    id: "26",
    name: "Futbol butsilar,",
    price: 670,
    images: [

      "https://images.uzum.uz/d291a4viub3br32163k0/original.jpg",
    ],
    description: "Futbol butsilar, erkaklar, o'smirlar uchun, 36-45 o'lcham",
    
  },
  {
    id: "27",
    name: "Futbol butsilar erkaklar uchun",
    price: 500,
    images: [
      "https://images.uzum.uz/d188rvi7s4fup34aa1vg/original.jpg",
    ],
    description: "Futbol butsilar erkaklar uchun, o'lcham 40-45",

  },
  {
    id: "28",
    name: "Forma, futbol formasi.",
    price: 400,
    images: [
      "https://images.uzum.uz/d1rlehnnrko24u2h3msg/original.jpg",
    ],
    description: "Futbol formasi, erkaklar va o'smirlar uchun, turli o'lchamlar.",
    category: "Futbol",
  },
  {
    id: "29",
    name: "Futbol retro-forma",
    price: 410,
    images: [
      "https://images.uzum.uz/d5p6gu3q345softls8r0/original.jpg",
    ],
    description: "Futbol retro-forma - \"Barcelona 2015 , Sport kiyim\"",
    category: "Futbol",
  },

  // === AKSESSUARLAR ===
  {
    id: "30",
    name: "Futbol to'pi Molten",
    price: 430,
    images: [
      "https://images.uzum.uz/d5vi6n6f4hvsl3r26nkg/original.jpg",
    ],
    description: "Futbol to'pi Molten, AFC F5A5000-AC, o'lcham 5",
    category: "Aksessuarlar",
  },
  {
    id: "31",
    name: "Powerbank 10000mAh",
    price: 434,
    images: [
      "https://images.uzum.uz/d5sbql7iub393sddpemg/original.jpg",
    ],
    description: "Portativ quvvatlash qurilmasi. 10000mAh, 2ta USB port.",
    category: "Aksessuarlar",
  },
 {
    id: "32",
    name: "Laptop Sumkasi 15.6'",
    price: 270,
    images: [
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
      "https://images.uzum.uz/d5obpn3q345softlgvl0/original.jpg",
    ],
    description: "Himoyalangan noutbuk biznes sumkasi.",
    category: "Aksessuarlar",
  },

  {
    id: "33",
    name: "Laptop Stendi Aluminium",
    price: 178,
    images: [
      "https://images.uzum.uz/cs6jbmmfh2vj1qtkbjcg/original.jpg",
    ],
    description: "Noutbuk va planshet ushlagichi, alyuminiy.",
    category: "Aksessuarlar",
  },

 {
    id: "34",
    name: "Mouse Pad XXL 80x30",
    price: 200,
    images: [
      "https://images.uzum.uz/d5ofiurq345softlj3jg/original.jpg",
    ],
    description: "Katta o‘lchamli geymer kovrik 40×90 sm – klaviatura va sichqoncha uchun, sirpanmas.",
    category: "Aksessuarlar",
  },

{
    id: "35",
    name: "USB Hub 4-port 3.0",
    price: 124,
    images: [
      "https://images.uzum.uz/d29dgs34eu2ok7138rng/original.jpg",
    ],
    description: "USB Hub 4 ta portli USB 3.0 razvetvitel – 5 Gbit/s tezlik, kompyuter uchun",
    category: "Aksessuarlar",
  },

  {
    id: "36",
    name: "Kabel Tartiblagich (Organizer)",
    price: 150,
    images: [
      "https://images.uzum.uz/cf631tov1htd23al8eg0/original.jpg",
      "https://images.uzum.uz/cf63340l08k0o9qi66f0/original.jpg"
    ],
    description: "Kabellarni tartibga keltiruvchi. Ish stolini toza saqlang.",
    category: "Aksessuarlar",
  },

  // === TO'PLAMLAR ===
  // {
  //   id: "37",
  //   name: "Smart Watch + Earbuds Set",
  //   price: 380,
  //   images: [
  //     "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=400",
  //     "https://images.unsplash.com/photo-1590658268037-6bf12f032f55?w=400",
  //   ],
  //   description: "Smart soat va Bluetooth quloqchin to'plami. Arzon narxda!",
  //   category: "To'plamlar",
  // },
  // {
  //   id: "38",
  //   name: "Telefon Aksessuarlar To'plami",
  //   price: 250,
  //   images: [
  //     "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
  //   ],
  //   description: "Quloqchin, powerbank, kabel — barchasi bitta paketda.",
  //   category: "To'plamlar",
  // },
  {
    id: "39",
    name: "Laptop Full Set (Sumka+Mouse+Pad)",
    price: 300,
    images: [
      "https://images.uzum.uz/d5fpq6gjsv1neactfc90/original.jpg",
      "https://images.uzum.uz/d44higlv2sjo4rvgb5kg/original.jpg",
    ],
    description: "Laptop uchun to'liq to'plam: sumka, sichqoncha, mouse pad.",
    category: "To'plamlar",
  },
  
];
