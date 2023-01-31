import React, { useState } from 'react'
import MyCalender from './Calender'
import InputDate from './InputDate'

const Home = () => {
    const[date, setDate] = useState(new Date())

    console.log("Home", date)

  return (
    <div>
        <InputDate date={date} setDate={setDate}/>
        <MyCalender date={date}/>
      
    </div>
  )
}

export default Home
