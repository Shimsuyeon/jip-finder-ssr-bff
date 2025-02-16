# 1. Node.js 20 기반 빌드 환경
FROM node:20-alpine AS builder
WORKDIR /app

# ✅ package.json과 yarn.lock만 복사 후 설치 (캐시 최적화)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ✅ 소스 코드 복사
COPY . .

# ✅ (빌드가 필요하면) 빌드 실행
RUN if [ -f package.json ] && grep -q '"build"' package.json; then yarn build; fi

# ✅ 런타임 컨테이너 (실행 환경)
FROM node:20-alpine AS runner
WORKDIR /app

# ✅ 실행에 필요한 파일만 복사 (불필요한 파일 제외)
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/package.json /app/yarn.lock ./

# ✅ 실행에 불필요한 패키지 제거
RUN yarn install --frozen-lockfile --production

# ✅ 실행 명령어 (환경 변수 직접 설정 X)
CMD ["yarn", "fastify"]
