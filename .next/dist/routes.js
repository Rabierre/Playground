'use strict';

var routes = require('next-routes')();

routes.add('/projects/new', '/projects/new').add('/projects/:address', '/projects/show').add('/projects/:address/requests', '/projects/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGlCQUN3QixBQUR4QixpQkFFRyxBQUZILElBRU8sQUFGUCxzQkFFNkIsQUFGN0Isa0JBR0csQUFISCxJQUdPLEFBSFAsK0JBR3NDLEFBSHRDOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ppaHllc2VvL1NvdXJjZXMvUGxheWdyb3VuZCJ9