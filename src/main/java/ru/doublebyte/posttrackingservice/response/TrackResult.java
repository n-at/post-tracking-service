package ru.doublebyte.posttrackingservice.response;

import java.util.ArrayList;
import java.util.List;

/**
 * Tracking result
 * Success flag by default is set to true and message is "OK"
 */
public class TrackResult extends Track {

    private List<Operation> operations = new ArrayList<>();

    public TrackResult() {
        setSuccess(true);
        setMessage("OK");
    }

    public TrackResult(String trackId) {
        this();
        setId(trackId);
    }

    public TrackResult(String trackId, List<Operation> operations) {
        this(trackId);
        setOperations(operations);
    }

    public List<Operation> getOperations() {
        return operations;
    }

    public void setOperations(List<Operation> operations) {
        this.operations = operations;
    }
}
