# Saheli
PCOS Prediction and Care platform

## Running Backend Locally

1. Clone the repository:

```bash
git clone https://github.com/<your-github-username>/Saheli.git
```
2. Navigate to backend
   
```bash
cd backend/my-flask-app
```

3. Create a virtual environment named 'venv'
```bash
python -m venv venv
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Start the uvicorn server
```bash
uvicorn app:app --reload
```

6. To Deactivate the virtual environment:
```bash
deactivate
```
To generate requirements.txt:
```bash
pip freeze > requirements.txt
```
## Sample cURL request - For Healthy Women
```bash
curl -X 'POST' \
  'http://127.0.0.1:8000/' \
  -H 'Content-Type: application/json' \
  -d '{
  "age": 30.0,
  "marriageStatus": 0.0,
  "weight": 70.0,
  "bmi": 23.5,
  "follicleNoR": 18.0,
  "follicleNoL": 18.0,
  "amh": 5.0,
  "regularCycle": 1.0,
  "cycleLength": 30.0,
  "skinDarkening": 1.0,
  "hairGrowth": 1.0,
  "weightGain": 1.0,
  "fastFood": 1.0,
  "pimples": 1.0
}'
```
Sample Response
```bash
{"atRisk":false}
```
## Sample cURL request - For PCOS Risk Prone Women
```bash
curl -X 'POST' \
'http://127.0.0.1:8000/' \
  -H 'Content-Type: application/json' \
  -d '{
  "age": 36.0,
  "marriageStatus": 1.0,
  "weight": 72.0,
  "bmi": 25.0,
  "follicleNoR": 14.0,
  "follicleNoL": 15.0,
  "amh": 3.0,
  "regularCycle": 1.0,
  "cycleLength": 30.0,
  "skinDarkening": 0.0,
  "hairGrowth": 0.0,
  "weightGain": 3.0,
  "fastFood": 4.0,
  "pimples": 2.0
}'
```
Sample Response
```bash
{"atRisk":true}
```






