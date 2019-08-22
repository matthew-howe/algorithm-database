public class Sqrt {

    public static int nearestSq(final int n) {
        double result = Math.round(Math.sqrt(n));

        return (int) (result * result);
    }

} 
