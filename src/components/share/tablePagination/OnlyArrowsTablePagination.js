import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

const style = {
  button: {
    marginLeft: 1,
    marginRight: 1,
  },
  box: {
    marginTop: 1,
    boxSizing: "borderBox",
  },
};

const OnlyArrowTablePagination = ({ goPrev, goNext, canGoNext, canGoPrev }) => {
  const [canNext, setCanNext] = useState(canGoNext);
  const [canPrev, setCanPrev] = useState(canGoPrev);

  useEffect(() => {
    setCanNext(canGoNext);
    setCanPrev(canGoPrev);
  }, [canGoNext, canGoPrev]);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={style.box}
    >
      <IconButton
        onClick={goPrev}
        disabled={!canPrev}
        sx={style.button}
        size="large"
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={goNext}
        disabled={!canNext}
        sx={style.button}
        size="large"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default OnlyArrowTablePagination;
