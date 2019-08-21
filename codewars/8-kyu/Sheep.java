// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/java

class Kata {
  public static String countingSheep(int num) {
    StringBuilder s = new StringBuilder();
    
    for (int i = 1; i <= num; i++) {
      s.append(Integer.toString(i) + " sheep..."); 
    }
    
    return s.toString();
  }
}
