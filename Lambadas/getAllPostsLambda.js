const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    dynamo.scan({
        TableName: "Posts" 
    }, (err, data) => {
        if(err) {
            callback(err);
        } else {
            callback(null, data.Items);
        }
    });
};