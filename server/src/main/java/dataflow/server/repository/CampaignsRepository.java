package dataflow.server.repository;

import dataflow.server.dto.Campaigns;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampaignsRepository extends JpaRepository<Campaigns, Long> {
}
