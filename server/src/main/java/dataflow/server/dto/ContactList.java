package dataflow.server.dto;


import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.List;


@lombok.Getter
@lombok.Setter
@lombok.Data
@Table(name = "contact_list")
public class ContactList {
    private String listName;
    private List<Contact> contacts;

    public ContactList() {
        this.listName = "My Contact List";
        this.contacts= new ArrayList<>();
    }
}
