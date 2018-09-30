#!/bin/bash
exit 1

# systemd: Control the systemd system and service manager
man systemctl

# systemd: Unit configuration
man systemd.unit

# Service unit configuration
man systemd.service

# systemd: list units
systemctl
systemctl --all --type service

# systemd: service status
systemctl status -l tomcat7.service
systemctl start / stop / restart
systemctl kill
systemctl enable / disable
systemctl daemon-reload
