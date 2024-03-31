import { TestBed } from '@angular/core/testing';

import { MySpinnerInterceptor } from './my-spinner.interceptor';

describe('MySpinnerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MySpinnerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MySpinnerInterceptor = TestBed.inject(MySpinnerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
