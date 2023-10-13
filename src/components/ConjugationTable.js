const conjugationTable = ({ conjugation }) => {
    return (conjugationTablePresent(conjugation.present))
}

const conjugationTablePresent = ( conjugation ) => {
    return (
        <div className="table-responsive">
            <h4>Present</h4>
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">Person</th>
                    <th scope="col">Singular</th>
                    <th scope="col">Plural</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="col">1st
                        <span className="table-detail">(ja)</span>
                    </th>
                    <td>{conjugation.first.singular}</td>
                    <td>{conjugation.first.plural}</td>
                </tr>
                <tr>
                    <th scope="col">2nd
                        <span className="table-detail">(ty)</span>
                    </th>
                    <td>{conjugation.second.singular}</td>
                    <td>{conjugation.second.plural}</td>
                </tr>
                <tr>
                    <th scope="col">3rd
                        <span className="table-detail">(on/ona/ono)</span>
                    </th>
                    <td>{conjugation.third.singular}</td>
                    <td>{conjugation.third.plural}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default conjugationTable;