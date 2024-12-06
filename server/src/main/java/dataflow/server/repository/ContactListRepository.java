package dataflow.server.repository;

import dataflow.server.dto.ContactList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactListRepository extends JpaRepository<ContactList, Long> {
}
