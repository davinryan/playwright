import express from "express";
import { ServerOptions } from "../mock.types";
import cors from "cors";

const ITEMS = require("./catalogue.data.items.standard.json");

/**
 * Main Server to Run the back and front end.
 */
class MockCatalogueServer {
  /** Main express application. */
  private app: express.Application;

  private server: any;

  private options: ServerOptions;

  /**
   * Default Constructor
   */
  constructor(options: ServerOptions) {
    this.options = options;

    // Create an express application
    this.app = express();

    // Configure the application
    this.config();

    // Configure routes
    this.routes();
  }

  /**
   * Any express configuration.
   */
  private config() {
    // Configure Express
    this.app.use(cors());
    this.server = this.app.listen(this.options.port);
    const address =
      this.server.address().address !== "::"
        ? this.server.address().address
        : "http://localhost";
    const port = this.server.address().port;
    // eslint-disable-next-line no-console
    console.log(
      `🚀Catalogue/ server ready at ${address}:${port}${this.options.path}`
    );
    console.info(
      `Catalogue Health check ready at: ${address}:${port}${this.options.path}/.well-known/express/server-health`
    );
  }

  /**
   * Any express routing configuration.
   */
  private routes() {
    const router: express.Router = express.Router();

    // Add healthcheck
    router.use(
      `${this.options.path}/.well-known/express/server-health`,
      (req: express.Request, resp: express.Response) => {
        return resp.send({ status: "pass" });
      }
    );

    // Groups
    router.use(
      `${this.options.path}/items`,
      (req: express.Request, resp: express.Response) => resp.send(ITEMS)
    );

    // use router middleware
    this.app.use(router);
  }

  public stop() {
    this.server.close();
  }
}

export default MockCatalogueServer;
