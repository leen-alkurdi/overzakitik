import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleCampaignModule } from './google-campaign/google-campaign.module';
import { TiktokCampaignModule } from './tiktok-campaign/tiktok-campaign.module';

@Module({
  imports: [GoogleCampaignModule,TiktokCampaignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}