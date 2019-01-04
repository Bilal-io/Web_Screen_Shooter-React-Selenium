This app was created with `create-react-app` and then ejected.

In the backend `Selenium` is being used. To run this, you must have `Chrome browser` installed. `Chromedriver` will be downloaded by your node manager.

Clone

```bash
git clone https://github.com/Bilal-io/Web_Screen_Shooter-React-Selenium.git && cd Web_Screen_Shooter-React-Selenium
```

Then

```bash
npm install && npm start
```

React will run on port `3006`, you may change it in scripts/start.js `const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3006;`
Express will run on port `4000`, you can change it in `server.js`, and don't forget to change it in the proxy in `package.json`
