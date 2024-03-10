# Sentiment Analysis

Created using ReactJS for frontend, FastAPI with Python for a backend, and Sentiment Neural Network Model created with Tensorflow

Model trained on data from Nidula Elgiriyewithana on Kaggle: https://www.kaggle.com/datasets/nelgiriyewithana/emotions/data

# Table of Contents:
1. Frontend Features
2. Backend Features
3. Notes on Model Creation

# Frontend Features

Frontend builds a quick ReactJS website that sends a user input to the backend through an API endpoint

# Backend Features

Backend API has 2 endpoints for use

2 Endpoints
1. Welcome Endpint (GET "/")
  Test endpoint to be closed
2. Prediction endpoint (GET "/prediction?=USERTEXT")
   Queries neural network with user input USERTEXT. // Should be PUT

# Notes on Model Creation

Model creation process can be seen in model_creation.ipynb, but a summary will be given below.
Test Data Accuracy: 0.879
Test Data Loss: 0.260

1. Data from Kaggle loaded into a pandas dataframe
2. Data split into inputs (df_x) and results (df_y)
3. Data split into training (x_train, y_train), validation (x_val, y_val), and test data (x_test, y_test)
4. X and Y dataframes combined into Tensorfow Datasets (ds_train, ds_val, ds_test)
5. Batch size set to 64
6. Shuffle and batch training dataset to ensure no unintended training data patterns
7. Batch validation and test dataset
8. Create encoder to vectorize text, creating numerical values for vocabulary tokens
9. Create RNN Model
   a. Embedding Layer: Encodes input text into vector form
   b. First Bidirectional LSTM Layer (Bidirectionality and LSTM allow for words in beginning and end to have equal affect on overall sentiment, as well as connections between words to be made)
   c. Second Bidirectional LSTM Layer (Allow for more patterns to be recognized)
   d. Dense ReLU layer, Begin combination of data with 50% dropout to avoid overtraining with large dataset
   e. Dense softmax layer to allow for the 6 potential classifications to be made
10. Compile Model
11. Fit Model with 10 epochs and 30 validation steps
12. Test accuracy on test data
