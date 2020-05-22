const withSass = require('@zeit/next-sass');

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = phase => {

  let env;

  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

  if (isDev)
    env = require('./environment.json')

  else if (isProd)
    env = require('./environment.prod.json')

  else if (isStaging)
    env = require('./environment.staging.json')

  return withSass({
    // Set this to true if you use CSS modules.
    // See: https://github.com/css-modules/css-modules
    cssModules: false,
    env
  })
};
