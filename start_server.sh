#!/bin/bash
# VitalSource Export Server startup script
cd /root/vitalsource_captures
exec node server.mjs "https://capella.vitalsource.com/reader/books/9781266607752" 2>&1
