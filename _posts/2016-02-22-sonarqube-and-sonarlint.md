---
title: 'SonarQube and SonarLint'
date: '2016-02-22T13:23:39+00:00'
author: 'James Ghandour'
layout: post
permalink: /blog/general/sonarqube-and-sonarlint/
categories:
    - General
---

I take pride in the cleanliness of my code. One of the major ways to ensure my code is in fact clean is to use a static code analysis tool. [SonarQube](http://www.sonarqube.org/) (formerly known as Sonar) is definitely my go to tool for this. Below are the steps I follow to integrate with SonarQube.   
 In the maven pom.xml I add the sonar plugin, and properties it requires:

{% highlight xml %}
<!-- Properties Section -->
<sonar.language>java</sonar.language>
<sonar.host.url>http://localhost:9000</sonar.host.url>

<plugin>
	<groupId>org.sonarsource.scanner.maven</groupId>
	<artifactId>sonar-maven-plugin</artifactId>
	<version>3.0.1</version>
</plugin>
{% endhighlight %}

Then to run it:
{% highlight xml %}
mvn sonar:sonar
{% endhighlight %}

Now if you connect your SonarQube server (http://localhost:9000) you see the results of your run. One thing notably missing is the test coverage results. In addition to analyzing code it has the ability to display test coverage. Ideally these coverage metrics, in addition to being aggregated can be broken down into unit vs. integration test coverage. Here is how I generally configure it: 
{% highlight xml %}
<!-- Properties Section -->
<sonar.junit.reportsPath>${project.build.directory}/surefire-reports</sonar.junit.reportsPath>
<sonar.jacoco.reportPath>${project.build.directory}/jacoco.exec</sonar.jacoco.reportPath>
<sonar.jacoco.itReportPath>${project.build.directory}/jacoco-it.exec</sonar.jacoco.itReportPath>

<dependency>
    <groupId>org.sonarsource.java</groupId>
    <artifactId>sonar-jacoco-listeners</artifactId>
    <version>3.10</version>
    <scope>test</scope>
</dependency>

<-- New Profile -->
<profile>
    <id>coverage</id>
    <build>
	<plugins>
	    <plugin>
		<groupId>org.jacoco</groupId>
		<artifactId>jacoco-maven-plugin</artifactId>
		<version>${version.plugin.jacoco}</version>
		<executions>
		    <execution>
			<id>prepare-agent-ut</id>
			<goals>
			    <goal>prepare-agent</goal>
			</goals>
			<configuration>
			    <destFile>${sonar.jacoco.reportPath}</destFile>
			    <append>true</append>
			</configuration>
		    </execution>
		    <execution>
			<id>prepare-agent-it</id>
			<goals>
			    <goal>prepare-agent-integration</goal>
			</goals>
			<configuration>
			    <destFile>${sonar.jacoco.itReportPath}</destFile>
			    <append>true</append>
			</configuration>
		    </execution>
		</executions>
	    </plugin>
	    <plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-surefire-plugin</artifactId>
		<configuration>
		    <testFailureIgnore>true</testFailureIgnore>
		    <properties>
			<property>
			    <name>listener</name>
			    <value>org.sonar.java.jacoco.JUnitListener</value>
			</property>
		    </properties>
		    <reportsDirectory>${sonar.junit.reportsPath}</reportsDirectory>
		</configuration>
	    </plugin>
	    <plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-failsafe-plugin</artifactId>
		<configuration>
		    <testFailureIgnore>true</testFailureIgnore>
		    <properties>
			<property>
			    <name>listener</name>
			    <value>org.sonar.java.jacoco.JUnitListener</value>
			</property>
		    </properties>
		    <!--
		    To see IT failure details on Sonar, merge reports with junit surefire output.
		    Minor issue is that the integration test failures on sonar are recognized as unit test failures.
		    -->
		    <reportsDirectory>${sonar.junit.reportsPath}</reportsDirectory>
		</configuration>
	    </plugin>
	</plugins>
    </build>
    <reporting>
	<plugins>
	    <plugin>
		<groupId>org.jacoco</groupId>
		<artifactId>jacoco-maven-plugin</artifactId>
		<version>${version.plugin.jacoco}</version>
		<reportSets>
		    <reportSet>
			<id>default-report</id>
			<reports>
			    <report>report</report>
			</reports>
			<configuration>
			    <dataFile>${sonar.jacoco.reportPath}</dataFile>
			</configuration>
		    </reportSet>
		    <reportSet>
			<id>default-report-integration</id>
			<reports>
			    <report>report-integration</report>
			</reports>
			<configuration>
			    <dataFile>${sonar.jacoco.itReportPath}</dataFile>
			</configuration>
		    </reportSet>
		</reportSets>
	    </plugin>
	</plugins>
    </reporting>
</profile>
{% endhighlight %}

 Now to analyze your code including test coverage with sonar you need to run two commands: ```
{% highlight shell %}
mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent install -Pcoverage
mvn sonar:sonar
{% endhighlight %}

 Finally, refresh the page on the SonarQube server and check out the coverage test results in addition to the standard analysis!    

 **Note**: This example works well for a simple maven project, it would need to be tweaked for multi-module projects. My understanding is that main difference in a multi-module project is that you need to output to the same coverage report for the entire project, and not have a single report per module. 

___

 In addition SonarQube server integration described above, the Sonar team have two plugins for IntelliJ IDEA. 
- [**SonarQube Community Plugin**](https://plugins.jetbrains.com/plugin/7238) This plugin connects to an existing SonarQube server and shows you outstanding issues from your local project. It is helpful when you are working with an existing server and working through and cleaning up some outstanding issues.
- [**SonarLint**](https://plugins.jetbrains.com/plugin/7973) This plugin does not require a SonarQube server, and instead does a local analysis of your current project. It is especially helpful when you do not have a SonarQube server to work with.
 