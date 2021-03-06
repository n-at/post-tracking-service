package ru.doublebyte.posttrackingservice.response;

/**
 * Track operation
 */
public class Operation implements Comparable<Operation> {

    /**
     * Operation localized name
     */
    private String name = "";

    /**
     * Operation date timestamp
     */
    private long date = 0;

    /**
     * Address of operation place
     */
    private String address = "";

    public Operation() {

    }

    public Operation(long date, String name, String address) {
        this.date = date;
        this.name = name;
        this.address = address;
    }

    @Override
    public int compareTo(Operation o) {
        return Long.compare(date, o.getDate());
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getDate() {
        return date;
    }

    public void setDate(long date) {
        this.date = date;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}
