# Учебный Frontend проект Toxin

## Технологии:

- PUG
- SCSS
- JS, jQuery

### UI-kit:<br/>

- [UI-kit](https://nicoproject.github.io/toxin-reworked/ui-kit.html)
- [cards](https://nicoproject.github.io/toxin-reworked/cards.html)

### Страницы:<br/>

- [landing page](https://nicoproject.github.io/toxin-reworked/landing-page.html)
- [search room](https://nicoproject.github.io/toxin-reworked/search-room.html)
- [room details](https://nicoproject.github.io/toxin-reworked/room-details.html)
- [sign-in](https://nicoproject.github.io/toxin-reworked/sign-in.html)
- [sign-up](https://nicoproject.github.io/toxin-reworked/register.html)

---

### Установка:<br/>
Все команды выполняются в терминале вашего IDE. Должны быть установлены свежие node.js и git

1. Перейдите в родительский каталог установки, например 'web-projects' на диске D `cd d:/web-projects`
2. Клонируйте репозиторий (создаст папку toxin-reworked): `git clone https://github.com/nicoproject/toxin-reworked/`<br/>
3. Перейдите в папку проекта: `cd toxin-reworked`<br/>
4. Установите модули для сборки проекта: `npm i`<br/>

---

### Основные команды:<br/>

`npm run dev` - запуск веб-сервера по адресу http://localhost:8000/, режим разработки (_development mode_) <br/>
`npm run build` - сборка в режиме watch, перекомпилируется при изменении в графе зависимостей webpack<br/>
`npm run production` - сборка в режиме production (_produciton mode_), результат сборки (минимизированный и объединенный код) сохраняется в папку _dist_<br/>
`npm run lint` - проверка синтаксиса js-файлов с помощью [Eslint](https://eslint.org/)<br/>
`npm run deploy` - копирует папку dist в ветку _gh-pages_ <br>https://nicoproject.github.io/toxin-reworked/index.html<br/>

---
