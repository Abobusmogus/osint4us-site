# CLASSIFIED PROTOCOL - OSINT4US WARNING SITE

Официальный сайт-предупреждение о киберпреступности и правовых последствиях.

## 🚀 Быстрый старт

### Локальная разработка

```bash
npm install
npm start
```

Сайт откроется по адресу http://localhost:3000

### Сборка для production

```bash
npm run build
```

Готовые файлы появятся в папке `build/`.

## 📦 Деплой на GitHub Pages

### Вариант 1: Автоматический деплой через gh-pages

1. Установите gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Добавьте в `package.json`:
```json
"homepage": "https://ВАШ_USERNAME.github.io/НАЗВАНИЕ_РЕПОЗИТОРИЯ",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Деплой:
```bash
npm run deploy
```

### Вариант 2: Ручной деплой

1. Соберите проект:
```bash
npm run build
```

2. Переключитесь на ветку `gh-pages`:
```bash
git checkout -b gh-pages
```

3. Скопируйте содержимое папки `build` в корень репозитория

4. Закоммитьте и запушьте:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. В настройках репозитория GitHub включите GitHub Pages для ветки `gh-pages`

### Вариант 3: GitHub Actions (рекомендуется)

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 📁 Структура проекта

```
osint4us-site/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Главный компонент
│   ├── App.css         # Стили приложения
│   ├── index.js        # Точка входа
│   └── index.css       # Глобальные стили
├── build/              # Собранные файлы (после npm run build)
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Особенности

- Черно-красная цветовая схема
- Военно-хакерский стиль оформления
- Анимации и эффекты (сканирующие линии, шум)
- Адаптивный дизайн
- 8 разделов с подробной информацией о киберпреступности

## 📝 Технологии

- React 18.2.0
- CSS3 с анимациями
- Шрифты: Orbitron, Share Tech Mono

## 📄 Лицензия

Private project
