import { useState } from "react";
import { useQuery } from "@apollo/client";
import { login } from "../../../api/userData";
import { GET_REPOSITORY_COMMITS } from "../../../api/queries";

export const useCommit = (repo) => {
  const sizeOptions = [5, 10, 15, 20, 100];
  const [onPage, setOnPage] = useState(sizeOptions[0]);

  const createVariables = (first, after, last, before) => ({
    login: login,
    repo: repo,
    first: first,
    after: after,
    last: last,
    before: before,
  });

  const { loading, error, data, refetch } = useQuery(GET_REPOSITORY_COMMITS, {
    variables: createVariables(onPage, null, null, null),
  });

  const goPrevPage = () => {
    const { startCursor } =
      data.repository.defaultBranchRef.target.history.pageInfo;
    refetch(createVariables(null, null, onPage, startCursor));
  };

  const goNextPage = () => {
    const { endCursor } =
      data.repository.defaultBranchRef.target.history.pageInfo;
    refetch(createVariables(onPage, endCursor, null, null));
  };

  const handleSizeChange = (e) => {
    setOnPage(parseInt(e.target.value));
  };

  return {
    loading,
    error,
    data,
    goPrevPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    goNextPage,
  };
};
