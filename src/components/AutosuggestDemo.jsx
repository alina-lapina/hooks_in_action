import React, {useState, useRef, useEffect} from "react";
import "../css/autosugget.css";

export default function AutosuggestDemo () {

    const [chosen, setChosen] = useState("");
    useEffect(() => {console.log({ newState: chosen })},[chosen]);

    const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda",
        "Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh",
        "Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina",
        "Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia",
        "Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China",
        "Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus",
        "Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
        "Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland",
        "France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar",
        "Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti",
        "Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man",
        "Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait",
        "Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
        "Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
        "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat",
        "Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles",
        "New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan",
        "Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
        "Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa",
        "San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone",
        "Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan",
        "Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland",
        "Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo",
        "Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu",
        "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay",
        "Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia",
        "Zimbabwe"];

    return (
        <div className="page">
            <h3>Autosuggest Demo Page</h3>
            <Search items={countries}
                    setChosen={ (item) => setChosen(item) }
                    placeholder="Country"/>
        </div>
    );
}

export const Search = ({items = [],
                        setChosen = (item) => console.log("chosen item:", item),
                        placeholder = "Search"}) => {
    // inspired: https://www.w3schools.com/howto/howto_js_autocomplete.asp

    const dom = useRef(null);

    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [active, setActive] = useState(-1);

    const handleInput = (e) => {
        setValue(e.target.value);
        e.target.value === ""
            ? setSuggestions([])
            : setSuggestions(items.filter(i =>
                i.toLowerCase().search(e.target.value.toLowerCase()) > -1));
    };

    function keyHandler(e) {
        const keys = { DOWN: 40, UP: 38, ENTER: 13 };
        switch (e.keyCode) {
            case keys.DOWN: {
                setActive((active + 1) % suggestions.length);
                break;
            }
            case keys.UP: {
                setActive(active - 1 < 0 ? suggestions.length - 1 : active - 1);
                break;
            }
            case keys.ENTER: {
                e.preventDefault();
                console.log("Chosen by ENTER", suggestions[active], value);
                handleChoice(active === -1 ? value : suggestions[active]);
                break;
            }
            default: break;
        }
    }

    function handleChoice(choice) {
        setSuggestions([]);
        setValue(choice);
        dom.current.focus();
        setActive(-1);

        choice.length > 0 && setChosen(choice);
    }

    function highlight(origin, substring) {
        const i = origin.toLowerCase().search(substring.toLowerCase());
        return  <>
            <span>{origin.substr(0, i)}</span>
            <span style={{color:"red"}}>{origin.substr(i, substring.length)}</span>
            <span>{origin.substr(i+substring.length, origin.length)}</span>
        </>;
    }

    // TODO: convert divs to list items (li)
    // FIXME: scroll and limit amount of suggestion shown by screen size

    // FIXME: sanitize input !!!!

    // TODO: async fetch ?

    // TODO: allow styling api
    // TODO: allow filtering api (strategy)

    return (
        <>
            <div className="autocomplete" style={{width:"300px"}}>
                <input type="search" name="countrySearch" ref={dom}
                       placeholder={placeholder} value={value} onChange={handleInput}
                       onKeyDown={keyHandler} />
                <div id="autocomplete-list" className="autocomplete-items">
                    {suggestions.map((suggestion, i) => (
                        <div key={i} className={i===active ? "autocomplete-active" : "autocomplete"}
                             onClick={(e) => {
                                 e.preventDefault();
                                 console.log("Chosen by click", suggestion);
                                 setActive(i);
                                 handleChoice(suggestion);
                             }}>
                            {highlight(suggestion,value)}
                        </div>))}
                </div>
            </div>
            <button onClick={() => {
                console.log("Chosen by search button", value);
                handleChoice(value)
            }}>Search</button>
        </>
    );
};