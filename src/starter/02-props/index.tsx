import { PropsWithChildren } from "react";
//inline function type
function Component({name,id, children}:{name:string, id:number,children?:React.ReactNode}) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>id : {id}</h2>
      <h2>{children}</h2>
    </div>
  );
}

// type alias-props
type ComponentProps = {
  name:string,
  id:number,
  children?:React.ReactNode
}
function Component1({name,id, children}:ComponentProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>id : {id}</h2>
      <h2>{children}</h2>
    </div>
  );
}

// define props type from react
type ComponentProps2 = PropsWithChildren<{
  name:string,
  id:number
}> 
function Component2({name,id, children}:ComponentProps2) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <h2>id : {id}</h2>
      <h2>{children}</h2>
    </div>
  );
} 


export default Component2;
