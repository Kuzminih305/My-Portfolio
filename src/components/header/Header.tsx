import React from 'react';
import classes from "./Header.module.css";
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
    return (
        <div className={classes.header}>
           <Navigation/>
        </div>
    );
};
