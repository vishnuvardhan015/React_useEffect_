import { useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const Main = () => {
  const [datauser, setdataUser] = useState([]);

  const UserData = async (url) => {
    const Response = await fetch(url);
    const NewData = await Response.json();
    setdataUser(NewData);
  };

  useState(() => {
    UserData(URL);
  }, []);

  return (
    <div>
      {datauser.map((eachObj) => {
        const { name, username, id } = eachObj;
        return (
          <ul key={id}>
            <li>
              <h2>{name}</h2>
            </li>
            <li>{username}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Main;
