import dotenv from "dotenv";
import { fastify } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";
import axios from "axios";
import fastifyEnv from "@fastify/env";

dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.secret", override: true });

const app = fastify({ logger: false });
await app.register(cors, {
  origin: "*",
});
app.register(fastifyEnv, {
  schema: {
    type: "object",
    required: ["ServiceKey", "ESTATE_API_URL", "LAWD_CD", "DEAL_YMD"],
    properties: {
      ServiceKey: { type: "string" },
      ESTATE_API_URL: { type: "string" },
      LAWD_CD: { type: "string" },
      DEAL_YMD: { type: "string" },
    },
  },
  dotenv: true,
});

const swaggerOptions = {
  swagger: {
    info: {
      title: "My Title",
      description: "My Description.",
      version: "1.0.0",
    },
    host: "localhost:5000",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};

const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.register((app, options, done) => {
  app.get("/", {
    schema: {
      tags: ["Default"],
      response: {
        200: {
          type: "object",
          properties: {
            anything: { type: "string" },
          },
        },
      },
    },
    handler: (req, res) => {
      res.send({ anything: "meaningfull" });
    },
  });

  app.get("/listings", {
    schema: {
      tags: ["Default"],
      response: {
        200: {
          type: "object",
          properties: {
            data: {
              type: "object",
              properties: {
                items: {
                  type: "object",
                  properties: {
                    item: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          buildYear: { type: "string" },
                          dealDay: { type: "string" },
                          dealMonth: { type: "string" },
                          dealYear: { type: "string" },
                          deposit: { type: "string" },
                          houseType: { type: "string" },
                          monthlyRent: { type: "string" },
                          totalFloorAr: { type: "string" },
                          umdNm: { type: "string" },
                        },
                      },
                    },
                  },
                },
                numOfRows: { type: "string" },
                pageNo: { type: "string" },
                totalCount: { type: "string" },
              },
            },
          },
        },
      },
    },
    handler: async (req, res) => {
      try {
        const apiUrl = `${process.env.ESTATE_API_URL}?ServiceKey=${process.env.ServiceKey}&LAWD_CD=${process.env.LAWD_CD}&DEAL_YMD=${process.env.DEAL_YMD}`;

        const response = await axios({
          method: "get",
          url: apiUrl,
          headers: {
            Accept: "application/json",
          },
        });

        const responseData = response.data.response.body;

        res.send({ data: responseData });
      } catch (error) {
        console.error("API Error:", error);
        res.status(500).send({
          error: `외부 API 호출에 실패했습니다. ${error}`,
        });
      }
    },
  });
  done();
});

app.listen(
  {
    port: 5000,
  },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
