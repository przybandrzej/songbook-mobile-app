java -jar swagger-codegen-cli.jar generate -i http://localhost:8080/v2/api-docs -l javascript -o ../src/songbook-client --additional-properties useES6=true
#sed -i '/exports.instance = new exports();/i exports.setBasePath = function (path) {this.basePath = path;}' ../src/songbook-client/src/ApiClient.js
#sed -i '/exports.setBasePath = function (path) {this.basePath = path;}/i exports.getBasePath = function () {return this.basePath;}' ../src/songbook-client/src/ApiClient.js

#read  -n 1 -p "Input Selection:" mainmenuinput