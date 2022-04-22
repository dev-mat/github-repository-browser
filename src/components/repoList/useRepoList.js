import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_REPOSITORIES } from "../../api/queries";
import { login } from "../../api/userData";

export const useRepoList = () => {
  const sizeOptions = [5, 10, 15, 20, 100];
  const [onPage, setOnPage] = useState(sizeOptions[0]);
  const [direction, setDirection] = useState("DESC");

  const createVariables = (first, after, last, before) => ({
    login: login,
    first: first,
    after: after,
    last: last,
    before: before,
    direction: direction,
  });

  const { loading, error, data, refetch } = useQuery(GET_USER_REPOSITORIES, {
    variables: createVariables(onPage, null, null, null),
  });

  const goPrevPage = () => {
    const { startCursor } = data.user.repositories.pageInfo;
    refetch(createVariables(null, null, onPage, startCursor));
  };

  const goNextPage = () => {
    const { endCursor } = data.user.repositories.pageInfo;
    refetch(createVariables(onPage, endCursor, null, null));
  };

  const handleSizeChange = (e) => {
    setOnPage(parseInt(e.target.value));
  };

  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };

  return {
    loading,
    error,
    data,
    goPrevPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    direction,
    handleDirectionChange,
    goNextPage,
  };
};
