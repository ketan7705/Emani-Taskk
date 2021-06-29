import './form.css';
import React, {useState }from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-phone-number-input/style.css'
import  PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input'

export default function Form() {
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [phone,setPhone] = useState('');
 
    const validation = () => {
        //console.log(phone)
        //console.log(phone.length);
        if(isValidPhoneNumber(phone)){
            //console.log(phone)
            var myHeaders = new Headers(); //Checking Headers
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
              "phone_number": phone
            });
            
            var requestOptions = {
              method: 'POST', //POST method to send the data to server
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            
            fetch("https://od80h16jwh.execute-api.us-east-2.amazonaws.com/mit/public/send/number", requestOptions)
              .then(response => response.text())
                //   .then(result => console.log(result))
              .then(result => alert("Successfully send Data..!!",result))
              .catch(error => alert('Oops!!! Error caught', error));
        }else{
            alert("Please enter valid phone number.!!")
        }
    }
    

    return (
        <div className="card home-card">
            <form>                
                <Card>
                    <Card.Body style={{  padding: "50px"}}>
                        <label>
                        <PhoneInput
                        placeholder="Enter phone number" 
                        value={phone}
                        defaultCountry="IN"
                        onChange={setPhone}
                        withCountryCallingCode= {true}
                        required />
                            <br></br>
                        <p>
                        <input
                        name="acceptedTerms"
                        type="checkbox"
                        onChange={e => setAcceptedTerms(e.target.value)}
                        required />
                            Confirm your Callback details.</p>
                        </label>
                    </Card.Body>
                    <Button variant="danger" onClick={validation}>Submit</Button>
                </Card>
            </form>
        </div>
    );
};


// Email: ${email}
// Password: ${password}.