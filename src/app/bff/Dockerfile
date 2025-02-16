FROM node:20-alpine
WORKDIR /app

# ✅ 루트에서 `package.json`, `yarn.lock` 복사
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# ✅ 전체 프로젝트 복사
COPY . .

CMD ["yarn", "fastify"]
