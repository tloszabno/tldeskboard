import React from 'react'
import { TodoWidget } from './components/todowidget/TodoWidget'
import { ClockWidget } from './components/clock/ClockWIdget'

const App: React.FC = () => {
  return (
    <>
      <div>
        <TodoWidget />
      </div>
      <div>
        <ClockWidget />
      </div>
    </>
  )
}

export default App
