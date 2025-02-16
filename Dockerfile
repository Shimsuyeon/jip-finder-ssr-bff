# 1. 빌드 환경 (Builder)
FROM node:20-slim AS builder
WORKDIR /app

# ✅ package.json과 yarn.lock만 복사 후 설치 (캐시 활용)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ✅ 소스 코드 복사
COPY . .

# ✅ Next.js 빌드 실행 (standalone 모드 활성화)
RUN yarn build && yarn install --production --ignore-scripts && rm -rf node_modules/.cache

# 2. 런타임 환경 (Runner)
FROM node:20-slim AS runner
WORKDIR /app

# ✅ 실행에 필요한 파일만 복사 (빌드 결과 + 의존성)
COPY --from=builder /app/.next/standalone /app
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public


# 실행 명령어
CMD ["yarn", "start"]