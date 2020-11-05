import json
import bottle
import datetime
from pymongo import MongoClient

db = MongoClient().hsm

def json_friendly(obj):
    if not obj or type(obj) in (int, float, str, bool):
        return obj

    if type(obj) == datetime.datetime:
        return obj.strftime('%Y-%m-%dT%H:%M:%S')

    if type(obj) == dict:
        for k in obj:
            obj[k] = json_friendly(obj[k])
        return obj

    if type(obj) == list:
        for i, v in enumerate(obj):
            obj[i] = json_friendly(v)
        return obj

    if type(obj) == tuple:
        temp = []
        for v in obj:
            temp.append(json_friendly(v))
        return tuple(temp)
    return str(obj)



@bottle.route("/web/<path>")
def server_index_file(path=None):
    return bottle.static_file(path,"/home/lordkrs/work/vue/mam/dist")

@bottle.route("/js/<path>")
def server_js_file(path=None):
    return bottle.static_file(path,"/home/lordkrs/work/vue/mam/dist/js")

@bottle.route("/css/<path>")
def server_js_file(path=None):
    return bottle.static_file(path,"/home/lordkrs/work/vue/mam/dist/css")

@bottle.route("/")
def redirect_to_main_page():
    bottle.redirect("/web/index.html")

@bottle.route("/web/components")
def getWebComponents():
    return json.dumps({"plugins": enabled_plugins})

@bottle.route("/assets")
@bottle.route("/assets/<fileId>")
def getFiles(fileId=None):
    if fileId is None:
        return json.dumps({"files":list(db.archive.find({},{"_id":0,"archive_id":1, "file_name":1, "file_size":1}))})
    else:
        return json_friendly(db.archive.find_one({"archive_id":fileId},{"_id":0}))

@bottle.route("/bins")
@bottle.route("/bins/<binId>")
def getFiles(binId=None):
    if binId is None:
        return json.dumps({"bins":list(db.bins.find({},{"_id":1, "name":1}))})
    else:
        return json_friendly(db.bins.find_one({"_id":binId}))

bottle.run(host="0.0.0.0",port=1235)

