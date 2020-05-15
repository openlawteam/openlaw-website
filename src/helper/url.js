export const hostnameContext = () => {
  const deployContext = process.env.GATSBY_OL_CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const env = `${nodeEnv}_${deployContext}`;

  switch (env) {
    case 'production_develop':
      return 'https://develop.dev.openlaw.io/web/default/';
    case 'production_production':
      return 'https://lib.openlaw.io/web/default/';
    default:
      return 'http://openlaw.localhost:9000/web/default/';
  }
};

export const websiteURL = () => {
  const deployContext = process.env.GATSBY_OL_CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const env = `${nodeEnv}_${deployContext}`;

  switch (env) {
    case 'production_develop':
    case 'production_production':
      return 'https://openlaw.io/';
    default:
      return 'http://localhost:8000/';
  }
};
