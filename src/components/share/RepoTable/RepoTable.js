import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";
import { palette } from "../../../theme/colors";
import { useEffect, useState } from "react";
import RepoTableRow from "./RepoTableRow";
import EmptyRow from "./EmptyRow";

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

const RepoTable = (props) => {
  const { results, totalCount } = props;

  const [edges, setEdges] = useState([]);

  useEffect(() => {
    setEdges(results);
  }, [results]);

  return (
    <>
      <Typography fontSize={15} fontWeight="bold" color={palette.darkGrey}>
        Results: {totalCount}
      </Typography>
      <TableContainer component={Paper} sx={style.tableContainer}>
        <Table>
          <TableBody>
            {edges && edges.length > 0 ? (
              edges.map((edge) => (
                <RepoTableRow key={edge.node.id} repo={edge.node} />
              ))
            ) : (
              <EmptyRow />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RepoTable;
