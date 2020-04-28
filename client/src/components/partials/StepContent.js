import React from 'react';
import AssistantName from "./steps/AssistantName";
import AssistantStyles from "./steps/AssistantStyles";
import AssistantAccount from "./steps/AssistantAccount";
import AssistantFinish from "./steps/AssistantFinish";
import '../../assets/scss/StepContent.scss';

export default function StepContent(props) {
  const getStepContent = (step) => {
    switch (step) {
      case 'name':
        return <AssistantName/>;
      case 'style':
        return <AssistantStyles/>;
      case 'account':
        return <AssistantAccount/>;
      default:
        return <AssistantFinish/>;
    }
  }
  return (
    <div id="content">
      {getStepContent(props.step)}
    </div>
  )
}
