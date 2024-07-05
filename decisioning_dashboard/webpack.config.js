

const webpackConfigJs = () => {

    module.exports = {
        //...
        resolve: {
            fallback: {
            "crypto": require.resolve("crypto-browserify")
            }
        }
    };


};

export default webpackConfigJs;
