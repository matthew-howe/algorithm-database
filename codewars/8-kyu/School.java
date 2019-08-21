public class School{

 	public static int getAverage(int[] marks){
    int sum = 0;
    int avg = 0;
    
    for (int i = 0; i < marks.length; i++) {
      sum += marks[i]; 
    }
    
    avg = sum / marks.length; 
    
		return avg;
	}
}
