import { useState, useEffect } from "react";

import "./App.css";
import { Form } from "./components/Form";
// import { Card } from "./components/Card";
// import { getUsers } from "./api/users";

function App() {
  useEffect(() => {
    // getUsers().then((data) => setUsers(data));
  }, []);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = { name, favoriteColor, avatar, rememberMe };
  //   await postUsers(formData);
  //   //hasta aquí se acaba guardar datos ^
  //   //acá empieza actualizar los datos nuevos (o seaa, traerme los datos que acabo de postear)
  //   const updatedUsers = await getUsers();
  //   setUsers(updatedUsers);
  //   console.log({ formData });
  // }
  return (
    <>
      <Form />
      {/* <div className="grid grid-cols-2 gap-4 mt-4">
        {users &&
          users.map(({ key, avatar, favoriteColor, name, rememberMe }) => (
            <div key={key}>
              <Card
                avatar={avatar}
                favoriteColor={favoriteColor}
                name={name}
                rememberMe={rememberMe}
              />
            </div>
          ))}
      </div> */}
    </>
  );
}

export default App;
