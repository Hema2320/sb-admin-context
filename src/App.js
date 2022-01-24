import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Allstudents from './components/Allstudents';
import Addstudents from './components/Addstudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Editstudents from './components/Editstudents';
import React,{useState} from 'react'

export const StudentContext = React.createContext();
function App() {
  let data = {
    earning:"1,00,000",
    annual:"2,50,00000",
    task:20,
    pending:26,
  }
  let [students,setStudents] = useState([
    {
      name:"Hema",
      email:"hema2320@gmail.com",
      mobile:"909084561",
      class:"B30WD"
    },
    {
      name:"VenkateshIyer",
      email:"venky2512@gmail.com",
      mobile:"834512900",
      class:"B30WD"
    },
    {
      name:"Rabada",
      email:"rabada@gmail.com",
      mobile:"959493921",
      class:"B30WD"
    },
    {
      name:"Anrich",
      email:"anrich@gmail.com",
      mobile:"12345678",
      class:"B30WD",
    }
]);

  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"20% 80%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
              <StudentContext.Provider value={{students,setStudents}}>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<Allstudents />}/>
                      <Route path = '/add-student' element={<Addstudents />}/>
                      <Route path='/edit-student/:id' element={<Editstudents />}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
                </StudentContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;