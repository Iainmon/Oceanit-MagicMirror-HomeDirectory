#!/usr/bin/env sh

# Checks the network connection, and tries to set the time.
ping google.com -c 5 || echo "Could not reach the internet. Starting server anyway."

cd MagicMirror; npm start;
