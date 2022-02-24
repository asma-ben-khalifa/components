import react from "react";
import photo from "./ph.jpg";

const ProfilePhoto = () =>{
    return(
        <>
              <img src={photo} alt="profile"  style={{width: 200, height: 200, position: 'absolute'}} />

        </>
    );
}

export default ProfilePhoto;