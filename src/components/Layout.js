import Navbar from "./Navbar";
import {IntlProvider} from "react-intl";
import React from "react";
import LanguageSwitch from "./LanguageSwitch";

const Layout = ({children}) => {
    const [locale, setLocale] = React.useState('en'); // Default to English

    const changeLanguage = (newLocale) => {
        setLocale(newLocale);
    };

    const messages = locale === 'pl' ? require('../translations/pl.json') : require('../translations/en.json');

    return(
        <IntlProvider locale={locale} messages={messages}>
            <header>
                <Navbar />
            </header>
            <div  className="main-page">
                <div>
                    {children}
                </div>
            </div>
            <LanguageSwitch changeLanguage={changeLanguage} />
        </IntlProvider>
    )
}

export default Layout;