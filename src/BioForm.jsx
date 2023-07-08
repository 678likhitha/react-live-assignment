import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import {GetProfessionalSkills,getHobbies, getFavSubject, getvirtualconnects} from './getService'; 
import Ratings from './Ratings';
import './App.css'
const bloodGroups = [
    "o+ve","b+ve", "o-neg","b-neg"
];

const BioForm = () => {
    const [studentInfo, setStudentInfo] = useState('');
    const [bloodGroup, setBloodGroup] =  useState('');
    const [fileName, setFileName] = useState('');
    const [selectedSkills, setSelectedSkills] = useState([]); 
    const [selectHobbies, setSelectedHobbies] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [professionalSkills, setprofessionalSkills] = useState([]);
    const [hobbies, setHobbies] = useState([]);
    const [favoriteSubjects, setFavouriteSubjects] = useState([]);
    const [vitrualConnects, setVirtualConnects] = useState(null);
    const [toggle , setToggle] = useState(false);
    const fileInputRef = useRef(null);

    useEffect(()=> {
        GetProfessionalSkills().then((Res)=>{
            const skills = Res.data.result[0].skills;
            skills.forEach(element => {
                element['label'] = element.value;
            });
            setprofessionalSkills(skills)
        });
        getHobbies().then((Res)=> {
            const hobbieSkiils = Res.data.result[0].hobbies;
            hobbieSkiils.forEach(element => {
                element['label'] = element.value;
            });
            setHobbies(hobbieSkiils)
        });
        getFavSubject().then((res) => {
            const favSub = res.data.result[0].subjects;
            favSub.forEach((element) => {
                element['label'] = element.value;
            });
            setFavouriteSubjects(favSub);
        });
        getvirtualconnects().then((res)=> {
            console.log(res.data, "resData")
            const virutalData = res.data;
            setVirtualConnects(virutalData);
        })
    })
    const handleChange = (e) => {
setFileName(e.target.files[0])
    }
const handleClick = () => {
    fileInputRef.current.click();
}
const handleSkillSelect = (selected) => {
setSelectedSkills(selected);
}
const handleHobbies = (selected) => {
    setSelectedHobbies(selected);
}
const handleSubjects = (selected) => {
setSelectedSubjects(selected)
}
const handleForSubmit = (e) => {
    if(studentInfo!== '' &&bloodGroup !=='' && fileName !== '' && selectedSkills.length>0 && selectHobbies.length>0 &&selectedSubjects.length>0 && professionalSkills.length>0  ) {
        alert("prfile submitted suceesfully");
    } else {
        alert("please fill the information properly")
        e.preventDefault();

    }

}
const toggleChange = () =>{
    setToggle(!toggle);
}
  return (
    <div className='container'>
        <form>
            <div className='mb-3 col-md-6'>
<label className='form-label'> Write something About Your self</label>
<textarea className='form-control' required placeholder='write something about your self' rows={4} value={studentInfo} onChange={(e)=> setStudentInfo(e.target.value)} />
            </div>
            <div className='mb-3 col-md-6'>
                <input type="file" ref={fileInputRef} onChange={handleChange}  required   />
                {/* <button onClick={() =>fileInputRef.current.click()}>Upload Your Resume</button> */}
            </div>
            <div className='mb-3 col-md-6'>
<label className='form-label'>select your blood group:</label>
<select value={bloodGroup} onChange={(e)=> setBloodGroup(e.target.value)}>
    {bloodGroups.map((item, index)=> (
        <option key={index} value={item}>
            {item}
        </option>
    ))
    }
</select>
            </div>
            <div className='col-md-6'>
                <h3>skills:</h3>
                <div className='mb-3'>
                    <label>
                        Profisional skills
                    </label>
                    <Select
                    isMulti
                    onChange={handleSkillSelect}
                    value={selectedSkills}
                    options={professionalSkills}
                    />
                </div>
            </div>
            <div className='col-md-6 mb-3'>
                <h3>Hobbies I am passionate Abour</h3>
                <div className='mb-3'>
                    <Select
                    isMulti
                    options={hobbies}
                    onChange={handleHobbies}
                    value={selectHobbies}
                    />
                </div>
            </div>
            <div className='col-md-6 mb-3'>
<h4>My Favorite Subjects are</h4>
<Select
value={selectedSubjects}
options={favoriteSubjects}
isMulti
onChange={handleSubjects}
/>
            </div>
            <div className='saveBtn col-md-2 mb-3'>
            <button className='btn' onClick={(e) => handleForSubmit(e)}>Save</button>
            </div>
            <Ratings toggleModify={toggleChange} />
          {!toggle&&<div className='virualMeet mb-3 container'>
                <div class="" id="myModal" role="dialog">
               <div class="modal-dialog">
          <div class="modal-content">
        <div class="modal-header">
        <h4 class="modal-title">{vitrualConnects && vitrualConnects.message} counts:{vitrualConnects&&vitrualConnects.ethicalCodeCount}</h4>
          <button type="button" class="close" data-dismiss="modal" onClick={()=>toggleChange()}>&times;</button>
        </div>
        <div class="modal-body">
            {vitrualConnects&&vitrualConnects.result.map((item)=> (
                <>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className="col-md-3">
                            <img src={item.dpURL} alt="none" className='imageProfile'/>

                            </div>
                            <div className="col-md-6">
                                                        <div className='card-text'>{item?.firstname} - {item.lastname}</div>
                                                        <div className='card-text' >{item?.title[0]?.value}</div>
                            </div>

                        </div>
                  
                    </div>
                </div>
                </>
            ))

            }
        </div>
      </div>
      
    </div>
  </div>
  
            </div> }
        </form>
    </div>
  )
}

export default BioForm