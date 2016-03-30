package ru.doublebyte.posttrackingservice.client;

public class TrackId {

    /**
     * Check given track id for validity
     * Example of international track id: RA644000001RU
     * Example of domestic track id: 11000000000000
     *
     * @param trackId Track id
     * @return If id is valid
     */
    public boolean isValid(String trackId) {
        return trackId != null &&
            (trackId.matches("^[A-Z]{2}[0-9]{9}[A-Z]{2}$") ||
             trackId.matches("^[0-9]{14}$"));
    }

}
