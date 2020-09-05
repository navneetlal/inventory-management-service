```bash
server
├── src
│   ├── authentication
│   │   ├── hashPassword.ts
│   │   ├── token.ts
│   │   └── verifyPassword.ts
│   ├── dbContext
│   │   └── mysql.ts
│   ├── interface
│   │   └── user.ts
│   ├── routes
│   │   ├── index.ts
│   │   ├── login.ts
│   │   └── product.ts
│   └── index.ts
├── nodemon.json
├── package.json
├── package-lock.json
└── tsconfig.json

5 directories, 15 files
```

```bash
docker run --name mysql \
-e ALLOW_EMPTY_PASSWORD=yes \
-e MYSQL_DATABASE=my_database \
-p 3306:3306 \
-e MYSQL_AUTHENTICATION_PLUGIN=mysql_native_password \
-e MYSQL_USER=my_user \
-e MYSQL_PASSWORD=my_password \
bitnami/mysql:latest
```

CREATE TABLE Users (username varchar(255), password varchar(255), salt varchar(255), PRIMARY KEY (username));

INSERT INTO Users VALUES ('navneetlalg','$2b$10$HdkwEv5r3i44oMR7MzZC3eJddkGsBcQY9iijPXIe841uPrDFx.RWe', $2b$10$HdkwEv5r3i44oMR7MzZC3e);

CREATE TABLE Products (productId varchar(255), productName varchar(255), productDescription varchar(255), productPrice decimal(6,2) NOT NULL, PRIMARY KEY (productId) );

