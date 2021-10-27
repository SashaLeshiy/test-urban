import React from 'react';
import { useSelector } from "react-redux";

function Profile({ buttonBack }) {

    const user = useSelector((state) => state.userReducer);


  return (
    (<main className="content section">
        <div className="login__container">
            <h1 className="login__heading">{user.name}</h1>
            <button onClick={buttonBack} className="error404__back">Выход</button>
        </div>
      </main>
    )
  );
}

export default Profile;