import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
function UpdateUser () {
const {id} = useParams()
const [name, setName]= useState()
const [email, setEmail]= useState()
const [age, setAge]= useState()
const navigate = useNavigate()
useEffect (()=>{
axios.get('http://localhost:3001/getuser/'+id)
.then(result => {console.log(result)
setName(result.data.name)
setEmail(result.data.email)
setAge(result.data.age)})
.catch(err => console.log(err))
}, [id])
const Update = (e) => {
e.preventDefault();
axios.put("http://localhost:3001/updateuser/"+id, {name,email,age})
.then(result => console.log(result))
.catch(err => console.log(err))
navigate('/')
}
return(
<div style={{
minHeight: '100vh',
background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #667eea 100%)',
backgroundSize: '400% 400%',
animation: 'gradient 10s ease infinite',
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
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6); }
  50% { box-shadow: 0 0 40px rgba(255, 0, 255, 1), 0 0 80px rgba(0, 255, 255, 0.8); }
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
animation: 'float 3s ease-in-out infinite'
}}>
<form onSubmit={Update}>
<h2 style={{
textAlign: 'center',
fontSize: '48px',
background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ffff00)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
marginBottom: '40px',
fontWeight: 'bold',
letterSpacing: '4px',
textTransform: 'uppercase'
}}>✨ Update User ✨</h2>
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
onFocus={(e) => e.target.style.transform = 'scale(1.05)'}
onBlur={(e) => e.target.style.transform = 'scale(1)'}
value={name} onChange={(e) => setName(e.target.value)}/>
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
onFocus={(e) => e.target.style.transform = 'scale(1.05)'}
onBlur={(e) => e.target.style.transform = 'scale(1)'}
value={email} onChange={(e) => setEmail(e.target.value)}/>
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
onFocus={(e) => e.target.style.transform = 'scale(1.05)'}
onBlur={(e) => e.target.style.transform = 'scale(1)'}
value={age} onChange={(e) => setAge(e.target.value)}/>
</div>
<button type="submit" style={{
width: '100%',
padding: '20px',
fontSize: '28px',
fontWeight: 'bold',
background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0)',
backgroundSize: '200% 200%',
animation: 'gradient 3s ease infinite',
border: 'none',
borderRadius: '50px',
color: 'white',
cursor: 'pointer',
boxShadow: '0 0 30px rgba(255, 0, 128, 0.8)',
textTransform: 'uppercase',
letterSpacing: '3px'
}}
onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
>🚀 Update Now! 🚀</button>
</form>
</div>
</div>
)
}
export default UpdateUser;