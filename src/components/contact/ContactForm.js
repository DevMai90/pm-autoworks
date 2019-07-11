import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto py-3">
            <div className="card border-warning p-4">
              <h3 className="text-center">Send Us A Message</h3>
              <p className="text-center lead">
                Have any questions? Fill out the form and we'll get back to you
                as soon as possible.
              </p>
              <form
                action="https://formspree.io/dmai90@yahoo.com"
                method="POST"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="*First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="*Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="text"
                        cols="30"
                        rows="5"
                        className="form-control"
                        placeholder="*Enter message here..."
                        required
                      />
                      <small className="text-muted">
                        * indicates required fields
                      </small>
                    </div>
                  </div>
                </div>
                <button className="btn btn-warning" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
