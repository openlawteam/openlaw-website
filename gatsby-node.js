// Promise API
const Shell = require('child_process');
const path = require('path');

// Callback API
exports.createPages = (gatsby, pluginOptions, cb) => {
  Shell.execSync('rm -rf public/static/img');
  Shell.execSync('mkdir public/static/img');
  Shell.execSync('cp -r src/assets/* public/static/img');
  cb();

  // build markdown pages
  const { graphql, actions: { createPage  } } = gatsby;

  const SubpageTemplate = path.resolve(`src/templates/subpageTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: SubpageTemplate,
          context: {}, // additional data can be passed via context
        });
      });
    })
}
// Window undefined - Third-party modules fix https://www.gatsbyjs.org/docs/debugging-html-builds/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
