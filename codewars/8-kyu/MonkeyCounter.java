public class MonkeyCounter
{
      public static int[] monkeyCount(final int n){
            
              int[] monkeys = new int[n];
                  
                  for (int i = 0; i < n; i++) {
                            monkeys[i] = i + 1; 
                                }
                    
                      return monkeys;
	}
}
