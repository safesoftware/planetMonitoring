function GetAnalysisPage(){
    
        var fromDate = document.getElementById("myDate1").value.replace(/-/g,"");
        var toDate   = document.getElementById("myDate2").value.replace(/-/g,"");
        var monitoring_url = "https://demos-safe-software.fmecloud.com/fmedatastreaming/PlanetMonitoring/PlanetServerDemoMonitoring.fmw?FROMDATE="+fromDate+"&TODATE="+toDate
        window.open(monitoring_url);
    };

    window.onload = function() {
        $('#myDate1');
      
        $("#myDate1").datepicker({
            changeMonth: true, 
            changeYear: true, 
            dateFormat: "yy-mm-dd"
        });

        $("#myDate2").datepicker({
            changeMonth: true, 
            changeYear: true, 
            dateFormat: "yy-mm-dd"
        });
        $('#myDate2').datepicker("setDate", "today");

        $.getJSON("https://demos-safe-software.fmecloud.com/fmedatastreaming/PlanetMonitoring/PlanetServerDemoMonitoringLatestImage_path.fmw", function(data) {
            var date = data.dateUpdated;
            var image = data.imagePath
            document.getElementById('updated').innerHTML = '<i>The latest image for the area. Updated on '+date+'</i>';
            document.getElementById('image').innerHTML = '<img src="'+image+'" height="60%">';
        });
    };