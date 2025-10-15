import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted')
    }

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value)
    }



    return (
        <div>
            <form onSubmit={handleSubmit} action="">
            <input type="email" name="email" placeholder='Email' required id="" />
            <br />
            <input type="password" name='password' id='' placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required />
            <br />
            <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default ControlledField;