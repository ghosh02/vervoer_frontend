import React, {useState} from 'react';
import ProfileContext from './ProfileContext';

export const UserProfileContext = ({children}) => {
  const [show, setShow] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  return (
    <ProfileContext.Provider value={{show, setShow, profilePic, setProfilePic}}>
      {children}
    </ProfileContext.Provider>
  );
};
export default UserProfileContext;
