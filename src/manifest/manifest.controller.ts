import { Controller, Get, Param, Post } from '@nestjs/common';
import { ManifestService } from "./manifest.service"

@Controller('manifest')
export class ManifestController {
    constructor(private readonly manifestService: ManifestService) {} 
    
    @Get(":rover")
    getSpirit(@Param("rover") rover): Promise<object> {
        return this.manifestService.getManifest(rover);
    }

    @Post()
    saveCuriosityYesterdayData(): Promise<void> {
        return this.manifestService.saveYesterdayCuriosityData();
    }
}