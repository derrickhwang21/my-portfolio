import boto3
import mimetypes
from botocore.client import Config
import StringIO
import zipfile 

def lambda_handler(event, context):
    location = {
        "bucketName": 'portfoliobuild.derrickhwang.com',
        "objectKey": 'portfoliobuild.zip'
    }
    
    job = event.get("CodePipeline.job")
    
    if job:
        for artifact in job["data"]["inputArtifcats"]:
            if artifact["name"] == "portfolioBuild":
                location = artifact["location"]["s3Location"]
                
                
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))                                                                  
    portfolio_bucket = s3.Bucket('portfolio.derrickhwang.com')
    build_bucket = s3.Bucket(location["bucketName"])                                
      
    portfolio_zip = StringIO.StringIO()                                                        
    build_bucket.download_fileobj(location["objectKey"], portfolio_zip)                         
                                                                                
                                           
    with zipfile.ZipFile(portfolio_zip) as myzip:                                              
        for nm in myzip.namelist():                                                            
            obj = myzip.open(nm) 
            mimetype = mimetypes.guess_type(nm)[0] 
            if mimetype is None:
                portfolio_bucket.upload_fileobj(obj, nm) 
            else:
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetype})
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
            
    return 'Hello from Lambda'      