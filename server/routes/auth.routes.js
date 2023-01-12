const { verifyRegister } = require('../middlewares/verify.register');
const { verifyToken } = require('../middlewares/auth.jwt');
const { register, login } = require('../controllers/auth.controller.js');

module.exports = function (app) {
  app.use(function (_, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();
  });

  app.post('/api/auth/register', [verifyRegister], register);

  app.post('/api/auth/login', login);

  app.post('/api/auth/verify/:token', verifyToken);

  //app.post('/api/auth/secret').get(controller.secret);
  //app.post('/api/auth/verify').post(controller.verify);
  //app.post('/api/auth/forgot').post(controller.forgot);
  //app.post('/api/auth/resend').post(controller.resend);
  //app.post('/api/auth/reset').post(controller.reset);
};
