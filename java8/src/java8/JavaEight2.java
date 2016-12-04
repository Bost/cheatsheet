package java8;

import java.util.Arrays;
import java.util.List;

public class JavaEight2 {

    // (eclim-run-class) - must be called from withing of a class
    public static void main(String[] args) {
        List<Integer> vals = Arrays.asList(1, 2, 3, 5, 4, 6, 7, 8, 9, 10);

        // Return the double of the 1st even number > 2 in vals
        int result = 0;
        for (int e: vals) {
            if (e > 3 && e % 2 == 0) {
                result = e * 2;
                break;
            }
        }
        System.out.println("Imperative: "+result);
        System.out.println("---------------");

        // Optional[...] - i.e. Maybe-Type
        System.out.println
            ("Functional: "+vals
             .stream()
             .filter(e -> e > 3) // returns lazy list
             .filter(e -> e % 2 == 0) // returns lazy list
             .map(e -> e * 2) // returns lazy list
             .findFirst()     // returns Optional[8] - findFirst on an empty list...
             .orElse(0)       // ... in such a case default to 0
             );
        System.out.println("Funcional: done");
        System.out.println("---------------");

        System.out.println
            ("Funcional: laziness demo - fns are internally composed;\n"+
             "Funcional: findFirst() triggers execution:"+vals
             .stream()
             .filter(JavaEight2::isGT3) // returns lazy list
             .filter(JavaEight2::isEven) // returns lazy list
             .map(JavaEight2::doubleIt) // returns lazy list
             .findFirst()     // returns Optional[8] - findFirst on an empty list...
             .orElse(0)       // ... in such a case default to 0
             );
        System.out.println("Funcional: done");
        System.out.println("---------------");

        System.out.println
            (
             "Funcional: laziness demo - fns are internally composed;\n"+
             "Funcional: no execution triggered:"+vals
             .stream()
             .filter(JavaEight2::isGT3) // returns lazy list
             .filter(JavaEight2::isEven) // returns lazy list
             .map(JavaEight2::doubleIt) // returns lazy list
             );
        System.out.println("Funcional: done");
        System.out.println("---------------");
    }

    public static boolean isGT3(int e) {
        System.out.println("isGT3: "+e);
        return e > 3;
    }
    public static boolean isEven(int e) {
        System.out.println("isEven: "+e);
        return e % 2 == 0;
    }
    public static int doubleIt(int e) {
        System.out.println("doubleIt: "+e);
        return e * 2;
    }
}
