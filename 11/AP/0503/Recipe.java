public class Recipe
{
    private String name;
    private ArrayList<Ingridient> ingridients;
    private String description;
    private int numberOfPeopleServed;

    public Recipe(String n, int num)
    {
        // implementation
    }

    public void addIngridient(Ingridient i)
    {
        ingridients.add(i);
    }

    public void setDescription(String d)
    {
        description = d;
    }

    public String getName()
    {
        return name;
    }

    public ArrayList<Ingridient> getIngridients()
    {
        return ingridients;
    }

    public int getNumberOfPeopleServed()
    {
        return numberOfPeopleServed;
    }

    public void scaleRecipe(int scaleNumber){
        for (Ingridient i : ingridients)
        {
            i.setAmount((i.getAmount/numberOfPeopleServed) * scaleNumber);
        }
    }



}