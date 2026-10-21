#!/bin/bash
# VitalSource Export Server startup script
cd /root/vitalsource_captures
exec node server.mjs "https://bc.vitalsource.com/books/9781266607752?bc_token=7bcbd6c0-af00-013f-f28c-4e4d47f38420&relaunch_vbid=9781266607752&course_dash_relaunch=true" 2>&1
