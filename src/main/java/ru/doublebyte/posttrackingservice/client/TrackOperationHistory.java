package ru.doublebyte.posttrackingservice.client;

import ru.doublebyte.posttrackingservice.response.Operation;
import ru.russianpost.tracking.*;

import javax.xml.datatype.XMLGregorianCalendar;
import java.util.ArrayList;
import java.util.List;

public class TrackOperationHistory {

    /**
     * Make list of operation history items out of API OperationHistoryData
     * @param operationHistory API operation history
     * @return List of operation history
     */
    public List<Operation> makeOperationList(OperationHistoryData operationHistory) {
        ArrayList<Operation> operations = new ArrayList<>();

        if(operationHistory == null) {
            return operations;
        }

        List<OperationHistoryRecord> records = operationHistory.getHistoryRecord();
        if(records == null) {
            return operations;
        }

        for(OperationHistoryRecord record : records) {
            Operation operation = new Operation();
            operation.setDate(getDate(record));
            operation.setName(getOperationName(record));
            operation.setAddress(getOperationAddress(record));
            operations.add(operation);
        }

        operations.sort(Operation::compareTo);

        return operations;
    }

    /**
     * Extract date from operation history record
     * @param historyRecord History record
     * @return Date timestamp (0 if date is not present)
     */
    private long getDate(OperationHistoryRecord historyRecord) {
        if(historyRecord == null) {
            return 0;
        }

        OperationParameters operationParameters = historyRecord.getOperationParameters();
        if(operationParameters == null) {
            return 0;
        }

        XMLGregorianCalendar calendar = operationParameters.getOperDate();
        if(calendar == null) {
            return 0;
        }

        return calendar.toGregorianCalendar().getTimeInMillis();
    }

    /**
     * Extract operation name from operation history record
     * @param historyRecord History record
     * @return Operation name (or empty string)
     */
    private String getOperationName(OperationHistoryRecord historyRecord) {
        if(historyRecord == null) {
            return "";
        }

        OperationParameters operationParameters = historyRecord.getOperationParameters();
        if(operationParameters == null) {
            return "";
        }

        Rtm02Parameter operationType = operationParameters.getOperType();
        if(operationType == null) {
            return "";
        }

        String name = operationType.getName();

        return name == null ? "" : name;
    }

    /**
     * Extract operation place address from operation history record
     * @param historyRecord History record
     * @return Operation address (or empty string)
     */
    private String getOperationAddress(OperationHistoryRecord historyRecord) {
        if(historyRecord == null) {
            return "";
        }

        AddressParameters addressParameters = historyRecord.getAddressParameters();
        if(addressParameters == null) {
            return "";
        }

        Address operationAddress = addressParameters.getOperationAddress();
        if(operationAddress == null) {
            return "";
        }

        String index = operationAddress.getIndex() == null ? "" : operationAddress.getIndex();
        String description = operationAddress.getDescription() == null ? "" : operationAddress.getDescription();

        return index + (index.length() == 0 ? "" : " ") + description;
    }
}
