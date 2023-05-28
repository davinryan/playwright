import MockCatalogueServer from "./services/mock/catalogue/catalogue.server";

const startMockCatalogueServer = () => {
  return new MockCatalogueServer({
    port: 10001,
    path: "/catalogue",
    timeoutInMilli: 30000,
  });
};

const run = async (): Promise<void> => {
  // start servers
  const mockCatalogueServer = startMockCatalogueServer();

  const shutDownGracefully = async () => {
    mockCatalogueServer.stop();

    // Shutdown anyway after 10 seconds
    setTimeout(() => {
      console.error(
        "Could not close connections in time, forcefully shutting down mock servers"
      );
      process.exit();
    }, 10000);
  };

  process.on("SIGTERM", () => shutDownGracefully());
  process.on("SIGINT", () => shutDownGracefully());
  process.on("unhandledRejection", (e: Error) => {
    console.error("Unhandled rejection");
    console.error(JSON.stringify(e));
    console.error(JSON.stringify(e.message));
    console.error(JSON.stringify(e.stack));
  });
  process.on("uncaughtException", (e: Error) => {
    console.error("Uncaught exception");
    console.error(JSON.stringify(e));
    console.error(JSON.stringify(e.message));
    console.error(JSON.stringify(e.stack));
  });
};

run().catch((e: any) => {
  console.error("Unhandled exception");
  console.error(JSON.stringify(e));
  console.error(JSON.stringify(e.message));
  console.error(JSON.stringify(e.stack));
  process.exit(2);
});
