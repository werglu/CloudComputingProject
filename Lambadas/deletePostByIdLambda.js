const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const headers = {
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
    "Access-Control-Allow-Methods": "GET,DELETE,PUT,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
};

exports.handler = (event, context, callback) => {
    let statusCode = 200;
    let body = null;

    dynamo.delete({
        TableName: "Posts",
        Key: {
            id: event.pathParameters?.id
        }
    }, (err, data) => {
        if(err) {
            statusCode = 400;
            // body = JSON.stringify(err.message);
            body = err.message;
        }
        
        callback(null, {statusCode, body, headers});
    });
};