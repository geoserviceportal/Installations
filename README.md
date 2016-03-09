# Installation Guide
1. Download XAMPP from here [Download](https://www.apachefriends.org/index.html)
2. Download NodeJS from here  [Download](https://nodejs.org/dist/v4.3.2/node-v4.3.2-x64.msi)
    *  Edit your PATH variable:
        * Select Computer from the Start menu
        * Choose System Properties from the context menu
        * Click Advanced system settings > Advanced tab
        * Click on Environment Variables, under System Variables, find PATH, and click on it.
        * In the Edit windows, modify PATH by adding the location of the class to the value for PATH, the location is     C:\Users\{{YOUR_USER_NAME}}\AppData\Roaming\npm
3. Download MongoDB from here [Download](https://www.mongodb.org/downloads#previous) - select version 3.0.9
4. Start MongoDB ( go to C:/Program Files/MongoDB/bin ) and click on mongod.exe 
5. Open the cmd and write ``` npm install -g mongo-express ``` , for more instructions click [here](https://github.com/mongo-express/mongo-express)
6. Reopen the cmd and write ``` node app.js ```  then open your browser and write @ address bar http://localhost:8081 - you will see the admin panel for mongodb
7. Create GSP Folder and copy parse server files and follow the instructions in example folder inside.
8. Copy portal-web to your c:/xampp/htdocs folder ( assuming you install XAMPP there ), open your browser and write @ address bar http://localhost/portal-web ( dont forget to start apache from xampp control panel )
