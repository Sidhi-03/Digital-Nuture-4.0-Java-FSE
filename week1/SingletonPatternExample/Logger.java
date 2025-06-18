// File:Logger.java
public class Logger {
// private instance . It stores instance only
    private static Logger instance;
// private constructor. It prevents other classes from creating new instances
    private Logger(){
        System.out.println("Logger Initialized");
    }
    // controls access and ensures only one instance
    public static Logger getInstance(){
        if(instance==null){
            instance=new Logger();
        }
        return instance;
    }
    public void log(String message){
        System.out.println("LOG: "+ message);
    }
}
