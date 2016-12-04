package java8;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Java8 {

    public static void foo(Integer val) {
        System.out.println("Lambda method reference: "+val);
    }

    // (eclim-run-class)
    public static void main(String[] args) {
        List<Integer> values = Arrays.asList(1, 2, 3, 4);

        for(int e: values) {
            System.out.println("External iterator: "+e);
        }

        values.forEach(new Consumer<Integer>() {
                public void accept(Integer e) {
                    System.out.println("Internal iterator in annonymous inner class: "+e);
                }});

        values.forEach((Integer e) -> System.out.println("Lambda: "+e));
        values.forEach((e) -> System.out.println("Lambda intelligent: "+e));
        values.forEach(e -> System.out.println("Lambda totally intelligent: "+e));
        values.forEach(System.out::println); // Lambda method reference
        values.forEach(Java8::foo);

        // int total = 0;
        // for(int e: values) {
        //     total += e * 2; // mutating the variable 'total'
        // }
        // System.out.println(total);

        // eliminate mutability
        System.out.println
            (
             values.stream()
             .map(e -> e * 2)
             // 0 is startVal for reduce
             .reduce(0, (carry, e) -> (carry + e))
             );
    }

}
