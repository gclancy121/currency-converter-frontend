import axios from "axios";
import React, {useState, useEffect} from "react";

function ConversionChart() {
    const URL = 'http://localhost:9000';

    const initialFormValues = {
        usd: '',
        conversion_value: ''
    }
    const [conversions, setConversions] = useState([]);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [converted, setConverted] = useState('');

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
        const maths = mathData.usd * mathData.conversion_value;
        setConverted(maths);
    }

    function FinalNumbers() {
        if (converted === '') {
            return (
                <></>
            )
        } else {
            return (
                <div className='conversions'>
                    <h4>{`${converted} ` }</h4>
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