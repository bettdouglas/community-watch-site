import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useState } from 'react';




export default function DeleteAccountComponent() {
  const [bool, setBool] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reason, setReason] = useState('');
  const { siteConfig } = useDocusaurusContext();


  const handleRequestDeletion = () => {
    // Implement logic to handle account deletion/disabling and set account as hidden
    // You can send a request to your server, update database, etc.

    // For demonstration purposes, log the values to console
    console.log('Phone Number:', phoneNumber);
    console.log('Reason for Deletion:', reason);

    // Reset the form after handling deletion request
    setPhoneNumber('');
    setReason('');
  };

  return (
    <div class="card">
      <div class="card__header">
        <h3>Goodbye! </h3>
      </div>
      <div class="card__body">
        <p>
          We're sorry to see you go. Before you delete your account, please let us know why you're leaving CommunityWatch. Your feedback is valuable and helps us improve.
        </p>
      </div>
      <div class="row">
        <div class="container">
          <div class="col col--4">
            <div class="col-demo">Phone Number:</div>
          </div>
          <div class="col col--6">
            <form>
              <div class="navbar__search">
                <input class="navbar__search-input" placeholder="Search" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <form>
        <br />
        <label>
          Reason for Deletion:
          <input
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </label>
        <br />
        <div class="card__footer">
          <button class="button button--secondary button--block">Delete Your Account</button>
        </div>
      </form>
    </div>
  );
}