package dataflow.server.dto;


import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Table(name = "contacts")
@Getter
@Setter
public class Contact {
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String city;

    // Constructor
    public Contact() {

    }

}
