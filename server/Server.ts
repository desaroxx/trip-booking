import * as express from 'express';
import * as path from 'path';

class Server {

  public static run() {
    const app = express();

    app.use(express.static(__dirname + '/../static'));
    app.use(express.static(__dirname + '/../client-dist'));

    app.get('/*', function(req, res){
      res.sendFile(path.resolve(__dirname + '/../static/index.html'));
    });

    app.listen(3000, () => console.log('Server listening on port 3000!'));
  }

}

Server.run();
