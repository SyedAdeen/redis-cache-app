    # Use an official Node.js runtime as a parent image
FROM node:20.15-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install -g sequelize-cli

# Copy the rest of your application code    
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD [ "npm", "run","dev" ]
