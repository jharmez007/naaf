import React, { useState } from 'react';
import { initializePaymemt } from "../../services/paymentServices";
import { PiWarningCircleThin } from "react-icons/pi";

import './donationForm.scss';

const DonationForm = () => {
  const [email, setEmail] = useState('');
  const [donationAmount, setDonationAmount] = useState('5000'); // Default to ₦5000
  const [customAmount, setCustomAmount] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDonationAmountChange = (e) => {
    const value = e.target.value;
    setDonationAmount(value);
    setIsOtherSelected(value === 'other');
    if (value !== 'other') {
      setCustomAmount('');
      setErrorMessage('');
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);

    if (!value || parseInt(value) < 100) {
      setErrorMessage('Please enter a valid amount not less than 100 Naira.');
    } else {
      setErrorMessage('');
    }
  };

  const validateDonation = () => {
    if (!email) {
      setErrorMessage('Email is required.');
      return null;
    }

    const amount = isOtherSelected ? parseInt(customAmount) : parseInt(donationAmount);
    if (isOtherSelected && (!customAmount || amount < 100)) {
      setErrorMessage('Please enter a valid amount not less than 100 Naira.');
    } else if (!isOtherSelected && amount < 100) {
      setErrorMessage('Please select or enter a valid donation amount.');
    } else {
      setErrorMessage('');
      return amount * 100;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const amount = validateDonation();
    if (!amount) return;

    try {
      if (amount > 100) {
        const paymentResponse = await initializePaymemt({
          amount,
          email,
          callback_url: "https://naaf-gules.vercel.app/home",
        });

        if (paymentResponse?.status === 200) {
          window.location.href =
            paymentResponse?.data?.data?.authorization_url;
        } else {
          setErrorMessage(paymentResponse?.message);
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div id="donate1" className="donation-form w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="form-group flex flex-col gap-2">
          <label className="text-sm text-[#2b3d38cc]">Email</label>
          <div className="custom-amount">
            <label>
              <div className="email-input">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </label>
          </div>

          <label className="text-sm text-[#2b3d38cc]">Amount</label>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <label className="basis-1/2">
                <input
                  type="radio"
                  name="donationAmount"
                  value="5000"
                  defaultChecked
                  onChange={handleDonationAmountChange}
                />
                <span className="radio-label">₦5,000</span>
              </label>
              <label className="basis-1/2">
                <input
                  type="radio"
                  name="donationAmount"
                  value="other"
                  onChange={handleDonationAmountChange}
                />
                <span className="radio-label">Other</span>
              </label>
            </div>

            {isOtherSelected && (
              <div className="custom-amount">
                <label>
                  <div className="currency-input">
                    <span className="currency-symbol text-[#e89611]">₦</span>
                    <input
                      type="text"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      maxLength="10"
                    />
                  </div>
                </label>
              </div>
            )}

            {errorMessage && (
              <div style={{ display: 'flex', alignItems: 'center', color: 'red', fontSize: '14px' }}>
                <PiWarningCircleThin className="fill-red-600 w-[20px] h-[20px]" style={{ marginRight: '4px' }} />
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        </div>

        <button className="btn font" type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Donate'}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
