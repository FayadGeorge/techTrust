# techTrust
It is all about a fictionary tech support company (just backend). You can create users, delete them and get your service**s

Technologies involved
Nodejs
Prisma(as ORM)
SQLite (allos to persist data in one file. Perfect for this project)
Express(for backend development)


#GETTING STARTED

1. clone the repository
2. run "npm i" on your command prompt to install all dependencies
3. run "npx prisma init"
4. run "npx prisma migrate dev"
5. go to your Postman or the client of your choice and type "http://localhost:5200/login"
6. Type the following json in the body of your request
    {
    "userName": "GeorgeF",
    "password": "admin1"
   }

You will access to the dashboard. There you have some functionalities as admin
####################################################################################
#Endpoints for Staff
- localhost:5200/api/admin/dashboard use GET to get all the services
- localhost:5200/api/admin/dashboard/users   use POST to create a new service with the following params. here's an example

####################

Features to add
- fixes for route permissions
- improvements in data model


##########################3

#DATA MODEL

The model contains the following tables


model User {
  id        Int        @id @default(autoincrement())
  name      String
  lastName  String
  userName  String     @unique
  email     String     @unique
  createdAt DateTime   @default(now())
  role      Role       @relation(fields: [roleId], references: [id])
  roleId    Int
  password  String     @default("password1")
  service   Services[]
}

model Role {
  id   Int    @id @default(autoincrement())
  role String @unique
  user User[]
}

model Services {
  id             Int      @id @default(autoincrement())
  serviceRequest String
  requestedAt    DateTime @default(now())
  solvedAt       DateTime
  employee       User[]
}

If you have any feedback, do not hesitate to give it constructively. 

   
