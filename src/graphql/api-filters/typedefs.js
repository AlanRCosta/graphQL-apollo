import { gql } from 'apollo-server-core';

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _start: Int
    _limit: Int
    _order: String
    _sort: String
  }
`;
