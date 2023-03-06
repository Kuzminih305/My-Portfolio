import React from 'react';
import classes from "./Project.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {MyProject} from "./myProject/MyProject";

export const Project = () => {
    return (
        <div className={classes.projectsBlock}>
            <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                <h2 className={classes.title}>My Project</h2>
                <div className={classes.projectBlock}>
                <MyProject nameProject={"Name project"} description={"Short description"}/>
                <MyProject nameProject={"Name project"} description={"Short description"}/>
                </div>
            </div>
        </div>
    );
};

