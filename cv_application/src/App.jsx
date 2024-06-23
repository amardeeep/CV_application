import { useState } from 'react'
import Input from './Input.jsx'

import './App.css'

function App() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    phone:0,
    schoolName:"",
    titleOfStudy:"",
    dateOfJoining:"",
    duration:0,
    companyName:"",
    positionTitle:"",
    dateJoining:"",
    dateLeaving:"",
    responsibilities:"",
    checkbox:false,
  })
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  const [isSave,setIsSave]=useState(false)
  return(
    <div className='App'>
      <div className="editSeciton" >
            <div className='Personal card'>
              <h2>Personal Details :</h2>
              <Input type="email" name="name" value={formData.name} disabled={isSave} onChange={handleChange}/>        
              <Input type="email" name="email" value={formData.email} disabled={isSave} onChange={handleChange}/>
              <Input type="number" name="phone" value={formData.phone} disabled={isSave} onChange={handleChange}/>
            </div>
            <div className="EduExperience card">
              <h2>Education Experience :</h2>
              <Input type="text" name="schoolName" value={formData.schoolName} disabled={isSave} onChange={handleChange} />
              <Input type="text" name="titleOfStudy" value={formData.titleOfStudy} disabled={isSave} onChange={handleChange}/>
              <Input type="date" name='dateJoining' value={formData.dateJoining} disabled={isSave} onChange={handleChange}/>
              <Input type="number" name="duration" value={formData.duration} disabled={isSave} onChange={handleChange}/>
            </div>
            <div className="WorkExperience card">
              <h2>Work Experience :</h2>
              <Input type="text" name="companyName" value={formData.companyName} disabled={isSave} onChange={handleChange}/>
              <Input type="text" name="positionTitle" value={formData.positionTitle} disabled={isSave} onChange={handleChange}/>
              <Input type="date" name="dateOfJoining" value={formData.dateOfJoining} disabled={isSave} onChange={handleChange}/>
              <Input type="date" name="dateLeaving" value={formData.dateLeaving} disabled={isSave} onChange={handleChange}/>
              <Input type="checkbox" name="checkbox"  value={formData.checkbox} disabled={isSave} onChange={handleChange}/>
              <Input type="text" name="responsibilities" value={formData.responsibilities} disabled={isSave} onChange={handleChange}/>
            </div>
            <div className='buttons card'>
              <button onClick={()=>{setIsSave(false)}}>Edit</button>
              <button onClick={()=>{setIsSave(true)}}>Submit</button>
            </div>
          </div>
        <div className="displaySection">
        {(isSave)?(
          <div>
            <div className='PersonalD'>
              <h2>Personal Details :</h2>
              <div>
                <h2>{formData.name}</h2>
                <h3>{formData.email}</h3>
                <h3>{formData.phone} </h3>
              </div>
            </div>
            <div className='EduD'>
                <h2>Education Details :</h2>
            <div>
                <h3>{formData.schoolName}</h3>
                <h3>{formData.titleOfStudy}</h3>
                <h3>{formData.dateJoining}</h3>
                <h3>{formData.duration}</h3>
            </div>
            </div>
            <div className="WorkD">
            <h2>Work Experience :</h2>
            <div>
                <h3>{formData.companyName}</h3>
                <h3>{formData.positionTitle} </h3>
                <h3>{formData.dateOfJoining}</h3>
                <h3>{formData.dateLeaving}</h3>
                <h3>{formData.responsibilities} </h3>
            </div>
        </div>
        </div>):(<h3>Press submit to preview your resume!</h3>)}
            
        </div>
    </div>
  )
}

export default App
