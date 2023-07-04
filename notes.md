lab03 npm i mini.css
lab16 Typed Forms
lab21 npm i json-server
lab21 add npm script

```diff
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
+    "api": "json-server ./api/db.json"
  },
```

unit-lab00= lab31+ comment out .spec files for card, detail-container, form, list, container
lab32 npm i @ngrx/store @ngrx/store-devtools @ngrx/store/effects
auth npm i jsonwebtoken @auth0/angular-jwt
auth add npm script

```
 "api:auth": "node ./api/auth-api-server.js"
```
