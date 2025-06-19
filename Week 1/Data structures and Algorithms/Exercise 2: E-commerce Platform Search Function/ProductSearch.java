// File: ProductSearch.java
import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {

    // Linear Search (O(n))
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }

    // Binary Search (O(log n))
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productId == targetId)
                return products[mid];
            else if (products[mid].productId < targetId)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Shoes", "Footwear"),
                new Product(101, "T-shirt", "Apparel"),
                new Product(105, "Phone", "Electronics"),
                new Product(102, "Watch", "Accessories"),
                new Product(104, "Bag", "Bags")
        };

        int targetId = 104;

        // Linear Search
        System.out.println("Linear Search Result:");
        Product result1 = linearSearch(products, targetId);
        System.out.println(result1 != null ? result1 : "Product not found.");

        // Sort products by productId before Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        // Binary Search
        System.out.println("\nBinary Search Result:");
        Product result2 = binarySearch(products, targetId);
        System.out.println(result2 != null ? result2 : "Product not found.");
    }
}
