import com.example.BankAccount;
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class BankAccountTest {
    private BankAccount account;
    private BankAccount destinationAccount;

    @BeforeEach
    void setUp() {
        account = new BankAccount("123456", 1000.00);
        destinationAccount = new BankAccount("654321", 500.00);
    }

    @AfterEach
    void tearDown() {
        account = null;
        destinationAccount = null;
    }

    @Test
    @DisplayName("Deposit positive amount increases balance")
    void depositIncreasesBalance() {
        double initialBalance = account.getBalance();
        account.deposit(500.00);
        assertEquals(initialBalance + 500.00, account.getBalance());
    }

    @Test
    @DisplayName("Withdraw with sufficient funds decreases balance")
    void withdrawDecreasesBalanceWhenSufficientFunds() {
        assertTrue(account.withdraw(200.00));
        assertEquals(800.00, account.getBalance());
    }

    @Test
    @DisplayName("Withdraw with insufficient funds fails")
    void withdrawFailsWhenInsufficientFunds() {
        assertFalse(account.withdraw(1500.00));
        assertEquals(1000.00, account.getBalance());
    }

    @Test
    @DisplayName("Transfer moves money between accounts")
    void transferMovesMoneyBetweenAccounts() {
        assertTrue(account.transfer(destinationAccount, 300.00));
        assertEquals(700.00, account.getBalance());
        assertEquals(800.00, destinationAccount.getBalance());
    }
}
