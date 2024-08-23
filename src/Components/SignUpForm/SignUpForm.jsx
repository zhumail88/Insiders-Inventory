import React from 'react';
import './SignupForm.css'
import GreenButton from '../GreenButton/GreenButton';

function SignupForm() {
  return (
    <form>
      <h2>Sign-Up To View Available Inventory Or To List A Property</h2>

      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" placeholder="John Doe" />

      <label htmlFor="lastName">Last name</label>
      <input type="text" id="lastName" placeholder="John Doe" />

      <label htmlFor="companyName">Company Name (optional)</label>
      <input type="text" id="companyName" placeholder="Name of your company" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter your Email here" />

      <div className='check-g1'>
        <label>
          <input type="checkbox" /> Investor
        </label>
        <label>
          <input type="checkbox" /> Home Buyer
        </label>
        <label>
          <input type="checkbox" /> Agent
        </label>
        <label>
          <input type="checkbox" /> Fund/REIT Investment Buyer
        </label>
      </div>


      <label htmlFor="phoneNumber">Phone number</label>
      <input type="text" id="phoneNumber" placeholder="Enter your phone number" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Enter Password" />

      <div className='confirmBtn'>
        <input type="checkbox" />
        <label>
          I confirmed that I have read and accepted the <a href="#">Privacy Policy</a>
        </label>
      </div>
      
      <GreenButton
        text = 'Signup'
      />

      <div className='su-haveAccount'>
        Already have an account? <a href="#">Log in</a>
      </div>
    </form>
  );
}

export default SignupForm;
