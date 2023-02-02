#!/bin/sh

# runs linting and exits on any none-zero exit code

npm run lint:all
x=$?

if [ $x -ne 0 ]; then
  echo "${RED}Linting failed, aborting${ENDCOLOR}"
  exit 1
fi
