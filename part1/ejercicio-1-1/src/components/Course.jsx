import Header from './Header'
import Content from "./Content";
import Total from './Total';

const course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}
export default course;