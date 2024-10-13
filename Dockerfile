ARG EXEC_TOKEN
ARG APP_URL=https://simplifyqa.app/
ARG THRESHOLD=100.00
ARG VERBOSE=false

# Use the official lightweight Node.js image based on Alpine
FROM node:lts-alpine AS simplifyqa-pipeline-executor-v2

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . .

# Install the dependencies
RUN npm install

# Build from source
RUN npm run build

# Specify environment variables (these can be overridden at runtime)
ENV INPUT_PIPELINEID=${PIPELINEID}
ENV INPUT_APIURL=${APIURL}
ENV INPUT_APIKEY=${APIKEY}
ENV INPUT_THRESHOLD=${THRESHOLD}
ENV INPUT_VERBOSE=${VERBOSE}

# Set the default command to run the application
ENTRYPOINT ["sh", "-c", "node -r dotenv/config -r tsconfig-paths/register dist/index.js"]