import json
import boto3

# Initialize DynamoDB resource and specify the table name
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume')

# Lambda function handler
def lambda_handler(event, context):
    # Retrieve the current 'views' count from DynamoDB
    response = table.get_item(Key={
        'id': '0'
    })

    # Extract the 'views' count from the DynamoDB response
    current_views = response.get('Item', {}).get('views', 0)

    # Increment the 'views' count by 1
    updated_views = current_views + 1
    print(f"Previous views: {current_views}, Updated views: {updated_views}")

    # Update the 'views' count in DynamoDB
    response = table.put_item(Item={
        'id': '0',
        'views': updated_views
    })

    # Return the updated 'views' count
    return updated_views
