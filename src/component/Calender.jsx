import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MyCalender = ({ date }) => {
  console.log("My calender", date);

  return (
    <div style={{margin: " 50px auto ",width: "25%", border: "1px solid black"}}>
      <Calendar value={new Date(date)} />
    </div>
  );
};

export default MyCalender;
