import {useState} from "react";
import DeclensionTable from "./DeclensionTable";

const Declension = () => {
    const [selectedDeclension, setSelectedDeclension] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();

        let declension = {
            singular: {
                nominative: "Piwo",
                genitive: "Piwa",
                dative: "Piwu",
                accusative: "Piwo",
                instrumental: "Piwo",
                locative: "Piwie",
                vocative: "Piwem"
            },
            plural: {
                nominative: "Piwa",
                genitive: "Piw",
                dative: "Piwom",
                accusative: "Piwa",
                instrumental: "Piwami",
                locative: "Piwach",
                vocative: "Piwami"
            }
        }

        setSelectedDeclension(declension);
    }

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
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            <br />
            {selectedDeclension && (
            DeclensionTable({declension: selectedDeclension})
            )}
        </div>
    )
}

export default Declension;