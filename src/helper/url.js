// @todo: Add staging cases for both urls
/*case 'production_staging':
  return 'https://app.openlaw.io/';*/

export const hostnameContext = () => {
  const deployContext = process.env.GATSBY_OL_CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const env = `${nodeEnv}_${deployContext}`;

  switch(env) {
    case 'production_develop':
      return 'https://app.dev.openlaw.io/';
    case 'production_production':
      return 'https://app.openlaw.io/';
    default:
      return 'http://localhost:9000/';
  }
};

export const websiteURL = () => {
  const deployContext = process.env.GATSBY_OL_CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const env = `${nodeEnv}_${deployContext}`;

  switch(env) {
    case 'production_develop':
      return 'https://develop.dev.openlaw.io/';
    case 'production_production':
      return 'https://openlaw.io/';
    case 'production_staging':
      return 'https://staging.dev.openlaw.io';
    default:
      return 'http://localhost:8000/';
  }
}
