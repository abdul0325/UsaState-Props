import { useState } from "react";
import ToggleElseIf from "./ObjectsAsProps";
import Student from "./FunctionAsProps";
import FirstTask from "./PracticeTask";
import DefaultProps,{ PassJsx } from  "./DefaultProps";
import ArrayAsPops from "./ArrayAsProps";

function App() {
  
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

  let collegeArray = ["a", "b", "c", "d"];

  function sayHello() {
    return "hello";
  }

  const [count, setCount] = useState(0);
  const [student, setStudent] = useState("null");

  return (
    <>
       <h1 style={{color:"blue"}}>Practice == Props & Defualt Props , Passing jsx , Passsing Objects & Arrays as Props, Else-if & Switch , Toggle:</h1>
        <hr/>
        
        <h1 style={{color:"green"}}>Objects as Props :</h1>
      <ToggleElseIf user={userObj1} />
        <hr/>
      <ToggleElseIf user={userObj2} />
        <hr/>
      <ToggleElseIf user={userObj3} />
      <hr/>
      <ArrayAsPops college={collegeArray} />
      <hr/>
      
      <h1 style={{color:"green"}}>Funtion & Toggle :</h1>
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
      <hr/>

      {/* <h1>Simple Props passing : </h1>
      <ToggleElseIf name="Abdul Rehman" Age="2" email="abdul@mail.com" /> //this is simple props line ========> IMPORTANT NOTE: COMMENT THIS LINE */}

      <h1 style={{color:"green"}}>Switch and Else if Count : </h1>
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
      <hr/>
      <h1 style={{color:"green"}}>Passing Defualt Props : </h1>
      <DefaultProps name="Abdul" />
      <DefaultProps name="Rehman" />
      <DefaultProps  />
      <hr/>
      <h1 style={{color:"green"}}>Passing jsx complete & Styles as Props: </h1>
      <PassJsx color="purple"><h1 style={{color:"red"}}>hello</h1></PassJsx>
      <PassJsx><h1 style={{color:"green"}}>hello</h1></PassJsx>
      <PassJsx><h1 style={{color:"grey"}}>hello</h1></PassJsx>
      <hr/>
      <h1 style={{color:"green"}}>First Task : </h1>
      <FirstTask/>
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