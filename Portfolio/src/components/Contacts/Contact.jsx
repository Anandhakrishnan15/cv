import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactcontainer">
      <div className="contactholder">
        <div className="conactmeform">
          <form action="">
            <div className="contactMeFormDetails">
              <h1>leave a message down here</h1>
              <div>
                <p>
                  You'r Name<input type="text" />.
                  <br></br> 
                  name of your comapany <input type=" text" /> .
                  <br />
                  compose ur mail<textarea type="text"></textarea>
                </p>
              </div>
              <div className='contact-dubmit-button'>
              <button>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
