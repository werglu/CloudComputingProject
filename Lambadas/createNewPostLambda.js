const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    let id = AWS.util.uuid.v4();

    dynamo.put({
        TableName: "Posts",
        Item: {
            id: id,
            text: event.text,
            isPinned: event.isPinned,
            createdDate: event.createdDate
        }
    }, (err, data) => {
        if(err) {
            callback(err);
        } else {
            let item = {
                id: id,
                text: event.text,
                isPinned: event.isPinned,
                createdDate: event.createdDate
            };
            
            callback(null, item);
        }
    });
};