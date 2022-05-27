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
    return metrics

@app.get("/", response_class= HTMLResponse)
async def read_root(request: Request, Origin:str |None=Header(default=None)):
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


@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
    
#ssl_keyfile='./key.pem',
  ## # ssl_certfile='./cert.pem', 