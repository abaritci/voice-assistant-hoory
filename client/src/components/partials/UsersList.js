import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import AssistantAvatar from "./steps/AssistantAvatar";
import "../../assets/scss/UserLists.scss";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SearchAssistant from "./SearchAssistant";

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

export default function UsersList({data, deleteUser, searchAssistant}) {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [actions, setActions] = useState({});
  const showActions = (userId) => {
    setActions({[userId]: !actions[userId]});
  };
  
  useEffect(() => {
    setUsers(data);
  }, [data]);
  
  return (
    <div id="users-list" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Assistants
          </Typography>
          <div className={classes.demo}>
            <div id="search-assistant">
              <SearchAssistant search={(string) => searchAssistant(string)}/>
            </div>
            <List>
              {users.map((user, key) => (
                <ListItem key={key}>
                  <ListItemAvatar>
                    <AssistantAvatar isSelected={false} sex={user.sex} color={user.color}/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={user.firstName + ' ' + user.lastName}
                  />
                  <ListItemSecondaryAction>
                    {actions[user._id] &&
                    <IconButton edge="end" aria-label="delete" component={Link} to={'/edit-assistant/' + user._id}>
                      <EditIcon/>
                    </IconButton>}
                    {actions[user._id] &&
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteUser(user._id)}>
                      <DeleteIcon/>
                    </IconButton>}
                    <IconButton edge="end" aria-label="delete"
                                onMouseEnter={() => showActions(user._id)}
                                onMouseDown={() => showActions(user._id)}
                    >
                      <MoreVertIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
            <div id="add-assistant">
              <Button
                component={Link}
                variant="outlined"
                className={classes.button}
                startIcon={<AddIcon/>}
                to={'/add-assistant'}
              >
                Add Workspace
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
