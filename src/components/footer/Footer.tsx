import React from 'react';
import classes from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={classes.footerBlock}>
            <div className={`${styleContainer.container} ${classes.FooterContainer}`}>
                <div className={classes.title}>Pavel.K</div>
                    <div className={classes.infoBlock}>
                        <div className={classes.info}></div>
                        <div className={classes.info}></div>
                        <div className={classes.info}></div>
                        <div className={classes.info}></div>
                    </div>
                <span className={classes.reserved}>All rights reserved</span>
            </div>
        </div>
    );
};

