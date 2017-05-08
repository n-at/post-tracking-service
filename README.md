Using of Russian Post tracking API
==================================

[![Build Status](https://travis-ci.org/n-at/post-tracking-service.svg?branch=master)](https://travis-ci.org/n-at/post-tracking-service)
[![Dependencies](https://app.updateimpact.com/badge/719621723833634816/post-tracking-service.svg?config=test)](https://app.updateimpact.com/latest/719621723833634816/post-tracking-service)

Stack
-----

*Back-end:*

* Java 8
* [Spring Boot](http://projects.spring.io/spring-boot/)
* [Spring Web Services](http://projects.spring.io/spring-ws/)

*Front-end:*

* [React](http://facebook.github.io/react/)
* [jQuery](http://jquery.com/)
* [Bootstrap 3](http://getbootstrap.com/)
* [LESS](http://lesscss.org/)

Building
--------

Requirements:

* [Java 8 JDK](http://www.oracle.com/technetwork/java/index.html)
* [Node.js](https://nodejs.org) and npm

Build client resources and executable jar:

    $ ./mvnw clean package

Build only client resources:

    $ cd public
    $ npm install
    $ npm run build

Running
-------

Setup API login and password in `application.properties` file (you can get them [here](https://tracking.pochta.ru/)).
See `application.sample.properties` for example of application configuration.

Run application (from `target` directory):

    $ java -jar post-tracking-service.jar

License
-------

BSD
