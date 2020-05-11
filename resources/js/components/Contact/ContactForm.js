import React, { useState } from "react";


const ContactForm = () =>
{
    const [FormResponse, setFormResponse] = useState([]);

   const handleEventChange = e => 
   {
        e.prevetnDefault();
        setFormResponse(e.target.value );
   }

    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        setFormResponse(FormResponse);
        console.log(FormResponse);
        

    }

    return (
        
            <div>
                <h1>Test</h1>
                <form className="flex flex-col space-y-5" onSubmit={handleOnSubmit}>
                    <input type='text' name='Name' value={FormResponse.name} onChange={handleEventChange} placeholder='Name'/>
                    <input type='text' name='Email'  value={FormResponse.Email} placeholder='Email'></input>
                    <input type='text' name='Reason' value={FormResponse.Reason} placeholder='Reason for Contacting'></input>
                    <textarea type="text" name='Message' value={FormResponse.Message} placeholder='Message'></textarea>

                    <button type="submit">Send</button>
                </form>
            </div>

    );

}

export default ContactForm;