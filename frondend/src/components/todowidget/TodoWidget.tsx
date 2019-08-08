import React from 'react'
import {Avatar, Icon, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'

interface Props {}

export const TodoWidget: React.FC<Props> = ({}) => {
  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon>image</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon>work</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon></Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  )
}
