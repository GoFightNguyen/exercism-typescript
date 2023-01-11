ARG VARIANT=18

FROM alpine:latest as unzipper
RUN apk update && apk add curl
RUN curl -sL https://github.com/exercism/cli/releases/download/v3.1.0/exercism-3.1.0-linux-x86_64.tar.gz | tar xz

FROM mcr.microsoft.com/devcontainers/typescript-node:0-${VARIANT}
COPY --from=unzipper /exercism /bin/
