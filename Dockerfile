# the node version that will run the app inside the container
FROM node:alpine
# the app's directory inside the container
WORKDIR /app
# here we copy our package.json to the workdir
COPY ["package.json", "package-lock.json*", "./"]
# then it will install the dependencies and create node_modules
RUN npm install --production
# here we copy the rest of the files to the workdir 
COPY . .
# here we specify what command docker should run when starting the container
CMD ["node", "src/app.js"]
