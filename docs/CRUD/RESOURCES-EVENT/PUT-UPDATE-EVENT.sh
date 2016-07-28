#!/bin/bash


#TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

echo "Обновляем event"
http PUT http://localhost:3000/event/$1 \
"id"="1" \
"title"="Сраное ржавое ведро" \
"resourcesId"="b" \
"start"="2016-07-19T09:52:24" \
"end"="2016-07-19T19:50:00" \
"createOwner"="57878c0b672654b131b39a50" \
"customer"="578dea48f120514f535bec10" \