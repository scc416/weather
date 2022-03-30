export const errorHandle = (eRef, error) => {
  const { message } = error;
  eRef.value = message;
};
