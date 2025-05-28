  const Part = ({part}) => {
    return (
      <>
        <p>{part.name} {part.exercises}</p>
      </>
    )
  }

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map( part => <Part part={part} />)}
    </div>
  );
}
export default Content;