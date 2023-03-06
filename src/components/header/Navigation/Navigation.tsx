import React from 'react';
import classes from "./Navigation.module.css";

export const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

