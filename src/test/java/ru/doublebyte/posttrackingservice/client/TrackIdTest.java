package ru.doublebyte.posttrackingservice.client;

import org.junit.Test;

import static org.junit.Assert.*;

public class TrackIdTest {

    @Test
    public void testIsValid() {
        TrackId trackId = new TrackId();

        //international
        assertTrue(trackId.isValid("RA644000001RU"));
        assertTrue(trackId.isValid("AB123456789YZ"));
        assertFalse(trackId.isValid(null));
        assertFalse(trackId.isValid("RA644000001"));
        assertFalse(trackId.isValid("RA64400000199"));
        assertFalse(trackId.isValid("644000001RU"));
        assertFalse(trackId.isValid("99644000001RU"));
        assertFalse(trackId.isValid("RA6440AA001RU"));
        assertFalse(trackId.isValid("RA644000001ru"));

        assertTrue(trackId.isValid("12345678901234"));
        assertFalse(trackId.isValid("123456789012345"));
        assertFalse(trackId.isValid("1234567890123"));
    }

}