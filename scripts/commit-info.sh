#!/usr/bin/sh
git log -1 --format="%h%n%H%n%ci" >> "./app/(non-homepage)/commit-info.txt"