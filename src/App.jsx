import { useState } from "react";
import ToggleElseIf from "./Header";
import Test from "./Test";
import Student from "./First";
import DefaultProps,{ PassJsx } from  "./DefaultProps";

function App() {
  function sayHello() {
    return "hello";
  }

  let collegeArray = ["a", "b", "c", "d"];

  let userObj1 = {
    name: "Abdul",
    age: "29",
    email: "abdul@test.com",
  };
  let userObj2 = {
    name: "Rehman",
    age: "9",
    email: "rehman@test.com",
  };
  let userObj3 = {
    name: "ahmad",
    age: "19",
    email: "ahmad@test.com",
  };

  const [count, setCount] = useState(0);
  const [student, setStudent] = useState("null");

  return (
    <>
       <h1>Displaying Data:</h1>
      <ToggleElseIf user={userObj1} />
      <ToggleElseIf user={userObj2} />
      <ToggleElseIf user={userObj3} />

      <Test college={collegeArray} />

      <button
        onClick={() => {
          if (student == "null") {
            setStudent("Abdul Rehman");
          } else {
            setStudent("null");
          }
        }}
      >
        {student === "null" ? "Show Abdul Rehman" : "Reset to null"}
      </button>

      {student && (
        <Student hello={sayHello()} change={setStudent} name={student} />
      )}

      {/* <ToggleElseIf name="Abdul Rehman" Age="2" email="abdul@mail.com" /> //this is simple props line ========> IMPORTANT NOTE: COMMENT THIS LINE */}

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => {
        if (count >= 1) {
          setCount(count - 1);
        }
      }}>
        Decrease
      </button>

      {
        count == 0 ? <h1>Starting</h1> :
        count == 1 ? <h1>Abdul Rehman</h1> :
        count == 2 ? <h1>Ahmad</h1> :
        count == 3 ? <h1>Shahzaib</h1> :
        count == 4 ? <h1>Husssain</h1> :
        count == 5 ? <h1>Ali</h1> :
        count == 6 ? <h1>Moiz</h1> :
        count == 7 ? <h1>Usman</h1> :
        count == 8 ? <h1>Muneeb</h1> :
        count == 9 ? <h1>Zain</h1> :
        <h1>no found</h1>
      }
      <DefaultProps name="Abdul" />
      <DefaultProps name="Rehman" />
      <DefaultProps  />
      <h1>Passing jsx complete: </h1>
      <PassJsx color="purple"><h1 style={{color:"red"}}>hello</h1></PassJsx>
      <PassJsx><h1 style={{color:"green"}}>hello</h1></PassJsx>
      <PassJsx><h1 style={{color:"purple"}}>hello</h1></PassJsx>
    </>
  );
}

export default App;


// function App(){
//   function fruit(name){
//     alert(name)
//   }
//   return(
//     <div>
//     <FirstTask />
//     <button onClick={()=>fruit("apple")}>Apple</button>
//     </div>
//   )
// }
// export default App