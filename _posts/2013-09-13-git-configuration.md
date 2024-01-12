---
title: 'GIT Configuration'
date: '2013-09-13T15:08:04+00:00'
author: 'James Ghandour'
layout: post
guid: 'https://www.jagsits.com/?p=41'
permalink: /blog/general/git-configuration/
categories:
    - General
tags:
    - GIT
---

Another one of those tasks that I always do when starting at a new client is configuring Git just the way I like it.

1. Install Git (v2.0+), ideally via cygwin as described in my [Development Environment Setup](https://www.jagsits.com/blog/general/development-environment-setup/) instructions.
2. Globally set my standard settings
    {% highlight shell %}
    git config --global user.name "Firstname Lastname"
    git config --global user.email "email@domain.com"
    git config --global core.fileMode false
    git config --global core.autocrlf input
    git config --global color.ui auto
    git config --global color.status auto
    git config --global color.diff auto
    git config --global color.branch auto
    git config --global color.interactive auto
    git config --global pull.rebase true
    git config --global fetch.prune true
    git config --global push.default current
    git config --global rerere.enabled 1
    {% endhighlight %}
    
    Windows only:
    {% highlight shell %}
    git config --global core.whitespace trailing-space,space-before-tab,cr-at-eol
    {% endhighlight %}
3. Confirm settings
   {% highlight shell %}
    git config --global --list
    {% endhighlight %}
4. Globally set my standard aliases
    {% highlight shell %}
    git config --global alias.st status
    git config --global alias.ci commit
    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.unstage 'reset HEAD'
    git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&amp;amp;lt;%an&amp;amp;gt;%Creset' --abbrev-commit"
    {% endhighlight %}
5. Confirm aliases
    {% highlight shell %}
    git config --get-regexp alias
    {% endhighlight %}