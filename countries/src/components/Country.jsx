const Country = ({ country, single }) => {

  if (single) {
    return (
      <div>
        <h2 >{country.name.common}</h2>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([code, name]) => (
            <li key={code}>
              {code}: {name}
            </li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    );

  } else {
    return (
      <div>
        <p >{country.name.common}</p>
      </div>
    );

  }
}
export default Country;