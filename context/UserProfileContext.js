import React, {useState} from 'react';
import ProfileContext from './ProfileContext';

export const UserProfileContext = ({children}) => {
  const [show, setShow] = useState(false);
  return (
    <ProfileContext.Provider value={{show, setShow}}>
      {children}
    </ProfileContext.Provider>
  );
};
export default UserProfileContext;
