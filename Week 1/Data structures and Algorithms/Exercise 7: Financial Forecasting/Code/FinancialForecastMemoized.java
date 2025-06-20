// Optimized with memoization
import java.util.HashMap;
import java.util.Map;

public class FinancialForecastMemoized {

    static Map<Integer, Double> memo = new HashMap<>();

    public static double calculateFutureValue(int years, double initialAmount, double growthRate) {
        if (years == 0) return initialAmount;
        if (memo.containsKey(years)) return memo.get(years);

        double value = calculateFutureValue(years - 1, initialAmount, growthRate) * (1 + growthRate);
        memo.put(years, value);
        return value;
    }

    public static void main(String[] args) {
        double initial = 10000;
        double rate = 0.08;
        int years = 5;

        double result = calculateFutureValue(years, initial, rate);
        System.out.printf("Optimized Future value after %d years = %.2f\n", years, result);
    }
}

