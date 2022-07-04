const apiMiddleware = (store) => (next) => (action) => {
  if (!action.meta || action.meta.type !== "api") {
    return next(action);
  }

  // This is an api request
};
export default apiMiddleware;
