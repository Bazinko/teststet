#general
each sub-project has own envexample - make sure that you have changed name to .env. Without them projects will crash

Note: readme not full and should be improved.
# api-gateway
Build ```docker-compose build``` and run it ```docker-compose up```
# app
Read included readme. 
Entry point for all .env variables - folder env
Important thing - all used variables must be set in .env . App will crash without them
# gcf
Most complex case. I will cover emulator case here: install and run any function for test.
When you have installed emulator:
## ```sudo functions start``` - to start functions emulator. If you an experienced linux user - you can remove sudo
## command ```npm run babel-build``` - transpiles code to es2015 and copies .env from folder
## command ```sudo npm run deploy-dev``` - deploys functions from dist to local emulator
# web
Read included readme. 
