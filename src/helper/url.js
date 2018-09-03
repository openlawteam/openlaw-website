export const hostnameContext = () => {
  const netlifyContext = process.env.CONTEXT;
  const nodeEnv = process.env.NODE_ENV;
  const env = `${nodeEnv}_${netlifyContext}`;

  switch(env) {
    case 'development_develop':
      return 'https://app.dev.openlaw.io/';
    case 'production_production':
      return 'https://app.openlaw.io/';
    default:
      return 'http://localhost:9000/';
  }
};
