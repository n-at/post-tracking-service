package ru.doublebyte.posttrackingservice.response;

/**
 * Tracking service result abstract base class
 */
public abstract class Track {

    /**
     * Track id
     */
    private String id;

    /**
     * Operation status message
     */
    private String message;

    /**
     * Operation success flag
     */
    private boolean success;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}
