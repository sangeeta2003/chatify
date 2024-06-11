import { useState } from "react"


const Register = () => {
    const[username,setUserName] = useState('');
    const[password,setPassword] = useState('');
  return (
    <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12">
            <input value={username} onChange={e => setUserName(e.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-2 mb-2"/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2"/>
            <button className="bg-blue-500 text-white block w-full rounded-sm p-2">Register</button>
        </form>
    </div>
  )
}

export default Register