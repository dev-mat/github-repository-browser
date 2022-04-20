import { gql } from "@apollo/client/core";

const GET_USER_DETAILS = gql`
  query getUserDetalis($login: String!) {
    user(login: $login) {
      login
      name
      avatarUrl
      createdAt
      url
      followers {
        totalCount
      }
      organizations(first: 10) {
        totalCount
        nodes {
          id
          name
          avatarUrl
        }
      }
    }
  }
`;

export { GET_USER_DETAILS };
