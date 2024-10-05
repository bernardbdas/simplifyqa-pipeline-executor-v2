#!/bin/bash

# Load environment variables from .env file
set -a
source .env
set +a

# Run the build command
npm run build

# Execute the Node.js script with loaded environment variables
node ./dist/index.js