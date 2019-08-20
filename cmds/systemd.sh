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
systemctl --user status --full  tomcat7.service
systemctl --user status --full  <unit>
systemctl --user start          <unit>
systemctl --user stop           <unit>
systemctl --user restart        <unit>
systemctl --user kill           <unit>
systemctl --user enable         <unit>
systemctl --user disable        <unit>

# systemd: reload the systemd manager configuration
systemctl daemon-reload

# systemd: remove all units from the systemctl --failed list
# see also: service obliteration https://superuser.com/a/936976
systemctl reset-failed

# systemd: remove unit from the systemctl --failed list
systemctl reset-failed <unit>

# default.target
man 7 systemd.special

# switch off bluetooth
systemctl status bluetooth
sudo systemctl disable bluetooth
sudo systemctl stop bluetooth
