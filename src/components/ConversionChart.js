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

    function handleChange(evt) {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        });
    }

    useEffect(() => {
        axios.get(`${URL}/conversions`).then(res => setConversions(res.data));
    }, [])
    return (
        <div>
           <form>
                <label>United States Dollars</label>
                <input type='text' name='usd' onChange={handleChange}/>
                <label>Convert To</label>
                <select value={formValues.conversion_value} name='conversion_value' onChange={handleChange}>
                    <option value=''>---Select a Country---</option>
                    {conversions.map(conversion => <option value={conversion.conversion_rate}>{conversion.country_name}</option>)}
                </select>
           </form>
        </div>
    )
}

export default ConversionChart;