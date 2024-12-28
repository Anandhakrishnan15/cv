import React, { useState } from 'react'
import "./contact.css";

const Contact = () => {
  // const[text,setText]=useState('')
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [demand, setDemand] = useState("");
   const [namePlaceholder, setNamePlaceholder] = useState("Enter your Name...");
   const [companyPlaceholder, setCompanyPlaceholder] = useState(
     "Enter Company Name..."
   );
   const [emailPlaceholder, setEmailPlaceholder] = useState(
     "Enter your Email..."
   );
   const [demandPlaceholder, setDemandPlaceholder] = useState(
     "Say what’s on your mind..."
   );

  // const handelChangeText=(e)=>{
  //   setText(e.target.value);
  //   e.target.style.height ="auto";
  //   e.target.style.height = `${e.target.scrollHeight}px`;
    
  // }
  return (
    <div className="contactcontainer">
      <div className="contactholder">
        <div className="conactmeform">
          <form action="">
            <div className="contactMeFormDetails">
              <h1>fill in the blanks to contact me</h1>
              <div className="ContactFormholder">
                <div>
                  What is You'r Name{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setNamePlaceholder("")}
                    onBlur={() => setNamePlaceholder("Enter your Name...")}
                    placeholder={namePlaceholder}
                    required
                  />
                  .<br></br>
                  Name of your comapany{" "}
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    onFocus={() => setCompanyPlaceholder("")}
                    onBlur={() =>
                      setCompanyPlaceholder("Enter Company Name...")
                    }
                    placeholder={companyPlaceholder}
                    required
                  />
                  , and email address{" "}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailPlaceholder("")}
                    onBlur={() => setEmailPlaceholder("Enter your Email...")}
                    placeholder={emailPlaceholder}
                    required
                  />
                  .
                  <br />
                  <label>
                    <div>Tell me waht is your Demand</div>
                    <textarea
                      value={demand}
                      onChange={(e) => setDemand(e.target.value)}
                      onFocus={() => setDemandPlaceholder("")}
                      onBlur={() =>
                        setDemandPlaceholder("Say what’s on your mind...")
                      }
                      placeholder={demandPlaceholder}
                      required
                    ></textarea>
                  </label>
                </div>
                <div className="contact-dubmit-button">
                  <button>Send</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
