Using of Russian Post tracking API
==================================

Building
--------

Requirements:

* [Java 8 JDK](http://www.oracle.com/technetwork/java/index.html)
* [Apache Maven 3](https://maven.apache.org/)
* [Node.js](https://nodejs.org) and npm
* [Bower](http://bower.io) `npm install -g bower`
* [Grunt](https://www.npmjs.com/package/grunt-cli) `npm install -g grunt-cli`

Build client resources:

    $ cd public
    $ npm install
    $ bower install
    $ grunt

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
