import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Route, useHistory, Switch, Redirect } from 'react-router-dom';

import Main from './Main';
import Profile from './Profile';
import Error404 from './Error404';



function App() {

  const user = useSelector((state) => state.userReducer);
  const history = useHistory();

  const [formData, setFormData] = useState({ name: '', password: '' });
  const [validData, setValidData] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  useEffect(() => {
    setValidData(validity(formData));
  }, [formData]);

  function validity(formData) {
    if (formData.name === user.name && +formData.password === user.password) {
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push('/profile');;
}

  return (
    <div className="page">
      <div className="page__container">
        <Switch >
          <Route exact path="/profile">
            {validData ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Main
              formData={formData}
              validData={validData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/*" >
            <Error404 />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;