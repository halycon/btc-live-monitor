FROM mhart/alpine-node:latest

MAINTAINER vncetin@gmail.com

ENV SAILS_HOME /opt/btc-live-monitor

EXPOSE 1337:1337

WORKDIR $SAILS_HOME

COPY . .

RUN npm install
RUN npm install sails -g
RUN npm install node-schedule

ENTRYPOINT ["sh", "-c"]
CMD ["exec sails lift"]
