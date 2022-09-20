import { useState } from "react";
const LoginForm = () => {
  const [contact, setcontact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setcontact((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  return (
    <div>
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <div style={{ marginTop: "5px" }}>
        <input
          style={{ padding: "5px" }}
          name="fName"
          placeholder="Full Name"
          onChange={handleChange}
          value={contact.fName}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          style={{ padding: "5px" }}
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          value={contact.lName}
        />
        <div style={{ marginTop: "5px" }}>
          <input
            name="email"
            placeholder="Email"
            style={{ padding: "5px" }}
            onChange={handleChange}
            value={contact.email}
          />
        </div>
      </div>
      <div style={{ marginTop: "5px" }}>
        <button style={{ padding: "5px" }}>Submit</button>
      </div>
    </div>
  );
};

export default LoginForm;
