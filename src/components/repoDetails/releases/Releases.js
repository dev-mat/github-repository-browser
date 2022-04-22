import ErrorComponent from "../../share/ErrorComponent";
import LoadingComponent from "../../share/LoadingComponent";
import ReleasesTable from "../releasesTable/ReleasesTable";
import { useReleases } from "./useReleases";

const Releases = ({ repo }) => {
  const {
    data,
    loading,
    error,
    goPrevPage,
    onPage,
    handleSizeChange,
    sizeOptions,
    goNextPage,
  } = useReleases(repo);

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;

  const { releases } = data.repository;

  return (
    <ReleasesTable
      totalCount={releases.totalCount}
      results={releases.edges}
      goPrev={goPrevPage}
      goNext={goNextPage}
      canGoNext={releases.pageInfo.hasNextPage}
      canGoPrev={releases.pageInfo.hasPreviousPage}
      onPage={onPage}
      sizeOptions={sizeOptions}
      handleSizeChange={handleSizeChange}
    />
  );
};

export default Releases;
