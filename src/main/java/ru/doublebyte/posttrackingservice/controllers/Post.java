package ru.doublebyte.posttrackingservice.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.doublebyte.posttrackingservice.client.TrackingService;
import ru.doublebyte.posttrackingservice.response.Track;

@RestController
@RequestMapping("/post")
public class Post {

    private TrackingService trackingService;

    @RequestMapping("/{trackId}")
    public Track post(@PathVariable String trackId) {
        return trackingService.getOperationHistory(trackId);
    }

    @Autowired
    public void setTrackingService(TrackingService trackingService) {
        this.trackingService = trackingService;
    }
}
