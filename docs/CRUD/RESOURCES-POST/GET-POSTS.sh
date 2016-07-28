#!/bin/bash


#TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

echo "Читаем пост"
http GET http://localhost:3000/resources/box/578b737692eab53d7155d799/post