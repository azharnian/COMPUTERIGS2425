public class Q1{
    public static void main(String[] args)
    {   
        String text = "Ithaca, NY 14850";
        String text2 = "Glendale, CA 91023";

        System.out.println(extractCity(text));
        System.out.println(extractCity(text2));
    }

    public static String extractCity(String cityZip)
    {
        // int comma = cityZip.indexOf(",");
        // String city = cityZip.substring(0, comma);
        // return city;
        return cityZip.substring(0, cityZip.indexOf(","));
    }

    // public static String extractCityCode(String cityZip)
    // {

    // }

    // public static String extractZipCode(String cityZip)
    // {

    // }
}
