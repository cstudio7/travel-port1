import { config } from 'dotenv';
import logger from './helpers/logger.helper';
import app from './app';
import { socketio } from './helpers/socket.helper';

config();
// This enables dotenv configurations
const port = process.env.PORT || 3000;
const server = app.listen(port, () => logger('info', `Magic runs  on http://localhost:${port}`));
socketio(server);
export default app;
