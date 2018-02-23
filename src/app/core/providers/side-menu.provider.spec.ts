import { TestBed, inject } from '@angular/core/testing';

import { SideMenuProvider } from './side-menu.provider';

describe('SideMenuProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SideMenuProvider]
    });
  });

  it('should be created', inject([SideMenuProvider], (service: SideMenuProvider) => {
    expect(service).toBeTruthy();
  }));
});
