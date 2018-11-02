const routes = require('next-routes')();

routes
  .add('/projects/new', '/projects/new')
  .add('/projects/:address', '/projects/show')
  .add('/projects/:address/requests', '/projects/requests/index');


module.exports = routes;
