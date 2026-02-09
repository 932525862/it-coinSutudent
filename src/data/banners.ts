// Banner rasmlarini shu yerda qo'shing
// Yangi banner qo'shish uchun ro'yxatga qo'shing

export interface Banner {
  id: string;
  image: string;
  title?: string;
  link?: string;
}

export const banners: Banner[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200",
    title: "Dasturlash Kurslari",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200",
    title: "Coinlaringizni Sarflang!",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
    title: "IT Time Academy",
  },
];
