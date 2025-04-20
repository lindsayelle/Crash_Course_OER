// constants/routes.js
const routes = {
  home: "/",
  courseInfo: (courseId) => `/${courseId}`,
  courseLearn: (courseId) => `/${courseId}/learn`,
};

export default routes;