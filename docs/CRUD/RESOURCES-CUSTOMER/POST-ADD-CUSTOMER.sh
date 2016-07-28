#!/bin/bash

echo "Добавляем клиента"
http POST http://localhost:3000/customer \
"name"="Виталий Васильевич" \
"phone"="89172222222" \
"vin"="HJDUFYRTEGDBFN787" \
"DriverLicenseNumber"="т333т23" \
"Mileage"="20402" \
"createOwner"="5788786c9023171f18b9a486"