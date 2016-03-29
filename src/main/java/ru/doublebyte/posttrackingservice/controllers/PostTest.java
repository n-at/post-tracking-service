package ru.doublebyte.posttrackingservice.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.doublebyte.posttrackingservice.response.Operation;
import ru.doublebyte.posttrackingservice.response.Track;
import ru.doublebyte.posttrackingservice.response.TrackError;
import ru.doublebyte.posttrackingservice.response.TrackResult;

import java.util.ArrayList;
import java.util.List;

/**
 * Some cases for interface test
 */
@RestController
@RequestMapping("/post-test")
public class PostTest {

    @RequestMapping("/{trackId}")
    public Track post(@PathVariable String trackId) {
        switch(trackId) {
            case "TRACK0":
                return getNormalTrackResult(trackId);
            case "TRACK1":
                return getEmptyTrackResult(trackId);
            case "TRACK2":
                return getTrackError(trackId);
            default:
                return new TrackError("Unknown trackId", trackId);
        }
    }

    private Track getNormalTrackResult(String trackId) {
        List<Operation> operations = new ArrayList<>();
        operations.add(new Operation(0, "Test operation 1", "123456 City 1"));
        operations.add(new Operation(1000, "Test operation 2", "123456 City 2"));
        operations.add(new Operation(2000, "Test operation 3", "987654 City 3"));
        return new TrackResult(trackId, operations);
    }

    private Track getEmptyTrackResult(String trackId) {
        return new TrackResult(trackId);
    }

    private Track getTrackError(String trackId) {
        return new TrackError("Track error", trackId);
    }

}
