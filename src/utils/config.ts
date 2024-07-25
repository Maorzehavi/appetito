// configuration for development and production environments

// General
class Config {

}

// Development Environment
class DevelopmentConfig extends Config {
    productsUrl = "http://localhost:3005/";
    productsImagesUrl = "http://localhost:3005/";
}

// Production Environment
class ProductionConfig extends Config {
    productsUrl = "http://localhost:3005/";
    productsImagesUrl = "http://localhost:3005/";
}

const appConfig = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;