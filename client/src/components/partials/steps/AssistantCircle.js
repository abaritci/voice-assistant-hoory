import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles((theme) => (
  {
    circle: {
      height: 50,
      width: 50,
      borderRadius: '50%',
      display: 'inline-block'
    },
    active: {
      height: 60,
      width: 60,
      borderRadius: '50%',
      display: 'inline-block',
      padding: 3
    }
  }));
export default function AssistantCircle(props) {
  const classes = useStyles();
  const {isActive, activeColor, backgroundColor, gradientColor} = props;
  return (
    <div style={isActive ? {border: '2px solid ' + activeColor} : {}} className={isActive ? classes.active : ''}>
      <div style={{
        backgroundColor,
        backgroundImage: 'linear-gradient(to right, ' + backgroundColor + ' , ' + gradientColor + ')'
      }} className={classNames(classes.circle)}/>
    </div>
  
  );
}

