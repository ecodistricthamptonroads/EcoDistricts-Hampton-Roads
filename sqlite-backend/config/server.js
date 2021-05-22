module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://api.ecodistricthamptonroads.org',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '64ea995b492ccf64b54e3685bcc76023')
    }
  }
});