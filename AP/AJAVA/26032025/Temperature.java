class Temperature
{
    String scale;
    double deg;

    public static boolean isValidTemp(double tempDeg,String tempScale)
    {
        if (tempScale.equalsIgnoreCase("C") || tempScale.equalsIgnoreCase("F"))
        {
            return true;
        } 
        return false;
    }

    public static void main(String[] args)
    {
        if (isValidTemp(30, "C"))
        {
            System.out.println("VALID");
        } else 
        {
            System.out.println("INVALID");
        }
    }
}