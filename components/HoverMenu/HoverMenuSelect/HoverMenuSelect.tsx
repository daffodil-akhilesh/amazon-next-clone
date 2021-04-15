import classes from "./HoverMenuSelect.module.css";
import { useState } from 'react';

const HoverMenuSelect = ({ data, text }) => {
    const [lang, setLang] = useState("en");
    const handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value;
        // console.log(value);
        setLang(value);
    }
    return (
        <div className={classes.HoverMenuSelect}>
            {<div><p>{text}</p></div>}
            <hr />
            {   data.map((language => {
                return (
                    <div className={classes.HoverMenuSelectRadio} key={language.value} >
                        <input type="radio" name={"language"} onChange={handleChange} title={language.title} checked={language.value === lang} value={language.value} />
                        <label>{language.title}</label>
                    </div>
                )
            }))
            }
            <hr />
        </div>
    )
};

export default HoverMenuSelect;
