/* Mapify contains the functions to convert any coordinates into
any section of a map
*/
mappify = {};

//the geogrphic decimal coordinates of the start of the Applachian Trail in the format lon/lat
mappify.atStart = [34.557761,-84.249422];

//the geogrphic decimal coordinates of the end of the Applachian Trail in the format lon/lat
mappify.atEnd = [45.904492,-68.9215];

//helper calculation that gives the degree length of the trail
mappify.totalCoordinateLength = [mappify.atEnd[0] - mappify.atStart[0]];

/*
takes in the longitude, and latitude in decimal form, and 
returns a percentage of the AT it's from its longitude.
It's probably useful in the future useing an average of lat/lon progression, but
for now lon is probably sufficient
*/
mappify.calculatePercentage = (lon,lat) => {
    //error check that these are apart of the correct trail
    if (lon < (mappify.atStart[0] -1) || (lon >mappify.atEnd[0] + 1)){
        throw new Error("Logitude coordinates out of bounds");
    }

    if (lat < (mappify.atStart[1] -1) || (lat >mappify.atEnd[1] + 1)){
        throw new Error("Latitude coordinates out of bounds");
    }
    return ((mappify.atStart[0] + lon) / mappify.totalCoordinateLength)

};

export default mappify;