from http.client import HTTPResponse
import shutil
import pickle
from datetime import datetime
from fastapi import __version__ as fastapi_version, Form
from pydantic import BaseModel
from fastapi import FastAPI, Header, UploadFile, status
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import Request
from fastapi.responses import JSONResponse
import numpy as np
import sklearn
#print(np.__version__)
#print(sklearn.__version__)
class patient_metrics(BaseModel):
    BMI: float
    weight: float
    waist: float
    oxymetry: int
    grain: float
    fruit: float
    vegan: float
    protein: float
    dairy: float
    total_cal: float
    dt: str = ""
    prob:float = 0
    class Config:
      arbitrary_types_allowed = True
class algorithm_submission_model(BaseModel):
  username: str
  file: UploadFile



templates = Jinja2Templates(directory="templates/html")
print(fastapi_version)
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
#app.add_middleware(HTTPSRedirectMiddleware)
app.add_middleware(
  CORSMiddleware,
  allow_origins = ['*'],
  allow_credentials=True,
  allow_methods=['*'],
  allow_headers=['*'],
)

@app.post("/metrics/")
async def func_metrics(request: Request,metrics:patient_metrics):
    loaded_model = pickle.load(open('model.sav', 'rb'))
    loaded_scaler = pickle.load(open('scaler.sav','rb'))
    metrics_dict = metrics.dict()
    print(metrics_dict)
    x_test = [value for value in metrics_dict.values()]
    print(x_test)
    x_test = loaded_scaler.transform(np.array(x_test[:-2]).reshape(1,-1))
    print(x_test)
    result = loaded_model.predict_proba(x_test)[0][1]
    print(result)
    metrics.prob = np.around(result,decimals=4)
    metrics.dt = datetime.today().strftime('%d-%m-%Y')
    #print(metrics)
    return metrics

@app.get("/", response_class= HTMLResponse)
async def read_root(request: Request):
    print('Origin: ')
    print(fastapi_version)
    print({
  "age": 45,
  "BMI": 34.5,
  "waist_circ": 12.5,
  "veg_fruit": 5,
  "protein": 3.5,
})
    return templates.TemplateResponse("Page1.html", {"request": request})


@app.get('/assess/', response_class=HTMLResponse)
async def render_form(request: Request):
  
  return templates.TemplateResponse("Page2.html", {"request": request})

@app.get('/history/', response_class=HTMLResponse)
async def render_history(request: Request):
  
  return templates.TemplateResponse("history.html", {"request":request})
@app.get('/upload/', response_class=HTMLResponse)
async def render_upload_form(request: Request):
  
  return templates.TemplateResponse("UploadAlgo.html", {"request":request})

@app.post('/upload/')
async def post_file(request: Request, file: UploadFile, password: str=Form(...)):

  if password=="paok":
    with open("model.sav","wb") as buffer:
      shutil.copyfileobj(file.file, buffer)
    message ='File uploaded'
    print("file successfull uploaded")
    return 200
  else:
    return 401
#ssl_keyfile='./key.pem',
  ## # ssl_certfile='./cert.pem', 