import React from 'react'
import { TodoWidget } from './components/todowidget/TodoWidget'
import { CssBaseline } from '@material-ui/core'

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <TodoWidget />
      </div>
    </>
  )
}

export default App
