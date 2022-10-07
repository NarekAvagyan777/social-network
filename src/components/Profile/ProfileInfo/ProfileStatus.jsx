import React, { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  }

  return (
    <div>
        {!editMode && 
            <div>
                <span onDoubleClick={ activateEditMode } >{props.status ||  '-----'}</span>
            </div>
        }

        {editMode &&
            <div>
                <input onChange={ onStatusChange } autoFocus={true} onBlur={ deactivateEditMode } type="text" value={status} />
            </div>
        }
    </div>
  )
}

export default ProfileStatus;