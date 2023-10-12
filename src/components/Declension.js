const Declension = () => {
    return (
        <div>
            <h1>Declension</h1>
            <br />
            <h3>Enter a word to decline</h3>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDeclension1">Word</label>
                    <input type="word" className="form-control" id="inputDeclension1" aria-describedby="declensionHelp" placeholder="Enter a word" />
                    <small id="declensionHelp" className="form-text text-muted">Test</small>
                </div>
                <button type="submit" className="btn btn-primary">Decline</button>
            </form>
        </div>
    )
}

export default Declension;