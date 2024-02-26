const user = () => {
  return {
    id: 'sdhjkasda-5d74sa5',
    name: 'Alan',
  };
};

const users = () => {
  return [
    {
      id: 'sdhjkasda-5d74sa5',
      name: 'Alan',
    },
    {
      id: 'sdhjkasda-558fh87g',
      name: 'Lorena',
    },
    {
      id: 'sdhjkasda-89s612g5',
      name: 'Sansa',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
