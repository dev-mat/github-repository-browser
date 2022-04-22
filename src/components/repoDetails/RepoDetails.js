import { useSearchParams } from "react-router-dom";
import { Box, Typography, Link, Paper } from "@mui/material";
import { palette } from "../../theme/colors";
import BookIcon from "@mui/icons-material/Book";
import { GET_REPOSITORY_DETAILS } from "../../api/queries";
import { useQuery } from "@apollo/client";
import ErrorComponent from "../share/ErrorComponent";
import LoadingComponent from "../share/LoadingComponent";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StarIcon from "@mui/icons-material/Star";
import RepoTabs from "./tabs/RepoTabs";

const style = {
  bookIcon: {
    color: palette.darkGrey,
    fontSize: 30,
  },
  link: {
    color: palette.darkGrey,
    textDecoration: "none",
  },
  openIcon: {
    color: palette.darkGrey,
    fontSize: 20,
  },
  starIcon: {
    color: palette.starYellow,
    fontSize: 25,
  },
  description: {
    borderColor: palette.darkGrey,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 2,
  },
};

const RepoDetails = () => {
  let [searchParams] = useSearchParams();

  const login = searchParams.get("login");
  const repo = searchParams.get("repo");

  const { loading, error, data } = useQuery(GET_REPOSITORY_DETAILS, {
    variables: {
      repoOwner: login,
      repoName: repo,
    },
  });

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;

  const { repository } = data;
  const commits = repository.defaultBranchRef.target.history.totalCount;
  const releases = repository.releases.totalCount;
  const issues = repository.issues.totalCount;
  return (
    <Box display="flex" flexDirection="column">
      <Link
        sx={style.link}
        href={repository.url}
        underline="hover"
        target="_blank"
      >
        <Box display="flex" alignItems="center">
          <BookIcon sx={style.bookIcon} />
          <Typography fontSize={30} color={palette.darkGrey}>
            {repo}
          </Typography>
          <OpenInNewIcon sx={style.openIcon} />
        </Box>
      </Link>
      <Typography>
        Created: {new Date(repository.createdAt).toLocaleDateString("pl-PL")}
      </Typography>
      <Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <StarIcon sx={style.starIcon} />{" "}
          <Typography
            marginTop={2}
            marginBottom={2}
            fontSize={20}
            color={palette.darkestGrey}
            fontWeight="bold"
          >
            {repository.stargazerCount}
          </Typography>
        </Box>
        <Typography
          sx={style.description}
          component={Paper}
          fontSize={20}
          color={palette.darkestGrey}
        >
          {repository.description}
        </Typography>
      </Box>
      <RepoTabs
        login={login}
        repo={repo}
        commitsCount={commits}
        releasesCount={releases}
        issuesCount={issues}
      />
    </Box>
  );
};

export default RepoDetails;
