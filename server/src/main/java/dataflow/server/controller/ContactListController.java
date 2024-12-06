package dataflow.server.controller;

import dataflow.server.dto.Contact;
import dataflow.server.dto.ContactList;
import dataflow.server.service.ContactListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact-list")
public class ContactListController {
    @Autowired
    private ContactListService contactListService;

    @GetMapping
    public List<ContactList> getAllContactLists() {
        return contactListService.getAllContactLists();
    }

    @GetMapping("/{id}")
    public ContactList getContactListById(@PathVariable Long id) {
        return contactListService.getContactListById(Long.valueOf(id));
    }

    @GetMapping("/{id}/contacts")
    public List<Contact> getContactsByContactListId(@PathVariable String id) {
        return contactListService.getAllContactLists().get(Integer.parseInt(id)).getContacts();
    }

    @PostMapping
    public ContactList saveContactList(@RequestBody ContactList contactList) {
        ContactList newContactList = new ContactList();
        return contactListService.saveContactList(newContactList);
    }

    @DeleteMapping("/{id}")
    public void deleteContactList(@PathVariable String id) {
        contactListService.deleteContactList(Long.valueOf(id));
    }
}
