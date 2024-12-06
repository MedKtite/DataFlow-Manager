package dataflow.server.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@lombok.Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "campaigns")
public class Campaigns {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public String campaignId;
    private String campaignEmail;
    public String campaignName;
    public String campaignType;
    public String campaignBody;
    private List<ContactList> contactList;

}
