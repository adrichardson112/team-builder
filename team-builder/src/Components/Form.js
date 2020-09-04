import React, { useState} from 'react';

const Form = (props) => {
    const [member, setMember] = useState({
        id: Date.now(),
        name: '',
        email: '',
        role: '',
        hobbies: ''
    });

    const changeHandler = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', role: '', hobbies: ''});
    };

    return (
        <form onSubmit ={submitForm}>
            <label htmlFor="name">Name:</label>
            <input 
             id="name"
             name="name"
             type="text"
             placeholder="name"
             value={member.name}
             onChange={changeHandler}
        />

        <label htmlFor="email">Email:</label>
        <input
            id="email"
            name="email"
            type="text"
            placeholder="email"
            value={member.email}
            onChange={changeHandler}
        />

        <label htmlFor="role">Role:</label>
        <input
            id="role"
            name="role"
            type="text"
            placeholder="role"
            value={member.role}
            onChange={changeHandler}
        />

        <label htmlFor="hobbies">Hobbies:</label>
        <input
            id="hobbies"
            name="hobbies"
            type="text"
            placeholder="hobbies"
            value={member.hobbies}
            onChange={changeHandler}
        />

        <button type="submit">Submit</button>
    </form>
    );
};

export default Form;