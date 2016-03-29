package ru.doublebyte.posttrackingservice.response;

/**
 * Represents various error results of tracking
 * Success flag is set to false
 */
public class TrackError extends Track {

    public TrackError() {
        setSuccess(false);
    }

    public TrackError(String message) {
        this();
        setMessage(message);
    }

    public TrackError(String message, String trackId) {
        this(message);
        setId(trackId);
    }

}
