import React from 'react';
import ContactList from './ContactList';
import ContactMap from './ContactMap';
import ContactForm from './ContactForm';

const ContactDisplay = () => {
  return (
    <div style={{ background: '#000000' }}>
      <div className="image-container">
        <img src={require('../../images/banners/contact-banner.jpg')} alt="" />
        <div className="centered">
          <h2 className="display-2 fadeIn">
            <strong>Contact Us</strong>
          </h2>
        </div>
      </div>

      <section id="contact-info">
        <div className="container">
          <div className="card border-warning my-3">
            <div className="card-body">
              <div className="row my-3">
                <div className="col-md-6">
                  <ContactList />
                </div>

                <div className="col-md-6">
                  <ContactMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default ContactDisplay;
