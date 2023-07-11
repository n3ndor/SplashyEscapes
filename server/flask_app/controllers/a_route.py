from flask import Flask, jsonify
from flask_app import app
from flask_app.models.availability import Availability
from flask_app.models.activity import Activity

@app.route('/api/activities', methods=['GET'])
def get_activities():
    activities = Activity.get_all_activities()
    activities_data = [activity.to_dict() for activity in activities] #to_dict convert the object to a dictionary
    return jsonify(activities_data)

@app.route("/api/services/<int:activity_id>/availability")
def get_availability(activity_id):
    availability_data = Availability.get_availabilities_by_activity({"activity_id": activity_id})
    return jsonify(availability_data)
