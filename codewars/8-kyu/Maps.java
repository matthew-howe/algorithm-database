// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/java

public class Maps {
  public static int[] map(int[] arr) {
    
    for (int i = 0; i < arr.length; i++) {
      arr[i] *= 2; 
    }
  
    return arr;
  }
}
