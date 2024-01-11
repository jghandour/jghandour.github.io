---
id: 17
title: 'Maven Quick Reference'
date: '2013-08-27T11:52:25+00:00'
author: 'James Ghandour'
layout: post
guid: 'https://www.jagsits.com/?p=17'
permalink: /blog/general/maven-quick-reference/
categories:
    - General
tags:
    - Maven
---

I’ve been using [Maven](http://maven.apache.org/) for quite some time, and always end up forgetting these very useful commands. Figured that posting them here would help us all out!

- Dependency Plugin
- mvn dependency:analyze
- mvn dependency:tree
 
- Help Plugin
- mvn help:effective-pom
 
- Release Plugin
- mvn –batch-mode release:prepare release:perform -DpreparationGoals=clean -Darguments=”-Dmaven.test.skip=true”
 
- Versions Plugin
- mvn versions:display-dependency-updates
- mvn versions:display-plugin-updates
- mvn versions:display-property-updates
- mvn -N versions:update-child-modules -DgenerateBackupPoms=false
 