import "../styles/Declension.css"

const DeclensionTable = ({ declension }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Case</th>
                        <th scope="col">Singular</th>
                        <th scope="col">Plural</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Nominative
                            <span className="table-detail">(kto? co?)</span>
                        </th>
                        <td>{declension.singular.nominative}</td>
                        <td>{declension.plural.nominative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Genitive
                            <span className="table-detail">(kogo? czego?)</span>
                        </th>
                        <td>{declension.singular.genitive}</td>
                        <td>{declension.plural.genitive}</td>
                    </tr>
                    <tr>
                        <th scope="col">Dative
                            <span className="table-detail">(komu? czemu?)</span>
                        </th>
                        <td>{declension.singular.dative}</td>
                        <td>{declension.plural.dative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Accusative
                            <span className="table-detail">(kogo? co?)</span>
                        </th>
                        <td>{declension.singular.accusative}</td>
                        <td>{declension.plural.accusative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Instrumental
                            <span className="table-detail">((z) kim? (z) czym?)</span>
                        </th>
                        <td>{declension.singular.instrumental}</td>
                        <td>{declension.plural.instrumental}</td>
                    </tr>
                    <tr>
                        <th scope="col">Locative
                            <span className="table-detail">(o kim? o czym?)</span>
                        </th>
                        <td>{declension.singular.locative}</td>
                        <td>{declension.plural.locative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Vocative
                            <span className="table-detail">(o!)</span>
                        </th>
                        <td>{declension.singular.vocative}</td>
                        <td>{declension.plural.vocative}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DeclensionTable;