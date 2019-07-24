#!/usr/bin/env bash
exit 1 # just in case ...

# :snap    https//snapcraft.io/
# :flatpak https//flatpak.org/
# :nix     https//nixos.org/
# :guix    https//guix.gnu.org/
# comparisons
https://www.slant.co/versus/1145/5880/~gnu-guix_vs_docker
https://www.slant.co/versus/1143/1145/~nix_vs_gnu-guix

# ETL (Extract Transform Load)
# https://tech.grammarly.com/blog/building-etl-pipelines-with-clojure
# Stich ETL service https://www.stitchdata.com/
# https://clojure.org/stories/stitch

# cgroups - control groups in the linux kernel; limits an application to a
# specific set of resources
# container are created from images: I -> C
# https://hub.docker.com/  also see: PWD (Play With Docker)
# control groups allow Docker Engine to share available hardware resources to
# containers and optionally enforce limits and constraints. E.g. limit the
# memory available to a specific container.
sudo docker run -p 4000:80 friendlyhell
sudo docker tag friendlyhello gordon/get-started:part2
sudo docker run -p 4000:80 gordon/get-started:part2
sudo docker image ls
sudo docker save gordon/get-started:part2 > get-started.tar
sudo docker load --image get-started.tar
sudo docker info
sudo docker container ls
sudo docker container inspect <container>
sudo docker kill --signal=SIGHUP <container>
sudo docker stop <container>
sudo docker restart <container>
sudo systemctl restart docker
sudo service docker status
sudo docker ps -a
sudo killall docker-containerd
sudo killall dockerd

# docker-compose.yml - define & running multi-container Docker apps
sudo docker-compose down

# services
sudo docker swarm init
sudo docker stack deploy -c docker-compose.yml getstartedlab
sudo docker service ls
sudo docker stack ls
sudo docker stack services getstartedlab
sudo docker service ps getstartedlab_web
sudo docker container ls -q

# https://docs.docker.com/get-started/part2/
docker build -t friendlyhello .  # Create image using this directory's Dockerfile
docker run -p 4000:80 friendlyhello  # Run "friendlyhello" mapping port 4000 to 80
docker run -d -p 4000:80 friendlyhello         # Same thing, but in detached mode
docker container ls                                # List all running containers
docker container ls -a             # List all containers, even those not running
docker container stop <hash>           # Gracefully stop the specified container
docker container kill <hash>         # Force shutdown of the specified container
docker container rm <hash>        # Remove specified container from this machine
docker container rm $(docker container ls -a -q)         # Remove all containers
docker image ls -a                             # List all images on this machine
docker image rm <image id>            # Remove specified image from this machine
docker image rm $(docker image ls -a -q)   # Remove all images from this machine
docker login             # Log in this CLI session using your Docker credentials
docker tag <image> username/repository:tag  # Tag <image> for upload to registry
docker push username/repository:tag            # Upload tagged image to registry
docker run username/repository:tag                   # Run image from a registry

# scale the app by changing the replicas value in docker-compose.yml
docker stack deploy -c docker-compose.yml getstartedlab
sudo docker stack rm getstartedlab
sudo docker swarm leave --force

# https://docs.docker.com/get-started/part3/
docker stack ls                                            # List stacks or apps
docker stack deploy -c <composefile> <appname>  # Run the specified Compose file
docker service ls                 # List running services associated with an app
docker service ps <service>                  # List tasks associated with an app
docker inspect <task or container>                   # Inspect task or container
docker container ls -q                                      # List container IDs
docker stack rm <appname>                             # Tear down an application
docker swarm leave --force      # Take down a single node swarm from the manager

docker system prune
docker system prune --volumes
docker image prune
docker image prune -a
docker image ls -la
docker volume ls
docker volume prune

# :bash - add your user to docker group and re-login
sudo usermod --append --groups docker $(whoami)`
sudo usermod -aG docker $(whoami)`

# https://hub.docker.com/_python
# Section: Create a Dockerfile in your Python app project
touch requirements.txt
echo "print(\"Hello, World!\")" > your-daemon-or-script.py
sudo docker build -t my-python-app .
sudo docker run -it --rm --name my-running-app my-python-app

# https://hub.docker.com/_/postgres
sudo docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
sudo docker container ls
sudo docker exec -it some-postgres bash
psql -h localhost -p 5432 -U postgres -W   # empty password - press Enter
SELECT count(*) FROM pg_catalog.pg_tables;

# GNU guix
guix package --list-generations
guix package --list-installed
guix package --install hello
guix package --install guile
guix package --rollback
guix package --remove python --install guile
guix package --search=hello

# automatic installation of security (and other) upgrades
sudo unattended-upgrade -d --dry-run  # -d debug
sudo unattended-upgrade -d            # -d debug
sudo unattended-upgrade

# centos compile git
sudo yum clean all
sudo vim /etc/yum.com; proxy=http://<ip:port>
sudo yum update
sudo yum groupinstall 'Development Tools'
sudo yum install openssl-devel curl-devel expat-devel perl-devel asciidoc xmlto

# centos compile emacs
sudo yum install texinfo gtk2-devel gnutls-devel libtiff-devel libungif-devel \
     libjpeg-devel libXpm-devel ncurses-devel

# centos compile guake
sudo yum install gnome-common GConf2-devel pytgtk2-devel python-vte-devel \
     gnome-python2-gconf python-keybinder pyxdg notify-python

# :deb :apt :ppa - only 64bit packages
deb [arch=amd64] http://...

# :apt :aptitute :apt-offline
sudo apt-offline install $HOME/offline-updates
sudo apt-offline install --allow-unauthenticated $HOME/offline-updates

# :aptitute
/etc/apt/apt.conf.d/05proxy
/etc/apt/apt.conf

# :apt :aptitude - without proxy
sudo apt --option Acquire::http::proxy=false ...

# :dpkg - add-apt-repository needs a single repo
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo add-apt-repository ppa:atareao/telegram
sudo apt update
sudo apt install telegram python-3.6

# python setup.py uninstall
sudo python setup.py install --record files.txt
sudo xargs rm -rf < files.txt

# :dpkg :list-ppa
sudo ppa-purge <ppa:user/ppa-name>

# withouth "sudo", download source PACKAGE to current directory
apt source <package>

# Advanced Package Tool; apt is a replacement for apt-get
sudo apt install --reinstall <package>

# ubuntu: command line upgrade part 1. (CLI alternative to update-manager)
# set Prompt
/etc/update-manager/release-upgrades
Prompt=normal

# ubuntu: command line upgrade part 2.
sudo apt update; and sudo apt upgrade

# update and upgrade the system by removing/installing/upgrading packages
sudo apt update; and sudo apt full-upgrade
sudo apt update; and sudo apt dist-upgrade # alternativelly

# ubuntu: command line upgrade part 3.
sudo do-release-upgrade

# :apt :aptitude show installed packages
dpkg --get-selections

# :apt :aptitude list of installed files from a packageName (dpkg-query -L works too)
dpkg -L packageName

# show description for packageName
apt-cache search ^packageName$

# print names of all packages know to APT
apt-cache pkgnames <packagePrefix>
dpkg --status <package>
dpkg -s <package>

sudo dpkg --install <package.deb>
sudo dpkg --remove  <package.deb>

# list all installed packages matching regex
dpkg --list | grep ii | grep -i <regex>
# package description
apt-cache show <package>
aptitude show <package>
# fix the 'Hash sum mismatch error'
sudo rm -rf /var/lib/apt/lists
sudo mkdir -p /var/lib/apt/lists/partial
sudo apt clean

# :ubuntu :apt dpkg: mirror: distro: Software Sources List
# see y-ppa-manager, http://repogen.simplylinux.ch/
software-properties-gtk
# ... or edit the list of sources
/etc/apt/sources.list.d

# list installed packages; no sudo needed
# TODO see --clear-selection --set-selection
dpkg --get-selections | grep -v deinstall

# :aptitude list expressly installed packages (not just installed as
# dependencies)
aptitude search '~i!~M'

