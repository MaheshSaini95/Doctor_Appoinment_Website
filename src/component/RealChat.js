import React from "react";

import ChatBot from "react-simple-chatbot";
import "../styles/LayoutStyles.css";

function RealChat() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our website",
      trigger: "Done",
    },
    {
      id: "Done",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issue",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Appointments",
          label: "Appointments",
          trigger: "Appointments",
        },
        { value: "Profile issue", label: "Profile", trigger: "Profile" },
        { value: "Booking issue", label: "Booking", trigger: "Booking" },
        { value: "Payment issue", label: "Payment", trigger: "Payment" },
        { value: "Other", label: "Other", trigger: "Other" },
      ],
    },
    {
      id: "Appointments",
      message:
        "Thanks for letting your Appointments issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Profile",
      message:
        "Thanks for letting your Profile issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Booking",
      message:
        "Thanks for letting your Booking issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Payment",
      message:
        "Thanks for letting your Payment issue, Our team will resolve your issue ASAP",
      end: true,
    },
    {
      id: "Other",
      message: " Can you please typing your issue here",
      trigger: "typing",
    },
    {
      id: "typing",
      user: true,
      trigger: "typing1",
    },
    {
      id: "typing1",
      message:
        "Thanks for explain your issue, Our team will resolve your issue ASAP ",
      end: true,
    },
  ];
  return (
    <div>
      <div className="chat-show">
        <ChatBot steps={steps} />
      </div>
    </div>
  );
}

export default RealChat;
