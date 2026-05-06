export const formatResponse = (data) => {
  return {
    status: "success",
    timestamp: new Date(),
    result: data
  };
};