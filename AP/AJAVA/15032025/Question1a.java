public class Question1a
{
    public static void main(String[] args)
    {
        // System.out.println(convertToBinary(8));
        System.out.println(convertToDecimal("1000"));
        System.out.println(convertToDecimal("111"));
    }

    public static String convertToBinary(int number)
    {
        String res = "";

        while(number > 0)
        {
            res = number % 2 + res;
            number /= 2;
        }
        return res;
    }

    public static String convertToDecimal(String bin)
    {
        int res = 0, digit;
        for (int i = 0; i < bin.length(); i++)
        {
            // digit = Integer.parseInt(bin.substring(i, i+1));
            // res += digit * Math.pow(2, bin.length() - i - 1);  

            if (bin.substring(i, i+1).equals("1"))
                res += Math.pow(2, bin.length() - i - 1);
        }

        return ""+res;
    }
}