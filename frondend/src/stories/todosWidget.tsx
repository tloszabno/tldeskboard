import React from 'react'

import { storiesOf } from '@storybook/react'
import { Todo } from '../types/types'
import { TodoWidget } from '../components/todowidget/TodoWidget'

storiesOf('TodosWidget', module)
  .add('Widget with simple todos', () => <TodoWidget title={'Domowe TODO'} todos={todos} />)
  .add('Widget with simple todos with max items', () => (
    <TodoWidget title={'Domowe TODO'} todos={todos} maxItems={1} />
  ))

const todos: Todo[] = [
  { name: 'ogarnij prezent' },
  { name: 'ogarnij obiad', dueDate: '2019-08-08' }
]
