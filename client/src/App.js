import React,{useEffect,useState} from 'react'
//Codemirror
import CodeMirrorComponent from './codemirrorComponent';

function App() {
  const [backendData,setBackendData] = useState([{}])

  //Pruebas para la api
  const [textCode,setTextCode] = useState("")

  function handleForm(event){
    event.preventDefault()
    //console.log("submit")
    let codeData = {
      code:textCode,
      language:"python"
    }

    fetch("/api/codePost",{
      method:'post',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(codeData)
    }).then(response=>response.json()).then(data=>{
      console.log(data)
    })
  }

  const handleCodeChange = (newCode) => {
    setTextCode(newCode);
  };


  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>{(typeof backendData.users === 'undefined') ? (
        <p>Loading ...</p>
    ):(
      backendData.users.map((user,i)=>(
        <p key={i}>{user}</p>
      ))
    )}
      <div>
          <form onSubmit={handleForm}>
            <input type="submit" value="api post"/> 
          </form>
      </div>

      <div className="App">
        <CodeMirrorComponent defaultCode={"ola\neste es un codigo de codemirror 2"} onCodeChange={handleCodeChange} />
      </div>
    </div>
    
  )
}

export default App
