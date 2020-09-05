# Inventory Management Service

## Server
```bash
server
.
├── src
│   ├── authentication
│   │   ├── hashPassword.ts
│   │   ├── token.ts
│   │   └── verifyPassword.ts
│   ├── dbContext
│   │   └── mysql.ts
│   ├── interface
│   │   ├── product.ts
│   │   └── user.ts
│   ├── routes
│   │   ├── index.ts
│   │   ├── login.ts
│   │   └── product.ts
│   └── index.ts
├── Dockerfile
├── nodemon.json
├── package.json
├── package-lock.json
└── tsconfig.json

5 directories, 17 files
```

## Client
```bash
├── e2e
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   ├── protractor.conf.js
│   └── tsconfig.json
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── product
│   │   │   │   ├── product.component.html
│   │   │   │   ├── product.component.scss
│   │   │   │   ├── product.component.spec.ts
│   │   │   │   └── product.component.ts
│   │   │   └── product-detail
│   │   │       ├── product-detail.component.html
│   │   │       ├── product-detail.component.scss
│   │   │       ├── product-detail.component.spec.ts
│   │   │       └── product-detail.component.ts
│   │   ├── login
│   │   │   ├── user.guard.spec.ts
│   │   │   └── user.guard.ts
│   │   ├── service
│   │   │   ├── login.service.spec.ts
│   │   │   ├── login.service.ts
│   │   │   ├── product.service.spec.ts
│   │   │   └── product.service.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   └── test.ts
├── angular.json
├── Dockerfile
├── karma.conf.js
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json

12 directories, 46 files

```

## Database
```bash
$ docker run --name mysql \
    -e ALLOW_EMPTY_PASSWORD=yes \
    -e MYSQL_DATABASE=my_database \
    -p 3306:3306 \
    -e MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password \
    -e MYSQL_USER=my_user \
    -e MYSQL_PASSWORD=my_password \
    bitnami/mysql:latest
```

```bash
$ CREATE TABLE Users (username varchar(255), password varchar(255), salt varchar(255), PRIMARY KEY (username));

$ INSERT INTO Users VALUES ('navneetlalg','$2b$10$HdkwEv5r3i44oMR7MzZC3eJddkGsBcQY9iijPXIe841uPrDFx.RWe', $2b$10$HdkwEv5r3i44oMR7MzZC3e);

$ CREATE TABLE Products (productId varchar(255), productName varchar(255), productDescription varchar(255), productPrice decimal(6,2) NOT NULL, PRIMARY KEY (productId) );
```

## Steps to start server and client
To start server first you will require a private and public key combination. Place that file in `server/src/authentication/`
```bash
$ cd server
$ npm run start
```

```bash
$ cd client
$ npm run start
```

## Implementation Include
- [x] Login Page
- [x] Create New Product (Only API is available)
- [x] List Products
- [x] Product Detail Page

## TODO
- [ ] Protected Routes (backend + frontend)
- [ ] UI to create new product
- [ ] Delete Product