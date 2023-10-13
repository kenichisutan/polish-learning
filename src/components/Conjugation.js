const Conjugation = () => {
    const handleSubmit = (event) => {

    }

    return (
        <div className="page-content">
            <h1>Conjugation</h1>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputConjugation1">Enter a word to conjugate</label>
                    <input type="word" className="form-control" id="inputConjugation1" aria-describedby="conjugationHelp" placeholder="mówić" />
                    <small id="conjugationHelp" className="form-text text-muted">The entered word must be a verb in the infinitive form.</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Conjugate</button>
            </form>
            <br />
        </div>
    )
}

export default Conjugation;