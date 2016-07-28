#!/bin/bash


#TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

echo "Читаем клиента"
http GET http://localhost:3000/customer/$1