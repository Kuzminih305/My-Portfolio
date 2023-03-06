import React from 'react';
import classes from "./MyProject.module.css";

type MyProjectPropsType = {
    nameProject: string
    description: string
}

export const MyProject = (props: MyProjectPropsType) => {
    return (
        <div className={classes.myProjectBlock}>
            <div className={classes.imgBlock}>
                {/*<div className={classes.project_img}>img</div>*/}
                <a className={classes.project_img} href={""}>Click</a>
            </div>
            <div className={classes.projectInfoBlock}>
                <h2>{props.nameProject}</h2>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

