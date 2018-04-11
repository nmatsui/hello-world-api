# hello-world-api

This Dockerfile create a [Docker](http://docker.com) image to start a simple REST API server.

## Description

The docker container which is run from this image start nodejs http server and respond 'application/json' payload.

## Install

Pull `nmatsui/hello-world-api` from DockerHub:

```bash
$ docker pull nmatsui/hello-world-api
```

Or build `nmatsui/hello-world-api` from Dockerfile:

```bash
$ git clone https://github.com/nmatsui/hello-world-api.git
$ cd hello-world-api
$ docker build -t nmatsui/hello-world-api .
```

## Usage

1. start container

    ```bash
    $ docker run -d --rm -p 3000:3000 nmatsui/hello-world-api
    ```
1. call REST API

    ```bash
    $ curl http://localhost:3000/
    HTTP/1.1 200 OK
    Content-Type: application/json
    Date: Wed, 11 Apr 2018 01:06:52 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    {"message":"hello world!"}
    ```
1. If you want to change message, give the 'MESSAGE' environment variable

    ```bash
    $ docker run -d --rm -p 3000:3000 nmatsui/hello-world-api
    ```

    ```bash
    $ curl http://localhost:3000/
    HTTP/1.1 200 OK
    Content-Type: application/json
    Date: Wed, 11 Apr 2018 01:09:45 GMT
    Connection: keep-alive
    Transfer-Encoding: chunked

    {"message":"foobar"}
    ```

## License

[MIT License](/LICENSE)

## Copyright
Copyright (c) 2018 Nobuyuki Matsui <nobuyuki.matsui@gmail.com>
