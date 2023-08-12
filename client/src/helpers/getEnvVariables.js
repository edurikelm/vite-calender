export const getEnvcVariables = () => {
  import.meta.env;

  return {
    ...import.meta.env,
  };
};
