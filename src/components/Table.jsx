function Table({ results }) {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr className="table-row-header">
                        <th>Planet Name</th>
                        <th>Host Name</th>
                        <th>Discovery Method</th>
                        <th>Discovery Year</th>
                        <th>Discoery Facilty</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((item, i) => (
                        <tr className="table-row" key={i}>
                            <td><a href={`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/DisplayOverview/nph-DisplayOverview?objname=${item.pl_name}&type=CONFIRMED_PLANET`.replace(/\+/g, "%2B").replace(/\s/g, "+")} 
                            target="_blank">{item.pl_name}</a></td>
                            <td>{item.hostname}</td>
                            <td>{item.discoverymethod}</td>
                            <td>{item.disc_year}</td>
                            <td>{item.disc_facility}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
