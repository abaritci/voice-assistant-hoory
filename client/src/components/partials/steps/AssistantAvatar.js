import React from 'react';
import Female1 from "../../../assets/logos/female-1.svg";
import Female2 from "../../../assets/logos/female-2.svg";
import Female3 from "../../../assets/logos/female-3.svg";
import Female4 from "../../../assets/logos/female-4.svg";
import Female5 from "../../../assets/logos/female-5.svg";
import Female6 from "../../../assets/logos/female-6.svg";
import Female7 from "../../../assets/logos/female-7.svg";
import FemaleSelected1 from "../../../assets/logos/female-selected-1.svg";
import FemaleSelected2 from "../../../assets/logos/female-selected-2.svg";
import FemaleSelected3 from "../../../assets/logos/female-selected-3.svg";
import FemaleSelected4 from "../../../assets/logos/female-selected-4.svg";
import FemaleSelected5 from "../../../assets/logos/female-selected-5.svg";
import FemaleSelected6 from "../../../assets/logos/female-selected-6.svg";
import FemaleSelected7 from "../../../assets/logos/female-selected-7.svg";
import Male1 from "../../../assets/logos/male-1.svg";
import Male2 from "../../../assets/logos/male-2.svg";
import Male3 from "../../../assets/logos/male-3.svg";
import Male4 from "../../../assets/logos/male-4.svg";
import Male5 from "../../../assets/logos/male-5.svg";
import Male6 from "../../../assets/logos/male-6.svg";
import Male7 from "../../../assets/logos/male-7.svg";
import MaleSelected1 from "../../../assets/logos/male-selected-1.svg";
import MaleSelected2 from "../../../assets/logos/male-selected-2.svg";
import MaleSelected3 from "../../../assets/logos/male-selected-3.svg";
import MaleSelected4 from "../../../assets/logos/male-selected-4.svg";
import MaleSelected5 from "../../../assets/logos/male-selected-5.svg";
import MaleSelected6 from "../../../assets/logos/male-selected-6.svg";
import MaleSelected7 from "../../../assets/logos/male-selected-7.svg";
import Avatar from "@material-ui/core/Avatar";

export default function AssistantAvatar(props) {
  const {isSelected, sex, color} = props;
  
  const selectedAvatars = {
    female: [FemaleSelected1, FemaleSelected2, FemaleSelected3, FemaleSelected4, FemaleSelected5, FemaleSelected6, FemaleSelected7],
    male: [MaleSelected1, MaleSelected2, MaleSelected3, MaleSelected4, MaleSelected5, MaleSelected6, MaleSelected7],
  };
  const defaultAvatars = {
    female: [Female1, Female2, Female3, Female4, Female5, Female6, Female7],
    male: [Male1, Male2, Male3, Male4, Male5, Male6, Male7],
  };
  return (
    <div>
      <Avatar src={isSelected ? selectedAvatars[sex][parseInt(color)-1] : defaultAvatars[sex][parseInt(color) - 1]}/>
    </div>
  
  );
}

