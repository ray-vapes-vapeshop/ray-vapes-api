import swaggerJSDoc from "swagger-jsdoc";
import env from "./env";

export default swaggerJSDoc({
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Ray Vapes API",
      version: "1.0.0",
      description:
        "API Server for Ray Vapes VapeShop, providing endpoints for managing products, and orders",
      contact: {
        name: "Andrew Kononenko [wastardy]",
        email: "wastardy.k@gmail.com",
      },
    },
    servers: [
      {
        url: env.BASE_URL,
      },
    ],
  },
  apis: ["./*.ts", "./**/*.ts"],
});
