$(document).ready(function() {
  var server = "http://cfa.local/communityMetrics";
  var couchdb_server = "https://foodshed.cloudant.com";
  var couchdb_dbname = "toymodels";

  // jqcouch documentation: http://plugins.jquery.com/project/jqcouch

  // Get all documents from database. (With cache)
/*
  var dc = $.jqCouch.connection(couchdb_server);
  dc.update_config('cache', true);
  if (var total_documents = dc.all(couchdb_dbname).total_rows) {
      var all_documents = dc.all(couchdb_dbname).rows;   
  }
*/

/*

var doc = {_id:"0",a:1,b:1};
if ($.jqCouch.connection('doc').save('database_name', doc)._id !== false) {
    alert("Created document with rev: "+doc._rev+", a="+doc.a);
}
*/




  $.getJSON('../json/registry.json', function(data) {
    var files = data.files;

    $.each(files, function(key, file) {

      $.getJSON((server + "/json/" + file), function(doc) {
        if ($.jqCouch.connection('doc').save(couchdb_server + "/" + couchdb_dbname, doc)._id !== false) {
            alert("Created document with rev: "+doc._rev+", a="+doc.a);
        }
      });




    });
  });
});