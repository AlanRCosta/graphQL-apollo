const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  return response.json();
};

const users = async (_, { input }, { getUsers }) => {
  const apiFiltersInput = new URLSearchParams(input);
  console.log(apiFiltersInput.toString());
  const response = await getUsers('?' + apiFiltersInput);
  return response.json();
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
