import React, {useState} from 'react'


const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');  
  }

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-gray-800 '>
        <div className='border-2 border-emerald-600 p-20 rounded-2xl'>
            <form 
            onSubmit={(e) => submitHandler(e)}
            className='flex flex-col items-center justify-center'>

                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}  
                required 
                className='border-2 border-emerald-600 text-xl rounded-full py-2 px-3 outline-none bg-transparent placeholder:text-lg '
                type="email" name="" id="" placeholder='Enter your email' />   
                
                
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }} 
                required 
                className='border-2 border-emerald-600 text-xl rounded-full py-2 px-3 outline-none bg-transparent mt-4 mb-8 gap-3 placeholder:text-lg '
                type="password" name="" id="" placeholder='Enter your password' />
                
                
                <button 
                className='border-2 border-emerald-600 text-xl font-bold rounded-full py-2 px-8 outline-none bg-emerald-600 cursor-pointer'
                type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login