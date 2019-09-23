import React, {useState} from "react";
import "../css/autosugget.css";

export default function AutosuggestDemo () {

    // FIXME: sanitize input

    const [value, setValue] = useState("");
    const handleInput = (e) => {
        setValue(e.target.value);
        const s = countries.filter(i => i.toLowerCase().search(e.target.value.toLowerCase()) > -1)
            .map(i => highlight(i,e.target.value.toLowerCase()));
        setSuggestion([...s]);
    };


    function highlight(origin, highlight) {
        const i = origin.toLowerCase().search(highlight.toLowerCase());
        return  <>
            <span>{origin.substr(0, i)}</span>
            <span style={{color:"red"}}>{origin.substr(i, highlight.length)}</span>
            <span>{origin.substr(i+highlight.length, origin.length)}</span>
        </>;
    }

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
    const [suggestions, setSuggestion] = useState([]);


    return (
        <div className="page">
            <h3>Autosuggest Demo Page</h3>
            <Search
                value={value}
                onChange={handleInput}
                suggestions={suggestions}
                onSubmit={(e) => {e.preventDefault();console.log("submit?", e);}}
            />
        </div>
    );
}

export const Search = ({value, onChange, onSubmit, suggestions}) => {

    // inspired: https://www.w3schools.com/howto/howto_js_autocomplete.asp

    const [active, setActive] = useState(-1);

    // TODO: edge cases

    function keyHandler(e) {
        if (e.keyCode == 40) {/*DOWN*/
            setActive((active) => active+1);
        } else if (e.keyCode == 38) { /*UP*/
            setActive((active) => active-1);
        } else if (e.keyCode == 13) {/*ENTER*/
            e.preventDefault();
            if (active > -1) {
                console.log("choosen2", suggestions[active]);
            }
        }
    }

    // TODO: convert divs to list items (li)
    // TODO: return useful object

    return (
        <form autoComplete="off"
              onSubmit={onSubmit}>
            <div className="autocomplete" style={{width:"300px"}}>
                <input type="search" name="countrySearch"
                       placeholder="Country" value={value} onChange={onChange}
                       onKeyDown={keyHandler} />
                <div id="autocomplete-list" className="autocomplete-items">
                    {suggestions.map((suggestion, i) => (
                        <div key={i} className={i===active? "autocomplete-active" : "autocomplete"}
                             onClick={() => console.log("choosen", suggestion)}>
                            {suggestion}
                        </div>))}
                </div>
            </div>
            <input type="submit" value="Search" />
        </form>
    );
};