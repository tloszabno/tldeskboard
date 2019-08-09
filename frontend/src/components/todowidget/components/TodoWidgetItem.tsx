import React from 'react'
import styled from 'styled-components'
import { Todo } from '../../../../../common/domainTypes'

const ItemDiv = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 0.7em;
  margin: 0.4em;
  overflow: hidden;
`

const NameSpan = styled.span`
  font-size: 1.2em;
`

const DueDateSpan = styled.span`
  float: right;
  font-size: 0.9em; 
  display: inline-flex;
  align-items: center;
  min-height: 25px;
`

interface Props {
  todo: Todo
}

export const TodoWidgetItem: React.FC<Props> = ({ todo }) => {
  return <ItemDiv>
    <NameSpan className={"todo-name"}> {todo.name}</NameSpan>
    <DueDateSpan className={"todo-due"}>{todo.dueDate}</DueDateSpan>
  </ItemDiv>
}
