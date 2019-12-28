import React, { useState, useEffect } from "react";

import AppView from "./AppView";

const App = () => {
  const [account, setAccount] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:8080/api/");
    res.json().then(res => setAccount(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <AppView account={account} />;
};
export default App;
