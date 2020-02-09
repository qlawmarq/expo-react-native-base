# React Native and Expo-cli with Docker 


## Setiing .env

Put your ip to `.env`.

```
REACT_NATIVE_PACKAGER_HOSTNAME=192.168.11.5
```

## Docker run

```bash
docker-compose up -d --build
```

## Run React Native app

```bash
docker-compose exec app bash
```

```bash
cd app
yarn start
```