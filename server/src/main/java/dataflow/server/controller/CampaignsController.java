package dataflow.server.controller;


import dataflow.server.dto.Campaigns;
import dataflow.server.service.CampaignsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/campaigns")
public class CampaignsController {
    @Autowired
    private CampaignsService campaignsService;

    @GetMapping
    public List<Campaigns> getAllCampaigns() {
        return campaignsService.getAllCampaigns();
    }

    @GetMapping("/{id}")
    public Campaigns getCampaignById(@PathVariable Long id) {
        return campaignsService.getCampaignById(Long.valueOf(id));
    }

    @PostMapping
    public Campaigns addCampaign(@RequestBody Campaigns campaigns) {
        Campaigns newCampaign = new Campaigns();

        return campaignsService.saveCampaign(newCampaign);
    }

    @DeleteMapping("/{id}")
    public void deleteCampaign(@PathVariable String id) {
        campaignsService.deleteCampaign(Long.valueOf(id));
    }
}
