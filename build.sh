#!/bin/bash

# Build the project
echo "Building the project"

# Run yarm build
yarn run build

# Add all files to git
git add .

# Commit the changes with a timestamp
git commit -m "Build the project at $(date)"

# Push the changes to the remote repository
git push

# End of the script