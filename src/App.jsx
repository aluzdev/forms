import { useState } from "react";

import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [name, setName] = useState("kenny");
  const [favoriteColor, setFavoriteColor] = useState("orange");
  const [rememberMe, setRememberMe] = useState(true);
  const [avatar, setAvatar] = useState("https://picsum.photos/200/300");

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

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, favoriteColor, avatar, rememberMe };
    console.log({ formData });
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
    </>
  );
}

export default App;
