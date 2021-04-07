import React, { useState, useEffect } from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './index.css';

// const emmanuelNames = [
//   {id : "1", name: "Emeka", height: "5 feets 8 inches"},
//   {id : "1", name: "Timilehin", height: "5 feets 8 inches"},
//   {id : "1", name: "Victor", height: "5'8"},
//   {id : "1", name: "Elechukwu", height: "5'8"}
// ];

// function Lake(props){
//   return(
//     <>
//     <h1>{props.name}</h1>
//     {emmanuelNames.map((value) =>{
//       return <div>
//         <h2>{value.name}</h2>
//         <p>Is  {value.height} tall.</p>
//       </div>
//     })}
//     </>
//   )
// }
// function App(){
//   return(
//     <div>
//       <Lake name="Lake Tahoe" />
//       <Lake name="Angora Lake" />
//       <Lake name="Shirley Lake" />
//     </div>
//   )
// }

// function Timilehin(){
//   return(
//     <p>That troublesome boy.</p>
//   )
// }
// function Adelowo(){
//   return(
//     <p>He is a Fullstack developer</p>
//   )
// }

// function App(props){
//   if(props.name === "Adelowo"){
//     return <Adelowo />;
//   }
//   else if(props.name === "Timilehin"){
//     return <Timilehin />;
//   }
// }

// function App(){
//   const [status, setStatus] = useState("Open");
//   const [year, newYear] = useState(2020);
//   const [familyPopulation, newPopulation] = useState(7)
//   return(
//     <>
//     <div>
//       <h1>The family has a population of {familyPopulation}</h1>
//       <button onClick={() => newPopulation(familyPopulation + 1)}>After a New Born Baby</button>
//     </div>
//     <div>
//       <h1>The year is {year}</h1>
//       <button onClick={() => newYear("... Oops  You have to wait for a new year")}>Check This</button>
//     </div>
//     <div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus("Open")}>Open</button>
//       <button onClick={() => setStatus("Back in 5")}>Break</button>
//       <button onClick={() => setStatus("Closed")}>Closed</button>
//     </div>
//     </>
//   );
// }

// function App() {
//   const [checked, setChecked] = useState(false);
//   useEffect(() =>{
//     alert(`Hi, I'm learning react. checked : ${checked}`)
//   })
//   return(
//     <>
//     <input 
//     type="checkbox" 
//     value={checked} 
//     onChange={() => 
//       setChecked(checked => !checked)}/>
//     {checked ? "Checked" : "Not Checked"}
//     </>
//   )
// }



// function App(){
//   const[val, setVal] = useState('');
//   const[val2, setVal2] = useState('');
//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   },[val])
//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2])
//   return(
//     <>
//     <label>
//       Favorite Phrase: E be things
//       <input value= {val}
//       onChange = {e => setVal(e.target.value)}/>
//     </label>
//     <br />
//     <label>
//       Second Favorite Phrase: We mueeve
//       <input value = {val2}
//       onChange = {e => setVal2(e.target.value)}/>
//     </label>
//     </>
//   )
// }



// function GitHubApi({login}){
//   const[data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//     .then(res => res.json())
//     .then(setData)
//     .catch(console.error);
//   },[]);

//   if(data){ 
//     return (
//     <div>
//       <h1>{JSON.stringify(data)}</h1>
//       <p>{data.login}</p>
//       <p>{data.avatar_url}</p>
//       <img src={data.avatar_url} />
//       <p>{data.url}</p>
//     </div>
//     );

//   }
//   return null;
// }

// function App(){
//   return<GitHubApi login="shield01" />;
// }


function Checkbox(){
  const [checked, setChecked] = useState(false)
  return(
    <>
    <input type= "checkbox" value={checked}
    onChange={() => setChecked(checked => !checked)
    } />
    {checked ? "checked" : "not checked"}
    </>
  )
}

ReactDOM.render(
  <Checkbox />,
  document.getElementById('root')
);


