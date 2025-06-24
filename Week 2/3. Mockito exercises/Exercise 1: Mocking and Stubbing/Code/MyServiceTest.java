import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import com.example.ExternalApi;
import com.example.MyService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
        System.out.println("Fetched result: " + result);

    }
}
