import "../styles/Dictionary.css";

const Dictionary = () => {
    async function handleSubmit(event) {
        event.preventDefault();
        const entry = document.getElementById('inputDictionary1').value;
        // uncapitalize the first letter
        const lowerCaseEntry = entry.charAt(0).toLowerCase() + entry.slice(1);
        console.log(lowerCaseEntry);
        // dictionary search logic
    }

    return (
        <div className="page-content">
            <h1>Dictionary</h1>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDictionary1">Enter a word to search</label>
                    <input type="word" className="form-control" id="inputDictionary1" aria-describedby="dictionaryHelp" placeholder="śniadanie" />
                    <small id="dictionaryHelp" className="form-text text-muted">Enter a Polish word above.</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default Dictionary;