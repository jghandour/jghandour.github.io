---
title: 'Development Environment Setup'
date: '2015-02-21T00:41:17+00:00'
author: 'James Ghandour'
layout: post
permalink: /blog/general/development-environment-setup/
categories:
    - General
tags:
    - Environment
---

When starting at a new client I often have to setup my development environment from scratch.

### Environment Variables

I install everything to **c:\\tools** and set environment variables accordingly.  
- JAVA\_HOME
- MAVEN\_HOME
- PATH
 
### Cygwin

 One of the first things I do is install [64-bit cygwin](https://cygwin.com/setup-x86_64.exe). Included in cygwin, I select the latest versions of the following packages: - bash-completion
- curl
- git
- ncurses
- openssh
- openssl
- mintty
- subversion
- vim
- wget
- inetutils
- jq
 
#### Cygwin config

 When installing cygwin it does not create a /etc/passwd file, so you have to do so yourself. 
{% highlight shell %}
mkpasswd -c -p "$(cygpath -H)" > /etc/passwd 
{% endhighlight %}

Finally, go into this file and change the home directory from HOME to the directory you want from /home/<login_name> to /cygdrive/c/users/<login_name># mintty

My preferred terminal emulator in cygwin is mintty. I create a mintty.bat file with the following content:
{% highlight shell %}
start c:\tools\cygwin\bin\mintty.exe -i /Cygwin-Terminal.ico -e c:\tools\cygwin\bin\bash.exe -login -i 
{% endhighlight %}

### Bash Profile

And of course, no development environment would be complete without a customized .bash\_profile, here is my bare-bones version: 
{% highlight shell %}
# General
PS1="\[\e[01;37m\][\t]-[\[\e[01;37m\u\e[01;37m\]]-[\[\e[01;37m\]${HOSTNAME%%.*}\[\e[01;37m\]]:\w\[\e[01;37m\]\n$ \[\e[0m\]"
function xtitle {
echo -ne "\033]0;$1\007"
}

# Maven
export MAVEN_OPTS_BASE='-server -Xms66M -Xmx1024M -XX:+UnlockCommercialFeatures -XX:+FlightRecorder'
export MAVEN_OPTS_DEBUG=' -Xdebug=true -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,address=8000,server=y,suspend=n -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.port=9997'
alias mvnDebugOff='export MAVEN_OPTS=$MAVEN_OPTS_BASE'
alias mvnDebugOn='export MAVEN_OPTS=$MAVEN_OPTS_BASE$MAVEN_OPTS_DEBUG'
alias mcdu='mvn versions:display-dependency-updates -U'
alias mcpu='mvn versions:display-plugin-updates -U'
alias mci='mvn clean install -U'
alias mcp='mvn clean package -U'
alias mct='mvn clean test -o'
alias itest='mvn -DforkCount=0 clean verify -o'
alias mcjr='mvn clean jetty:run -o'

# Local Directories
alias cdp="xtitle 'code'; cd /cygdrive/c/code/"

# Start Script...
mvnDebugOn
cdp
{% endhighlight %}