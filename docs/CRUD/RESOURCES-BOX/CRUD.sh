#!/bin/bash


echo "Создаем бокс"
http POST http://localhost:3000/resources/box/ \
title="ТестБокс" \
description="Это тестовый бокс, здесь пиздят солидольных крыс!" \
eventColor="red" \
children="" > add.json


TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

echo "Читаем бокс"
http GET http://localhost:3000/resources/box/$TESTID

echo "Обновляем бокс, например поле description"
http PUT http://localhost:3000/resources/box/$TESTID \
description="Солидольные крысы дебилы"

echo "Читаем бокс"
http GET http://localhost:3000/resources/box/$TESTID

echo "Удаляем бокс"
http DELETE http://localhost:3000/resources/box/$TESTID

echo "Читаем бокс"
http GET http://localhost:3000/resources/box/$TESTID
