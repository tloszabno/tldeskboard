import React from 'react'
import { TodoWidgetTitle } from './components/TodoWidgetTitle'
import { TodoWidgetItem } from './components/TodoWidgetItem'

interface Props {}

export const TodoWidget: React.FC<Props> = ({}) => {
  return (
    <div>
      <TodoWidgetTitle />
      <div>
        <TodoWidgetItem />
        <TodoWidgetItem />
        <TodoWidgetItem />
      </div>
    </div>
  )
}
