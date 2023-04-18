import React from 'react';
import classes from "./MyProject.module.scss";

type MyProjectPropsType = {
    nameProject: string
    description: string
    style: {
        backgroundImage: string
    }
}

export const MyProject = (props: MyProjectPropsType) => {
    return (
        <div className={classes.myProjectBlock}>
            <div className={classes.imgBlock} style={props.style}>
                <a className={classes.project_imgBtn} href={""}>Смотреть</a>
            </div>
            <div className={classes.projectInfoBlock}>
                <h2 className={classes.projectTitle}>{props.nameProject}</h2>
                <span className={classes.description}>{props.description}</span>
            </div>
        </div>
    );
};

