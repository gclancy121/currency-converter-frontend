function findCurrencyName(conversion) {
    if (conversion === '0.727') {
        return 'British pound'
    } else if (conversion === '0.845') {
        return 'Euro'
    } else if (conversion === '0.914') {
        return 'Swiss franc'
    } else if (conversion === '1.254') {
        return 'Canadian dollar'
    } else if (conversion === '1.331') {
        return "Australian dollar"
    } else if (conversion === '1.343') {
        return 'Singapore dollar'
    } else if (conversion === '1.414') {
        return 'New Zealand dollar'
    } else if (conversion === '1.654') {
        return 'Bulgarian lev'
    } else if (conversion === '3.222') {
        return 'Georgian lari'
    } else if (conversion === '3.23') {
        return "Israeli shekel"
    } else if (conversion === '3.75') {
        return 'Saudi riyal'
    } else if (conversion === '3.862') {
        return 'Polish złoty'
    } else if(conversion === '4.16') {
        return "Romanian leu"
    } else if(conversion === '5.394') {
        return 'Brazilian Real'
    } else if(conversion === '6.287') {
        return "Danish krone"
    } else if(conversion === '6.36') {
        return "Croatian kuna"
    } else if(conversion === '6.449') {
        return 'Chinese yuan'
    } else if(conversion === '7.773') {
        return 'Hong Kong dollar'
    } else if(conversion === '8.577') {
        return 'Swedish krona'
    } else if(conversion === '8.59') {
        return 'Norwegian krone'
    } else if(conversion === '8.85') {
        return 'Turkish lira'
    } else if(conversion === '8.988') {
        return 'Moroccan dirham'
    } else if(conversion === '14.779') {
        return 'South African rand'
    } else if(conversion === '20.018') {
        return 'Zambian kwacha'
    } else if(conversion === '20.272') {
        return 'Mexican peso'
    } else if(conversion === '21.678') {
        return 'Czech koruna'
    } else if(conversion === '52.102') {
        return 'Macedonian Denar'
    } else if(conversion === '73.654') {
        return "Russian rouble"
    } else if (conversion === '73.918') {
        return "Indian rupee"
    } else if(conversion === "94.918") {
        return "Argentinian peso"
    } else if(conversion === '99.531') {
        return "Serbian dinar"
    } else if(conversion === '103.52') {
        return 'Albanian lek'
    } else if(conversion === '109.754') {
        return "Japanese yen"
    } else if(conversion === '126.989') {
        return 'Icelandic króna'
    } else if(conversion === '303.141') {
        return "Hungarian forint"
    } else if(conversion === '554.531') {
        return "West African franc"
    } else if(conversion === '620.785') {
        return 'Costa Rican colón '
    } else if(conversion === '758.955') {
        return 'Chilean peso'
    } else if(conversion === '1143.958') {
        return 'Korean won'
    } else if(conversion === '3743.59') {
        return 'Colombian peso'
    } else if(conversion === '3829.978') {
        return 'Malagasy Ariary'
    } else if(conversion === '14308.144') {
        return 'Indonesian rupiah'
    } else {
        return "something broke"
    }
}
export default findCurrencyName;