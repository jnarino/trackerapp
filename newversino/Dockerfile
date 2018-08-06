FROM node:8

RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ADD server.crt:/home/user1/proyecto1/jnarino/trackerapp/newversino/bin/
RUN update-ca-certificates
#ADD server.key:/home/user1/proyecto1/jnarino/trackerapp/newversino/bin/

#RUN update-ca-certificates
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

