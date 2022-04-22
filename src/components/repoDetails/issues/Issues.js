import ErrorComponent from "../../share/ErrorComponent";
import LoadingComponent from "../../share/LoadingComponent";
import IssuesTable from "../issuesTable/IssuesTable";
import { useIssues } from "./useIssues";

const Issues = ({ repo }) => {
  const {
    data,
    loading,
    error,
    goPrevPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    goNextPage,
  } = useIssues(repo);

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;

  const { issues } = data.repository;

  return (
    <IssuesTable
      totalCount={issues.totalCount}
      results={issues.edges}
      goPrev={goPrevPage}
      goNext={goNextPage}
      canGoNext={issues.pageInfo.hasNextPage}
      canGoPrev={issues.pageInfo.hasPreviousPage}
      onPage={onPage}
      sizeOptions={sizeOptions}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default Issues;
