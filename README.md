# Running with docker
Run on a single Tx base64 string:
```shell
docker run --rm rmdec/terra-decoder:0.2 unmarshalTx TX_STRING
```

Running on payload from /unconfirmed_txs also works:
```shell
docker run --rm rmdec/terra-decoder:0.2 unmarshalTx '{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "n_txs": "6",
    "total": "6",
    "total_bytes": "4679",
    "txs": [...]
  }
}'
```
Note if passing JSON in or strings with quotes, you will need to quote it with single quote.


Running with exec:
```shell
docker run -it --rm --entrypoint /bin/sh -d --name unmarshaller rmdec/terra-decoder:0.2

docker exec unmarshaller ./entrypoint.sh unmarshalTx TX_STRING
docker exec unmarshaller ./entrypoint.sh unmarshalTx TX_STRING2

docker stop unmarshaller
```
