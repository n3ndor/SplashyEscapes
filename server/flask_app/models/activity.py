from flask_app.config.mysqlconnection import connectToMySQL

class Activity:
    db = "splashy_escapes"
    
    def __init__(self, data):
        self.id = data["id"]
        self.name = data["name"]
        self.description = data["description"]

    def to_dict(self):
            return {
                "id": self.id,
                "name": self.name,
                "description": self.description,
            }

    @classmethod
    def save_activity(cls, data):
        query = """ INSERT INTO activity (name, description)
                VALUES (%(name)s, %(description)s);"""
        result = connectToMySQL(cls.db).query_db(query, data)
        return result
    
    @classmethod
    def get_all_activities(cls):
        query = "SELECT * FROM activity;"
        results = connectToMySQL(cls.db).query_db(query)
        
        all_activities = []
        for a in results:
            activity = cls(a)
            all_activities.append(activity)
        return all_activities