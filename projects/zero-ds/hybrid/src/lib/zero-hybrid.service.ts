import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LibConfig, LibConfigService } from './zero-hybrid.module';

@Injectable({
  providedIn: 'root'
})
export class ZeroHybridService {

  private baseUrl = this.config.apirUrl;

  constructor(
    @Inject(LibConfigService) private config: LibConfig,
    private http: HttpClient,
  ) {
    console.log('Config API URL: ', this.config);
  }

}
