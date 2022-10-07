import React, { useEffect } from "react";
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { compose } from "redux";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileContainer = (props) => {
  let {userId} = useParams();
  let navigate = useNavigate();

  
  useEffect(() => {
    if(!userId) {
      userId = props.authorizedUserId;

      if(!userId) {
        navigate('/login')
      }
    }

    props.getUserProfile(userId);
    props.getStatus(userId);
  }, [])

   return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})



export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer);