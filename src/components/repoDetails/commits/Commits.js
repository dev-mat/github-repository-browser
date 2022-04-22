import ErrorComponent from "../../share/ErrorComponent";
import LoadingComponent from "../../share/LoadingComponent";
import CommitTable from "../commitTable/CommitTable";
import { useCommit } from "./useCommits";

const Commits = ({ repo }) => {
  const {
    data,
    loading,
    error,
    goPrevPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    goNextPage,
  } = useCommit(repo);

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;

  const { history } = data.repository.defaultBranchRef.target;

  return (
    <CommitTable
      totalCount={history.totalCount}
      results={history.edges}
      goPrev={goPrevPage}
      goNext={goNextPage}
      canGoNext={history.pageInfo.hasNextPage}
      canGoPrev={history.pageInfo.hasPreviousPage}
      onPage={onPage}
      sizeOptions={sizeOptions}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default Commits;
