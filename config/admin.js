module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d910bf480520ee08ca9be5d84c55463'),
  },
});
