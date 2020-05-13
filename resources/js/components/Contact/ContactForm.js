import React, { useReducer } from "react";


const ContactForm = () =>
{
    const initialState = {
            name: "", 
            email: "",
            reason:"", 
            response: ""
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

   const {name, email, reason, response} = state

    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        console.log(JSON.stringify(state));
        fetch('/api/contact' , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(state)
        })
 
        
    }

    return (
        
            <div className=" flex flex-col items-center w-1/2 mx-auto my-12">
                <h1>Thanks for reaching out!</h1>
                <form className="flex  flex-wrap justify-center  " onSubmit={handleOnSubmit}>
                    <input className="w-1/3 m-2 bg-transparent rounded-md border-b-2 placeholder-onyx "type='text' name="name" value={name} onChange={handleChange} placeholder='Enter Name'/>
                    <input className="w-1/3 m-2 bg-transparent rounded-md border-b-2 placeholder-onyx "type='email' name="email"  value={email} onChange={handleChange} placeholder='Enter Email' />
                    <select className="w-4/5 m-2 bg-transparent rounded-md border-b-2 placeholder-onyx "type='text' name="reason" value={reason} onChange={handleChange} placeholder='Select Reason for Contacting'>
                        <option>Request Resume</option>
                        <option>Leave Review</option>
                        <option>Start Project Together</option>
                        <option>Other</option>
                    </select>
                    <textarea className="w-full m-2 bg-transparent rounded-md border-2 placeholder-onyx "type="text" name="response" value={response} onChange={handleChange} placeholder='Enter Message'/>

                    <button className="w-1/3 m-2 rounded-lg border-2 border-secondary hover:bg-accent hover:text-primary"type="submit">Send</button>
                </form>
            </div>

    );

}

export default ContactForm;