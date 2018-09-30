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
systemctl start <unit-name>
systemctl stop <unit-name>
systemctl restart <unit-name>
systemctl kill <unit-name>
systemctl enable <unit-name>
systemctl disable <unit-name>
systemctl daemon-reload
