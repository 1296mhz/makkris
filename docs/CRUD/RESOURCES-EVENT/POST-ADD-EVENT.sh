#!/bin/bash

http --form POST http://localhost:3000/login
username='dima' \
password=/dima'

echo "Добавляем клиента"
http POST http://localhost:3000/event \
"id"="1" \
"resourcesId"="a" \
"start"="2016-07-19T09:52:24" \
"end"="2016-07-19T018:52:24" \
"title"="Ремонт ведра" \
"customer"="5788786c9023171f18b9a486"