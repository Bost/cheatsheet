#!/bin/bash
exit 1

# Control the systemd system and service manager
man systemctl

# Unit configuration
man systemd.unit

# Service unit configuration
man systemd.service

# list units
systemctl
systemctl --all --type service

# service status
systemctl status -l tomcat7.service
systemctl start / stop / restart
systemctl kill
systemctl enable / disable
systemctl daemon-reload
