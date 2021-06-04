import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { ZeroHybridComponent } from './zero-hybrid.component';
import { ZeroHybridService } from './zero-hybrid.service';
import { HttpClientModule } from '@angular/common/http';

export interface LibConfig {
  /** URL a la API del proyecto */
  apirUrl?: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');
@NgModule({
  declarations: [
    ZeroHybridComponent,
  ],
  imports: [
    HttpClientModule,
  ],
  exports: [
    ZeroHybridComponent,
  ]
})
export class ZeroHybridModule {
  static forRoot(config: LibConfig): ModuleWithProviders<LibConfig> {
    return {
      ngModule: ZeroHybridModule,
      providers: [
        ZeroHybridService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    }
  }
}
