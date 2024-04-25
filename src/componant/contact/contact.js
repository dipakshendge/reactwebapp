import React from "react";


const ContactForm = () => {
    return(
        <>
            <div className="container mt-3 bg-white pb-2 rounded">
                <div className="footer-title text-center">
                    <h1 className="text-dark">Contact Us</h1>
                    <h3 className="text-dark">You will get the response shortly</h3>
                </div>
                <div className="form mt-4">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <input type="text" className="form-control mt-3" placeholder="First Name" />
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="form-control mt-3" placeholder="Last Name" />
                            </div>
                        </div>
                        <input type="email" className="form-control mt-3" placeholder="Email" />
                        <textarea className="form-control mt-3 mb-3" name="" id="" cols="20" rows="5">Comment</textarea>
                        <button className="btn btn-primary mb-20 col-lg-2">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm;