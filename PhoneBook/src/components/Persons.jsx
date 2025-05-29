const persons = ({array}) => {
  return (
    <div>
      <ul>
        {array.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  );
}
export default persons;