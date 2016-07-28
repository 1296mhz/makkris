#!/bin/bash


#TESTID=`jq ".ops | .[0] | ._id" add.json | sed 's/\"//g'`

echo "Добавляем клиента"
http PUT http://localhost:3000/customer/$1 \
"name"="Васильевич" \
"phone"="8" \
"vin"="HJ" \
"DriverLicenseNumber"="s33s2" \
"Mileage"="201" \
"createOwner"="5788786c9023171f18b9a486"