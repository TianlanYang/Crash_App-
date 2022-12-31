from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database.connection import get_db
from schemas.models import CrashEvent
from utils.crash_event_crud import (
    crash_event_get_all
)

router = APIRouter(tags=["crash_event"])

@router.get("/list/all", status_code=status.HTTP_200_OK, response_model=List[CrashEvent])
def get_all_posts(db: Session = Depends(get_db)):
    return crash_event_get_all(db=db)

    