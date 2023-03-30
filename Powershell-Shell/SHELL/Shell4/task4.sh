#!/bin/bash
network_information () {
  a=$ (hostname -I)
  b=$ (hostname)
  echo $a
  echo $b
  logger -t "network_information" "${a} ${b}"
}
network_information
