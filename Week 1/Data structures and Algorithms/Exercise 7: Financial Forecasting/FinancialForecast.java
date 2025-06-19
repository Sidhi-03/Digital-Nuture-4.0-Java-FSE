// File: FinancialForecast.java

public class FinancialForecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(int years, double initialAmount, double growthRate) {
        if (years == 0) {
            return initialAmount;
        }
        return calculateFutureValue(years - 1, initialAmount, growthRate) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialAmount = 10000; // starting value
        double growthRate = 0.08;     // 8% annual growth
        int years = 5;

        double futureValue = calculateFutureValue(years, initialAmount, growthRate);
        System.out.printf("Future value after %d years = %.2f\n", years, futureValue);
    }
}
