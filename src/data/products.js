import { img } from '../config/site.js';

const IMAGES = ['brick-1.png', 'brick-2.png', 'brick-3.png', 'brick-4.png'];

export const BRANDS = ['ТК Ликолор', 'Тайга', 'Копылово', '5 элемент'];
export const DEFAULT_BRAND = 'Копылово';

const makeItems = (brand) =>
  Array.from({ length: 8 }, (_, i) => ({
    id: `${brand}-${i + 1}`,
    brand,
    name: 'Black Premium (Одинарный, 1-НФ)',
    size: '250x120x65',
    pack: '480 шт',
    image: img(IMAGES[i % IMAGES.length]),
    description:
      'Облицовочный керамический кирпич для фасадов. Морозостойкий, не выцветает, подходит для частных домов и коммерческих объектов.',
  }));

export const PRODUCTS = Object.fromEntries(BRANDS.map((b) => [b, makeItems(b)]));
