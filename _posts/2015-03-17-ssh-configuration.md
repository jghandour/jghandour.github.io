---
id: 88
title: 'SSH Configuration'
date: '2015-03-17T12:55:43+00:00'
author: 'James Ghandour'
layout: post
guid: 'https://www.jagsits.com/?p=88'
permalink: /blog/general/ssh-configuration/
categories:
    - General
tags:
    - Environment
---

When starting at a new client you generally have to remember passwords on a bunch of \*nix machines – dev, uat, prod and various others. I usually securely store those passwords somewhere and ideally never have to look them up again. Instead I distribute my public key to the appropriate servers so that I am never actually prompted for a password.

1. If you don’t already have a private and public key created, now is the time to create one. On your desktop: ```
    <pre class="brush: bash; title: ; notranslate" title="">
    $ ssh-keygen 
    Generating public/private rsa key pair.
    Enter file in which to save the key (/cygdrive/c/users/james/.ssh/id_rsa): [Enter]
    Enter passphrase (empty for no passphrase): [Enter a passphrase]
    Enter same passphrase again: [Enter a passphrase]
    Your identification has been saved in /id_rsa_new_crap.
    Your public key has been saved in /id_rsa_new_crap.pub.
    The key fingerprint is:
    SHA256:0DLGGFFHxyvMO4sELjo2v/wXIdww9i93waSoltMJ0Vw james@localhost
    The key's randomart image is:
    +---[RSA 2048]----+
    |    oo+.+E.      |
    |     O = ...     |
    |    + %oo +.     |
    |    .= O+..o     |
    |   . .* So  .    |
    |  . .=.=oo .     |
    | . .....+o.      |
    |oo.   ...        |
    |..o+o..          |
    +----[SHA256]-----+
    
    chmod 600 ~/.ssh/id_rsa
    ```
2. Publish your public key to the relevant servers. ```
    <pre class="brush: bash; title: ; notranslate" title="">ssh-copy-id -i ~/.ssh/id_rsa.pub <user>@<remote-host>
    ```
3. Attempt login to those relevant servers. ```
    <pre class="brush: bash; title: ; notranslate" title="">ssh <user>@<remote-host>
    ```
4. Next I add aliases to my bash profile so that I don’t even have to remember the full server names. ```
    <pre class="brush: bash; title: ; notranslate" title="">
    alias sshServer='xtitle '\''<server>'\''; ssh <user>@<remote-host>'
    ```