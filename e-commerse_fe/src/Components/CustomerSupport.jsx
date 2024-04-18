import React, { useState } from 'react';
import axios from 'axios';

const CustomerSupport = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post('http://localhost:9011/customer/support', data);
      setSubmitted(true);
      setData({
        name: '',
        email: '',
        query: ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className='text-center'>Customer Support</h2>
        <h3>FAQs</h3>
        <p>Here are some frequently asked questions:</p>
        <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          How Long it will take to deliver product?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          It will take 5-14 days to deliver product depends on the availability of product and delivery address.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                               Is there any delivery charges? if yes how much chargers will you charge?
                                </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseTwo">
                            <div className="accordion-body">
                                Yes for products below 1000 we charge around 100 but below 1000 it's completely free.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                Are this products are real and trusted?
                        </button>        
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseThree">
                            <div className="accordion-body">
                               Yes 100% trusted and verified products.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                Can we have any pay later options?
                                </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseFour">
                            <div className="accordion-body">
                                Ofcourse we have that option but you need an credit card for that.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                                COD available or not ?
                                </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseFive">
                            <div className="accordion-body">
                                Yes COD is available for all products but for some addresses it is not Avaliable.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                               amount debited but order in processing?
                                </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseSix">
                            <div className="accordion-body">
                                Sometimes it will take around a few hours to finish processing.
                            </div>
                        </div>
                    </div>
                </div>
                <section>
  <h3 className='text-center'>Contact Us</h3>
  <p className='text-center'>If you need further assistance, please contact us:</p>
  <ul className="text-center h6" style={{listStyleType:'none'}}>
    <li>Email: <a href="mailto:support@example.com">contact@gmail.com</a></li>
    <li>Phone: <a href="tel:6302510915">123-456-789</a></li>
  </ul>
</section>

<section>
  <h3>Submit a Query</h3>
  {submitted && <p className="text-success">Your query has been submitted successfully.</p>}
  {error && <p className="text-danger">An error occurred. Please try again later.</p>}
  <form onSubmit={handleForm}>
    <label htmlFor="name">Name:</label>
    <input className="form-control" type="text" id="name" name="name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
    <label htmlFor="email">Email:</label>
    <input className="form-control" type="email" id="email" name="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
    <label htmlFor="query">Query:</label>
    <textarea className="form-control" id="query" name="query" value={data.query} onChange={(e) => setData({ ...data, query: e.target.value })} required></textarea>
    <div className="d-flex align-items-center justify-content-center m-3">
      <button type="submit" className="form-control w-25 btn btn-outline-primary" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
    </div>
  </form>
</section>
            </div>
  );
};

export default CustomerSupport;
