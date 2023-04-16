#!/usr/bin/sh

# Run the git log command and store the output in variables
commit_short=$(git log -1 --format="%h")
commit_long=$(git log -1 --format="%H")
commit_date=$(git log -1 --format="%ci")

# Construct a JSON string with the variables
json="{\"shortHash\":\"$commit_short\",\"hash\":\"$commit_long\",\"date\":\"$commit_date\"}"

# Write the JSON string to a file named git_log.json
echo $json > "app/(non-homepage)/commitInfo.json"

