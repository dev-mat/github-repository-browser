import { GET_USER_DETAILS } from "../../api/queries";
import { login } from "../../api/userData";
import { useQuery } from "@apollo/client/react";
import { Box } from "@mui/system";
import {
  Avatar,
  Typography,
  AvatarGroup,
  Stack,
  Grid,
  Chip,
  Link,
} from "@mui/material";
import { palette } from "../../theme/colors";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LoadingComponent from "../share/LoadingComponent";
import ErrorComponent from "../share/ErrorComponent";

const style = {
  avatarGroupStyle: {
    justifyContent: "center",
    marginTop: 2,
  },
  avatarStyle: {
    maxWidth: 250,
    maxHeight: 250,
    height: "90%",
    width: "90%",
    marginTop: 3,
    marginBottom: 3,
    borderWidth: 3,
    borderColor: palette.lightGrey,
    borderStyle: "solid",
  },
  followStackStyle: {
    marginTop: 2,
  },
  chipLabelStyle: {
    fontSize: 20,
    color: palette.darkestGrey,
  },
  createdAtTypoStyle: {
    marginTop: 2,
  },
};

const UserProfile = () => {
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: {
      login: login,
    },
    onCompleted: (data) => console.log(data),
    onError: (error) => console.error(error),
  });

  if (loading) return <LoadingComponent height={500} />;
  if (error) return <ErrorComponent height={500} />;
  const { user } = data;
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
        <Stack alignItems="center">
          <Avatar src={user.avatarUrl} sx={style.avatarStyle} />
        </Stack>
      </Grid>
      <Grid
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
        sm={6}
        md={12}
        lg={12}
        xl={12}
        display="flex"
      >
        <Box>
          <Link href={user.url} underline="hover">
            <Typography
              align="center"
              fontSize={50}
              color={palette.darkestGrey}
            >
              {user.name}
            </Typography>
          </Link>
          <Typography align="center" fontSize={20} color={palette.darkGrey}>
            {user.login}
          </Typography>
          <Stack sx={style.followStackStyle}>
            <Chip
              icon={<PeopleAltIcon color={palette.darkGrey} />}
              label={
                <p style={style.chipLabelStyle}>{user.followers.totalCount}</p>
              }
            />
          </Stack>
          <Typography
            align="center"
            fontSize={20}
            color={palette.darkGrey}
            sx={style.createdAtTypoStyle}
          >
            Created: {new Date(user.createdAt).toLocaleDateString("pl-PL")}
          </Typography>
          <AvatarGroup
            total={user.organizations.totalCount}
            sx={style.avatarGroupStyle}
          >
            {user.organizations.nodes.map((org) => (
              <Avatar
                imgProps={{ title: org.name }}
                key={org.id}
                src={org.avatarUrl}
              />
            ))}
          </AvatarGroup>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
