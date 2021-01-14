"use strict";

//Задача #1

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
console.log(numberOfFilms);

//Задача #2

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

console.log(personalMovieDB);

//Задача #3

let nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
    star = prompt("На сколько оцените его?", "");

personalMovieDB.movies[nameFilm] = star;
console.log(personalMovieDB);