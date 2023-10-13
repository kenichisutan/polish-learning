const LanguageSwitch = ({ changeLanguage }) => {
    return (
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3">
            <button
                className="btn btn-danger py-2 dropdown-toggle d-flex align-items-center"
                id="toggle-language"
                type="button"
                data-bs-toggle="dropdown"
                aria-label="Toggle language"
            >
        <span className="visually-hidden" id="language-text">
          Toggle language
        </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="language-text">
                <li>
                    <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        aria-pressed="false"
                        onClick={() => changeLanguage("en")} // Pass a function that calls changeLanguage with "en"
                    >
                        English
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="dropdown-item d-flex align-items-center"
                        aria-pressed="false"
                        onClick={() => changeLanguage("pl")} // Pass a function that calls changeLanguage with "pl"
                    >
                        Polish
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitch;
