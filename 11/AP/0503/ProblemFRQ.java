
public class ProblemFRQ()
{
    
}

class School()
{
    // precondition: name is the name of an
    // Elective in electiveList
    // postcondition: returns the Elective in
    // electiveList with the given name
    private Elective getElectiveByName(String name)
    {
        for (Elective e : electiveList)
        {
            if (e.getName().equals(name))
            {
                return e;
            }
        }
        return null;
    }

    // postcondition: All Students in
    // studentList have been either
    // assigned their first available
    // elective choice or not assigned;
    // All electives in electiveList have
    // been updated appropriately as
    // Students are assigned to them
    public void assignElectivesToStudents()
    {
        for (Student s : studentList)
        {
            for (int i = 0; i < 3; i++)
            {
                elective = getElectiveByName(s.getChoice(i));
                if (elective.getClassSize() < elective.getMaxClassSize() && s.hasElective())
                {
                    elective.addStudent(s);
                    s.assignElective(elective);
                    // break;
                }
            }
        }
    }
}

class Deck
{
    // precondition: For all k such that
    // 0 < = k < cards.length,
    // 0 < = cards [k] < cards.length and
    // each card [k] is unique
    // postcondition: returns true if
    // cards [k] = = k for all
    // 0 < = k < cards.length; returns
    // false otherwise
    public boolean inOrder()
    {
        for (int k = 0; k < card.length ; k++)
        {
            if (cards[k] != k)
            {
                return false;
            }
        }
        return true;
    }

    // postcondition: the deck is shuffled by
    // dividing the deck into two equal stacks
    // that are evenly interlaced
    public void shuffle()
    {   
        int halfSize = cards.length/2;
        int [] left = new int[halfSize];
        int [] right = new int[halfSize];

        for (int i = 0; i < cards.length; i++){
            if (i < halfSize)
            {
                left[i] = cards[i];
            } else 
            {
                right[i-halfSize] = cards[i];
            }
        }

        for (int i = 0; i < halfSize; i++)
        {
            cards[i*2] = left[i]; 
        }

        for (int i = 0; i < halfSize; i++)
        {
            cards[i*2+1] = right[i];
        }
    }

    // postcondition: returns the number of
    // shuffles necessary to return the cards
    // in the deck to their original numerical
    // order such that inOrder ( ) = = true; the
    // cards in the deck are in their original
    // numerical order
    public int reorderCount()
    {
        int counter = 0;
        while (inOrder() != true || counter == 0)
        {
            shuffle();
            counter++;
        }
        return counter;
    }
}