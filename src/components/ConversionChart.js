import axios from "axios";
import React, {useState, useEffect} from "react";
import findCurrencyName from "./currencyName";

function ConversionChart() {
    const URL = 'http://localhost:9000';

    const initialFormValues = {
        usd: '',
        conversion_value: '',
    }
    const [conversions, setConversions] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [converted, setConverted] = useState('');
    const [currencyName, setCurrencyName] = useState('');

    function handleChange(evt) {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    }

    const onSubmit = evt => {
        evt.preventDefault();
        const mathData = {
            usd: formValues.usd,
            conversion_value: formValues.conversion_value
        }
        setCurrencyName(findCurrencyName(mathData.conversion_value));
        console.log(currencyName);
        const maths = mathData.usd * mathData.conversion_value;
        setConverted(Math.round(maths * 100)/100);
    }

    function FinalNumbers() {
        if (converted === '') {
            return (
                <></>
            )
        } else {
            return (
                <div className='conversions'>
                    <h4>{`${converted} ${currencyName}` }</h4>
                </div>
            )
        }
    } 
    useEffect(() => {
        axios.get(`${URL}/conversions`).then(res => setConversions(res.data));
    }, [])
    return (
        <div>
           <form onSubmit={onSubmit}>
                <label>United States Dollars</label>
                <input type='text' name='usd' onChange={handleChange}/>
                <label>Convert To</label>
                <select value={formValues.conversion_value} name='conversion_value' onChange={handleChange}>
                    <option value=''>---Select a Country---</option>
                    {conversions.map(conversion => <option value={conversion.conversion_rate}>{conversion.country_name}</option>)}
                </select>
                <input type='submit' />
           </form>
           <FinalNumbers />
        </div>
    )
}

export default ConversionChart;