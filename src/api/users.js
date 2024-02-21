const API_URL = "https://react-cards-6f4dd-default-rtdb.firebaseio.com";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users/.json`);
  const data = await response.json();
  const formattedData = Object.keys(data).map((key) => {
    return { key, ...data[key] };
  });
  console.log(formattedData);
  return formattedData;
}

export async function postUsers(user) {
  console.log("from api", user);
  const response = await fetch(`${API_URL}/users/.json`, {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
