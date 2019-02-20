import boto3
import mimetypes
from botocore.client import Config
import StringIO
import zipfile 

s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))                                                                  
portfolio_bucket = s3.Bucket('portfolio.derrickhwang.com')
build_bucket = s3.Bucket('portfoliobuild.derrickhwang.com')                                
  
portfolio_zip = StringIO.StringIO()                                                        
build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)                         
                                                                            
                                       
with zipfile.ZipFile(portfolio_zip) as myzip:                                              
    for nm in myzip.namelist():                                                            
        obj = myzip.open(nm) 
        mimetype = mimetypes.guess_type(nm)[0] 
        if mimetype is None:
            portfolio_bucket.upload_fileobj(obj, nm) 
        else:
            portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType': mimetype})
        portfolio_bucket.Object(nm).Acl().put(ACL='public-read')                           