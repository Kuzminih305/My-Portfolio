import React from 'react';
import classes from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={classes.contactsBlock}>
            <div className={`${styleContainer.container} ${classes.contactsContainer}`}>
                <h2 className={classes.title}>Contacts</h2>
                <form className={classes.formBlock}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                </form>
                <button className={classes.btnContacts}>Click</button>
            </div>
        </div>
    );
};

