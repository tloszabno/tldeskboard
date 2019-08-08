import React, { useState } from 'react'
import './clock.css'
import moment from 'moment'

export const ClockWidget: React.FC = () => {
  const [time, setTime] = useState(moment())
  const updateTime = () => {
    setTime(moment())
  }
  setInterval(updateTime, 200)

  const hour = time.format('k')
  const minute = time.format('mm')
  const second = time.format('ss')
  const year = time.format('YYYY')
  const month = time.format('MM')
  const day = time.format('DD')

  return (
    <div className="clock-container">
      <div className="clock-col">
        <p className="clock-hours clock-timer">{hour}</p>
        <p className="clock-label">{year}</p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">{minute}</p>
        <p className="clock-label">{month}</p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">{second}</p>
        <p className="clock-label">{day}</p>
      </div>
    </div>
  )
}
