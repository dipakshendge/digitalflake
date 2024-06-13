import { useState } from 'react';

import('./login.css')

const Login = () => {

    const [user, setUser] = useState({
            email: "",
            password: ""
        });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
        // console.log(user);
    };

    const formSubmit = async(e) => {
         e.preventDefault();
        try {
            
            const response = await fetch(`http://localhost:5000/api/auth/login`,{
                method: "POST",
                headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
                
            });
            let data =await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container">
                <div className="loginContainer">
                    <div className="logo">
                        <img src="./images/logo.png" alt="logo" />
                    </div>
                    <p>Welcome to Digitalflake admin</p>
                    <div className="form">
                        <form onSubmit={formSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input onChange={handleInput} autoComplete="off" type="email" id="email" name="email" value={user.email} placeholder="Enter UserName" required />

                            <label htmlFor="password">Password:</label>
                            <input onChange={handleInput} autoComplete="off" type="password" id="password" name="password" value={user.password} placeholder="Enter Password" required />

                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login