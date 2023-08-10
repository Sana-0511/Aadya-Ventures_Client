import React, { useState } from 'react';
import { db } from "../firebaseConfig.js";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        firstName,
        lastName,
        email,
        phone,
        message,
      };

      await db.collection("ContactUsRecord").add(contactData);

      alert("Information Successfully Added");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log("Error creating contact entry:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="mt-[100px] mb-[100px] flex justify-center">
      <div className="w-2/3">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="text-inblue text-center text-4xl font-semibold mt-10 mb-10">Contact Us</h1>
          </div>

          <div className="flex justify-center">
            <div className="w-2/3">
              <div>
                <input
                  type="text"
                  name="firstName"
                  className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="bg-slate-200 px-4 pr-20 w-full h-10 my-2 rounded-lg text-black text-base"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="message"
                  className="bg-slate-200 px-4 w-full h-10 my-2 mb-4 rounded-lg text-black text-base"
                  placeholder="Enter your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="mt-[40px] bg-black hover:bg-inblue transition w-40 h-12 rounded-lg mb-4 flex items-center justify-center text-white text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <img src="/images/a.jpeg" alt="Contact Image" className="max-w-full" />
      </div>
    </div>
  );
}