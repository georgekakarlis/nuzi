import express from "express";
import routes from './api/v1/routes/index'

import configure from "./middleware/configure";

//main
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
configure(app);


//routes
app.use('/api', routes);

//app listen 👂
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Nuzi is running at http://localhost:${PORT} 👂`);
});
