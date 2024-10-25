public class Spaces {
    public static void main(String[] args){
        System.out.println(printTwoDigit(4));
    }

    public static String removeSpaces2(String str)
    {
        while(str.indexOf(" ") != -1){
            int indexSpace = str.indexOf(" ");
            String first = str.substring(0, indexSpace);
            String second = str.substring(indexSpace + 1);
            str = first + second; // first space removed
        }
        return str;
    }

    public static boolean isPalindrome(String str)
    {
        int len = str.length();
        for(int i = 0; i < len/2; i++){
            String current = str.substring(i, i + 1);
            String opposite = str.substring(len - 1 - i, len - i);
            if(!current.equals(opposite))
                return false;
        } 
        return true;
    }

    public static String printTwoDigit(int n)
    {
        // int counter13 = 0;
        boolean seen = false;
        for (int i=0; i<n; i++)
        {
            int randNum = (int) (Math.random() * 10) + 10; // random 10-19
            System.out.println(randNum);
            // if (randNum == 13)
            //     counter13++;
            if (!seen && randNum == 13)
                seen = true;
        }
        // if (counter13 > 0)
        if (seen)
            return "we saw a 13!";
        return "no 13 was seen.";
    }

}