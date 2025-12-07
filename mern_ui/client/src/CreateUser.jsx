import React, { useState } from "react";
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
function CreateUser () {
const [name, setName]= useState()
const [email, setEmail]= useState()
const [age, setAge]= useState()
const navigate = useNavigate()
const Submit = (e) => {
e.preventDefault();
axios.post("http://localhost:3001/createuser", {name,email,age})
.then(result => console.log(result))
.catch(err => console.log(err))
navigate('/')
}
return(
<div style={{
minHeight: '100vh',
background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #f093fb 100%)',
backgroundSize: '400% 400%',
animation: 'gradient 12s ease infinite',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
fontFamily: "'Comic Sans MS', cursive"
}}>
<style>{`
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}
@keyframes rainbow {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`}</style>
<div style={{
width: '600px',
background: 'rgba(0, 0, 0, 0.85)',
borderRadius: '40px',
padding: '50px',
boxShadow: '0 0 50px rgba(255, 0, 255, 0.8), 0 0 100px rgba(0, 255, 255, 0.6)',
border: '6px solid transparent',
backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)',
backgroundOrigin: 'border-box',
backgroundClip: 'padding-box, border-box',
animation: 'bounce 3s ease-in-out infinite'
}}>
<form onSubmit={Submit}>
<h2 style={{
textAlign: 'center',
fontSize: '48px',
background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
backgroundSize: '200% 200%',
animation: 'gradient 3s ease infinite',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
marginBottom: '40px',
fontWeight: 'bold',
letterSpacing: '4px',
textTransform: 'uppercase'
}}>🌟 Add New User 🌟</h2>
<div style={{ marginBottom: '30px' }}>
<label style={{
color: '#ff00ff',
fontSize: '22px',
fontWeight: 'bold',
display: 'block',
marginBottom: '10px',
textShadow: '0 0 10px #ff00ff'
}}>🔥 Name</label>
<input type="text" placeholder="Enter Name"
style={{
width: '100%',
padding: '15px',
fontSize: '18px',
border: '3px solid #ff00ff',
borderRadius: '25px',
background: 'rgba(255, 0, 255, 0.1)',
color: 'white',
outline: 'none',
transition: 'all 0.3s'
}}
onFocus={(e) => {
e.target.style.transform = 'scale(1.05)';
e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.8)';
}}
onBlur={(e) => {
e.target.style.transform = 'scale(1)';
e.target.style.boxShadow = 'none';
}}
onChange={(e) => setName(e.target.value)}/>
</div>
<div style={{ marginBottom: '30px' }}>
<label style={{
color: '#00ffff',
fontSize: '22px',
fontWeight: 'bold',
display: 'block',
marginBottom: '10px',
textShadow: '0 0 10px #00ffff'
}}>📧 Email</label>
<input type="email" placeholder="Enter Email"
style={{
width: '100%',
padding: '15px',
fontSize: '18px',
border: '3px solid #00ffff',
borderRadius: '25px',
background: 'rgba(0, 255, 255, 0.1)',
color: 'white',
outline: 'none',
transition: 'all 0.3s'
}}
onFocus={(e) => {
e.target.style.transform = 'scale(1.05)';
e.target.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.8)';
}}
onBlur={(e) => {
e.target.style.transform = 'scale(1)';
e.target.style.boxShadow = 'none';
}}
onChange={(e) => setEmail(e.target.value)}/>
</div>
<div style={{ marginBottom: '40px' }}>
<label style={{
color: '#ffff00',
fontSize: '22px',
fontWeight: 'bold',
display: 'block',
marginBottom: '10px',
textShadow: '0 0 10px #ffff00'
}}>🎂 Age</label>
<input type="number" placeholder="Enter Age"
style={{
width: '100%',
padding: '15px',
fontSize: '18px',
border: '3px solid #ffff00',
borderRadius: '25px',
background: 'rgba(255, 255, 0, 0.1)',
color: 'white',
outline: 'none',
transition: 'all 0.3s'
}}
onFocus={(e) => {
e.target.style.transform = 'scale(1.05)';
e.target.style.boxShadow = '0 0 20px rgba(255, 255, 0, 0.8)';
}}
onBlur={(e) => {
e.target.style.transform = 'scale(1)';
e.target.style.boxShadow = 'none';
}}
onChange={(e) => setAge(e.target.value)}/>
</div>
<button type="submit" style={{
width: '100%',
padding: '20px',
fontSize: '28px',
fontWeight: 'bold',
background: 'linear-gradient(45deg, #00ff00, #00ffff, #0080ff)',
backgroundSize: '200% 200%',
animation: 'gradient 3s ease infinite',
border: 'none',
borderRadius: '50px',
color: 'white',
cursor: 'pointer',
boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)',
textTransform: 'uppercase',
letterSpacing: '3px',
transition: 'all 0.3s'
}}
onMouseOver={(e) => {
e.target.style.transform = 'scale(1.1) rotate(2deg)';
e.target.style.boxShadow = '0 0 50px rgba(0, 255, 255, 1)';
}}
onMouseOut={(e) => {
e.target.style.transform = 'scale(1)';
e.target.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
}}
>✨ Create User! ✨</button>
</form>
</div>
</div>
)
}
export default CreateUser;
