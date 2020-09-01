// My Implemented Converter class to easily switch between lat-long and OSGB

import { datums } from "./math/latlon-ellipsoidal-datum"; // Grab the datum object to access Datum codes.
import { LatLon, OsGridRef } from "./math/osgridref"; // Grab LatLon and OsGridRef Classes

class CoordConverter {
    // getOSGB_FromDec() - Get OSGB From Decimal
    /*
        @param lat : The Latitude
        @param long : The Longitude
        @param datum : [OPTIONAL] the Datum code, defaulted to null = WGS84

        @return : easting and northing from OS Grid Ref
    */
    getOSGB_FromDec(lat, long, datum = null) {
        // If no datum supplied, the datum will default to WGS84
        if (datum == null) {
            datum = datums.WGS84;
        }

        const latlong = new LatLon(lat, long); // Pass in decimal lat, long.
        const gridref = latlong.toOsGrid(); // Convert to Lat-Long

        return gridref; // Return a OSGB Object containing the easting and northing.
    }

    // getOSGB_FromDms() - Get OSGB From Degrees, Mins, Seconds.
    /*
        @param latdeg : The Latitude Degree
        @param latmin : The lattitude Minute
        @param latsec : The Lattitude Second
        @param longdeg : The Longitude Degree
        @param longmin : The Longitude Minute
        @param longsec : The Longitude Second
        @param datum : [OPTIONAL] the Datum code, defaulted to null = WGS84

        @return : easting and northing from OS Grid Ref
    */
    getOSGB_FromDMS(latdeg, latmin, latsec, longdeg, longmin, longsec, datum = null) {
        // If no datum supplied, the datum will default to WGS84
        if (datum == null) {
            datum = datums.WGS84;
        }

        // Convert params to degree from decimal
        const LAT = this.getDecimalFromDegree(latdeg, latmin, latsec);
        const LONG = this.getDecimalFromDegree(longdeg, longmin, longsec);

        const latlong = new LatLon(LAT, LONG);
        const gridref = latlong.toOsGrid();

        return gridref;
    }

    // getLatLong_FromOSGB() - Get Lat Long From OSGB
    /*
        @param easting : The OSGB Easting
        @param northing : The OSGB Northing
        @param datum : [OPTIONAL] the Datum code, defaulted to null = WGS84
        
        @return : lat-long object 
    */
    getLatLong_FromOSGB(easting, northing, datum = null) {
        // If no datum supplied, the datum will default to WGS84
        if (datum == null) {
            datum = datums.WGS84;
        }

        const osref = new OsGridRef(easting, northing);
        const latlong = osref.toLatLon(datum);

        return latlong;
    }

    // getDecimalFromDegree() - Converts a degree, minute and second into a Decimal
    /*
        @param easting : The OSGB Easting
        @param northing : The OSGB Northing
        @param datum : [OPTIONAL] the Datum code, defaulted to null = WGS84
        
        @return : decimal number
    */
    getDecimalFromDegree(deg, min, sec) {
        let decDeg = deg;

        // turns the decimal degree positive
        if (decDeg < 0) decDeg *= -1;

        decDeg += min / 60;
        decDeg += sec / 3600;

        // turns the decimal degree back to negative
        if (deg < 0) decDeg *= -1;

        return decDeg;
    }

    getDegreeFromDecimal(dec){
        let posDec = dec;
        if(dec < 0) posDec *= -1;

        let deg = Number(posDec);
        let min = Number(((posDec - deg) * 60));
        let sec = (posDec - deg - min / 60) * 3600;

        return [Number(dec), min, sec];
    }
}

export default CoordConverter;
