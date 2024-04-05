import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" }) 
    const location = useLocation() 

 

    console.log(location) 

    function handleChange(e) { 

        const { name, value } = e.target 

        setLoginFormData(prev => ({ 

            ...prev, 

            [name]: value 

        })) 

    } 
    function handleSubmit(e) { 

        e.preventDefault() 

        console.log(loginFormData) 

    } 
    function alert(){
        alert("hello")
    }
  return (
   
<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
    { 

 

location.state?.message && 

<h3 className='text-center text-pink-700 text-semibold mb-4'>{location.state.message}</h3> 

} 
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
		<form  onSubmit={handleSubmit} >
			<div className="mb-4">
				<label for="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email"
                 id="email"  
                 name="email"
                  onChange={handleChange}   
                   value={loginFormData.email} 
                   className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="your@email.com" />
			</div>
			<div className="mb-4">
				<label for="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input 
                type="password" 
                name="password"
                id="password"    
                onChange={handleChange}    
                value={loginFormData.password}  
                className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500" placeholder="Enter your password" required/>
				<Link to="#"
					className="text-xs text-gray-600 hover:text-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700">Forgot
					Password?</Link>
			</div>
			<div className="flex items-center justify-between mb-4">
				{/* <div className="flex items-center">
					<input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500 focus:outline-none" checked/>
					<label for="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
				</div> */}
				<Link to="#"
					className="text-xs text-pink-800 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800">Create
					Account</Link>
			</div>
			<button onClick={alert} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-800 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">Login</button>
		</form>
	</div>
</div>
  )
}

export default Login