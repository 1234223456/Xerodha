import React from "react";

function Signup() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a free demat and trading account online</h1>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row p-5 align-items-center">
        <div className="col-7">
          <img src="/media/images/signup.png" style={{ width: "90%" }} alt="Signup" />
        </div>
        <div className="col-5">
          <h2 className="mb-3">Signup now</h2>
          <p className="text-muted">Or track your existing application</p>
          <input
            type="tel"
            className="form-control mb-3"
            placeholder="Your mobile number"
          />
          <button className="btn btn-primary fs-5 px-4">Get OTP</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
