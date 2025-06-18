import javax.swing.text.Document;

public class ExcelDocumentFactory extends DocumentFactory{
    @Override
    public ExcelDocument createDocument(){
        return new ExcelDocument();
    }
}
