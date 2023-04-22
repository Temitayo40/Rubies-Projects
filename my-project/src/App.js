import React, { useState, useEffect } from "react";

import UserList from "./Component/UserList/userlist.component";
// import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setDatas(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="loading section">loading ...</h1>;
      </div>
    );
  }

  return <UserList datas={datas} />;
}

export default App;
