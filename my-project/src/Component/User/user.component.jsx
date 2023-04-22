import React, { useState } from "react";
import { FaAngleDoubleRight, FaLessThan } from "react-icons/fa";
import Modal from "../Modal/modal.component";
// import Modal from "../Modal/modal.component";
import "../../app.css";
const User = ({ datas }) => {
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);
  const { id, name, email, phone, company, address, username, website } =
    datas[value];
  const [number, setNumber] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  const GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(RandomNumber + 1);
  };

  return (
    <div className="section-center">
      <div className="btn-container">
        {datas.map((data, index) => {
          return (
            <button
              key={data.id}
              onClick={() => {
                setValue(index);
                setNumber(null);
              }}
              className={`job-btn ${index === value && "active-btn"}`}
            >
              {data.username}
            </button>
          );
        })}
      </div>
      <article className="job-info">
        <h3 className="name">{name}</h3>
        <h4 className="company">{company.name}</h4>
        <h3>{email}</h3>
        <div className="words">
          <p className="werd">{`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}</p>
          <p className="word">Latitude : {address.geo.lat}</p>
          <p className="word"> Longitude : {address.geo.lng}</p>
        </div>

        <div className="footer">
          <p>
            <FaAngleDoubleRight className="job-icon" />
            &nbsp; You can reach me on my telephone no:
            <b>{phone}</b>
          </p>
          <p>
            <FaAngleDoubleRight className="job-icon" />
            &nbsp; Or visit my website at <a href={website}>{`${website}`}</a>
          </p>
          <h2 style={{ marginTop: "2rem" }}> Random number: {number}</h2>
        </div>

        <button
          type="button"
          className="btn"
          onClick={() => {
            toggleModal();
            GenerateRandomNumber();
          }}
        >
          Random Num
        </button>
      </article>
      <Modal toggleModal={toggleModal} number={number} />
    </div>
  );
};

export default User;
