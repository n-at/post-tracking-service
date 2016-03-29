package ru.doublebyte.posttrackingservice.client;

public class TrackId {

    /**
     * Check given track id for validity
     * Example of track id: RA644000001RU
     *
     * @param trackId Track id
     * @return If id is valid
     */
    public boolean isValid(String trackId) {
        return trackId != null && trackId.matches("^[A-Z]{2}[0-9]{9}[A-Z]{2}$");
    }

}
