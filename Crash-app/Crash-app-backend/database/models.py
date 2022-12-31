from sqlalchemy import Column, String, Date, Integer, Time, Numeric

from database.connection import Base, engine


class CrashEvents(Base):
    __tablename__ = "crash_event"

    report_number = Column(Integer, primary_key=True)
    crash_date = Column(Date)
    crash_time = Column(Time)
    county = Column(String)
    city = Column(String)
    investigating_agency = Column(String)
    on_street = Column(String)
    offset_feet = Column(Integer)
    offset_direction = Column(String)
    from_intersecting_street = Column(String)
    crash_severity = Column(String)
    latitude = Column(Numeric(9,6))
    longitude = Column(Numeric(9,6))


Base.metadata.create_all(engine)
