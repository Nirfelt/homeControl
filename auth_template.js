var auth = {};

//Mongo DB
auth.mongo_ip = '<ip>';
auth.mongo_port = '<port>';
auth.db_name = '<dbname>';

auth.mongo_url = 'mongodb://' + auth.mongo_ip + ':' + auth.mongo_port;

auth.mongo_connection = auth.mongo_url + '/' + auth.db_name;

//Session
auth.session_secret = '<secret>';

//Bcrypt
auth.bcrypt_salt = '<number>';

//App
auth.app_port = '<port>';

module.exports = auth;