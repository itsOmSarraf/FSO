/* eslint-disable react/prop-types */
export default function Course(props) {
  return (
    <>
      <h3>
        {props.course} : {props.count}
      </h3>
    </>
  );
}
