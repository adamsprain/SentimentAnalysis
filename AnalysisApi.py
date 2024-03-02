from fastapi import FastAPI
import tensorflow as tf
import numpy as np
app = FastAPI()
model = tf.keras.models.load_model("./sentiment_model")

@app.get("/")
def welcome():
  return {"Welcome": "API for sentiment analysis"}



@app.get("/prediction")
def prediction(text: str):
  prediction = model.predict([text])
  num_sentiment = np.argmax(prediction[0])
  match num_sentiment:
    case 0:
      return {"prediction": "sadness"}
    case 1:
      return {"prediction": "joy"}
    case 2:
      return {"prediction": "love"}
    case 3:
      return {"prediction": "anger"}
    case 4:
      return {"prediction": "fear"}
    case 5:
      return {"prediction": "surprise"}
  return {"Error" : "An error has occured"}
  