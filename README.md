Using of Russian Post tracking API
==================================

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
* [Apache Maven 3](https://maven.apache.org/)
* [Node.js](https://nodejs.org) and npm
* [Bower](http://bower.io) `npm install -g bower`
* [Grunt](https://www.npmjs.com/package/grunt-cli) `npm install -g grunt-cli`

Build client resources and executable jar:

    $ mvn clean package

Build only client resources:

    $ cd public
    $ npm install
    $ bower install
    $ grunt

Running
-------

Setup API login and password in `application.properties` file.
See `application.sample.properties` for example of application configuration.

Run application (from `target` directory):

    $ java -jar post-tracking-service-1.0.jar

License
-------

BSD
