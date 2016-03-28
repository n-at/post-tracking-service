Using of Russian Post tracking API
==================================

Building
--------

Requirements: Java 8, maven 3.

Build executable jar:

    $ mvn clean package

Running
-------

Setup API login and password in `application.properties` file.
See `application.sample.properties` for example of application configuration.

Run application (from `target` directory):

    $ java -jar post-tracking-service-1.0.jar

License
-------

BSD
