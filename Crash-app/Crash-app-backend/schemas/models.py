from typing import Optional, Union
import datetime
from decimal import Decimal

from pydantic import BaseModel



class CrashEvent(BaseModel):
    report_number : int
    crash_date : datetime.date
    crash_time : datetime.time
    county : str
    city : str
    investigating_agency : str
    on_street : str
    offset_feet : Union[int, None]
    offset_direction : Union[str, None]
    from_intersecting_street : Union[str, None]
    crash_severity : str
    latitude: float
    longitude: float

    class Config:
        orm_mode = True
