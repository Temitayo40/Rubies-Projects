import React, { useState } from "react";
import User from "../User/user.component";
import "../../app.css";

const UserList = ({ datas }) => {
  // const state = dta
  return (
    <div>
      <section className="section">
        <div className="container">
          <header className="title">
            <h2>User's Info</h2>
            <div className="underline"></div>
          </header>
          <div>
            <User datas={datas} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default UserList;
