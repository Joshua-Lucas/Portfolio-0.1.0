import React, { useState } from "react";


const ContactForm = () =>
{
    const [FormResponse, setFormResponse] = useState({Name: '', Email: '', Resaon:'', Message:''});

   const handleEventChange = e => 
   {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setFormResponse({[name] : value});
   }

    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        console.log(FormResponse);
        

    }

    return (
        
            <div>
                <h1>Test</h1>
                <form className="flex flex-col space-y-5" onSubmit={handleOnSubmit}>
                    <input type='text' name='Name' value={FormResponse.Name.value} onChange={handleEventChange} placeholder='Name'/>
                    <input type='text' name='Email'  value={FormResponse.Email} onChange={handleEventChange} placeholder='Email'></input>
                    <input type='text' name='Reason' value={FormResponse.Reason} onChange={handleEventChange} placeholder='Reason for Contacting'></input>
                    <textarea type="text" name='Message' value={FormResponse.Message} onChange={handleEventChange} placeholder='Message'></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>

    );

}

export default ContactForm;