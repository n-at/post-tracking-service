package ru.doublebyte.posttrackingservice.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/post")
public class Post {

    @RequestMapping("/{trackId}")
    public String post(@PathVariable String trackId) {
        return "TrackId: "  + trackId; //TODO
    }

}
