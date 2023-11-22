import { useState } from "react";

const UserInput = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment : 10000,
        annualInvestment: 1200,
        expectedreturn: 6,
        duration: 10,
    })

    const handleChange = (inputIndentifier, newValue) => {
        setUserInput((previousInput) => {
            return{
                ...previousInput,
                [inputIndentifier]: newValue 
            }
        })
    }
    return (

    <section id="user-input">
        <div className='input-group'>
            <p>
                <label>INITIAL INVESMENT</label>
                <input type="number" 
                value={userInput.initialInvestment} 
                onChange={(event) => {handleChange("initialInvestment", event.target.value)}} 
                required/>
            </p>
            <p>
                <label>ANNUAL INVESMENT</label>
                <input type="number" 
                value={userInput.annualInvestment} 
                onChange={(event) => {handleChange("annualInvestment", event.target.value)}} 
                required/>
            </p>
        <div className='input-group'>
            <p>
                <label>EXPECTED RETURN</label>
                <input type="number" 
                value={userInput.expectedreturn}
                onChange={(event) => {handleChange("expectedreturn", event.target.value)}} 
                required/>
            </p>
            <p>
                <label>DURATION</label>
                <input type="number" 
                value={userInput.duration} 
                onChange={(event) => {handleChange("duration", event.target.value)}} 
                required/>
            </p>
        </div>
        </div>
    </section>
    )
}

export default UserInput;   