FROM node:16-alpine3.13

COPY . .
RUN chmod a+x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
