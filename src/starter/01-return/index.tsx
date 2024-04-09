
// by default in typescript react component return jsx element but we can define another retutn type
function Component():JSX.Element |null |string {
  return null
  return "hello"
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>React-typescript Return Type</h2>
    </div>
  );
}
export default Component;
