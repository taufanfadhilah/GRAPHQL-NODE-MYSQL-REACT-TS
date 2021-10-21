import React from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutations";
import { useMutation, useQuery } from "@apollo/client";

export default function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => (
          <div>
            {user.name} / {user.username}
            <button
              onClick={() => {
                deleteUser({
                    variables: {
                        id: user.id
                    }
                });
              }}
            >
              Delete User
            </button>
          </div>
        ))}
    </div>
  );
}
