import { Paper, InputBase, Divider, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { palette } from "../../theme/colors";
import RepoTable from "../share/RepoTable/RepoTable";
import { useRepoSearch } from "./useRepoSearch";
import LoadingComponent from "../share/LoadingComponent";
import ErrorComponent from "../share/ErrorComponent";
import OnlyArrowTablePagination from "../share/tablePagination/OnlyArrowsTablePagination";

const style = {
  paper: {
    display: "flex",
    border: 2,
    borderColor: palette.darkGrey,
  },
  inputBase: {
    marginLeft: 1,
    flex: 1,
    fontWeight: "bold",
    color: palette.darkestGrey,
  },
  searchIcon: {
    color: palette.darkestGrey,
  },
};

const RepoSearch = () => {
  const {
    loading,
    error,
    data,
    goPrevPage,
    goNextPage,
    inputValue,
    handleInputValueChange,
  } = useRepoSearch();

  const renderTable = () => {
    if (loading) return <LoadingComponent height={500} />;
    if (error) return <ErrorComponent height={500} />;
    if (data === null || data === undefined) return null;
    const Pagination = (
      <OnlyArrowTablePagination
        goPrev={goPrevPage}
        goNext={goNextPage}
        canGoNext={data.search.pageInfo.hasNextPage}
        canGoPrev={data.search.pageInfo.hasPreviousPage}
      />
    );

    return (
      <>
        {Pagination}
        <RepoTable
          totalCount={data.search.repositoryCount}
          results={data.search.edges}
        />
        {Pagination}
      </>
    );
  };

  return (
    <>
      <Paper sx={style.paper}>
        <InputBase
          sx={style.inputBase}
          placeholder="Repository name..."
          inputProps={{ "aria-label": "Repository search" }}
          value={inputValue}
          onChange={(e) => handleInputValueChange(e)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton aria-label="Search">
          <SearchIcon sx={style.searchIcon} />
        </IconButton>
      </Paper>
      {renderTable()}
    </>
  );
};

export default RepoSearch;
