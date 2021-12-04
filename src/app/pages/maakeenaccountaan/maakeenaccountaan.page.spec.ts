import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaakeenaccountaanPage } from './maakeenaccountaan.page';

describe('MaakeenaccountaanPage', () => {
  let component: MaakeenaccountaanPage;
  let fixture: ComponentFixture<MaakeenaccountaanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MaakeenaccountaanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaakeenaccountaanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
