// configuration for development and production environments

// General
class Config {

}

// Development Environment
class DevelopmentConfig extends Config {
    productsUrl = "http://localhost:8080/api/";
    productsImagesUrl = "http://localhost:8080/api/images/";
}

// Production Environment
class ProductionConfig extends Config {
    productsUrl = "http://localhost:8080/api/";
    productsImagesUrl = "http://localhost:8080/api/images/";
}

const appConfig = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default appConfig;