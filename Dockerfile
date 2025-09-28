# Step 1: Build the React app
FROM node:22-alpine 

WORKDIR /app

# Copy package.json first from subfolder
COPY package*.json ./

RUN npm install

# Copy source code
COPY . . 

RUN npm run build

CMD ["npm", "start"]

