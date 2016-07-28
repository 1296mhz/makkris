#!/bin/bash
#echo $TESTID
TESTID='578bb352f1d0e958cbd9e286'

addPost(){
echo "Создаем пост"
http POST http://localhost:3000/resources/box/$TESTID/post \
title="ТестПост" \
description="Это тестовый пост, для каждой солидольной крысе своя норка!" > add.json
}

#TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

readPost(){
echo $TESTID
echo "Читаем все посты для выбранного бокса"
http GET http://localhost:3000/resources/box/$TESTID/post
}

updatePost(){
echo "Обновляем пост, например поле description"
http PUT http://localhost:3000/resources/box/$TESTID/post/d1 \
title="Пост номер 7" \
description="Залупанские крыски сидят в ебучей норки и крутят свои солидорльные болтики"
}
#echo "Читаем все посты для выбранного бокса"
#http GET http://localhost:3000/resources/box/578b737692eab53d7155d799/post

deletePost(){
echo "Удаляем пост"
http DELETE http://localhost:3000/resources/box/$TESTID/post/d3
}

#echo "Читаем пост"
#http GET http://localhost:3000/resources/post/$TESTID

#addPost
#updatePost
deletePost