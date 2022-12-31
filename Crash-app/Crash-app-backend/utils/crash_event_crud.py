from sqlalchemy.orm import Session

from database.models import CrashEvents

def crash_event_get_all(db: Session):
    return db.query(CrashEvents).all()