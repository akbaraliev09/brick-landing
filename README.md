# Лендинг: облицовочный кирпич (React + Vite)

## Запуск
```powershell
npm install
npm run dev      # откроется http://localhost:5173
npm run build    # сборка в папку dist
```

## Что где менять
| Что | Где |
|---|---|
| Телефоны, адрес, карта, текст акции, фото, **видео** | `src/config/site.js` |
| Товары и вкладки каталога | `src/data/products.js` |
| Фото (hero, кирпичи, работы, фон акции) | папка `public/images` (сейчас там заглушки .svg) |
| Прайс-лист | заменить `public/price-list.pdf` |
| Отправка заявок (Telegram / email) | `src/services/sendLead.js` |
| Цвета и стили | `src/styles/styles.css` (переменные в `:root`) |

Подсказки оставлены комментариями «👉» прямо в коде.
