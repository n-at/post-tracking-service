package ru.doublebyte.posttrackingservice.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ws.client.core.WebServiceTemplate;
import ru.doublebyte.posttrackingservice.response.Track;
import ru.doublebyte.posttrackingservice.response.TrackError;
import ru.doublebyte.posttrackingservice.response.TrackResult;
import ru.russianpost.tracking.*;

public class TrackingService {

    private static final Logger logger = LoggerFactory.getLogger(TrackingService.class);

    private WebServiceTemplate webServiceTemplate;
    private TrackId trackId;
    private TrackOperationHistory trackOperationHistory;
    private String serviceLogin = "";
    private String servicePassword = "";

    /**
     * Get tracking history by post track id
     * @param trackId Post track id
     * @return Tracking history response
     */
    public Track getOperationHistory(String trackId) {
        if(!this.trackId.isValid(trackId)) {
            new TrackError("Invalid track id", trackId);
        }

        OperationHistoryRequest operationHistoryRequest = new OperationHistoryRequest();
        operationHistoryRequest.setBarcode(trackId);
        operationHistoryRequest.setLanguage("RUS");
        operationHistoryRequest.setMessageType(0);

        AuthorizationHeader authorizationHeader = new AuthorizationHeader();
        authorizationHeader.setMustUnderstand("1");
        authorizationHeader.setLogin(serviceLogin);
        authorizationHeader.setPassword(servicePassword);

        GetOperationHistory request = new GetOperationHistory();
        request.setOperationHistoryRequest(operationHistoryRequest);
        request.setAuthorizationHeader(authorizationHeader);

        logger.info("Requesting tracking info about {}...", trackId);

        GetOperationHistoryResponse response;

        try {
            response = (GetOperationHistoryResponse)webServiceTemplate.marshalSendAndReceive(request);
        } catch(Exception e) {
            logger.error("Request error", e);
            return new TrackError(e.getMessage(), trackId);
        }

        OperationHistoryData operationHistory = response.getOperationHistoryData();

        return new TrackResult(trackId, trackOperationHistory.makeOperationList(operationHistory));
    }

    public void setWebServiceTemplate(WebServiceTemplate webServiceTemplate) {
        this.webServiceTemplate = webServiceTemplate;
    }

    public void setTrackId(TrackId trackId) {
        this.trackId = trackId;
    }

    public void setTrackOperationHistory(TrackOperationHistory trackOperationHistory) {
        this.trackOperationHistory = trackOperationHistory;
    }

    public void setServiceLogin(String serviceLogin) {
        this.serviceLogin = serviceLogin;
    }

    public void setServicePassword(String servicePassword) {
        this.servicePassword = servicePassword;
    }
}
