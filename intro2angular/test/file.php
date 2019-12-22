<?php
  
  //CORS - Cross Origin Resource Sharing
	header('Access-Control-Allow-Origin: *');
	
	header('Content-Type: application/json');

?>
{"obj": [
      {
        "name": "Arshad",
        "isOnline": true
      },
      {
        "name": "Iqbal",
        "isOnline": false
      },
      {
        "name": "Kaif",
        "isOnline": true
      }
    ]}
