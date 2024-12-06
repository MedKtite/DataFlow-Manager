package dataflow.server.service;

import dataflow.server.dto.ContactList;
import dataflow.server.repository.ContactListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactListService {

    @Autowired
    private ContactListRepository contactListRepository;

    public List<ContactList> getAllContactLists() {
        return contactListRepository.findAll();
    }

    public ContactList getContactListById(Long id) {
        return contactListRepository.findById(id).orElse(null);
    }

    public ContactList saveContactList(ContactList contactList) {
        return contactListRepository.save(contactList);
    }

    public void deleteContactList(Long id) {
        contactListRepository.deleteById(id);
    }
}
