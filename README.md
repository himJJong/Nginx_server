# Nginx_server
Nginx를 활용한 Node.js의 프록시 서버 구현

<1>
터미널에서 npm init -f 과 npm i --save express uuid로 관련 .json파일 생성을 하고, node_modules 파일 생성 후 node server.js 로 알맞게 출력되는지 확인.
위 파일에는 node_modules이 존재 하지 않음.(위 과정을 통해 생김)

<2>
nodejs_1,nodejs_2,nodejs_3 3개에 uuid를 받아 도커 이미지를 빌드하여 nginx의 80번 포트와 연결 그리고 
nginx-node-lb 도커 이미지를 빌드하여 4000번 포트를 Nginx 80번 포트와 연결

최종적으로 docker-compose up --build를 통해 localhost:4000에서 새로고침을 하면 각각의 3개 서버 uuid가 번갈아가며 출력된다.

