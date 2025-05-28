const Total = ({parts}) => {

  return (
    <div>
      <strong>Total of {parts.reduce((prevValue, currentValue) => prevValue + currentValue.exercises, 0)} exercises</strong>
    </div>
  );
}
export default Total;