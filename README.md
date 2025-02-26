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


### 공공데이터 API

오피스텔, 연립다세대, 아파트, 단독/다가구 전월세 실거래가 자료(from. 국토교통부)를 불러옵니다. 

**출처**

[국토교통부_오피스텔 전월세 실거래가 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15126475)

[국토교통부_연립다세대 전월세 실거래가 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15126473)

[국토교통부_아파트 전월세 실거래가 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15126474)

[국토교통부_단독/다가구 전월세 실거래가 자료](https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15126472)

### 환경 변수 설정

`.env`
```bash
# 국토교통부 실거래가 정보 OPEN API
ESTATE_API_URL = "https://apis.data.go.kr/1613000/"
# 오피스텔 전월세 실거래가
OFFICETEL = "RTMSDataSvcOffiRent/getRTMSDataSvcOffiRent"
# 아파트 전월세 실거래가
APARTMENT = "RTMSDataSvcAptRent/getRTMSDataSvcAptRent"
# 연립다세대 전월세 실거래가
MULTI_HOUSEHOLD="RTMSDataSvcRHRent/getRTMSDataSvcRHRent"
# 단독/다가구 전월세
SINGLE_MULTI_FAMILY = "RTMSDataSvcSHRent/getRTMSDataSvcSHRent"

LAWD_CD = 지역코드 (ex.11110)
# 각 지역별 코드 행정표준코드관리시스템(www.code.go.kr)의 법정동코드 10자리 중 앞 5자리

DEAL_YMF = 실거래 자료의 계약연월 6자리 (ex.202502)
```


`.env.secret`
```bash
ServiceKey =  공공데이터 회원가입 후 개인 인증키(Deconding)를 지정
```


### 프로젝트 과정 추적

이번 프로젝트는 진행 과정을 개발 블로그에 같이 기록하고 있습니다

1. 2025.02.16.
[[개발][BFF 도전기] Next.js 구축, Fastify에 Swagger 안 붙는 문제 해결하기](https://developer-dreamer.tistory.com/172)

2. 2025.02.18.
[[개발][BFF 도전기] Fastify 서버 - 폴더 구조화](https://developer-dreamer.tistory.com/174)

3. 2025.02.18.
[[개발][BFF 도전기] Docker 이미지 빌드 - ECR로 push - EC2 pull해서 실행](https://developer-dreamer.tistory.com/173)

4. 2025.02.20.
[[개발][BFF 도전기] 부동산 공공데이터 API 뜯어보고 BFF API 설계하기](https://developer-dreamer.tistory.com/177)
