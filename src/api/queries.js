import { gql } from "@apollo/client/core";

const GET_USER_DETAILS = gql`
  query getUserDetalis($login: String!) {
    user(login: $login) {
      id
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

const GET_USER_REPOSITORIES = gql`
  query (
    $login: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
    $direction: OrderDirection!
  ) {
    user(login: $login) {
      id
      login
      repositories(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { field: CREATED_AT, direction: $direction }
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          node {
            id
            createdAt
            name
            updatedAt
            primaryLanguage {
              id
              name
              color
            }
          }
        }
      }
    }
  }
`;

const GET_REPOSITORY_DETAILS = gql`
  query getRepoDetails($repoName: String!, $repoOwner: String!) {
    repository(name: $repoName, owner: $repoOwner) {
      id
      name
      description
      url
      createdAt
      defaultBranchRef {
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
      releases {
        totalCount
      }
      issues {
        totalCount
      }
      stargazerCount
    }
  }
`;

const GET_REPOSITORY_COMMITS = gql`
  query getRepositoryCommits(
    $login: String!
    $repo: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    repository(owner: $login, name: $repo) {
      id
      name
      defaultBranchRef {
        target {
          ... on Commit {
            history(
              first: $first
              after: $after
              last: $last
              before: $before
            ) {
              totalCount
              pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  author {
                    name
                    avatarUrl
                  }
                  committedDate
                  message
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

const GET_REPOSITORY_RELEASES = gql`
  query getRepositoryReleases(
    $login: String!
    $repo: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    repository(owner: $login, name: $repo) {
      id
      name
      releases(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            ... on Release {
              name
              url
              createdAt
              id
              isLatest
              description
            }
          }
        }
      }
    }
  }
`;

const GET_REPOSITORY_ISSUES = gql`
  query getRepositoryIssues(
    $login: String!
    $repo: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    repository(owner: $login, name: $repo) {
      id
      name
      issues(
        first: $first
        after: $after
        last: $last
        before: $before
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            ... on Issue {
              id
              url
              title
              createdAt
              closed
              closedAt
              comments {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

const SEARCH_REPOSITORIES = gql`
  query searchRepos(
    $query: String!
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
      after: $after
      last: $last
      before: $before
    ) {
      repositoryCount
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            id
            createdAt
            name
            updatedAt
            primaryLanguage {
              id
              name
              color
            }
          }
        }
      }
    }
  }
`;

export {
  GET_USER_DETAILS,
  GET_USER_REPOSITORIES,
  GET_REPOSITORY_DETAILS,
  GET_REPOSITORY_COMMITS,
  GET_REPOSITORY_RELEASES,
  GET_REPOSITORY_ISSUES,
  SEARCH_REPOSITORIES,
};
