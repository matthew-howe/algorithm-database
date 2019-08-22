// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/jav://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/java<Paste>

public class Year {
      public static int century(int number) {
            
              if (number % 100 == 0) return number / 100;
                  
              return number / 100 + 1;   
      }
}
