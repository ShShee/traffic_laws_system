exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-prismazoom/,
            //test: /react-pdf/,
            //test: /pdfjs-dist/,

            // check /pdfjs-dist/ too
            use: loaders.null(),
          },
        ],
      },
    })
  } else if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-pdf/,
            test: /pdfjs-dist/,
            test: /react-prismazoom/,
            test: /canvas/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

/*exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  if (stage === "build-html") {
    
  }
}*/
