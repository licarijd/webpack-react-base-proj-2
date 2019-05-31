FROM node:chakracore

WORKDIR /usr/src/allports-web-2

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]