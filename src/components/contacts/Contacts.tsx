import React from 'react';
import classes from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/title/Title";

export const Contacts = () => {
    return (
        <div className={classes.contactsBlock}>
            <div className={`${styleContainer.container} ${classes.contactsContainer}`}>
                <Title text={"Contacts"}/>
                <form className={classes.formBlock}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                    <button type={"submit"} className={classes.btnContacts}>Click</button>
                </form>
            </div>
        </div>
    );
};

