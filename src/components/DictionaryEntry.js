import {Link} from "react-router-dom";

const DictionaryEntry = ({ entry }) => {
    return (
        <div>
            <div className="word-container">
                <p className="active-word">{entry.word}</p>
                <em className="description-text">{entry.type}</em>
                <em className="description-text">{entry.gender}</em>
            </div>
            <div className="definition-container">
                <p className="definition-text">{entry.definition}</p>
            </div>
        </div>
    )
}

export default DictionaryEntry;