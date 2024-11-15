import { TestBed } from '@angular/core/testing';
import { ManejodbService } from './manejodb.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ManejodbService', () => {
  let service: ManejodbService;
  let sqliteSpy: jasmine.SpyObj<SQLite>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('SQLite', ['create']);

    TestBed.configureTestingModule({
      providers: [
        ManejodbService,
        { provide: SQLite, useValue: spy }
      ]
    });

    service = TestBed.inject(ManejodbService);
    sqliteSpy = TestBed.inject(SQLite) as jasmine.SpyObj<SQLite>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
