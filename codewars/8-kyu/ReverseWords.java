import java.util.*;

public class ReverseWords {
    public static String reverseWords(String str) {

        List<String> words = Arrays.asList(str.split(" "));
        // convert the string to an array of the words

        Collections.reverse(words);
        // reverse the array

        return String.join(" ", words);
        // return the array as a string joined by an empty 
        // space

    }

}
