# 구동 방법

1. yarn generate: prisma generate와 nexus generate 수행
2. yarn migrate: prisma migrate save, up 수행
3. yarn dev, yarn build, yarn start

# 환경변수 설정

1. dotenv 모듈 설치
2. prisma > .env 생성
3. DATABASE_URL="postgresql://[사용자ID]:[사용자비번]@[DB호스트]:[DB포트]/[DB명]?schema=[DB기본스키마]"
