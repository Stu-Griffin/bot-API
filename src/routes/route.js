import usersRouter from './bot-users/index.js';
import savedDataRouter from './saved-data/index.js';

class AppRouter {
    constructor(app) {
		this.app = app
	}
    init() {
        this.app.get('/', (_req, res) => {
            res.send('API Running');
        });
        this.app.use('/api/bot-users', usersRouter);
        this.app.use('/api/saved-data', savedDataRouter);
    }
}

export default AppRouter;