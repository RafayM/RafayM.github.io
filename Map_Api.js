function initialize() 
{var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    /*
    * 1. SET INITIAL OPTIONS FOR THE MAP:
    */
    var mapOptions = 
    {
        // set the map centered at 51.5171, -0.1062 (not very important)
        center: new google.maps.LatLng(40.69847032728747, -73.9514422416687),

        // set the map zoom at level 7 (so that the roads start to show up)
        zoom: 12,

        // get rid of all the default UI elements
        disableDefaultUI: true,

        // set the map as a road map
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    /*
    * 2. DISPLAY THE MAP IN A DIV WITH ID "map-canvas"
    */
    var aMap = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    
    
    /*
    * 3. STYLE THE MAP TO DISPLAY NOTHING BUT ROADS
    */
    
    	    	    
    var mapStyle = 
    [
        {
            featureType: "everything",
            stylers:
            [
                {visibility: "off"}
            ]
        },

       
        {
            featureType: "poi.park",
            stylers:
            [
                {hue: "blue"},
                {lightness: -30},
                {visibility: "on"}
            ]
        },
        
        
        {
            featureType: "poi.park",
            elementType: "labels",
            stylers:
            [
                {visibility: "off"}
            ]
        },  
        
         {
            featureType: "water",
            stylers:
            
            [
                {hue: "blue"},
                {lightness: -30},
                {visibility: "on"}
            ]
        },
         
        
        
        {
            featureType: "water",
            elementType: "labels",
            stylers:
            [
                {visibility: "off"}
            ]
        },
        
         
    ];
    
    
    

    // set the styling to our map
    aMap.setOptions({styles: mapStyle});

}



/*
* 4. INITIALIZE THE MAP
*/
google.maps.event.addDomListener(window, 'load', initialize);

