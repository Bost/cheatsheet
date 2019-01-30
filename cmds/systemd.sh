#!/usr/bin/env fish
return # just in case ...

# systemd: Control the systemd system and service manager
man systemctl

# systemd: Unit configuration
man systemd.unit

# systemd: service unit configuration
man systemd.service

# systemd: list units
systemctl
systemctl --all --type service

# systemd: list units in failed state
systemctl --failed / --state=failed

# systemd: service status
systemctl status --full  tomcat7.service
systemctl status --full  <unit>
systemctl start          <unit>
systemctl stop           <unit>
systemctl restart        <unit>
systemctl kill           <unit>
systemctl enable         <unit>
systemctl disable        <unit>

# systemd: reload the systemd manager configuration
systemctl daemon-reload

# systemd: remove all units from the systemctl --failed list
# see also: service obliteration https://superuser.com/a/936976
systemctl reset-failed

# systemd: remove unit from the systemctl --failed list
systemctl reset-failed <unit>
