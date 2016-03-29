package ru.doublebyte.posttrackingservice.client;

import org.junit.Test;
import ru.doublebyte.posttrackingservice.response.Operation;
import ru.russianpost.tracking.OperationHistoryData;
import ru.russianpost.tracking.OperationHistoryRecord;
import ru.russianpost.tracking.OperationParameters;
import ru.russianpost.tracking.Rtm02Parameter;

import java.util.List;

import static org.junit.Assert.*;

public class TrackOperationHistoryTest {

    @Test
    public void testMakeOperationList() {
        TrackOperationHistory trackOperationHistory = new TrackOperationHistory();

        OperationHistoryData historyData = new OperationHistoryData();
        OperationHistoryRecord historyRecord = new OperationHistoryRecord();

        List<OperationHistoryRecord> historyRecords = historyData.getHistoryRecord();
        historyRecords.add(historyRecord);

        //Test empty operation
        List<Operation> operations = trackOperationHistory.makeOperationList(historyData);
        assertEquals(1, operations.size());

        Operation operation = operations.get(0);
        assertEquals(0, operation.getDate());
        assertEquals("", operation.getAddress());
        assertEquals("", operation.getName());

        //Test with operation type name
        OperationParameters operationParameters = new OperationParameters();
        Rtm02Parameter operationType = new Rtm02Parameter();
        operationType.setName("Test");
        operationType.setId(1);
        operationParameters.setOperType(operationType);
        historyRecord.setOperationParameters(operationParameters);

        operations = trackOperationHistory.makeOperationList(historyData);
        assertEquals(1, operations.size());

        operation = operations.get(0);
        assertEquals("Test", operation.getName());
    }

}