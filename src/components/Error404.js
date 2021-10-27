import { Link } from "react-router-dom";
import React from 'react';

function Error404() {
      return (
            (<section className="error404">
                  <div className="error404__container">
                        <h1 className="error404__heading">404</h1>
                        <p className="error404__desсription">Страница не найдена</p>
                        <Link to="/" className="error404__back">Назад</Link>
                  </div>
            </section>)
      );
}
export default Error404;