# Log Ingestor and Query Interface Project

This project includes a log ingestor and a query interface built using Node.js, Express, and MongoDB.

## Setup

### 1. Install Dependencies

Make sure you have Node.js and npm installed on your machine.

```bash
npm install
2. Start MongoDB
Ensure MongoDB is installed and running.
bash
mongod

3. Create a Database
In the MongoDB shell, create a database named logDB.
bash
mongo
use logDB
Log Ingestor
Run Log Ingestor

Navigate to the log ingestor directory and run:
bash
cd log-ingestor
node log-ingestor.js
The log ingestor will be running on http://localhost:3000.

Query Interface
Run Query Interface
Navigate to the query interface directory and run:

bash
cd log-query-interface
node log-query-interface.js
The query interface will be running on http://localhost:4000.

Ingest Logs
Use a tool Postman to send log data to the log ingestor:

bash
 POST -H "Content-Type: application/json" -d '{
    "level": "error",
    "message": "Failed to connect to DB",
    "resourceId": "server-1234",
    "timestamp": "2023-09-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}' http://localhost:3000/ingest
Query Logs
Use a tool Postman to query logs:
bash
curl -X POST -H "Content-Type: application/json" -d '{
    "level": "error"
}' http://localhost:4000/search
