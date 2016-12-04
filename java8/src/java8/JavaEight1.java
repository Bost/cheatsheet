package java8;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

public class JavaEight1 {

    public static void lambdaMethodReference(Integer val) {
        System.out.println("Lambda method reference: "+val);
    }

    public static Integer total(List<Integer> vals, Predicate<Integer> selector) {
        // imperative implementation
        // int s = 0;
        // for (int e: vals) {
        //     if (selector.test(e)) {
        //         s += e;
        //     }
        // }
        // return s;

        // functional implementation
        return vals
            .stream()
            .filter(selector)
            .reduce(0, (carry, e) -> carry + e);
    }

    // (eclim-run-class) - must be called from withing of a class
    public static void main(String[] args) {
        List<Integer> vals = Arrays.asList(1, 2, 3, 4);

        for(int e: vals) {
            System.out.println("External iterator: "+e);
        }

        vals.forEach(new Consumer<Integer>() {
                public void accept(Integer e) {
                    System.out.println("Internal iterator in annonymous inner class: "+e);
                }});

        vals.forEach((Integer e) -> System.out.println("Lambda: "+e));
        vals.forEach((e) -> System.out.println("Lambda intelligent: "+e));
        vals.forEach(e -> System.out.println("Lambda totally intelligent: "+e));
        vals.forEach(JavaEight1::lambdaMethodReference); // x::y is a method reference

        int total = 0;
        for(int e: vals) {
            total += e * 2; // mutating the variable 'total'
        }
        System.out.println("Imperative: "+total);

        // eliminate mutability
        System.out.println
            (
             "Functional - map-reduce collection: "+vals
             .stream()
             .map(e -> e * 2)
             // 0 is the startVal for the reduce
             .reduce(0, (carry, e) -> (carry + e))
             );

        System.out.println("Predicate: "+total(vals, e -> true));
        System.out.println("Predicate: "+total(vals, e -> e % 2 == 0));
        System.out.println("Predicate: "+total(vals, e -> e % 2 != 0));
    }

}
