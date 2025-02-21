##  For importing the model

import pickle

# Assuming your trained model is stored in a variable called 'model'
model_filename = "pcos_model.pkl"

# Save the model
with open(model_filename, 'wb') as file:
    pickle.dump(model, file)

print(f"Model saved as {model_filename}")
