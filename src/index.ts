import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import User from '@models/user.model';

declare global {
  namespace Express {
    export interface Request {
      user?: any
    }
  }
}
// Start the server
const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});
