import React, { useReducer } from "react";


const ContactForm = () =>
{
    const initialState = {
            name: "", 
            email: "",
            reason:"", 
            message: ""
    };

   const  reducer = (state, {field, value}) =>  {
        return {
            ...state,
            [field] : value 
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

   const handleChange = e => 
   {
        dispatch({field :e.target.name, value: e.target.value})
   }

   const {name, email, reason, message} = state

    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        console.log(JSON.stringify(state));
        fetch('api/contact' , {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(state)
        })
        .then(resp => resp.json())
        
    }

    return (
        
            <div>
                <h1>Test</h1>
                <form className="flex flex-col space-y-5" onSubmit={handleOnSubmit}>
                    <input type='text' name="name" value={name} onChange={handleChange} placeholder='Enter Name'/>
                    <input type='email' name="email"  value={email} onChange={handleChange} placeholder='Enter Email' />
                    <input type='text' name="reason" value={reason} onChange={handleChange} placeholder='Select Reason for Contacting'/>
                    <textarea type="text" name="message" value={message} onChange={handleChange} placeholder='Enter Message'/>

                    <button type="submit">Send</button>
                </form>
            </div>

    );

}

export default ContactForm;