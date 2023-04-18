import React from 'react';
import classes from "./Title.module.scss";

type TitlePropsType = {
    text: string
}


export const Title = (props: TitlePropsType) => {
    return (
        <div className={classes.title}>
            {/*<h2 className={classes.titleH2}>portfolio</h2>*/}
            <p className={classes.titleP}>{props.text}</p>
        </div>

    );
};