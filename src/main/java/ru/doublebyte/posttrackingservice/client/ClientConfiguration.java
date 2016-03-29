package ru.doublebyte.posttrackingservice.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.ws.client.core.WebServiceTemplate;
import org.springframework.ws.soap.saaj.SaajSoapMessageFactory;

import javax.xml.soap.MessageFactory;
import javax.xml.soap.SOAPConstants;

@Configuration
public class ClientConfiguration {

    private static final Logger logger = LoggerFactory.getLogger(ClientConfiguration.class);

    @Value("${post.serviceUri}")
    private String serviceUri;

    @Value("${post.serviceLogin}")
    private String serviceLogin;

    @Value("${post.servicePassword}")
    private String servicePassword;

    @Value("${post.serviceLanguage}")
    private String serviceLanguage;

    @Bean
    public Jaxb2Marshaller marshaller() {
        Jaxb2Marshaller marshaller = new Jaxb2Marshaller();
        marshaller.setContextPath("ru.russianpost.tracking");
        return marshaller;
    }

    @Bean
    public WebServiceTemplate webServiceTemplate() {
        WebServiceTemplate webServiceTemplate = new WebServiceTemplate();

        try {
            MessageFactory messageFactory = MessageFactory.newInstance(SOAPConstants.SOAP_1_2_PROTOCOL);
            SaajSoapMessageFactory soapMessageFactory = new SaajSoapMessageFactory(messageFactory);
            webServiceTemplate.setMessageFactory(soapMessageFactory);
        } catch(Exception e) {
            logger.error("Message factory creation exception. Default used", e);
        }

        webServiceTemplate.setDefaultUri(serviceUri);

        webServiceTemplate.setMarshaller(marshaller());
        webServiceTemplate.setUnmarshaller(marshaller());

        return webServiceTemplate;
    }

    @Bean
    public TrackId trackId() {
        return new TrackId();
    }

    @Bean
    public TrackOperationHistory trackOperationHistory() {
        return new TrackOperationHistory();
    }

    @Bean
    public TrackingService trackingService() {
        TrackingService trackingService = new TrackingService();

        trackingService.setWebServiceTemplate(webServiceTemplate());
        trackingService.setTrackId(trackId());
        trackingService.setTrackOperationHistory(trackOperationHistory());

        trackingService.setServiceLogin(serviceLogin);
        trackingService.setServicePassword(servicePassword);
        trackingService.setServiceLanguage(serviceLanguage);

        return trackingService;
    }

}
