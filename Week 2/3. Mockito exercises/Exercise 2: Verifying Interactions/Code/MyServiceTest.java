import static org.mockito.Mockito.*;
import com.example.ExternalApi;
import com.example.MyService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Inject mock and call method
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Step 3: Verify that getData() was called
        verify(mockApi).getData();
    }
}
