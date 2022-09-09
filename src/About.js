import React, { useState, useEffect } from 'react'
import './About.css'
import * as linkConfig from './config';

export default function About() {

    const [fname, setfName] = useState('')
    const [img, setImage] = useState('')
    const [lname, setlName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        if (linkConfig.data != null) {
            setfName(linkConfig.data.user.fname)
            setlName(linkConfig.data.user.lname)
            setImage(linkConfig.data.user.avatar)
            setEmail(linkConfig.data.user.email)
        }

    }, []);

    return (
        <div className='container-about'>
            <h1>PROFILE</h1>

            <div className='about'>

                <img src={img}></img>

                <div className='details'>
                    <p>Name: {fname} {lname}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
        </div>
    )
}
