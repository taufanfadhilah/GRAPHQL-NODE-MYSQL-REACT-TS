import React, { useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutations";
import { useMutation } from "@apollo/client";

export default function UpdatePassword() {
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    if (error) {
        return <h1>{error}</h1>
    }

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Curent Password"
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        onChange={(e) => setnewPassword(e.target.value)}
      />
      <button
        onClick={() =>
          updatePassword({
            variables: {
              username,
              oldPassword: currentPassword,
              newPassword,
            },
          })
        }
      >
        UPDATE PASSWORD
      </button>
    </div>
  );
}
