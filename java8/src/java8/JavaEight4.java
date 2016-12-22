package java8;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class JavaEight4 {
    public static StockInfo dummy = new StockInfo("", new BigDecimal(0.0));

    public static void findImperative(List<String> symbols) {
        List<StockInfo> stocks = new ArrayList<StockInfo>();
        for(String symbol: symbols) {
            stocks.add(StockUtil.getPrice(symbol));
        }
        List<StockInfo> stocksLT500 = new ArrayList<StockInfo>();
        for (StockInfo stock: stocks) {
            if (StockUtil.isPriceLessThan(500).test(stock)) {
                stocksLT500.add(stock);
            }
        }

        StockInfo highPriced = dummy;
        for (StockInfo stock: stocksLT500) {
            highPriced = StockUtil.pickHigh(highPriced, stock);
        }
        System.out.println("highPriced: "+highPriced);
    }

    public static void findFunctional(Stream<String> symbols) {
        System.out.println
            (
             symbols
             .map(StockUtil::getPrice)
             .filter(StockUtil.isPriceLessThan(500))
             // .reduce(dummy, (highPriced,  stock) -> StockUtil.pickHigh(highPriced,  stock))
             .reduce(dummy, StockUtil::pickHigh)
             );
    }

    // (eclim-run-class) - must be called from withing of a class
    public static void main(String[] args) {
        // Return highest stock price < $200 from:
        // Timeit.code (() -> findImperative(Tickers.symbols));
        // Timeit.code (() -> findFunctional(Tickers.symbols.stream()));
        Timeit.code (() -> findFunctional(Tickers.symbols.parallelStream()));
    }
}