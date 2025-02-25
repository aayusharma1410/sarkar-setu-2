import React, { useState } from 'react';
import axios from 'axios';
import './ChallanPage.css';

function ChallanPage() {
    const [challanNumber, setChallanNumber] = useState('');
    const [challanDetails, setChallanDetails] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setChallanDetails(null);

        // Replace with your actual API endpoint
        const apiUrl = `YOUR_CHALLAN_API_ENDPOINT/${challanNumber}`;

        try {
            // Here's an example using a dummy API or data
            const dummyChallanData = {
                challanNumber: challanNumber,
                vehicleNumber: 'MH01AB1234',
                reason: 'Speeding',
                fineAmount: 500,
                officialPrice: 500,
                paymentLink: 'https://example.com/pay'
            };

            // Simulate API response
            setTimeout(() => {
                setChallanDetails(dummyChallanData);
            }, 500); // Simulate a 500ms delay

        } catch (err) {
            setError('Failed to fetch challan details. Please check the challan number and try again.');
        }
    };

    return (
        <div className="challan-container">
            <h1>Challan Verification</h1>
            <form onSubmit={handleSubmit} className="challan-form">
                <label>
                    Challan Number:
                    <input
                        type="text"
                        value={challanNumber}
                        onChange={(e) => setChallanNumber(e.target.value)}
                        required
                        className="challan-input"
                    />
                </label>
                <button type="submit" className="verify-button">Verify Challan</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {challanDetails && (
                <div className="challan-details">
                    <h2>Challan Details</h2>
                    <p><strong>Challan Number:</strong> {challanDetails.challanNumber}</p>
                    <p><strong>Vehicle Number:</strong> {challanDetails.vehicleNumber}</p>
                    <p><strong>Reason:</strong> {challanDetails.reason}</p>
                    <p><strong>Fine Amount:</strong> ₹{challanDetails.fineAmount}</p>
                    <p><strong>Official Price:</strong> ₹{challanDetails.officialPrice}</p>
                    {challanDetails.paymentLink ? (
                        <a href={challanDetails.paymentLink} target="_blank" rel="noopener noreferrer" className="pay-button">
                            Pay Challan Online
                        </a>
                    ) : (
                        <p>Payment link not available.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChallanPage;
