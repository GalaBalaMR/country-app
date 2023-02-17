import React, { useState, useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";


const AddCountry = () => {
    const [code, setCode] = useState();
    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const [iso, setIso] = useState();
    const [number, setNumber] = useState();
    const [continent, setContinent] = useState();
    const navigate = useNavigate()

    const onChangeCode = (event) => {
        setCode(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeFullName = (event) => {
        setFullName(event.target.value)
    }
    const onChangeIso = (event) => {
        setIso(event.target.value)
    }
    const onChangeNumber = (event) => {
        setNumber(event.target.value)
    }
    const onChangeContinent = (event) => {
        setContinent(event.target.value)
    }

    const onSubmitAdd = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        

        formData.append("code", code);
        formData.append("name", name);
        formData.append("full_name", fullName);
        formData.append("iso3", iso);
        formData.append("number", number);
        formData.append("continent_code", continent);
        console.log(iso)
        await Axios.post("http://localhost:8000/api/countries/store", formData)
        .then((response) => {  
            navigate('/countries')   
          })
          .catch((error) => {
         
            console.log(error)
          })
    };
    return (
        <div>
            <h2>Add country</h2>
            <form onSubmit={onSubmitAdd}>
                <input
                    type="text"
                    className="form-control mb-3"
                    name="code"
                    placeholder="Code"
                    onChange={onChangeCode}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="name"
                    placeholder="Name"
                    onChange={onChangeName}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="full_name"
                    placeholder="Full name"
                    onChange={onChangeFullName}
                />
                <input
                    type="text"
                    className="form-control mb-3"
                    name="iso3"
                    placeholder="Iso3"
                    onChange={onChangeIso}
                />
                <input
                    type="number"
                    className="form-control mb-3"
                    name="number"
                    placeholder="Number"
                    onChange={onChangeNumber}
                />
                <input
                    type="text"
                    className="form-control"
                    name="continent_code"
                    placeholder="Continent code"
                    onChange={onChangeContinent}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddCountry;
