import RepoTable from "../share/RepoTable/RepoTable";
import { useRepoList } from "./useRepoList";
import LoadingComponent from "../share/LoadingComponent";
import ErrorComponent from "../share/ErrorComponent";
import RepoTablePagination from "../share/RepoTable/RepoTablePagination";

const RepoList = () => {
  const {
    loading,
    error,
    data,
    goNextPage,
    goPrevPage,
    onPage,
    sizeOptions,
    direction,
    handleDirectionChange,
    handleSizeChange,
  } = useRepoList();

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;

  const renderPagination = () => (
    <RepoTablePagination
      goPrev={goPrevPage}
      goNext={goNextPage}
      canGoNext={data.user.repositories.pageInfo.hasNextPage}
      canGoPrev={data.user.repositories.pageInfo.hasPreviousPage}
      onPage={onPage}
      sizeOptions={sizeOptions}
      direction={direction}
      handleDirectionChange={handleDirectionChange}
      handleSizeChange={handleSizeChange}
    />
  );

  return (
    <>
      {renderPagination()}
      <RepoTable
        totalCount={data.user.repositories.totalCount}
        results={data.user.repositories.edges}
      />
      {renderPagination()}
    </>
  );
};

export default RepoList;
