#!/bin/bash

# exit 0
# files=("TestB/src/Main.java" "Test/src/Main.java")
fFile=$1
isAnySticky=0
stickyStr=("Sticky Tag" "Sticky Date" "Sticky Options")
# for fFile in "${files[@]}"; do
    for stickyPrm in "${stickyStr[@]}"; do
	stickyResult=$(cvs status $fFile | grep "$stickyPrm" | sed -e "s/\s*$stickyPrm:\s*\(.*\)/\1/g")
	if [ "$stickyResult" == "(none)" ]; then
	    isSticky=0
	else
	    isSticky=1
	    isAnySticky=1
	fi
	echo "Is $stickyPrm: $isSticky; isAnySticky: $isAnySticky; fFile: $fFile"
	# echo $isSticky
    done
# done
# exit $isAnySticky

# We're in the test phase - always return Ok-result
exit $0
