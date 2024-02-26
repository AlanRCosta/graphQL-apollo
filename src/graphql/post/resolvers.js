const post = () => {
  return {
    id: 'sdhjkasda-5d74sa5',
    title: 'Isso é um post.',
  };
};

const posts = () => {
  return [
    {
      id: 'sdhjkasda-5d74sa5',
      title: 'Isso',
    },
    {
      id: 'sdhjkasda-558fh87g',
      title: 'é',
    },
    {
      id: 'sdhjkasda-89s612g5',
      title: 'um',
    },
    {
      id: 'sdhjkasda-2454fds6',
      title: 'post.',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
