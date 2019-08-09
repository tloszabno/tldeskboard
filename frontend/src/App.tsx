import React from 'react'
import { ClockWidget } from './components/clock/ClockWIdget'
import { TodoWidget } from './components/todowidget/TodoWidget'
import { Todo } from '../../common/domainTypes'

const App: React.FC = () => {
  return (
    <>
      <div>
        <ClockWidget />
        <TodoWidget title={'Domowe TODO'} todos={todos} maxItems={2}/>
      </div>
    </>
  )
}

const todos: Todo[] = [
  { name: 'ogarnij prezent' },
  { name: 'ogarnij obiad', dueDate: '2019-08-08' }
]

export default App
