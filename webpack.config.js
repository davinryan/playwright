const {merge} = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const Dotenv = require("dotenv-webpack");

module.exports = async (webpackConfigEnv, argv) => {
    const isStandalone = webpackConfigEnv.standalone;
    const orgName = "demo";
    const projectName = "reference-architecture";
    const defaultConfig = singleSpaDefaults({
        orgName,
        projectName,
        webpackConfigEnv,
        argv,
        standaloneOptions: {
            importMap: {
                imports: {
                },
            },
        },
    });

    return merge(defaultConfig, {
        entry: isStandalone
            ? {
                "reference-architecture": defaultConfig.entry,
            }
            : {
                "reference-architecture": defaultConfig.entry,
            },
        output: {
            ...defaultConfig.output,
            filename: "[name].js",
            uniqueName: "[name]",
            devtoolNamespace: "[name]",
        },
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: "asset/resource",
                },
            ],
        },
        plugins: [
            new Dotenv({
                path: isStandalone ? "./.env.standalone" : "./.env",
            }),
        ],
        devServer: {
            port: 9300,
            server: {
                type: "http"
            },
        },
    });
};
