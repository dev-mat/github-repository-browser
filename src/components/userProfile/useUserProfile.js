import { GET_USER_DETAILS } from "../../api/queries";
import { login } from "../../api/userData";
import { useQuery } from "@apollo/client/react";

export const useUserProfile = () => {
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: {
      login: login,
    },
  });

  return {
    loading,
    error,
    data,
  };
};
