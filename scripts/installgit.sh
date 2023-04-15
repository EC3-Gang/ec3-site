#!/usr/bin/env sh
# vercel is driving me up the wall
# install git if not available
if ! command -v git >/dev/null 2>&1; then
	echo "Installing git..."
	# install using whichever package mamager available, like yum, dnf, apt, etc
	if command -v yum >/dev/null 2>&1; then
		yum install -y git
	elif command -v dnf >/dev/null 2>&1; then
		dnf install -y git
	elif command -v apt >/dev/null 2>&1; then
		apt install -y git
	elif command -v apk >/dev/null 2>&1; then
		apk add git
	else
		echo "No package manager found, please install git manually"
		exit 1
	fi
else
	echo "git already installed"
fi