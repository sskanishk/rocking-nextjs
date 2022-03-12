#!/bin/bash

if [ $# -lt 2 ]
	then
		echo Please provide repository name and tag
		exit 1

	else
		SOURCE_IMAGE=$1:$2

		echo ======================== Building $SOURCE_IMAGE ========================
		
		docker build -t "$SOURCE_IMAGE" .
		
fi
