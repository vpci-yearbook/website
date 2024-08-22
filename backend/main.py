from fastapi import FastAPI, UploadFile, File, HTTPException
from pymongo import MongoClient
import os
import uuid

app = FastAPI()

client = MongoClient("mongodb://localhost:27017")
db = client.photo_gallery
photos_collection = db.photos

UPLOAD_DIR = "uploads/"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload/")
async def upload_photo(file: UploadFile = File(...)):
    file_id = str(uuid.uuid4())
    file_path = os.path.join(UPLOAD_DIR, file_id + "-" + file.filename)
    
    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())
    
    photo_data = {
        "file_id": file_id,
        "filename": file.filename,
        "filepath": file_path
    }
    result = photos_collection.insert_one(photo_data)
    
    if result.acknowledged:
        return {"file_id": file_id, "filename": file.filename}
    else:
        raise HTTPException(status_code=500, detail="File upload failed")