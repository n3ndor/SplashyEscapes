
SELECT * FROM activities;
SELECT * FROM availabilities;
SELECT * FROM days;

INSERT INTO `availabilities` (`activity_id`, `days_id`, `spaces`, `start_time`, `duration`) 
VALUES ('3', '4', '6', '8:30:00', '1');

INSERT INTO `activities` (`name`, `description`) 
VALUES ('Pool Party', 'Immerse yourself in the joy and laughter of our pool parties.');

SELECT * FROM availabilities WHERE activity_id = "1" ORDER BY days_id;