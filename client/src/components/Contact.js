import React,{useState} from 'react';


const Contact = props =>{
    const [value, setValue] = useState({
        name:'',
        email:'',
        message:'',
    })

    const handleChange = e=>{
        e.preventDefault();

        setValue({
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(value.message);
        props.history.push('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Name"
                name='name'
                value={value.name}
                onChange={handleChange}
            />
            <input
                type='email'
                placeholder="email"
                name='email'
                value={value.email}
                onChange={handleChange}
            />
            <input
                type='text'
                placeholder="Comment"
                name='message'
                value={value.message}
                onChange={handleChange}
            />

            <button>Submit</button>

        </form>
    )
}

export default Contact;
