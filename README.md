# Miho Cafe Website

Сучасний, повністю функціональний веб-сайт для кав'ярні Miho Cafe, створений з використанням React, TypeScript, Tailwind CSS та Vite.

## 🚀 Технології

- **React 18** з TypeScript
- **Vite** для швидкої розробки та збірки
- **Tailwind CSS** для стилізації
- **Framer Motion** для плавних анімацій
- **React Router** для навігації

## 📦 Встановлення

1. Встановіть залежності:
```bash
npm install
```

2. Скопіюйте зображення (якщо потрібно):
```bash
npm run copy-images
```

3. Запустіть сервер розробки:
```bash
npm run dev
```

4. Відкрийте браузер на `http://localhost:5173`

## 🛠️ Доступні команди

- `npm run dev` - Запуск сервера розробки
- `npm run build` - Збірка для продакшну
- `npm run preview` - Попередній перегляд продакшн збірки
- `npm run lint` - Перевірка коду ESLint
- `npm run copy-images` - Копіювання зображень з `photos/` в `public/photos/`

## 📄 Структура проекту

```
website/
├── public/
│   └── photos/          # Зображення кав'ярні
├── src/
│   ├── components/     # React компоненти
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MenuCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── CTABlock.tsx
│   │   └── LazyImage.tsx
│   ├── pages/          # Сторінки
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── data/           # Дані
│   │   ├── cafeInfo.ts
│   │   ├── menu.ts
│   │   ├── gallery.ts
│   │   └── images.ts
│   ├── types/          # TypeScript типи
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── scripts/
│   └── copy-images.js  # Скрипт для копіювання зображень
└── package.json
```

## 📄 Сторінки

- **Home** (`/`) - Головна сторінка з hero секцією, highlights, featured products та gallery preview
- **Menu** (`/menu`) - Меню з фільтрацією по категоріям
- **About** (`/about`) - Історія кав'ярні, цінності та відкриті години
- **Gallery** (`/gallery`) - Галерея зображень з lightbox
- **Contact** (`/contact`) - Контактна інформація, форма та карта

## 🚀 Деплой на GitHub Pages

1. Налаштуйте GitHub Pages в налаштуваннях репозиторію
2. Проект автоматично деплоїться при push в `main` або `master` гілку через GitHub Actions
3. Базовий шлях: `/miho_cafe/`

## 🎨 Особливості

- ✅ Повністю responsive дизайн
- ✅ Плавні анімації з Framer Motion
- ✅ Оптимізація продуктивності (lazy loading, code splitting)
- ✅ GPU-прискорені анімації
- ✅ Оптимізовані зображення з lazy loading
- ✅ SEO-friendly структура
- ✅ Доступність (accessibility)

## 📝 TODO / Майбутні покращення

- [ ] Додати Google Maps embed на сторінку Contact
- [ ] Реалізувати відправку форми (backend інтеграція)
- [ ] Додати SEO meta теги та Open Graph зображення
- [ ] Реалізувати багатомовність (SK/EN перемикач)
- [ ] Додати систему онлайн замовлень
- [ ] Додати блог/новини секцію
- [ ] Додати секцію відгуків
- [ ] Додати адмін панель для управління меню

## 👥 Контакти

**Miho Cafe**
- Адреса: Bratislava, Slovakia
- Телефон: +421 XXX XXX XXX
- Email: info@mihocafe.sk

---

© 2025 Miho Cafe. Всі права захищені.

