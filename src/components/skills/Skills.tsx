import React from 'react';
import classes from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.title}>My Skills</h2>
                <div className={classes.skills}>
                    <Skill title={"JS"} description={"I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user."}/>
                    <Skill title={"CSS"} description={"I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user."}/>
                    <Skill title={"React"} description={"I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user."}/>
                </div>
            </div>

        </div>
    );
};

