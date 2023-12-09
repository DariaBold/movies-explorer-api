# Дипломный проект movies-explorer-api.Backend

## О проекте 
Проект movies позволяет искать, добавлять и удалять понравившиеся фильмы. Все лайкнутые фильмы находятся на странице сохраненных фильмов. При редактировании профиля можно менять почту и имя.  
Бекенд часть создает пользователя и проверяет его наличие в БД. Также здесь реализовано добавление фильмов и действия с ними. Присутствует общая валидация с использованием библиотеки joi, есть защита по кол-ву запросов по IP. Все ошибки приходят в новый файл error.log.  


## Что использовано
- JavaScript
- Node.js
- Express
- MongoDB  

## Развёртывание проекта:

`npm i` — установка зависимостей;
`npm run start` — запуск серверa;  
`npm run dev` — запуск сервера с hot-reload;  

Ссылка на backend: https://api.movies.daria.nomoredomainsrocks.ru
