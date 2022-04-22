import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";
import { palette } from "../../../theme/colors";
import EmptyRow from "../../share/RepoTable/EmptyRow";
import { useState, useEffect } from "react";
import IssuesTableRow from "./IssuesTableRow";
import SimpleTablePagination from "../../share/tablePagination/SimpleTablePagination";

const style = {
  tableContainer: {
    marginBottom: 2,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: palette.darkGrey,
    boxSizing: "border-box",
  },
  button: {
    marginLeft: 1,
    marginRight: 1,
  },
};

const IssuesTable = (props) => {
  const { results, totalCount } = props;

  const [edges, setEdges] = useState([]);

  useEffect(() => {
    setEdges(results);
  }, [results]);

  return (
    <>
      <SimpleTablePagination {...props} />
      <Typography fontSize={15} fontWeight="bold" color={palette.darkGrey}>
        Results: {totalCount}
      </Typography>
      <TableContainer component={Paper} sx={style.tableContainer}>
        <Table>
          <TableBody>
            {edges && edges.length > 0 ? (
              edges.map((edge) => (
                <IssuesTableRow key={edge.node.id} issue={edge.node} />
              ))
            ) : (
              <EmptyRow />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <SimpleTablePagination {...props} />
    </>
  );
};

export default IssuesTable;
