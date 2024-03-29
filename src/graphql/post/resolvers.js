const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  return response.json();
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const response = await getPosts('/?' + apiFiltersInput);
  return response.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
