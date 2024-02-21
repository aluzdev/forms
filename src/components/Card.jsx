import React from "react";

export const Card = ({ name, favoriteColor, avatar, rememberMe }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={avatar} alt="user" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{favoriteColor}</p>
      </div>
      {/* {rememberMe ? (
        <p>this user wants to be remembered</p>
      ) : (
        <p>this user does not want to be remembered</p>
      )} */}
    </div>
  );
};

export default Card;
