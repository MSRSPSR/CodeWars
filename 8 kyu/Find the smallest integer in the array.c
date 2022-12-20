#include <stddef.h>

int find_smallest_int(const int array[/* len */], size_t len)
{
  size_t c;
  int min = array[0];
  
  for (c = 1; c < len; c++)
    if (min > array[c])
      min = array[c];
  
 return min;
}
 

