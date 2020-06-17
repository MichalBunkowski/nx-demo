function createFile(path, content) {
  const fs = require('fs');

  fs.writeFile(path, content, (err) => {
    if (err) throw err;

    console.log('File is created successfully.');
  });
}

module.exports = {
  onInit: () => {
    const env = process.env.ENV;
    const app = process.env.APP_NAME;

    createFile(
      `./apps/${app}/environment.${env}.json`,
      `{
                "ENV" : "${process.env.ENV}",
                "DOMAIN": "${process.env.DOMAIN}"
            }`
    );
  },
};
