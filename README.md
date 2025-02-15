This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 기본 세팅

서버 실행

```bash
yarn install
yarn dev
```

http://localhost:3000 에서 실행

## BFF API 서버 실행

```bash
yarn fastify
```

http://localhost:5000 에서 실행

**swagger** http://localhost:5000/docs


`.env`

**ESTATE_API_URL** = [국토교통부_단독/다가구 전월세 실거래가 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15126472#/) 서비스 호출 url

**LAWD_CD** = 지역코드 (ex.11110)

// 각 지역별 코드 행정표준코드관리시스템(www.code.go.kr)의 법정동코드 10자리 중 앞 5자리

**DEAL_YMF** = 실거래 자료의 계약연월 6자리 (ex.202502)


`.env.secret`

**ServiceKey** =  위의 공공데이터 API를 신청한 후 인증키(Deconding)를 지정

