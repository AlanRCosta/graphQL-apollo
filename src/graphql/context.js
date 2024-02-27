import fetch from 'node-fetch';

const apiUrl = 'http://localhost:3000';

export const context = () => {
  return {
    getUsers: (patch = '/') => fetch(apiUrl + '/users' + patch),
    getPosts: (patch = '/') => fetch(apiUrl + '/posts' + patch),
  };
};
