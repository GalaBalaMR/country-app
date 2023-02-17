import React,{ useState } from "react";
import { useSelector } from "react-redux";

const ContinentSelect = (props) => {
    const [selected, setSelected] = useState('all')
    const continents = useSelector((state) => state.country.continents);

    const continentsSelect = continents.map((continent) => {
        return (
            <option key={continent.code} value={continent.code}>
                {continent.name}
            </option>
        );
    });

    const onChangeSelect = (event) => {
        setSelected(event.target.value)
        props.onFilterContinents(event.target.value)
    };

    return (
        <select className="form-select" value={selected} onChange={onChangeSelect}>
            <option value="all">all</option>
            {continentsSelect}
        </select>
    );
};

export default ContinentSelect;
