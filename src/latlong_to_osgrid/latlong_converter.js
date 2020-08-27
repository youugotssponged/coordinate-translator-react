import { datums } from "./math/latlon-ellipsoidal-datum";
import { LatLon, OsGridRef } from "./math/osgridref";

class LatLongConverter {
    // Returns easting and northing from OS Grid Ref
    getOSGB_FromDec(lat, long, datum = null) {
        if (datum == null) {
            datum = datums.WGS84;
        }

        const latlong = new LatLon(lat, long);
        const gridref = latlong.toOsGrid();

        return gridref;
    }

    getOSGB_FromDMS(latdeg, latmin, latsec, longdeg, longmin, longsec, datum = null) {
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

    getLatLong_FromOSGB(easting, northing, datum = null) {
        if (datum == null) {
            datum = datums.WGS84;
        }

        const osref = new OsGridRef(easting, northing);
        const latlong = osref.toLatLon(datum);

        return latlong;
    }

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
}

export default LatLongConverter;
