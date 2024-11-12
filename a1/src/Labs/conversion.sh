#!/bin/bash

# Define the directory to start the search (default is current directory)
DIRECTORY=${1:-.}

# Find all .jsx files and convert them using react-js-to-ts
find "$DIRECTORY" -type f -name "*.jsx" | while read -r file; do
    echo "Converting $file to TypeScript..."
    react-js-to-ts "$file"
done

echo "Conversion complete."
