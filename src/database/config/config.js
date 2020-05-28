require('@babel/register');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL_DEV'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  },
  staging: {
    use_env_variable: 'DATABASE_URL'
  },
  SECRETKEY: process.env.SECRET
};
