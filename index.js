const app = require("./app");
const port = process.env.RUNNING_PORT || 5500;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
