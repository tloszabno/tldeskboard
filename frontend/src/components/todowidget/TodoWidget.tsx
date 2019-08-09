import React from 'react'
import { TodoWidgetTitle } from './components/TodoWidgetTitle'
import { TodoWidgetItem } from './components/TodoWidgetItem'
import { Todo } from '../../../../common/domainTypes'

interface Props {
  title: string
  todos: Todo[]
  maxItems?: number
}

export const TodoWidget: React.FC<Props> = ({ title, todos, maxItems }) => {
  const filteredTodos = maxItems !== undefined && maxItems > 0 ? todos.slice(0, maxItems) : todos
  return (
    <div>
      <TodoWidgetTitle title={title} />
      <div className={'todo-widget-list'}>
        {filteredTodos.map(todo => (
          <TodoWidgetItem todo={todo} />
        ))}
      </div>
    </div>
  )
}
