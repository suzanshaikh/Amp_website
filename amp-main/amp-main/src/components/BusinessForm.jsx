import React, { useState } from "react";
import axios from "axios";
import './BusinessForm.css';

export const Business = (props) => {
    const [name, setName] = useState('');
    const [cname, setCname] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [desc, setDesc] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [interest, setinterest] = useState('');
    const [date, setdate] = useState('');
    const [industry, setindustry] = useState('');
    const [location, setlocation] = useState('');
    const [empno, setempno] = useState('');
    const [entitytype, setEntitytype] = useState('');

    async function listb() {
        const getIn = {
            "email": email, "name": name, "companyname": cname, "type": type, "desc": desc, "phoneno": phoneno,
            "interest": interest, "date": date, "industry": industry, "location": location, "empno": empno, "entitytype": entitytype
        };
      await  axios
            .post('http://localhost:5000/addingBusiness', getIn)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        alert('Business Listed Successfully');
    }

    return (
        <div className="auth-form-container">
            <form className="buiness-form" onSubmit={handleSubmit}>
            <table>
            <tr><h2>Confidential Information</h2></tr>
            <tr><h5>Please enter your own details here. Information entered here is not publicly displayed.</h5></tr>
            <tr>
                <td>
                <label htmlFor="name">Your Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="text" placeholder="Full Name" id="name" name="name" />
                </td>
                <td>
                <label htmlFor="cname">Company Name</label>
                <input value={cname} onChange={(e) => setCname(e.target.value)} type="text" placeholder="Company Name" id="cname" name="cname" />
                </td>
            </tr>
            <tr>
                <td>
                <label htmlFor="phoneno">Your Mobile Number</label>
                <input value={phoneno} onChange={(e) => setPhoneno(e.target.value)}type="number" placeholder="Your Mobile Number" id="phoneno" name="phoneno" />
                </td>
                <td>
                <label htmlFor="email">Enter official email for quick verification</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                </td>
            </tr>
                <tr><h2>Business Information</h2></tr>
                <tr><h5>Information entered here is displayed publicly to match you with the right set of investors and buyers. Do not mention business name/information which can identify the business.</h5></tr>
                <tr>
                    <td>
                    <label htmlFor="type">You are a(n)</label>
                    <input value={type} onChange={(e) => setType(e.target.value)}type="text" placeholder="Digital Marketing" id="type" name="type                         " />
                    </td>
                    <td>
                    <label htmlFor="interest">You are interested in</label>
                    <input value={interest} onChange={(e) => setinterest(e.target.value)} type="text" placeholder="Retail" id="interest" name="interest" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="date">When was the business established?</label>
                    <input value={date} onChange={(e) => setdate(e.target.value)}type="date" placeholder="26 Jan 2004" id="date" name="date" />
                    </td>
                    <td>
                    <label htmlFor="industry">Select business' industry</label>
                    <input value={industry} onChange={(e) => setindustry(e.target.value)}type="text" placeholder="B2B" id="industry" name="industry" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="location">Where is the business located / headquartered?)</label>
                    <input value={location} onChange={(e) => setlocation(e.target.value)}type="text" placeholder="Mumbai" id="location" name="location" />
                    </td>
                    <td>
                    <label htmlFor="empno">How many employees does the business have?</label>
                    <input value={empno} onChange={(e) => setempno(e.target.value)} type="number" placeholder="20" id="empno" name="empno" />
                    </td>
                </tr>
                <tr>
                    <td>
                    <label htmlFor="entitytype">Select business legal entity type</label>
                    <input value={entitytype} onChange={(e) => setEntitytype(e.target.value)}type="text" placeholder="Yes" id="entitytype" name="entitytype" />    
                    </td>
                    <td>
                    <label htmlFor="desc">Describe the business in a single line</label>
                    <input value={desc} onChange={(e) => setDesc(e.target.value)}type="text" placeholder="Details Here" id="desc" name="desc" />
                    </td>
                </tr>
                </table>
                    <button type="submit" onClick={listb}>Submit</button>
            </form>
        </div>
    )
}

export default Business;