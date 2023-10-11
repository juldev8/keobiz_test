# keobiz
# installation

# démarrer le serveur
cd keobiz_project
npm install
cp .env.example .env (puis configurer le fichier si besoin)
npm run start:dev


# info routing concept
https://jsonapi.org/
swagger pourrait être installer

# routing fake
GET /api/private/fake

# routing customers
GET /api/public/customers
GET /api/public/customers/:id
POST /api/public/customers
POST /api/public/customers/:id
PUT  /api/public/customers/:id

# routing reviews
GET /api/public/reviews
GET /api/public/reviews/:id
POST /api/public/reviews
POST /api/public/reviews/:id
PUT  /api/public/reviews

# check Duplicate Customer Id
npm run check:duplicationId

# run integration tests
npm run test:integration