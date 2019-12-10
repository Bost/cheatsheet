// https://vitux.com/how-to-create-a-dummy-zombie-process-in-ubuntu/
// compile: cc zombie.c -o zombie

#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdio.h>

int main () {
  pid_t child_pid;child_pid = fork();
  if (child_pid > 0) {
    int sleep_time = 60;
    printf("Sleeping for %d seconds\n", sleep_time);
    sleep(sleep_time);
    printf("Waking up and terminating\n");
  }
  else {
    exit(0);
  }
  return 0;
}
