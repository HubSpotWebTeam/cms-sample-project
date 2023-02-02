#!/bin/sh

# runs unit tests and exits on any none-zero exit code

rm -rf coverage
npm run test
x=$?

if [ $x -ne 0 ]; then
  echo "${RED}Unit tests failed, aborting${ENDCOLOR}"
  exit 1
fi
