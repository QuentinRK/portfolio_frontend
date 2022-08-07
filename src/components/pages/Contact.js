import React, { useState } from "react";
import "../../styles/contact.scss";
import { client } from "../../client/Client";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const [response, setResponse] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [msg, setMsg] = useState();

  const clearForm = () => {
    document.getElementById("form").reset();
  };

  const refresh = (res) => {
    console.log("Success");
    setResponse(res);
    console.log(response);
    clearForm();
    setTimeout(() => {
      setResponse();
    }, 8000);
  };

  const SubmitButton = () => {
    if (name && email && msg) {
      return (
        <button type="submit" className="btn">
          Send Message
        </button>
      );
    } else {
      return (
        <button type="submit" className="btn-disabled" disabled>
          Send Message
        </button>
      );
    }
  };

  const post = async (e) => {
    e.preventDefault();
    await client
      .post("/contact", {
        name: name,
        email: email,
        message: msg,
      })
      .then((res) => {
        refresh(res.status);
      })
      .catch((res) => {
        refresh(res.response.status);
      });
  };

  return (
    <div className="contact-container">
      <form onSubmit={post} id="form">
        <label for="Name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label for="Email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label for="Message">Message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          rows="8"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <br />
        <SubmitButton />
      </form>
      {response && (
        <Fade>
          <h4
            className={response === 200 ? "success-response" : "error-response"}
          >
            {response === 200 ? "Message Has Been Sent!" : "An Error Occured"}
          </h4>
        </Fade>
      )}
    </div>
  );
};

export default Contact;
