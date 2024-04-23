import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../component/Layout";
import { Row } from "antd";
import DoctorList from "../component/DoctorList";
import RealChat from "../component/RealChat";
import { useNavigate } from "react-router-dom";
import "../styles/LayoutStyles.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleChatClick = () => {
    setShowChat(true);
  };
  const handleCancelClick = () => {
    setShowChat(false);
  };

  return (
    <Layout>
      <h1 className="text-center">Home Page</h1>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
      {showChat && <RealChat />}

      <div
        onClick={handleChatClick}
        onDoubleClick={handleCancelClick}
        className="chat-bot"
      >
        <img
          src="https://images-platform.99static.com/4VNlmbLPzOCSHP8RB4bAwwohd0g=/0x0:1024x1024/500x500/top/smart/99designs-contests-attachments/91/91577/attachment_91577988"
          width={90}
          height={90}
          alt="ChatBot"
        ></img>
      </div>
    </Layout>
  );
};

export default HomePage;
