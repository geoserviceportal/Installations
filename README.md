# Installation Guide
1. Download & install XAMPP from here [Download](https://www.apachefriends.org/index.html) or WAMP from here [Download](http://www.wampserver.com/en/)
2. Download & install NodeJS from here  [Download](https://nodejs.org/dist/v4.3.2/node-v4.3.2-x64.msi)
3. Download & install MongoDB from here [Download](https://www.mongodb.org/downloads#previous) - select version 3.0.9
4. Start MongoDB ( go to C:/Program Files/MongoDB/bin ) and click on mongod.exe 
5. Go to your nodejs folder , open the cmd and write ``` npm install mongo-express `` , for more instructions click [here](https://github.com/mongo-express/mongo-express)
6. Enter node_modules/mongo-express and open the cmd and write ``` node app.js ```  then open your browser and write @ address bar http://localhost:8081 - you will see the admin panel for mongodb
7. Create GSP Folder and copy parse server files and follow the instructions in example folder inside.
8. Copy portal-web to your c:/xampp/htdocs folder ( assuming you install XAMPP there ), open your browser and write @ address bar http://localhost/portal-web ( dont forget to start apache from xampp control panel )