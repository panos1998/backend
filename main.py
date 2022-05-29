from datetime import datetime
from fastapi import __version__ as fastapi_version
from typing import Optional
from pydantic import BaseModel
from fastapi import FastAPI, Header
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import Request

class patient_metrics(BaseModel):
    age: int
    BMI: float
    waist: float
    vegfruit: int
    protein: float
    dt: str = ""
    prob:float = 0
    class Config:
      arbitrary_types_allowed = True

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
async def func_metrics(request: Request,metrics:patient_metrics, Origin:str | None=Header(default=None)):
    print('Origin: ', Origin)
    print("your age is: ", metrics.age)
    print("your BMI is: ", metrics.BMI)
    print("your waist circ is: ", metrics.waist)
    print("your vegfruit is: ", metrics.vegfruit)
    print("your protein is: ", metrics.protein)
    print("we have recieved your test")
    prob = 0.24
    metrics.dt = datetime.today().strftime('%d-%m-%Y')
    metrics.prob = prob
    return metrics

@app.get("/", response_class= HTMLResponse)
async def read_root(request: Request, Origin:str | None=Header(default=None)):
    print('Origin: ', Origin)
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
async def render_form(request: Request, Origin:str | None=Header(default=None)):
  print('Origin: ', Origin)
  return templates.TemplateResponse("Page2.html", {"request": request})

@app.get('/history/', response_class=HTMLResponse)
async def render_history(request: Request, Origin: str | None=Header(default=None)):
  print('Origin: ', Origin)
  return templates.TemplateResponse("history.html", {"request":request})
#ssl_keyfile='./key.pem',
  ## # ssl_certfile='./cert.pem', 