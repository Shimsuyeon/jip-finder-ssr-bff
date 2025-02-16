# 1. Node.js 20 기반 빌드 환경
FROM node:20-alpine AS builder
WORKDIR /app

# ✅ package.json과 yarn.lock만 복사 후 설치 (캐시 최적화)
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/root/.yarn yarn install --frozen-lockfile

# ✅ 소스 코드 복사
COPY . .

# ✅ Next.js 빌드 실행
RUN yarn build

# ✅ 런타임 컨테이너 (최종 이미지, 불필요한 파일 제외)
FROM node:20-alpine AS runner
WORKDIR /app

# ✅ 실행에 필요한 파일만 복사 (불필요한 파일 제외)
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/yarn.lock ./

# ✅ 실행 명령어
CMD ["yarn", "start"]
