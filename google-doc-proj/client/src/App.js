import TextEditor from "./TextEditor"

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"

import Help from "./Help";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Help/>} exact/>

        <Route path="/documents/:id" element={<TextEditor/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
