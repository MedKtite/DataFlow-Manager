package dataflow.server.service;

import dataflow.server.dto.Campaigns;
import dataflow.server.repository.CampaignsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CampaignsService {
    @Autowired
    private CampaignsRepository campaignsRepository;

    public List<Campaigns> getAllCampaigns() {
        return campaignsRepository.findAll();
    }

    public Campaigns getCampaignById(Long id) {
        return campaignsRepository.findById(id).orElse(null);
    }

    public Campaigns saveCampaign(Campaigns campaigns) {
        return campaignsRepository.save(campaigns);
    }

    public void deleteCampaign(Long id) {
        campaignsRepository.deleteById(id);
    }

}
