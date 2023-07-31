module.exports = {
  apps: [
    {
      name: "com.amoozal-beta",
      script: "./server.js",
      watch: true,
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
