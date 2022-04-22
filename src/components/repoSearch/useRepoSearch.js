import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "../../api/queries";
import { login } from "../../api/userData";

export const useRepoSearch = () => {
  const sizeOptions = [5, 10, 15, 20, 100];
  const [onPage, setOnPage] = useState(sizeOptions[0]);
  const [inputValue, setInputValue] = useState("");

  const createQuery = (searchValue) => {
    return `${searchValue} in:name, ${login} in:login`;
  };

  const createVariables = (first, after, last, before, query) => ({
    login: login,
    first: first,
    after: after,
    last: last,
    before: before,
    query: query,
  });

  const [searchRepositories, { loading, error, data, refetch }] =
    useLazyQuery(SEARCH_REPOSITORIES);

  const goPrevPage = () => {
    const { startCursor } = data.search.pageInfo;
    refetch(
      createVariables(
        null,
        null,
        onPage,
        startCursor,
        createQuery(inputValue, login)
      )
    );
  };

  const goNextPage = () => {
    const { endCursor } = data.search.pageInfo;
    refetch(
      createVariables(
        onPage,
        endCursor,
        null,
        null,
        createQuery(inputValue, login)
      )
    );
  };

  const handleSizeChange = (e) => {
    setOnPage(parseInt(e.target.value));
  };

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    searchRepositories({
      variables: createVariables(
        onPage,
        null,
        null,
        null,
        createQuery(e.target.value, login)
      ),
    });
  };

  return {
    loading,
    error,
    data,
    goPrevPage,
    goNextPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    inputValue,
    searchRepositories,
    handleInputValueChange,
  };
};
