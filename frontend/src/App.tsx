import React from 'react'
import { ClockWidget } from './components/clock/ClockWIdget'
import { TodoWidget } from './components/todowidget/TodoWidget'
import { Todo } from '../../common/domainTypes'
import { useApi } from './hooks/useApi.js'

const App:React.FC = () => {
  const [data, loading, error] = useApi<Todo[]>('/api/todo', [])
  return (
    <>
      <div>
        <ClockWidget/>
        <TodoWidget title={'Domowe TODO'} todos={data}/>
      </div>
    </>
  )
}

export default App
