package ru.doublebyte.posttrackingservice.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ws.client.core.WebServiceTemplate;
import ru.russianpost.tracking.*;

import java.util.List;

public class TrackingService {

    private static final Logger logger = LoggerFactory.getLogger(TrackingService.class);

    private WebServiceTemplate webServiceTemplate;
    private TrackId trackId;
    private String serviceLogin = "";
    private String servicePassword = "";

    /**
     * Get tracking history by post track id
     * @param trackId Post track id
     * @return Tracking history response
     */
    public String getOperationHistory(String trackId) {
        if(!this.trackId.isValid(trackId)) {
            return "Invalid trackId"; //TODO
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
            return "Not ok!"; //TODO send error
        }

        OperationHistoryData operationHistory = response.getOperationHistoryData();
        List<OperationHistoryRecord> records = operationHistory.getHistoryRecord();

        return "Ok"; //TODO send result
    }

    public void setWebServiceTemplate(WebServiceTemplate webServiceTemplate) {
        this.webServiceTemplate = webServiceTemplate;
    }

    public void setTrackId(TrackId trackId) {
        this.trackId = trackId;
    }

    public void setServiceLogin(String serviceLogin) {
        this.serviceLogin = serviceLogin;
    }

    public void setServicePassword(String servicePassword) {
        this.servicePassword = servicePassword;
    }
}
