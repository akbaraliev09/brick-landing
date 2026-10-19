export const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const SITE = {
  logo: 'LOGO',
  phones: ['+7 705 392 61 45', '+7 707 777 75 85'],
  address: 'г. Актобе, 41 разъезд, товарный двор 602А, офис 3',
  priceList: `${import.meta.env.BASE_URL}price-list.pdf`,

  mapSrc:
    'https://www.openstreetmap.org/export/embed.html?bbox=57.13%2C50.26%2C57.21%2C50.31&layer=mapnik&marker=50.2839%2C57.1670',
  promoText: 'Сделайте заказ до 2 февраля и получите скидку -10%',
};

export const IMAGES = {
  hero: img('hero.jpg'),

  videoPoster: img('about-video.svg'),

  promo: img('promo.jpg'),

  works: [
    { src: img('work-1.png'), alt: 'Дом, облицованный красным кирпичом' },
    { src: img('work-2.png'), alt: 'Улица с кирпичными домами' },
    { src: img('work-3.png'), alt: 'Фасад частного дома' },
  ],
};
export const VIDEO = {
  youtubeId: '',
  src: `${import.meta.env.BASE_URL}videos/about.mp4`
};
