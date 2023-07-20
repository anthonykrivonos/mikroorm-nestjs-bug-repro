import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessModule } from './access/access.module';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './groupings/organization/organization.module';

@Module({
  imports: [
    AccessModule,
    UserModule,
    OrganizationModule,
    AccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
