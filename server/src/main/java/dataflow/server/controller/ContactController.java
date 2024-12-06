package dataflow.server.controller;


import dataflow.server.dto.Contact;
import dataflow.server.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return contactService.getContactById(Long.valueOf(id));
    }

    @PostMapping
    public Contact addContact(@RequestBody Contact contact) {
        Contact newContact = new Contact();

        return contactService.saveContact(newContact);
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable String id) {
        contactService.deleteContact(Long.valueOf(id));
    }

    // Update contact
    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable String id, @RequestBody Contact contact) {
        return contactService.saveContact(contact);
    }
}
