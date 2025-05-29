# COMANDOS PARA EJECUTAR EL BACKEND

## INSTALACIONES

npm i express

npm i dotenv

npm i uuid

npm i -D typescript ts-node nodemon eslint eslint-config-standard-with-typescript @types/express @types/node @types/uuid

npx tsc --init

NOTA: DEBEN DE SETEAR EL ARCHIVO tsconfig.json 

Crear el archivo para las configuraciones del lint en la raiz del proyecto:
.eslintrc.json
contenido: 

{
    "extends": "standard-with-typescript",
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/no-floating-promises": "off"
    },
    "ignorePatterns": [
        "dist",
        "src/**/*.js",
        "src/generated/*"
    ]

}

docker compose up -d

npm install prisma @prisma/client

npx prisma init

npx prisma migrate dev --name init

el generator client debe quedar asi:
generator client {
  provider = "prisma-client-js"
}


npx prisma generate

