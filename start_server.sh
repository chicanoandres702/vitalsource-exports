#!/bin/bash
# Usage: ./start_server.sh [bc_token_url]
# Or send bc_token URL later: curl -X POST http://localhost:3001/vs/api/init -d '{"url":"..."}'

TOKEN_URL="${1:-}"
cd /root/vitalsource_captures
exec node server.mjs "$TOKEN_URL"
