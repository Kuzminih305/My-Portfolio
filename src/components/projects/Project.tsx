import React from "react";
import classes from "./Project.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import {MyProject} from "./myProject/MyProject";
import {Title} from "../common/title/Title";
import socialImg from "../assets/image/social.jpg"
import todolistImg from "../assets/image/To.jpg"




export const Project = () => {

    const social = {
        backgroundImage: `url(${socialImg})`
    }
    const todoList = {
        backgroundImage: `url(${todolistImg})`
    }

    return (
        <div className={classes.projectsBlock}>
            <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={classes.projectBlock}>
                <MyProject style={social} nameProject={"Social network"} description={"Не следует, однако, забывать о том, что постоянное информационно-техническое обеспечение нашей деятельности играет важную роль в формировании новых предложений! Соображения высшего порядка, а также повышение уровня гражданского сознания напрямую зависит от соответствующих условий активизации. Повседневная практика показывает, что новая модель организационной деятельности представляет собой интересный эксперимент проверки модели развития."}/>
                <MyProject style={todoList} nameProject={"Todo List"} description={"Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. Дорогие друзья, реализация намеченного плана развития требует от нас анализа существующих финансовых и административных условий! Повседневная практика показывает, что рамки и место обучения кадров создаёт предпосылки качественно новых шагов для новых предложений? Разнообразный и богатый опыт рамки и место обучения кадров в значительной степени обуславливает создание системы масштабного изменения ряда параметров."}/>
                </div>
            </div>
        </div>
    );
};

