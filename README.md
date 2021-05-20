# Running with docker
Run on a single Tx base64 string:
```shell
docker run --rm rmdec/terra-decoder:0.3 unmarshalTx TX_STRING
```

Running with exec:
```shell
docker run -it --rm --entrypoint /bin/sh -d --name unmarshaller rmdec/terra-decoder:0.3

docker exec unmarshaller ./entrypoint.sh unmarshalTx TX_STRING TX_STRING2

docker stop unmarshaller
```
