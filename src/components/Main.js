import React from 'react';

function Main({
  handleChange,
  formData,
  validData,
  handleSubmit
}) {

return (
    (<main className="content section">
        <div className="login__container">
            <h3 className="login__heading">Вход</h3>
            <form name="auth__form"
             onSubmit={handleSubmit}
             noValidate>
                <input type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Имя"
                    className="login__input login__input_email"
                    minLength="2" maxLength="30" required />
                <input type="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    placeholder="Пароль"
                    className="login__input login__input_password"
                    minLength="6" required />
                  {validData ?
                  <button type="submit" className="login__save_active" >Войти</button>
                      :
                  <button type="submit" className="login__save" disabled>Войти</button>
                  }
                
            </form>
        </div>
      </main>
    )
  );
}

export default Main;