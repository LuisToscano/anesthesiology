import { TestBed, inject } from '@angular/core/testing';

import { SideMenuService } from './side-menu.service';

describe('SideMenuProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideMenuService]
    });
  });

  it('should be created', inject([SideMenuService], (service: SideMenuService) => {
    expect(service).toBeTruthy();
  }));
});
