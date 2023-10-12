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
                        <th scope="col">Nominative</th>
                        <td>{declension.singular.nominative}</td>
                        <td>{declension.plural.nominative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Genitive</th>
                        <td>{declension.singular.genitive}</td>
                        <td>{declension.plural.genitive}</td>
                    </tr>
                    <tr>
                        <th scope="col">Dative</th>
                        <td>{declension.singular.dative}</td>
                        <td>{declension.plural.dative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Accusative</th>
                        <td>{declension.singular.accusative}</td>
                        <td>{declension.plural.accusative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Instrumental</th>
                        <td>{declension.singular.instrumental}</td>
                        <td>{declension.plural.instrumental}</td>
                    </tr>
                    <tr>
                        <th scope="col">Locative</th>
                        <td>{declension.singular.locative}</td>
                        <td>{declension.plural.locative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Vocative</th>
                        <td>{declension.singular.vocative}</td>
                        <td>{declension.plural.vocative}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DeclensionTable;