//File: LoggerTest.java
public class LoggerTest {
    public static void main(String[] args){
        Logger logger1=Logger.getInstance();
        logger1.log("First log message");

        Logger logger2=Logger.getInstance();
        logger2.log("Seccond log message");

        if(logger1==logger2){
            System.out.println("Both logger instances are the same(Singleton confirmed).");
        }
        else{
            System.out.println("Different logger instances found! (Singleton failed)");
        }
    }
}
