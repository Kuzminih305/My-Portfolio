import React from 'react';
import classes from "./Main.module.css";
import styleContainer from "../common/styles/Container.module.css"

export const Main = () => {
    return (
        <div className={classes.mainBlock}>
            <div className={styleContainer.container}>
                <div className={classes.mainInfo}>
                    <h1>My name is Pavel</h1>
                    <h2>HI, I'M A STUDENT</h2>
                    <p>based in Minsk, Belarus.</p>
                    <button>View My Works</button>
                    <button>Contact Me</button>
                </div>
                <div className={classes.mainPhoto}>

                </div>
            </div>
        </div>
    );
};

