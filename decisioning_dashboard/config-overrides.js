module.exports = function override(config, env) {
    //do stuff with the webpack config...

    console.log("==========================================================================");
    console.log('NOTE: Running config-overrides.js to Override depenencies not in Webpack');
    console.log("==========================================================================");

    
    
    module.exports = {
        //...
        resolve: {
            fallback: {
                "stream": require.resolve("stream-browserify"),
                "crypto": require.resolve("crypto-browserify"),
                "timers": require.resolve("timers-browserify"),
                "constants": require.resolve("constants-browserify")

                // "os": require.resolve("os-browserify/browser"),
            }
        }
    }


    return config;
}

/*
==================================================================================

! https://www.npmjs.com/package/react-app-rewired
! https://stackoverflow.com/questions/63280109/how-to-update-webpack-config-for-a-react-project-created-using-create-react-app
! https://egghead.io/lessons/react-customize-create-react-app-cra-without-ejecting-using-react-app-rewired


==================================================================================


*/

//Don't need this?
// export default module.exports;