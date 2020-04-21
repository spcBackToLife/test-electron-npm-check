## run 

    ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ yarn add electron@6.0.9 -D

## run js of not builded by webpack
    yarn dev  ==> it works

## run js of builded by webpack
    - yarn build
    - change the package.json (if you build success)
    ```
        "main": "electorn.main.js",
    ```
    when you build ,it will fail
