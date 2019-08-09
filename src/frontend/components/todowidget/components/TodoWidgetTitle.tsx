import React from 'react'

interface Props {
    title: string
}

export const TodoWidgetTitle: React.FC<Props> = ({title}) => {
  return (
    <>
      <h3>{title}</h3>
    </>
  )
}
