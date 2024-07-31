const app = require('./app');
const port = process.env.PORT ;

app.listen(port, () => {
  console.clear()
  console.log(`Server is running on http://localhost:${port}`);
});
