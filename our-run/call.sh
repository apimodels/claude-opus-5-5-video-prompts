#!/usr/bin/env bash
# Needs: jq, an API key in $APIMODELS_API_KEY, prompt.md in this folder.
curl https://api.apimodels.app/v1/chat/completions \
  -H "Authorization: Bearer $APIMODELS_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --rawfile p prompt.md \
        '{model:"claude-opus-5-5", stream:true, messages:[{role:"user", content:$p}]}')" \
  --no-buffer > stream.txt
# no max_tokens on purpose: this run used 31,786 output tokens, mostly thinking
