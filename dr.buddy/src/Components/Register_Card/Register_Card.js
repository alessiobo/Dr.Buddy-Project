import { useState } from "react"
import "./register_card.css"
// import createPatient from "../../Hooks/useServer"
function Register_Card({createPatient}) {
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [telephoneNumber, settelephoneNumber] = useState("")
    async function createPatientHandler(event)  {
        event.preventDefault()
        const patientinfo = {
            firstname: firstname,
            lastname: lastname,
            tel_num: telephoneNumber,
            email: email,
            password: password,
        };
        console.log(patientinfo)
        console.log(createPatient(patientinfo));  
    }
    
    return (
        <div className="register_card">
            {/* <div className="register_card_header">
                <button>Register</button>
            </div> */}
            <div className="register_card_body">
                <h2>Nome</h2>
                <input type="text" placeholder="Nome" value={firstname} onChange={(event) => setfirstname(event.target.value)} />
                <h2>Cognome</h2>
                <input type="text" placeholder="Cognome" value={lastname} onChange={(event) => setlastname(event.target.value)} />
                <h2>Numero di Telefono</h2>
                <input type="text" placeholder="Numero di Telefono" value={telephoneNumber} onChange={(event) => settelephoneNumber(event.target.value)} />
                <h2>Email</h2>
                <input type="text" placeholder="Email" value={email} onChange={(event) => setemail(event.target.value)} />
                <h2>Password</h2>
                <input type="password" placeholder="Password" value={password} onChange={(event) => setpassword(event.target.value)} />
                <div className="register_button_wrapper">
                    <button className="register_button" onClick={createPatientHandler}>Register</button>
                </div>
            </div>
        </div>
    )
}
export default Register_Card