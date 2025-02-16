# 1. Node.js 20 기반 이미지 사용
FROM node:20-alpine AS builder
WORKDIR /app

# ✅ `context`가 루트이므로 직접 복사 가능
COPY package.json yarn.lock ./

# 2. 패키지 설치
RUN yarn install --frozen-lockfile

# 3. 전체 프로젝트 복사
COPY . .

# 4. Next.js 빌드
RUN yarn build

# 5. 런타임 컨테이너 설정
FROM node:20-alpine AS runner
WORKDIR /app

# ✅ `builder` 단계에서 빌드된 결과물 복사
COPY --from=builder /app ./

# 6. 컨테이너 실행 명령어
CMD ["yarn", "start"]
