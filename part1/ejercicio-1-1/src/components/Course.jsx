import Header from './Header'
import Content from "./Content";

  // const Total = (props) => {
  //   return (
  //     <div>
  //       <p>Number of exercises {props.parts[0].exercises + props.parts[0].exercises + props.parts[0].exercises}</p>
  //     </div>
  //   )
  // }


const course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
}
export default course;