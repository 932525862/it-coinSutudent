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
import chegrma from "../asstets/chegrma.jpg"
import chegrma1 from "../asstets/chegrma.png"
import chegrma2 from "../asstets/cheegrma.png"
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
  "CHEGIRMA"
  
  
];

export const products: Product[] = [
  // === SMART SOATLAR ===
  {
  id: "1",
  name: "Smart Watch X8 Pro",
  price: 188,
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
  price: 263,
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
  price: 300,
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
  price: 150,
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
  price: 2363,
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
  price: 375,
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
  price: 1028,
  images: [
    "https://images.uzum.uz/ct9fmcui4n3ehka2k8f0/original.jpg",
    "https://images.uzum.uz/ct9fmcviub3d1eokoitg/original.jpg"
  ],
  description: "Low latency gaming quloqchin. O'yinlar uchun tez ulanish.",
  category: "Quloqchinlar",
},
{
  id: "8",
  name: "Sennheiser PC 3 CHAT",
  price: 653,
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
  price: 375,
  images: [
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
  ],
  description: "Mikrofon bilan simli naushnik. Dars va qo'ng'iroqlar uchun.",
  category: "Quloqchinlar",
},
{
  id: "10",
  name: "Noise Cancelling Earbuds NC300",
  price: 450,
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
  price: 128,
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
  price: 30000,
  images: [
    "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/c14f7a753888287112058264fa40b72d2025071215424298304F7KJjzbtra.webp",
    "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/737e25c07c3dfe29758e947257946a902025071215424264335rMqvr8lNWL.webp",
  ],
  description: "Apple MacBook Air 13 dyuymli noutbuk.",
  category: "Noutbuklar",
},
{
  id: "13",
  name: "Noutbuk HP AMD",
  price: 3375,
  images: [
    "https://images.uzum.uz/d4rrl33tqdhgicat60rg/original.jpg",
    "https://images.uzum.uz/d2eq5mfiub3brtuame1g/original.jpg",
  ],
  description: "HP Ryzen 5, DDR5 8GB, SSD 512GB.",
  category: "Noutbuklar",
},
{
  id: "14",
  name: "Apple iPhone 15",
  price: 23775,
  images: [
    "https://images.uzum.uz/csoa6834nkdp9akeius0/original.jpg",
    "https://images.uzum.uz/csq4hpbvgbkpg1nlvmqg/original.jpg",
  ],
  description: "iPhone 15, 128 GB.",
  category: "Telefonlar",
},
{
  id: "15",
  name: "Infinix Note 50 Pro",
  price: 2250,
  images: [
    "https://images.uzum.uz/cvub6plpb7fbmqmns8b0/original.jpg",
  ],
  description: "Infinix Note 50 Pro, 128 GB.",
  category: "Telefonlar",
},
{
  id: "16",
  name: "Xiaomi Poco C71",
  price: 3225,
  images: [
    "https://images.uzum.uz/d51rn2btqdhua1ut7tqg/original.jpg",
  ],
  description: "Xiaomi Poco C71, 4+128GB.",
  category: "Telefonlar",
},
{
  id: "17",
  name: "Monoblok Lenovo V50a",
  price: 12000,
  images: [
    "https://cdn.mediapark.uz/imgs/0ff4640e-d985-4f97-87e4-2956ec55db4a_Artboard-1-(6).webp",
    "https://cdn.mediapark.uz/imgs/83d01cad-dc89-4759-88b4-1b80b6bc8403_Artboard-2.webp",
  ],
  description: "Lenovo AIO Core i3.",
  category: "Kompyuterlar",
},

 {
  id: "18",
  name: "Klaviatura + Sichqoncha",
  price: 150,
  images: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
  ],
  category: "Kompyuterlar",
},
{
  id: "22",
  name: "Aqliy Planshet 17 Max",
  price: 2550,
  images: [
    "https://images.uzum.uz/d63palk3obpn7570dldg/original.jpg",
  ],
  category: "Planshetlar",
},
{
  id: "24",
  name: "HTML va CSS kitobi",
  price: 240,
  images: [
    "https://images.uzum.uz/d5vgjdnqkmamvfqs0edg/original.jpg",
  ],
  category: "Kitoblar",
},
{
  id: "25",
  name: "JavaScript kitobi",
  price: 225,
  images: [
    "https://images.uzum.uz/d3l64mrq345l7k05htug/original.jpg",
  ],
  category: "Kitoblar",
},
{
  id: "30",
  name: "Futbol to'pi Molten",
  price: 323,
  images: [
    "https://images.uzum.uz/d5vi6n6f4hvsl3r26nkg/original.jpg",
  ],
  category: "Aksessuarlar",
},
{
  id: "31",
  name: "Powerbank 10000mAh",
  price: 326,
  images: [
    "https://images.uzum.uz/d5sbql7iub393sddpemg/original.jpg",
  ],
  category: "Aksessuarlar",
},

 {
  id: "32",
  name: "Laptop Sumkasi 15.6'",
  price: 203,
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
  price: 134,
  images: [
    "https://images.uzum.uz/cs6jbmmfh2vj1qtkbjcg/original.jpg",
  ],
  description: "Noutbuk va planshet ushlagichi, alyuminiy.",
  category: "Aksessuarlar",
},

{
  id: "34",
  name: "Mouse Pad XXL 80x30",
  price: 150,
  images: [
    "https://images.uzum.uz/d5ofiurq345softlj3jg/original.jpg",
  ],
  description: "Katta o‘lchamli geymer kovrik 40×90 sm – klaviatura va sichqoncha uchun, sirpanmas.",
  category: "Aksessuarlar",
},

{
  id: "35",
  name: "USB Hub 4-port 3.0",
  price: 93,
  images: [
    "https://images.uzum.uz/d29dgs34eu2ok7138rng/original.jpg",
  ],
  description: "USB Hub 4 ta portli USB 3.0 razvetvitel – 5 Gbit/s tezlik, kompyuter uchun",
  category: "Aksessuarlar",
},

{
  id: "36",
  name: "Kabel Tartiblagich (Organizer)",
  price: 113,
  images: [
    "https://images.uzum.uz/cf631tov1htd23al8eg0/original.jpg",
    "https://images.uzum.uz/cf63340l08k0o9qi66f0/original.jpg"
  ],
  description: "Kabellarni tartibga keltiruvchi. Ish stolini toza saqlang.",
  category: "Aksessuarlar",
},

{
  id: "39",
  name: "Laptop Full Set (Sumka+Mouse+Pad)",
  price: 225,
  images: [
    "https://images.uzum.uz/d5fpq6gjsv1neactfc90/original.jpg",
    "https://images.uzum.uz/d44higlv2sjo4rvgb5kg/original.jpg",
  ],
  description: "Laptop uchun to'liq to'plam: sumka, sichqoncha, mouse pad.",
  category: "To'plamlar",
},
{
  id: "40",
  name: "AIRMESH G2 BLACK",
  price: 1748,
  images: [
    "https://images.uzum.uz/d39p4sq1146g78h3e99g/original.jpg",
    
  ],
  description: "AIRMESH G2 BLACK – bu zamonaviy va yengil qurilma bo‘lib, foydalanuvchiga qulaylik va ishonchlilikni taqdim etadi.",
  category: "To'plamlar",
},
{
  id: "41",
  name: "Noutbuk sovutgichi NCP-063",
  price: 334,
  images: [
    "https://images.uzum.uz/d1vqf1t2llnbjcofdddg/original.jpg",
    
  ],
  description: "Noutbuk sovutgichi NCP-063 – bu zamonaviy va yengil qurilma bo‘lib, foydalanuvchiga qulaylik va ishonchlilikni taqdim etadi.",
  category: "To'plamlar",
},

{
  id: "42",
  name: "Izuchayem React. 2-ye izdaniye, Chinnatambi Kirupa",
  price: 1080,
  images: [
    "https://images.uzum.uz/cgrrr3ng49devoadogeg/original.jpg",
    
  ],
  description: "Izuchayem React. 2-ye izdaniye, Chinnatambi Kirupa – bu kitob, React dasturlash tilini o'rganish uchun mo'ljallangan.",
  category: "To'plamlar",
},

{
  id: "43",
  name: "Garri Potter, to'plami, Joann Rouling, o'zbek tilida",
  price: 780,
  images: [
    "https://images.uzum.uz/clf6mjt6sfhvbd1ik13g/original.jpg",
    
  ],
  description: "Garri Potter to'plami, Joann Rouling – bu kitob, Garri Potter seriyasini o'rganish uchun mo'ljallangan.",
  category: "To'plamlar",
},
{
    id: "44",
    name: "IT TIME Academy ga 50% chegirma",
    price: 1880,
    images: [
      chegrma
    ],
    description: "IT TIME ACADEMY GA  50%   CHEGIRMA.",
    category: "CHEGIRMA",
  },
  {
    id: "45",
    name: "IT TIME Academy ga 30% chegirma",
    price: 1880,
    images: [
      chegrma2
    ],
    description: "IT TIME ACADEMY GA  30%   CHEGIRMA.",
    category: "CHEGIRMA",
  },

  {
    id: "46",
    name: "IT TIME Academy ga 20% chegirma",
    price: 1880,
    images: [
      chegrma1
    ],
    description: "IT TIME ACADEMY GA  20%   CHEGIRMA.",
    category: "CHEGIRMA",
  },


  
];
