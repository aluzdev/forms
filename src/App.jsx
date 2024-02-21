import { useState, useEffect } from "react";

import "./App.css";
import { Form } from "./components/Form";
import { Card } from "./components/Card";
import { getUsers, postUsers } from "./api/users";

function App() {
  const [name, setName] = useState("kenny");
  const [favoriteColor, setFavoriteColor] = useState("orange");
  const [rememberMe, setRememberMe] = useState(true);
  const [avatar, setAvatar] = useState("https://picsum.photos/200/300");
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleFavoriteColor = (e) => {
    setFavoriteColor(e.target.value);
  };
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };
  const handleAvatar = (e) => {
    setAvatar(e.target.checked);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, favoriteColor, avatar, rememberMe };
    const data = await postUsers(formData);
    console.log({ formData, data });
  }
  return (
    <>
      <Form
        handleName={handleName}
        handleFavoriteColor={handleFavoriteColor}
        handleRememberMe={handleRememberMe}
        handleAvatar={handleAvatar}
        handleSubmit={handleSubmit}
        name={name}
        favoriteColor={favoriteColor}
        rememberMe={rememberMe}
        avatar={avatar}
      />
      <div className="grid grid-cols-2">
        {users &&
          users.map(({ key, avatar, favoriteColor, name, rememberMe }) => (
            <Card
              key={key}
              avatar={avatar}
              favoriteColor={favoriteColor}
              name={name}
              rememberMe={rememberMe}
            />
          ))}
      </div>
    </>
  );
}

export default App;
