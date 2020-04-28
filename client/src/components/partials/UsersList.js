import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AssistantAvatar from "./steps/AssistantAvatar";
import "../../assets/scss/UserLists.scss";

const useStyles = makeStyles((theme) => (
  {
    root: {
      flexGrow: 1,
      maxWidth: 350,
      margin: 'auto',
      width: '100%'
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

export default function UsersList({data, deleteUser}) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    setUsers(data);
  });
  
  return (
    <div id="users-list" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Assistants
          </Typography>
          <div className={classes.demo}>
            <List>
              {users.map((user) => (
                <ListItem>
                  <ListItemAvatar>
                    <AssistantAvatar isSelected={false} sex={user.sex} color={user.color}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={user.firstName + ' ' + user.lastName}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user._id)}>
                      <DeleteIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
