import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted')
    }

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value)
        setPassword(e.target.value)

        if(password.length < 6){
            setError('password must be 6 characters or longer.')
        }else{
            setError('')
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit} action="">
            <input type="email" name="email" placeholder='Email' required id="" />
            <br />
            <input type="password" name='password' placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
            <br />
            <input type="submit" value='submit' />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;