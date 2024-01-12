---
title: 'Maven Quick Reference'
date: '2013-08-27T11:52:25+00:00'
author: 'James Ghandour'
layout: post
permalink: /blog/general/maven-quick-reference/
categories:
    - General
tags:
    - Maven
---

I’ve been using [Maven](http://maven.apache.org/) for quite some time, and always end up forgetting these very useful commands. Figured that posting them here would help us all out!

### Dependency Plugin
  {% highlight shell %}
  mvn dependency:analyze
  mvn dependency:tree
  {% endhighlight %}
 
### Help Plugin
  {% highlight shell %}
  mvn help:effective-pom
  {% endhighlight %}

### Release Plugin
  {% highlight shell %}
  mvn –batch-mode release:prepare release:perform -DpreparationGoals=clean -Darguments=”-Dmaven.test.skip=true”
  {% endhighlight %}

### Versions Plugin
  {% highlight shell %}
  mvn versions:display-dependency-updates
  mvn versions:display-plugin-updates
  mvn versions:display-property-updates
  mvn -N versions:update-child-modules -DgenerateBackupPoms=false
  {% endhighlight %}