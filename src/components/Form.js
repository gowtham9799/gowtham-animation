import React, { useState } from 'react'
import Result from './Result';
import { Button, Container, FormControl, FormLabel } from 'react-bootstrap'
function Form() {
   
   const formdata=[{}];
   const [username,setusername]=useState("");
   const [mailid,setmailid]=useState("");
   const [usercontact,setcontact]=useState("");
   const [userdepartment,setdepartment]=useState("");
   const [useraddress,setaddress]=useState("");
   const [usercity,setcity]=useState("");
   

   
   const usernamevalid=(e)=>{  
      let usernamevalue=e.target.value;
     if (!usernamevalue.match(/^[a-z]*\s{1}[A-Za-z]*$/)) {
        setusername("invalid name");
        if(usernamevalue.length==0){
      setusername("name  required");
     }

     }

     else{
        setusername("ok");
     } 
          
  }
  
//   mailvalidation
  const mailvalid=(e)=>{
   let mailid=e.target.value;
  if (!mailid.match(/^([a-z0-9_.])+\@([a-z])+\.([c][o][m])+$/)) {
     setmailid("invalid mail-id");

     if(mailid.length==0){
      setmailid("mail required");
     }
  } 
  else {
   setmailid(null);
  } 
}
// contactvalidation
const contactvalid=(e)=>{
   let usercontact=e.target.value;
  if (!usercontact.match(/^[0-9]{10}$/)) {
     setcontact("invalidcontact");

     if(usercontact.length==0){
      setcontact("contact required");
     }
  } 
  else {
   setcontact(null);
  } 
}
// departmentvalidation
const depvalid=(e)=>{
   let userdepartment=e.target.value;
  if (userdepartment.length<2) {
     setdepartment("invalid department");
     if(userdepartment.length==0){
      setdepartment("department required");
     }
  } 
  else {
   setdepartment(null);
  } 
}
// addressvalidation
const addrevalid=(e)=>{
   let useraddress=e.target.value;
  if (useraddress.length<5) {
     setaddress("invalid address");
  } 
  else {
   setaddress(null);
  } 
}
// cityvalidation
const cityvalid=(e)=>{
   let usercity=e.target.value;
  if (usercity.length<2) {
     setcity("invalid city");

     if(usercity.length==0){
      setcity("city required");
     }
  } 
  else {
   setcity(null);
  } 
}
  const submitall=()=>{
     alert('your data is added successfully');
     let username=document.getElementById('formcontrol1').value;
     let mailid=document.getElementById('formcontrol2').value;
     let contact=document.getElementById('formcontrol3').value;
     let department=document.getElementById('formcontrol4').value;
     let address=document.getElementById('formcontrol5').value;
     let city=document.getElementById('formcontrol6').value;
    
   //   database save
    let i=0;
    formdata.push({username,mailid,contact,department,address,city});
      for(i;i<formdata.length;i++){
           if (formdata[i]==username,mailid,contact,department,address,city) {
              formdata.splice(i,1);
           }
      }
      formdata.forEach((value)=>{
         console.log(value.username+'<br>'+value.mailid+'<br>'+value.contact+'<br>'+value.department+'<br>'+value.address+'<br>'+value.city);
      })
      
  }
  var [next,setnext]=useState(false);
  let [data1,datafun]=useState();
  const check=()=>{
     setnext(true);
   // data search
     let usersearch=document.getElementById('form').value;
     let i;
     for(i=0;i<100;i++){
      formdata.map((value)=>{
         if (value.username==usersearch) {
      //  result.innerHTML=value.username+'<br>'+value.mailid+'<br>'+value.contact+'<br>'+value.department+'<br>'+value.address+'<br>'+value.city;
     datafun(value.username+value.mailid+value.contact+value.department+value.address+value.city);
         }
         else{
            datafun("your data is not defined");
         } 
      })
     }
  }
  return (
    <div className='form-section'>
        {next ? <Result data={data1}/> :  <Container>
         
         <div className='form-box'>
             <div className='tittle'>
                 <h1 className='text-uppercase text-center'>register</h1>
             </div>
             <FormControl placeholder="search"type='text' className='formcontrol' id='form'></FormControl>
             <Button onClick={check}>check</Button>

            <FormLabel className='lable'>name-</FormLabel>
            {!username.match(/^[a-z]*\s{1}[A-Za-z]*$/)?<span className='text-success'>{username}</span>:<span className='text-danger'>error</span>}
            <FormControl autoComplete='off' className='formcontrol' onKeyUp={usernamevalid} id='formcontrol1'></FormControl>

            <FormLabel className='lable'>mail-id-</FormLabel>
            {mailid}
            <FormControl placeholder='@gmail.com' type='id' className='formcontrol' onKeyUp={mailvalid} id='formcontrol2'></FormControl>

            <FormLabel className='lable'>contact-</FormLabel>
            <span className='text-danger'>{usercontact}</span>
            <FormControl className='formcontrol' type='number' onKeyUp={contactvalid} id='formcontrol3'></FormControl>

            <FormLabel className='lable'>department-</FormLabel>
            <span className='text-danger'>{userdepartment}</span>
            <FormControl className='formcontrol' onKeyUp={depvalid} id='formcontrol4'></FormControl>

            <FormLabel className='lable'>address-</FormLabel>
            <span className='text-danger'>{useraddress}</span>
            <FormControl className='formcontrol' onKeyUp={addrevalid} id='formcontrol5'></FormControl>

            <FormLabel className='lable'>city-</FormLabel>
            <span className='text-danger'>{usercity}</span>
            <FormControl className='formcontrol' onKeyUp={cityvalid} id='formcontrol6'></FormControl>
            <br></br>
            <div className='btn-box'>
            <Button onClick={submitall} className="button">submit</Button>
            </div>
         </div>
     </Container>
}
      
    </div>
  )
}
// create json with 10 products details and show them in reusable components

export default Form