import React from "react";

function SiteHeader() {
    return (
        <div className='site-header'>
            <div className='row'>
                <h2 className="header-text">Currency Conversion Rates</h2>
                <p>Conversion data taken from <a href='https://data.oecd.org/conversion/exchange-rates.htm' target='_blank' rel='noreferrer'>OECD Data.</a></p>
            </div>
        </div>
    )
}

export default SiteHeader;