import { FormEvent } from "react"
import { useState } from "react"

export const Login = () => {
    const [ email, setEmail ] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()
        if(email === '' || password === '') {
            alert('Email and password are required')
            return
        }

        console.log({email, password})
    }
    
  return (
    <div className="flex justify-center h-screen bg-slate-200 items-center">
        <form 
            onSubmit={handleLogin}
            className="flex flex-col gap-5 bg-white rounded-2xl p-10">
            <input 
                onChange={e => setEmail(e.target.value)}
                type="text" name="email" className="text-slate-800 border-b-2 border-orange-200 outline-none" placeholder="email"/>
            {/* {errors?.email && <span>{errors.email}</span>} */}
            <input 
                onChange={e => setPassword(e.target.value)}
                type="password" name="password"  className="text-slate-800 border-b-2 border-orange-200 outline-none" placeholder="*********"/>
            {/* {errors?.password && <span>{errors.password}</span>} */}
            <button type="submit" className="p-3 bg-orange-500 font-bold text-white rounded">Login</button>
        </form>
        
    </div>
  )
}

