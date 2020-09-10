
## Description

이 프로젝트는 NestJs와 slack 웹훅을 이용하여 간단하게 슬랙 메시지를 보내는 sample 코드를 작성하기 위해 생성하였습니다.

## Preparations
 
https://zeddios.tistory.com/123

위 링크를 참고하여 우선 Webhook URL을 확보합니다.

그 다음에 프로젝트 최상위 폴더에 .env 파일을 생성한 뒤, WEB_HOOK_URI에 Webhook URL을 셋팅합니다.

.env 파일 내용 예)
```bash
WEB_HOOK_URI=https://hooks.slack.com/services/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
```

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```
