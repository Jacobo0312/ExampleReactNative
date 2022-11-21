import React, { useState } from 'react'

import { useForm } from '../hooks/useForm'

export const Forms = () => {

    const {form,onChange,name,message} = useForm({
        name:'',
        message:''
    });


  return (
    <>
        <h3>Forms</h3>

        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(event)=>onChange(event.target.value,'name')}/>

        <textarea className="form-control mt-2" placeholder="Message" value={message}
        onChange={(event)=>onChange(event.target.value,'message')}/>
        
        <pre>
            {JSON.stringify(form,null,2)}
        </pre>

        <button className="btn btn-outline-primary mt-2">
            Save
        </button>
    
    
    </>
  )
}
