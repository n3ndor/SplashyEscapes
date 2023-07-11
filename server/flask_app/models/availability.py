from flask_app.config.mysqlconnection import connectToMySQL
from datetime import datetime

class Availability:
    db = "splashy_escapes"

    days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday",
}
    
    def __init__(self, data):
        self.id = data["id"]
        self.activity_id = data["activity_id"]
        self.days_id = data["days_id"]
        self.spaces = data["spaces"]
        self.start_time = data["start_time"]
        self.duration = data["duration"]
    
    def to_dict(self):
    # extract hours and minutes from timedelta and format as a string
        hours, remainder = divmod(self.start_time.seconds, 3600)
        minutes, _ = divmod(remainder, 60)
        formatted_start_time = f'{hours:02}:{minutes:02}'

        # Adjust the indexing of days_id to match MySQL (1-7)
        days_id_adjusted = self.days_id % 7

        return {
        "id": self.id,
        "activity_id": self.activity_id,
        "days_id": days_id_adjusted,  # convert to JavaScript days (0-6)
        "day": self.days[days_id_adjusted],  # Change the day number to a day name
        "spaces": self.spaces,
        "start_time": formatted_start_time,  # changed to start_time to match frontend
        "duration": self.duration,
}

    @classmethod
    def save_availability(cls, data):
        query = """ INSERT INTO availabilities (activity_id, days_id, spaces, start_time, duration)
                VALUES (%(activity_id)s, %(days_id)s, %(spaces)s, %(start_time)s, %(duration)s);"""
        result = connectToMySQL(cls.db).query_db(query, data)
        return result

    @classmethod
    def get_availabilities_by_activity(cls, data):
        query = "SELECT * FROM availabilities WHERE activity_id = %(activity_id)s ORDER BY days_id;"
        results = connectToMySQL(cls.db).query_db(query, data)

        all_availabilities = []
        for av in results:
            availability = cls(av)
            all_availabilities.append(availability)
        return all_availabilities
