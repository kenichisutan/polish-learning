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
                            (kto? co?)
                        </th>
                        <td>{declension.singular.nominative}</td>
                        <td>{declension.plural.nominative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Genitive
                            (kogo? czego?)
                        </th>
                        <td>{declension.singular.genitive}</td>
                        <td>{declension.plural.genitive}</td>
                    </tr>
                    <tr>
                        <th scope="col">Dative
                            (komu? czemu?)
                        </th>
                        <td>{declension.singular.dative}</td>
                        <td>{declension.plural.dative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Accusative
                            (kogo? co?)
                        </th>
                        <td>{declension.singular.accusative}</td>
                        <td>{declension.plural.accusative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Instrumental
                            ((z) kim? (z) czym?)
                        </th>
                        <td>{declension.singular.instrumental}</td>
                        <td>{declension.plural.instrumental}</td>
                    </tr>
                    <tr>
                        <th scope="col">Locative
                            (o kim? o czym?)
                        </th>
                        <td>{declension.singular.locative}</td>
                        <td>{declension.plural.locative}</td>
                    </tr>
                    <tr>
                        <th scope="col">Vocative
                            (o!)
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