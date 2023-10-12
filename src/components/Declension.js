import {useState} from "react";
import DeclensionTable from "./DeclensionTable";
import Declensions from "../classes/Declensions";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);
    const [gender, setGender] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const word = document.getElementById('inputDeclension1').value;
        let declensions = new Declensions();

        declensions.decline(word);
        setGender(declensions.gender)

        setSelectedDeclension(declensions);
    }

    return (
        <div className="page-content">
            <h1>Declension</h1>
            <br />
            <h3>Enter a word to decline</h3>
            <br />
            <form>
                <div className="form-group">
                    <label htmlFor="inputDeclension1">Word</label>
                    <input type="word" className="form-control" id="inputDeclension1" aria-describedby="declensionHelp" placeholder="Enter a word" />
                    <small id="declensionHelp" className="form-text text-muted">The entered word must be in the nominative case</small>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={handleSubmit}>Decline</button>
            </form>
            <br />
            {selectedDeclension && (
                <div>
                    <div>
                        Grammatical gender: {gender}
                    </div>
                    <div>
                        {DeclensionTable({declension: selectedDeclension})}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Declension;